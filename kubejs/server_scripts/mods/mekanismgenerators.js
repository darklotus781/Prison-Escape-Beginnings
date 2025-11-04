ServerEvents.recipes(event => {
    event.remove({output: 'mekanismgenerators:heat_generator'});

    event.shaped('mekanismgenerators:heat_generator', [
        'OOO',
        'WOW',
        'CFC'
    ], {
        O: 'minecraft:iron_block',
        C: 'minecraft:copper_block',
        W: 'minecraft:iron_bars',
        F: 'minecraft:furnace'
    });
});
