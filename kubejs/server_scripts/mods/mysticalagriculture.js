ServerEvents.recipes(event => {
    event.remove({output: 'mysticalagriculture:infusion_altar'});
    event.remove({output: 'mysticalagriculture:master_infusion_crystal'});
    event.remove({output: 'mysticalagriculture:neutronium_essence'});
    event.remove({output: 'mysticalagriculture:neutronium_seeds'});
    event.remove({output: 'mysticalagriculture:soulium_dagger'});

    let tiers = [
        'inferium',
        'prudentium',
        'tertium',
        'imperium',
        'supremium',
        'awakened_supremium'
    ];

    tiers.forEach(tier => {
        const block = `mysticalagriculture:${tier}_growth_accelerator`;
        const essence = `mysticalagriculture:${tier}_essence`;
        const gemstone = `mysticalagriculture:${tier}_gemstone`;

        // Remove original recipe
        event.remove({output: block});
        event.remove({output: `mysticalagriculture:${tier}_watering_can`});

        // Add corrected recipe with proper tiered essence
        event.shaped(
            Item.of(block),
            [
                'ESE',
                'SGS',
                'ESE'
            ],
            {
                E: essence,
                S: 'aoa3:precasian_stone',
                G: gemstone
            }
        ).id(`kubejs:${tier}_growth_accelerator`);
    });

    // Watering Cans:
    // Base recipe: inferium watering can (crafted from base can)
    event.shaped('mysticalagriculture:inferium_watering_can', [
        'IFI',
        'LWL',
        'IFI'
    ], {
        I: 'mysticalagriculture:inferium_ingot',
        F: 'mysticalagriculture:mystical_fertilizer',
        L: 'aoa3:limonite_ingot',
        W: 'mysticalagriculture:watering_can'
    });

    // Upgrade chain
    const upgrades = [
        ['prudentium', 'inferium'],
        ['tertium', 'prudentium'],
        ['imperium', 'tertium'],
        ['supremium', 'imperium'],
        ['awakened_supremium', 'supremium']
    ];

    upgrades.forEach(([tier, prev]) => {
        event.shaped(`mysticalagriculture:${tier}_watering_can`, [
            'IFI',
            'LWL',
            'IFI'
        ], {
            I: `mysticalagriculture:${tier}_ingot`,
            F: 'mysticalagriculture:mystical_fertilizer',
            L: 'aoa3:limonite_ingot',
            W: `mysticalagriculture:${prev}_watering_can`
        });
    });

    event.shaped('mysticalagriculture:infusion_altar', [
        'GWG',
        ' P ',
        'PPP'
    ], {
        G: 'minecraft:gold_ingot',
        W: 'minecraft:red_wool',
        P: 'aoa3:precasian_stone'
    });

    event.shaped('mysticalagriculture:master_infusion_crystal', [
        'SPS',
        'GWG',
        'SPS'
    ], {
        S: 'mysticalagriculture:supremium_essence',
        P: 'mysticalagriculture:prosperity_shard',
        W: 'aoa3:warlock_gem',
        G: 'mysticalagriculture:supremium_ingot'
    });

    event.shaped('mysticalagriculture:soulium_dagger', [
        'CLM',
        'SGS',
        'ISI'
    ], {
        C: 'aoa3:raw_charger_shank',
        L: 'mysticalagriculture:soulium_dust',
        M: 'aoa3:raw_giant_lizard_meat',
        S: 'mysticalagriculture:soulium_ingot',
        G: 'minecraft:golden_sword',
        I: 'aoa3:ivory'
    });
});
