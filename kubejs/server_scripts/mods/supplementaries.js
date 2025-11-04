ServerEvents.recipes(event => {
    event.remove({output: 'supplementaries:lock_block'});

    event.shaped('supplementaries:lock_block', [
        'CCC',
        'LIL',
        'CCC'
    ], {
        C: 'minecraft:chain',
        L: 'simplylight:wall_lamp',
        I: 'minecraft:white_wool'
    }).id('securitycraft:codebreaker_custom');
});