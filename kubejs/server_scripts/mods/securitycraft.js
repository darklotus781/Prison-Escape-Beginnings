ServerEvents.recipes(event => {
    event.remove({output: 'securitycraft:keycard_lv1'});
    event.remove({output: 'securitycraft:keycard_lv2'});
    event.remove({output: 'securitycraft:keycard_lv3'});
    event.remove({output: 'securitycraft:keycard_lv4'});
    event.remove({output: 'securitycraft:keycard_lv5'});

    event.shaped('securitycraft:reinforced_bamboo_block',
        ['BB', 'BB'], {
            B: 'minecraft:bamboo_block'
        });

    event.shaped('securitycraft:keycard_lv1', [
        'GIG',
        'CRC',
        'AAA'
    ], {
        I: 'minecraft:iron_ingot',
        C: 'minecraft:chain',
        G: 'minecraft:granite',
        A: 'minecraft:andesite',
        R: 'minecraft:redstone'
    });

    event.shaped('securitycraft:keycard_lv2', [
        'DDD',
        'NKN',
        'ECE'
    ], {
        D: 'enderio:dark_steel_block',
        N: 'minecraft:netherite_ingot',
        K: 'securitycraft:keycard_lv1',
        E: 'ifeu:sculk_gear',
        C: 'mekanism:elite_control_circuit'
    });

    event.shaped('securitycraft:keycard_lv3', [
        'SSS',
        'NKN',
        'PUP'
    ], {
        S: 'silentgear:super_alloy',
        N: 'minecraft:netherite_block',
        K: 'securitycraft:keycard_lv2',
        P: 'mekanism:pellet_antimatter',
        U: 'mekanism:ultimate_control_circuit'
    });

    event.shaped(
        Item.of('securitycraft:keycard_lv4', 1),
        [
            'ABC',
            'DEF',
            'GHI'
        ],
        {
            A: 'ae2:singularity',
            B: 'mysticalagriculture:awakened_supremium_gemstone_block',
            C: 'ae2:singularity',
            D: 'extendedcrafting:crystaltine_ingot',
            E: 'securitycraft:keycard_lv3',
            F: 'extendedcrafting:crystaltine_ingot',
            G: 'projecte:red_matter',
            H: 'mysticalagriculture:awakened_supremium_gemstone_block',
            I: 'projecte:red_matter'
        }
    );

    event.shaped('securitycraft:keycard_lv5', [
        'ABC',
        'DEF',
        'GHI'
    ], {
        A: 'projecte:klein_star_omega',
        B: 'ae2:singularity',
        C: 'projecte:klein_star_omega',
        D: 'extendedcrafting:the_ultimate_ingot',
        E: 'securitycraft:keycard_lv4',
        F: 'extendedcrafting:the_ultimate_ingot',
        G: 'extendedcrafting:ultimate_singularity',
        H: 'projecte:philosophers_stone',
        I: 'extendedcrafting:ultimate_singularity'
    });
});
