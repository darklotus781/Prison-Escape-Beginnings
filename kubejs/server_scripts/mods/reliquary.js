ServerEvents.recipes(event => {
    event.remove({ output: 'reliquary:fertile_lily_pad' });

    event.shaped('reliquary:fertile_lily_pad', [
        'SFS',
        'SLP',
        'SFS'
    ], {
        S: 'mekanism:substrate',
        F: 'reliquary:fertile_essence',
        L: 'minecraft:lily_pad',
        P: 'mekanism:substrate'
    });
});
