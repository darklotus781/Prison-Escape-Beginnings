ServerEvents.recipes(event => {
    event.remove({output: Item.of('opolisutilities:sapling_grower')});
    event.remove({output: Item.of('opolisutilities:crook')});

    // Sapling Grower
    event.shaped(
        Item.of('opolisutilities:sapling_grower'),
        [
            '  A',
            ' B ',
            'B  '
        ],
        {
            A: 'minecraft:bone_block',
            B: 'immersiveengineering:stick_treated'
        }
    );

    // Helper for input format { item, count }
    function inputItem(id, count) {
        return { item: id, count: count || 1 };
    }

    // Helper for output format { id, count }
    function outputItem(id, count) {
        return { id: id, count: count || 1 };
    }

    // --- Singles ---
    event.custom({
        type: 'opolisutilities:catalogue',
        input: inputItem('opolisutilities:b_bucks', 3),
        output: outputItem('minecraft:apple', 4)
    }).id('opolisutilities:catalogue/apple');

    // --- Vanilla saplings & mushrooms ---
    var saplings = [
        'spruce_sapling',
        'oak_sapling',
        'birch_sapling',
        'jungle_sapling',
        'acacia_sapling',
        'dark_oak_sapling', // special 4 count
        'mangrove_propagule',
        'cherry_sapling',
        'brown_mushroom',
        'red_mushroom'
    ];

    for (var i = 0; i < saplings.length; i++) {
        var s = saplings[i];
        event.custom({
            type: 'opolisutilities:catalogue',
            input: inputItem('opolisutilities:b_bucks', 6),
            output: outputItem('minecraft:' + s, s === 'dark_oak_sapling' ? 4 : 1)
        }).id('opolisutilities:catalogue/' + s);
    }
});