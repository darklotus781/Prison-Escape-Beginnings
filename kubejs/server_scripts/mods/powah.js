ServerEvents.recipes(event => {
    // Blaze Powder
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            {item: 'aoa3:copper_coin'}
        ],
        energy: 15000,
        result: {
            id: 'minecraft:blaze_powder',
            count: 1
        }
    });

    // Cast Iron Ingot
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            {item: 'minecraft:iron_ingot'}
        ],
        energy: 55000,
        result: {
            id: 'ftbstuff:cast_iron_ingot',
            count: 1
        }
    });

    // Copper Coin
    event.custom({
        type: 'powah:energizing',

        ingredients: [
            {item: 'aoa3:gold_coin'}
        ],
        energy: 550000000,
        result: {
            id: 'moneyforeveryone:coin_copper',
            count: 1
        }
    });

    // Uraninite
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            {item: 'aoa3:limonite_block'}
        ],
        energy: 2500000,
        result: {
            id: 'powah:uraninite',
            count: 3
        }
    });
});
