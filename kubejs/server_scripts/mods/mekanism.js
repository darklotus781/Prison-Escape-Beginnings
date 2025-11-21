ServerEvents.recipes(event => {
    event.remove({output: 'mekanism:sawdust'})

    event.shapeless(
        Item.of('mekanism:sawdust'),
        [
            'exdeorum:wood_chippings',
            'exdeorum:wood_chippings',
            'exdeorum:wood_chippings',
            'exdeorum:wood_chippings'
        ]
    )

    const mekMetals = ['electrum', 'aluminum', 'lead', 'silver', 'nickel', 'uranium', 'constantan', 'steel', 'osmium', 'platinum', 'tin', 'zinc']
    mekMetals.forEach(metal => {
        if (Item.of(`mekanism:nugget_${metal}`) !== undefined) {
            event.shapeless(`mekanism:ingot_${metal}`, [Item.of(`alltheores:${metal}_nugget`, 9)]);
            event.shapeless(`mekanism:block_${metal}`, [Item.of(`alltheores:${metal}_ingot`, 9)]);
        }
    });
})
