ServerEvents.recipes(event => {
    event.remove({output: 'fargostalismans:iron_golem_talisman'});

    event.shaped('fargostalismans:iron_golem_talisman', [
        'IBI',
        'CTC',
        'PIP'
    ], {
        I: 'minecraft:iron_block',
        B: 'ae2:singularity',
        C: 'extendedcrafting:crystaltine_ingot',
        T: 'fargostalismans:talisman_base_ultimate',
        P: 'minecraft:piston'
    });
});
