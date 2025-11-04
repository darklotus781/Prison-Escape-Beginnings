ServerEvents.recipes(event => {
    event.remove({output: 'cookingforblockheads:sink'});

    event.shaped(
        Item.of('cookingforblockheads:sink'),
        ['AAA', 'BCB', 'DDD'],
        {
            B: 'industrialforegoing:plastic',
            A: 'minecraft:iron_ingot',
            D: 'minecraft:terracotta',
            C: 'minecraft:water_bucket'
        }
    );
});
