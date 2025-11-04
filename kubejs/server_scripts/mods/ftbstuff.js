ServerEvents.recipes(event => {
    // Hide FTB Stuff Hammers (not used)
    event.remove(/ftbstuff\:.*_hammer/);

    event.remove({output: 'ftbstuff:acacia_water_strainer'});
    event.remove({output: 'ftbstuff:bamboo_water_strainer'});
    event.remove({output: 'ftbstuff:birch_water_strainer'});
    event.remove({output: 'ftbstuff:cherry_water_strainer'});
    event.remove({output: 'ftbstuff:crimson_water_strainer'});
    event.remove({output: 'ftbstuff:dark_oak_water_strainer'});
    event.remove({output: 'ftbstuff:jungle_water_strainer'});
    event.remove({output: 'ftbstuff:mangrove_water_strainer'});
    event.remove({output: 'ftbstuff:oak_water_strainer'});
    event.remove({output: 'ftbstuff:spruce_water_strainer'});
    event.remove({output: 'ftbstuff:warped_water_strainer'});
    event.remove({output: 'ftbstuff:oak_sluice'});

    // Stone Cobblestone Generator
    event.shaped(
        Item.of('ftbstuff:stone_cobblestone_generator'),
        [
            'CGC',
            'IBG',
            'CGC'
        ],
        {
            C: 'exdeorum:compressed_cobblestone',
            G: 'exdeorum:compressed_gravel',
            B: 'minecraft:water_bucket',
            I: 'minecraft:lava_bucket'
        }
    ).id('kubejs:stone_cobblestone_generator');

    // Iron Cobblestone Generator
    event.shaped(
        Item.of('ftbstuff:iron_cobblestone_generator'),
        [
            'III',
            'ISI',
            'CCC'
        ],
        {
            I: 'minecraft:iron_block',
            S: 'ftbstuff:stone_cobblestone_generator',
            C: 'immersiveengineering:ingot_steel'
        }
    ).id('kubejs:iron_cobblestone_generator');

    // Gold Cobblestone Generator
    event.shaped(
        Item.of('ftbstuff:gold_cobblestone_generator'),
        [
            'GGG',
            'GIG',
            'CCC'
        ],
        {
            G: 'minecraft:gold_block',
            I: 'ftbstuff:iron_cobblestone_generator',
            C: 'immersiveengineering:ingot_constantan'
        }
    ).id('kubejs:gold_cobblestone_generator');

    // Diamond Cobblestone Generator
    event.shaped(
        Item.of('ftbstuff:diamond_cobblestone_generator'),
        [
            'DDD',
            'DGD',
            'CCC'
        ],
        {
            D: 'minecraft:diamond_block',
            G: 'ftbstuff:gold_cobblestone_generator',
            C: 'mekanism:block_bronze'
        }
    ).id('kubejs:diamond_cobblestone_generator');

    // Netherite Cobblestone Generator
    event.shaped(
        Item.of('ftbstuff:netherite_cobblestone_generator'),
        [
            'NNN',
            'NDN',
            'CCC'
        ],
        {
            N: 'minecraft:netherite_ingot',
            D: 'ftbstuff:diamond_cobblestone_generator',
            C: 'immersiveengineering:ingot_electrum'
        }
    ).id('kubejs:netherite_cobblestone_generator');

    event.shaped('ftbstuff:oak_sluice', [
        'LLL',
        'LSL',
        ' L '
    ], {
        L: 'minecraft:oak_log',
        S: 'minecraft:stick'
    });

    event.shaped('ftbstuff:bamboo_water_strainer', [
        'MMM',
        'S S',
        'BBB'
    ], {
        S: 'minecraft:stick',
        M: 'ftbstuff:cloth_mesh',
        B: 'securitycraft:reinforced_bamboo_block'
    });
});
