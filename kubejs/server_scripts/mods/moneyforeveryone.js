ServerEvents.recipes(event => {
    event.remove({output: 'moneyforeveryone:coin_netherite'});
    event.remove({output: 'moneyforeveryone:coin_diamond'});
    event.remove({output: 'moneyforeveryone:coin_gold'});
    event.remove({output: 'moneyforeveryone:coin_iron'});
    event.remove({output: 'moneyforeveryone:coin_copper'});
    event.remove({output: 'moneyforeveryone:atm'});
    event.remove({output: 'moneyforeveryone:circuit_board'});
    event.remove({output: 'moneyforeveryone:atm'});

    // Upgrade 5 copper → 1 iron
    event.shapeless(
        Item.of('moneyforeveryone:coin_iron'),
        [
            'moneyforeveryone:coin_copper',
            'moneyforeveryone:coin_copper',
            'moneyforeveryone:coin_copper',
            'moneyforeveryone:coin_copper',
            'moneyforeveryone:coin_copper'
        ]
    );

    // Downgrade 1 iron → 5 copper
    event.shapeless(
        Item.of('moneyforeveryone:coin_copper', 5),
        ['moneyforeveryone:coin_iron']
    );

    // Upgrade 5 iron → 1 gold
    event.shapeless(
        Item.of('moneyforeveryone:coin_gold'),
        [
            'moneyforeveryone:coin_iron',
            'moneyforeveryone:coin_iron',
            'moneyforeveryone:coin_iron',
            'moneyforeveryone:coin_iron',
            'moneyforeveryone:coin_iron'
        ]
    );

    // Downgrade 1 gold → 5 iron
    event.shapeless(
        Item.of('moneyforeveryone:coin_iron', 5),
        ['moneyforeveryone:coin_gold']
    );

    // Upgrade 5 gold → 1 diamond
    event.shapeless(
        Item.of('moneyforeveryone:coin_diamond'),
        [
            'moneyforeveryone:coin_gold',
            'moneyforeveryone:coin_gold',
            'moneyforeveryone:coin_gold',
            'moneyforeveryone:coin_gold',
            'moneyforeveryone:coin_gold'
        ]
    );

    // Downgrade 1 diamond → 5 gold
    event.shapeless(
        Item.of('moneyforeveryone:coin_gold', 5),
        ['moneyforeveryone:coin_diamond']
    );

    // Custom Circuit Board Recipe
    event.shaped('moneyforeveryone:circuit_board', [
        'CRC',
        'IRI',
        'CRC'
    ], {
        C: 'minecraft:flint',
        R: 'minecraft:redstone',
        I: 'minecraft:iron_ingot'
    });

    // Custom ATM Recipe
    event.shaped('moneyforeveryone:atm', [
        'III',
        'CBC',
        'RRR'
    ], {
        I: 'minecraft:iron_block',
        C: 'projecte:philosophers_stone',
        B: 'minecraft:chest',
        R: 'minecraft:redstone'
    });
});
