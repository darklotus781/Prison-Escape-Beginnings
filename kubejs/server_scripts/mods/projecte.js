ServerEvents.recipes(event => {
    event.remove({output: 'projecte:low_covalence_dust'});
    event.remove({output: 'projecte:medium_covalence_dust'});
    event.remove({output: 'projecte:high_covalence_dust'});
    event.remove({output: 'projecte:collector_mk1'});
    event.remove({output: 'projecte:philosophers_stone'});
    event.remove({id: 'projecte:transmutation_table'});

    // Low Covalence Dust recipe
    event.shapeless('projecte:low_covalence_dust', [
        'ifeu:dragon_star',
        'minecraft:coal'
    ]);

    // Medium Covalence Dust recipe
    event.shapeless('projecte:medium_covalence_dust', [
        'minecraft:redstone',
        'advanced_ae:quantum_alloy'
    ]);

    // High Covalence Dust recipe
    event.shapeless('projecte:high_covalence_dust', [
        'mekanism:pellet_antimatter',
        'extendedcrafting:crystaltine_ingot'
    ]);

    event.shaped('projecte:collector_mk1', [
        'AGA',
        'AJA',
        'SSS'
    ], {
        A: 'actuallyadditions:lamp_green',
        G: 'justdirethings:celestigem_block',
        J: 'bosses_of_mass_destruction:blazing_eye',
        S: 'aoa3:skeletal_ingot'
    });

    event.shaped('projecte:philosophers_stone', [
        'OLO',
        'MNM',
        'HHH'
    ], {
        L: 'justdirethings:time_wand',
        O: 'projecte:low_covalence_dust',
        M: 'projecte:medium_covalence_dust',
        H: 'projecte:high_covalence_dust',
        N: 'gobber2:dragon_star'
    });

    event.shaped('projecte:transmutation_table', [
        'IAI',
        'BDB',
        'CEC'
    ], {
        A: 'minecraft:nether_star',
        I: 'replication:replica_ingot',
        B: 'minecraft:diamond_block',
        D: 'projecte:philosophers_stone',
        C: 'mysticalagriculture:awakened_supremium_block',
        E: 'ae2:singularity'

    }).id('projecte:transmutation_table_1');
});
