ServerEvents.recipes(event => {
    event.remove({output: 'bigreactors:basic_reactorcasing'});

    event.shaped('bigreactors:basic_reactorcasing', [
        'INI',
        'GYG',
        'INI'
    ], {
        I: 'minecraft:iron_ingot',
        N: 'powah:crystal_nitro',
        G: 'bigreactors:graphite_ingot',
        Y: 'silentgems:rose_quartz_block'
    });
});
