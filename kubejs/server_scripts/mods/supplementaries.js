ServerEvents.recipes(event => {
    event.remove({output: 'supplementaries:lock_block'});

    event.shaped('supplementaries:lock_block', [
        'CCC',
        'AIA',
        'CCC'
    ], {
        C: 'minecraft:chain',
        A: 'minecraft:andesite',
        I: 'minecraft:white_wool'
    }).id('securitycraft:codebreaker_custom');
});