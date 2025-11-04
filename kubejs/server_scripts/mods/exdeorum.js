ServerEvents.recipes(event => {
    event.remove({output: 'exdeorum:mechanical_sieve'});
    event.remove({output: 'exdeorum:stone_barrel'});
    event.remove({output: 'exdeorum:crushed_blackstone'});
    event.remove({output: 'exdeorum:compressed_crushed_blackstone'});
    event.remove({output: 'exdeorum:oak_compressed_sieve'});

    // Remove sieve recipe for crushed blackstone
    event.remove({
        type: 'exdeorum:sieve',
        input: 'exdeorum:crushed_blackstone',
        sieve: 'exdeorum:oak_compressed_sieve'
    });

    // Remove sieve recipe for compressed crushed blackstone
    event.remove({
        type: 'exdeorum:sieve',
        input: 'exdeorum:compressed_crushed_blackstone',
        sieve: 'exdeorum:oak_compressed_sieve'
    });

    const removeCompressedSieveOutput = [
        'exdeorum:deepslate_pebble',
        'exdeorum:stone_pebble',
        'exdeorum:diorite_pebble',
        'exdeorum:andesite_pebble',
        'exdeorum:granite_pebble',
        'minecraft:pointed_dripstone',
        'minecraft:echo_shard',
        'minecraft:ancient_debris',
        'minecraft:blaze_powder'
    ];

    removeCompressedSieveOutput.forEach(item => {
        event.remove({
            type: 'exdeorum:compressed_sieve',
            output: item
        });
    });

    const removeSieveOutput = [
        'minecraft:blaze_powder'
    ];

    removeSieveOutput.forEach(item => {
        event.remove({
            type: 'exdeorum:sieve',
            output: item
        });
    });

    event.remove({
        type: 'exdeorum:sieve',
        ingredient: {item: 'exdeorum:dust'},
        mesh: {item: 'exdeorum:string_mesh'},
        output: 'enderio:grains_of_infinity'
    });

    // Remove compressed sieve recipe
    event.remove({
        type: 'exdeorum:compressed_sieve',
        ingredient: {tag: 'exdeorum:compressed/dust'},
        mesh: {item: 'exdeorum:string_mesh'},
        output: 'enderio:grains_of_infinity'
    });

    //Gold from gravel
    event.remove({
        input: 'minecraft:gravel',
        sieve_mesh: 'exdeorum:netherite_mesh',
        type: 'exdeorum:sieve',
        mod: 'exdeorum',
        output: 'minecraft:raw_gold'
    });

    //Gold nuggets
    event.remove({
        type: 'exdeorum:sieve',
        mod: 'exdeorum',
        output: 'minecraft:gold_nugget'
    });

    event.remove({
        type: 'exdeorum:sieve',
        mod: 'exdeorum',
        output: 'exdeorum:iridium_ore_chunk'
    });

    event.remove({
        input: 'minecraft:gravel',
        type: 'exdeorum:sieve',
        mod: 'exdeorum',
        output: 'exdeorum:stone_pebble'
    });

    event.remove({
        input: 'minecraft:gravel',
        type: 'exdeorum:sieve',
        mod: 'exdeorum',
        output: 'exdeorum:diorite_pebble'
    });

    event.remove({
        input: 'minecraft:gravel',
        type: 'exdeorum:sieve',
        mod: 'exdeorum',
        output: 'exdeorum:granite_pebble'
    });

    event.remove({
        input: 'minecraft:gravel',
        type: 'exdeorum:sieve',
        mod: 'exdeorum',
        output: 'exdeorum:andesite_pebble'
    });

    event.remove({
        input: 'minecraft:gravel',
        type: 'exdeorum:sieve',
        mod: 'exdeorum',
        output: 'exdeorum:deepslate_pebble'
    });

    event.remove({
        input: 'minecraft:sand',
        type: 'exdeorum:sieve',
        mod: 'exdeorum',
        output: 'ae2:certus_quartz_crystal'
    });


    event.remove({
        input: 'minecraft:sand',
        type: 'exdeorum:sieve',
        mod: 'exdeorum',
        output: 'ae2:charged_certus_quartz_crystal'
    });

    event.remove({
        input: 'exdeorum:crushed_end_stone',
        type: 'exdeorum:sieve',
        mod: 'exdeorum',
        output: 'minecraft:echo_shard'
    });

    const compressedHammers = [
        'exdeorum:compressed_stone_hammer',
        'exdeorum:compressed_wooden_hammer',
        'exdeorum:compressed_iron_hammer',
        'exdeorum:compressed_golden_hammer',
        'exdeorum:compressed_diamond_hammer',
        'exdeorum:compressed_netherite_hammer'
    ];
    compressedHammers.forEach(result => event.remove({output: result}));

    // Wood Hammer
    event.shaped('exdeorum:compressed_wooden_hammer', [
        'HHH',
        'H H',
        'HHH'
    ], {
        H: 'exdeorum:wooden_hammer'
    });

    // Stone Hammer
    event.shaped('exdeorum:compressed_stone_hammer', [
        'HHH',
        'HIH',
        'HHH'
    ], {
        H: 'exdeorum:stone_hammer',
        I: 'exdeorum:wooden_hammer'
    });

    // Iron Hammer (center: compressed stone)
    event.shaped('exdeorum:compressed_iron_hammer', [
        'HHH',
        'HCH',
        'HHH'
    ], {
        H: 'exdeorum:iron_hammer',
        C: 'exdeorum:compressed_stone_hammer'
    });

    // Gold Hammer
    event.shaped('exdeorum:compressed_golden_hammer', [
        'HHH',
        'HCH',
        'HHH'
    ], {
        H: 'exdeorum:golden_hammer',
        C: 'exdeorum:compressed_iron_hammer'
    });

    // Diamond Hammer (center: compressed iron)
    event.shaped('exdeorum:compressed_diamond_hammer', [
        'HHH',
        'HCH',
        'HHH'
    ], {
        H: 'exdeorum:diamond_hammer',
        C: 'exdeorum:compressed_golden_hammer'
    });

    // Netherite Hammer
    event.shaped('exdeorum:compressed_netherite_hammer', [
        'HHH',
        'HIH',
        'HHH'
    ], {
        H: 'exdeorum:netherite_hammer',
        I: 'exdeorum:compressed_diamond_hammer'
    });

    event.shaped('exdeorum:stone_barrel', [
        'S S',
        'S S',
        'SIS'
    ], {
        S: 'minecraft:stone',
        I: 'ftbstuff:cast_iron_ingot'
    }).id('kubejs:stone_barrel');

    event.shaped('exdeorum:mechanical_sieve', [
        'IGI',
        'BHB',
        'G G'
    ], {
        I: 'minecraft:iron_block',
        G: 'ftbstuff:cast_iron_gear',
        B: 'minecraft:iron_bars',
        H: 'minecraft:hopper'
    }).id('kubejs:mechanical_sieve');

    // Dirt to Compressed Dirt
    event.shaped('exdeorum:compressed_dirt', [
        'DDD',
        'DDD',
        'DDD'
    ], {
        D: 'minecraft:dirt'
    });

    // Cobblestone to Compressed Cobblestone
    event.shaped('exdeorum:compressed_cobblestone', [
        'CCC',
        'CCC',
        'CCC'
    ], {
        C: 'minecraft:cobblestone'
    });

    // Diorite to Compressed Diorite
    event.shaped('exdeorum:compressed_diorite', [
        'DDD',
        'DDD',
        'DDD'
    ], {
        D: 'minecraft:diorite'
    });

    // Granite to Compressed Granite
    event.shaped('exdeorum:compressed_granite', [
        'GGG',
        'GGG',
        'GGG'
    ], {
        G: 'minecraft:granite'
    });

    // Andesite to Compressed Andesite
    event.shaped('exdeorum:compressed_andesite', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'minecraft:andesite'
    });

    // Gravel to Compressed Gravel
    event.shaped('exdeorum:compressed_gravel', [
        'GGG',
        'GGG',
        'GGG'
    ], {
        G: 'minecraft:gravel'
    });

    // Sand to Compressed Sand
    event.shaped('exdeorum:compressed_sand', [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'minecraft:sand'
    });

    // Dust to Compressed Dust
    event.shaped('exdeorum:compressed_dust', [
        'DDD',
        'DDD',
        'DDD'
    ], {
        D: 'exdeorum:dust'
    });

    // Red Sand to Compressed Red Sand
    event.shaped('exdeorum:compressed_red_sand', [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'minecraft:red_sand'
    });

    // Deepslate to Compressed Deepslate
    event.shaped('exdeorum:compressed_deepslate', [
        'DDD',
        'DDD',
        'DDD'
    ], {
        D: 'minecraft:deepslate'
    });

    // Cobbled Deepslate to Compressed Cobbled Deepslate
    event.shaped('exdeorum:compressed_cobbled_deepslate', [
        'CCC',
        'CCC',
        'CCC'
    ], {
        C: 'minecraft:cobbled_deepslate'
    });

    // Netherrack to Compressed Netherrack
    event.shaped('exdeorum:compressed_netherrack', [
        'NNN',
        'NNN',
        'NNN'
    ], {
        N: 'minecraft:netherrack'
    });

    // Blackstone to Compressed Blackstone
    event.shaped('exdeorum:compressed_blackstone', [
        'BBB',
        'BBB',
        'BBB'
    ], {
        B: 'minecraft:blackstone'
    });

    // End Stone to Compressed End Stone
    event.shaped('exdeorum:compressed_end_stone', [
        'EEE',
        'EEE',
        'EEE'
    ], {
        E: 'minecraft:end_stone'
    });

    // Soul Sand to Compressed Soul Sand
    event.shaped('exdeorum:compressed_soul_sand', [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'minecraft:soul_sand'
    });

    // Moss Block to Compressed Moss Block
    event.shaped('exdeorum:compressed_moss_block', [
        'MMM',
        'MMM',
        'MMM'
    ], {
        M: 'minecraft:moss_block'
    });

    event.shaped('exdeorum:oak_compressed_sieve', [
        'O O',
        'OIO',
        'S S'
    ], {
        O: 'minecraft:oak_wood',
        I: 'minecraft:iron_ingot',
        S: 'immersiveengineering:stick_treated'
    }).id('kubejs:oak_compressed_sieve');
});
