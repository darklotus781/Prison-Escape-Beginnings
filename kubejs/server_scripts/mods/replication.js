ServerEvents.recipes(event => {
    event.remove({ output: 'replication:replicator' });

    event.shaped('replication:matter_blueprint', [
        'PLP',
        'FDH',
        'PLP'
    ], {
        P: 'silentgems:iron_potato',
        L: 'silentgear:raw_azure_silver_block',
        F: 'aoa3:resource_focus',
        D: 'minecraft:dragon_head',
        H: 'aoa3:resource_focus'
    });

    event.shaped('replication:raw_replica', [
        'SNS',
        'CCC',
        'DCD'
    ], {
        S: 'minecraft:nether_star',
        N: 'ae2:singularity',
        C: 'extendedcrafting:crystaltine_ingot',
        D: 'minecraft:diamond_block'
    }).id('kubejs:raw_replica');

    event.shaped('replication:replicator', [
        'IPI',
        'IOI',
        'III'
    ], {
        I: 'replication:replica_ingot',
        P: 'minecraft:piston',
        O: 'bosses_of_mass_destruction:obsidian_heart'
    });
});
