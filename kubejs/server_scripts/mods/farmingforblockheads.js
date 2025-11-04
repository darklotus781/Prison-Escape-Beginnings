ServerEvents.recipes((event) => {
    let market = (item, category) => {
        let recipe = {
            type: 'farmingforblockheads:market',
            category: `farmingforblockheads:${category}`,
            preset: `minecraft:${category}`,
            result: {item: item, count: 1},
        };

        event.custom(recipe).id(`kubejs:farming_for_blockheads_market/${item.replace(':', '_')}`);
    };

    let recipeExists = (item) => {
        return event.containsRecipe({output: item, type: 'farmingforblockheads:market'});
    };

    const saplingBlacklist = [
        'aoa3:stranglewood_sapling'
    ];

    const seedBlacklist = [
        'minecraft:torchflower_seeds',
        'minecraft:pitcher_pod',
        'supplementaries:flax_seeds'
    ];

    // Add all saplings except blacklisted ones
    Ingredient.of('#minecraft:saplings').stacks.forEach((sapling) => {
        if (!saplingBlacklist.includes(sapling.id) && !recipeExists(sapling.id)) {
            market(sapling.id, 'saplings');
        }
    });

    // Add all seeds except blacklisted and mysticalagriculture seeds
    Ingredient.of('#c:seeds').stacks.forEach((seed) => {
        if (
            !seedBlacklist.includes(seed.id) &&
            !seed.id.startsWith('mysticalagriculture:') &&
            !recipeExists(seed.id)
        ) {
            market(seed.id, 'seeds');
        }
    });

    // Manually add carrot, potato, cactus, and sea pickle
    const customItems = [
        ['minecraft:carrot', 'seeds'],
        ['minecraft:potato', 'seeds'],
        ['minecraft:sea_pickle', 'seeds'],
        ['minecraft:cactus', 'seeds']
    ];

    customItems.forEach((entry) => {
        let item = entry[0];
        let category = entry[1];
        market(item, category);
    });
});
