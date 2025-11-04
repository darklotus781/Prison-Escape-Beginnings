ServerEvents.recipes(event => {
    event.remove({output: 'handcrafted:oak_cupboard'});

    event.shaped(
        Item.of('handcrafted:oak_cupboard'),
        [
            'PPP',
            'PBP',
            'PPP'
        ],
        {
            P: 'minecraft:oak_planks',
            B: 'supplementaries:gravel_bricks',
        }
    );
});
