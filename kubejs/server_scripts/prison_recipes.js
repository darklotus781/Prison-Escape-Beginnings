ServerEvents.recipes(event => {
    event.remove({output: 'minecraft:black_dye'});
    event.remove({output: 'minecraft:blast_furnace'});
    event.remove({output: 'minecraft:campfire'});
    event.remove({output: 'minecraft:flint_and_steel'});

    // Keep only the drying table recipe for paper
    event.forEachRecipe({output: 'minecraft:paper'}, recipe => {
        if (recipe.type !== 'opolisutilities:drying_table') {
            event.remove({id: recipe.getId()});
        }
    });

    event.shaped('minecraft:black_dye', [
        'PPP',
        'PCP',
        'PPP'
    ], {
        P: 'opolisutilities:soaked_paper',
        C: ['minecraft:coal', 'minecraft:ink_sac']
    });

    event.shapeless(Item.of('minecraft:black_dye', 3), [
        'mysticalagriculture:dye_essence',
        'mysticalagriculture:dye_essence',
        'mysticalagriculture:dye_essence'
    ]).id('kubejs:black_dye_from_essence');

    event.shaped('minecraft:blast_furnace', [
        'IEI',
        'BFB',
        'ISI'
    ], {
        I: '#c:ingots/iron',
        E: 'justdirethings:ferricore_ingot',
        B: '#c:storage_blocks/iron',
        F: 'minecraft:furnace',
        S: 'ftbstuff:cast_iron_gear'
    }).id('kubejs:custom_blast_furnace');

    // event.shapeless(
    //     Item.of('minecraft:oak_planks', 2),
    //     ['handcrafted:wood_plate']
    // ).id('kubejs:wood_plate_to_oak_planks');

    event.shaped('minecraft:campfire', [
        ' A ',
        'ABA',
        'OOO'
    ], {
        A: 'immersiveengineering:stick_treated',
        B: 'immersiveengineering:coal_coke',
        O: 'minecraft:oak_log'
    }).id('kubejs:campfire');

    // event.shapeless(
    //     Item.of('minecraft:string', 4),
    //     ['minecraft:gray_carpet']
    // ).id('kubejs:carpet_to_string');

    // 3 gravel to make flint
    event.shapeless('minecraft:flint', [
        'minecraft:gravel',
        'minecraft:gravel',
        'minecraft:gravel'
    ]);

    // End Portal Frame Pieces
    // event.shaped(
    //     Item.of('minecraft:end_portal_frame', 3),
    //     [
    //         'AAA',
    //         'ABA',
    //         'CCC'
    //     ],
    //     {
    //         A: 'minecraft:ender_eye',
    //         B: 'minecraft:end_crystal',
    //         C: 'minecraft:end_stone'
    //     }
    // ).id('kubejs:end_portal_frame');

    // Spider Web
    event.shaped('minecraft:cobweb', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:string',
        B: 'minecraft:slime_ball'
    }).id('kubejs:cobweb');

    event.shapeless('minecraft:flint_and_steel', [
        '#c:ingots/steel',
        'minecraft:flint'
    ]);

    event.smelting('alltheores:lead_ingot', '#c:dusts/lead')
        .id('kubejs:smelt_dust_lead');

    event.smelting('alltheores:lead_ingot', '#c:clumps/lead')
        .id('kubejs:smelt_clump_lead_mek');

    event.shaped(Item.of('minecraft:reinforced_deepslate'), [
        'OOO',
        'ADA',
        'DDD'
    ], {
        O: Ingredient.of('#c:ingots/osmium'),
        A: Item.of('minecraft:obsidian'),
        D: Item.of('exdeorum:compressed_deepslate')
    }).id('kubejs:reinforced_deepslate');

    // Add a new shapeless recipe: 8x wood chippings + water bucket = 3x paper
    event.shapeless(Item.of('minecraft:paper', 3), [
        Item.of('mekanism:sawdust', 8),
        'minecraft:water_bucket'
    ]).id('kubejs:paper_from_chippings');

    event.shapeless(
        Item.of('minecraft:bone', 3), // Output
        ['minecraft:skeleton_skull'] // Input
    );
});
