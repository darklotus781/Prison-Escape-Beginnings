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
})
