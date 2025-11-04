ServerEvents.recipes(event => {
    event.remove({output: 'silentgear:raw_crimson_iron_block'});
    event.remove({output: 'silentgear:raw_azure_silver_block'});
    event.remove({output: 'silentgear:gear_smithing_table'});
    event.remove({output: 'silentgear:salvager'});
    event.remove({output: 'silentgear:super_mixer'});


    // Iron & Nether Wart makes Crimson Iron Block
    event.shaped('silentgear:raw_crimson_iron_block', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:nether_wart_block',
        B: 'minecraft:raw_iron_block'
    }).id('kubejs:raw_crimson_iron_block');

    // Gold, Lapis, Purpur makes Raw Azure Silver Block
    event.shaped('silentgear:raw_azure_silver_block', [
        'CAC',
        'ABA',
        'CAC'
    ], {
        A: 'minecraft:lapis_block',
        B: 'minecraft:raw_gold_block',
        C: 'minecraft:purpur_block'
    }).id('kubejs:raw_azure_silver_block');

    event.shaped('silentgear:gear_smithing_table', [
        'RDR',
        'ISI',
        'GGG'
    ], {
        R: 'gobber2:gobber2_rod_nether',
        D: 'aoa3:flammable_dust',
        I: 'aoa3:ivory',
        S: 'silentgems:iolite',
        G: 'gobber2:gobber2_glass_nether'
    });

    event.shaped('silentgear:salvager', [
        ' A ',
        'BCB',
        'BDB'
    ], {
        A: 'mekanism:logistical_sorter',
        B: 'silentgear:crimson_iron_block',
        C: 'minecraft:anvil',
        D: 'mob_grinding_utils:absorption_hopper'
    });

    event.shaped('silentgear:super_mixer', [
        'DDD',
        'DSD',
        'DDD'
    ], {
        D: 'ifeu:dragon_star',
        S: 'gobber2:dragon_star'
    });

    event.shaped('silentgear:crude_repair_kit', [
        ' A ',
        'BCB',
        'BBB'
    ], {
        A: '#c:rods/wooden',
        B: 'silentgear:template_board',
        C: 'silentgear:very_crude_repair_kit'
    }).id('kubejs:crude_repair_kit');

    event.shaped('silentgear:sturdy_repair_kit', [
        ' A ',
        'BCB',
        'BBB'
    ], {
        A: 'silentgear:iron_rod',
        B: 'minecraft:iron_ingot',
        C: 'silentgear:crude_repair_kit'
    }).id('kubejs:sturdy_repair_kit');

    event.shaped('silentgear:crimson_repair_kit', [
        ' A ',
        'BCB',
        'BBB'
    ], {
        A: 'minecraft:blaze_rod',
        B: 'silentgear:crimson_steel_ingot',
        C: 'silentgear:sturdy_repair_kit'
    }).id('kubejs:crimson_repair_kit');

    event.shaped('silentgear:azure_repair_kit', [
        ' A ',
        'BCB',
        'BBB'
    ], {
        A: 'minecraft:end_rod',
        B: 'silentgear:azure_electrum_ingot',
        C: 'silentgear:crimson_repair_kit'
    }).id('kubejs:azure_repair_kit');
});