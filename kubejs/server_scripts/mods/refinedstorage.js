ServerEvents.recipes(event => {
    event.remove({type: 'minecraft:smelting', output: 'refinedstorage:silicon'});

    // Add new smelting recipe: quartz_block -> silicon
    event.smelting('refinedstorage:silicon', 'minecraft:quartz_block')
        .xp(0.5)
        .cookingTime(200)
        .id('kubejs:silicon_from_quartz_block');
});
