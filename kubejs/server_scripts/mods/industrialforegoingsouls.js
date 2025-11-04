ServerEvents.recipes(event => {
    event.remove({ output: 'industrialforegoingsouls:soul_laser_base' });

    // Soul Laser Base
    event.shaped('industrialforegoingsouls:soul_laser_base', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'industrialforegoing:plastic',
        B: 'minecraft:sculk_shrieker',
        C: 'enderio:soul_chain',
        D: 'industrialforegoing:machine_frame_advanced',
        E: 'industrialforegoing:diamond_gear',
        F: 'minecraft:sculk_catalyst'
    }).id('kubejs:soul_laser_base');
});