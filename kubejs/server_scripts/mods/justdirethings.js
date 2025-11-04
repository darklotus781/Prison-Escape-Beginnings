ServerEvents.recipes(event => {
    event.remove({output: 'justdirethings:gooblock_tier1'});
    event.remove({output: 'justdirethings:gooblock_tier2'});
    event.remove({output: 'justdirethings:gooblock_tier3'});
    event.remove({output: 'justdirethings:gooblock_tier4'});

    // Primogel Goo
    event.shaped('justdirethings:gooblock_tier1', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'minecraft:clay_ball',
        B: 'minecraft:sugar',
        C: 'minecraft:rotten_flesh',
        D: 'industrialforegoing:machine_frame_pity'
    }).id('kubejs:primogel_goo');

    // Blazebloom Goo
    event.shaped('justdirethings:gooblock_tier2', [
        'ABA',
        'CDC',
        'EBE'
    ], {
        A: 'minecraft:redstone',
        B: 'justdirethings:gooblock_tier1',
        C: 'minecraft:nether_wart',
        D: 'industrialforegoing:machine_frame_simple',
        E: 'minecraft:blaze_powder'
    }).id('kubejs:blazebloom_goo');

    // Voidshimmer Goo
    event.shaped('justdirethings:gooblock_tier3', [
        'ABA',
        'CDC',
        'EBE'
    ], {
        A: 'minecraft:end_stone',
        B: 'justdirethings:gooblock_tier2',
        C: 'minecraft:ender_pearl',
        D: 'industrialforegoing:machine_frame_advanced',
        E: 'minecraft:dragon_breath'
    }).id('kubejs:voidshimmer_goo');

    // Shadowpulse Goo
    event.shaped('justdirethings:gooblock_tier4', [
        'ABA',
        'CDC',
        'EBE'
    ], {
        A: 'minecraft:sculk',
        B: 'justdirethings:gooblock_tier3',
        C: 'minecraft:echo_shard',
        D: 'industrialforegoing:machine_frame_supreme',
        E: 'minecraft:sculk_shrieker'
    }).id('kubejs:shadowpulse_goo');
});