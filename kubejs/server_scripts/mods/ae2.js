ServerEvents.recipes(event => {
    event.remove({ output: 'ae2:crystal_resonance_generator' });
    // Vanilla furnace types
    event.remove({ output: 'ae2:silicon', type: 'minecraft:smelting' });
    event.remove({ output: 'ae2:silicon', type: 'minecraft:blasting' });

    // Ender IO furnace types
    event.remove({ output: 'ae2:silicon', type: 'enderio:vanilla_smelting' });
    event.remove({ output: 'ae2:silicon', type: 'enderio:vanilla_blasting' });
    event.remove({ output: 'ae2:silicon', type: 'enderio:alloy_smelting' });

    // Mekanism machines
    event.remove({ output: 'ae2:silicon', type: 'mekanism:enriching' });
    event.remove({ output: 'ae2:silicon', type: 'mekanism:crushing' });

    event.shaped('ae2:crystal_resonance_generator', [
        'CFC',
        'CQC',
        'III'
    ], {
        C: 'minecraft:copper_block',
        F: 'ae2:fluix_block',
        Q: 'ae2:charged_certus_quartz_crystal',
        I: 'minecraft:iron_block'
    }).id('kubejs:crystal_resonance_generator');
});
