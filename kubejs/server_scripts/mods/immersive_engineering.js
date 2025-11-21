ServerEvents.recipes(event => {
    event.shaped('alltheores:steel_ingot', [
        'FKJ',
        '   ',
        '   '
    ], {
        F: 'supplementaries:flint_block',
        K: 'ftbstuff:cast_iron_ingot',
        J: 'justdirethings:ferricore_ingot'
    });

    const ieMetals = ['electrum', 'aluminum', 'lead', 'silver', 'nickel', 'uranium', 'constantan', 'steel', 'osmium', 'platinum', 'tin', 'zinc']
    ieMetals.forEach(metal => {
        if (Item.of(`immersiveengineering:nugget_${metal}`) !== undefined) {
            event.shapeless(`immersiveengineering:ingot_${metal}`, [Item.of(`alltheores:${metal}_nugget`, 9)]);
            event.shapeless(`immersiveengineering:storage_${metal}`, [Item.of(`alltheores:${metal}_ingot`, 9)]);
        }
    });
});
