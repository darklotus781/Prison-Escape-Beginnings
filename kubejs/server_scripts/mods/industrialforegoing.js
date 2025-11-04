ServerEvents.recipes(event => {
    event.remove({ output: 'industrialforegoing:machine_frame_pity' });
    event.remove({ output: 'industrialforegoing:fluid_laser_base' });
    event.remove({ output: 'industrialforegoing:ore_laser_base' });

    // Pity Machine Frame
    event.shaped('industrialforegoing:machine_frame_pity', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#minecraft:logs',
        B: 'enderio:dark_steel_ingot',
        C: 'minecraft:redstone_block',
    }).id('kubejs:machine_frame_pity');

    event.shaped('industrialforegoing:machine_frame_pity', [
        'PIP',
        'WRW',
        'PEP'
    ], {
        P: 'minecraft:paper',
        I: 'ftbstuff:cast_iron_ingot',
        W: 'securitycraft:reinforced_oak_planks',
        R: 'minecraft:redstone_block',
        E: 'supplementaries:flint_block'
    }).id('kubejs:machine_frame_pity_alt');

    // Fluid Laser Base
    event.shaped('industrialforegoing:fluid_laser_base', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'industrialforegoing:plastic',
        B: 'justdirethings:celestigem_pickaxe',
        C: 'minecraft:bucket',
        D: 'industrialforegoing:machine_frame_advanced',
        E: 'industrialforegoing:diamond_gear',
        F: 'minecraft:redstone'
    }).id('kubejs:fluid_laser_base');

    // Ore Laser Base
    event.shaped('industrialforegoing:ore_laser_base', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'industrialforegoing:plastic',
        B: 'justdirethings:eclipsealloy_pickaxe',
        C: '#c:ores',
        D: 'industrialforegoing:machine_frame_advanced',
        E: 'industrialforegoing:diamond_gear',
        F: 'minecraft:redstone'
    }).id('kubejs:ore_laser_base');

    event.shaped('industrialforegoing:dryrubber', [
        'EEE',
        'E E',
        'EEE'
    ], {
        E: 'mysticalagriculture:rubber_essence'
    }).id('kubejs:dryrubber_from_rubber_essence');
});