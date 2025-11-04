ServerEvents.recipes(event => {
    event.remove({ output: 'easy_villagers:trader' });
    event.remove({ output: 'easy_villagers:farmer' });
    event.remove({ output: 'easy_villagers:converter' });
    event.remove({ output: 'easy_villagers:incubator' });
    event.remove({ output: 'easy_villagers:iron_farm' });

    // TRADER
    event.shaped('easy_villagers:trader', [
        'GRG',
        'GCG',
        'IFI'
    ], {
        G: 'minecraft:glass_pane',
        R: 'minecraft:redstone_block',
        C: 'mekanism:enriched_iron',
        I: 'minecraft:iron_block',
        F: 'justdirethings:ferricore_ingot'
    }).id('kubejs:easy_trader').category('misc');

    // FARMER
    event.shaped('easy_villagers:farmer', [
        'PPP',
        'PWP',
        'FGF'
    ], {
        P: 'minecraft:glass_pane',
        W: 'minecraft:water_bucket',
        F: 'justdirethings:ferricore_ingot',
        G: 'actuallyadditions:enori_crystal'
    }).id('kubejs:easy_farmer').category('misc');

    // CONVERTER
    event.shaped('easy_villagers:converter', [
        'PPP',
        'PLP',
        'IGI'
    ], {
        P: 'minecraft:glass_pane',
        L: 'minecraft:leather',
        I: 'minecraft:iron_block',
        G: 'mekanism:alloy_infused'
    }).id('kubejs:easy_converter').category('misc');

    // INCUBATOR
    event.shaped('easy_villagers:incubator', [
        'PPP',
        'PCP',
        'IWI'
    ], {
        P: 'minecraft:glass_pane',
        C: 'mekanism:enriched_iron',
        I: 'minecraft:iron_block',
        W: 'minecraft:white_wool'
    }).id('kubejs:easy_incubator').category('misc');

    // IRON FARM
    event.shaped('easy_villagers:iron_farm', [
        'PPP',
        'LLL',
        'FGI'
    ], {
        P: 'minecraft:glass_pane',
        L: 'minecraft:lava_bucket',
        F: 'justdirethings:ferricore_ingot',
        G: 'ftbstuff:compressed_stone_3',
        I: 'minecraft:iron_block'
    }).id('kubejs:easy_iron_farm').category('misc');
});
