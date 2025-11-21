ServerEvents.recipes(event => {
    event.remove({ id: 'utilitarian:utility/hopper_minecart' });
    event.remove({ id: 'utilitarian:utility/tnt_minecart' });

    event.shaped(Item.of('minecraft:hopper_minecart'),
        [
            'IHI',
            'III'
        ],
        {
            H: Item.of('minecraft:hopper'),
            I: Ingredient.of('#c:ingots/iron')
        }
    ).id('utilitarian:utility/hopper_minecart');

    event.shaped(Item.of('minecraft:chest_minecart'),
        [
            'ICI',
            'III'
        ],
        {
            C: Ingredient.of('#c:chests/wooden'),
            I: Ingredient.of('#c:ingots/iron')
        }
    ).id('utilitarian:utility/chest_minecart');

    event.shaped(Item.of('minecraft:tnt_minecart'),
        [
            'ITI',
            'III'
        ],
        {
            T: Item.of('minecraft:tnt'),
            I: Ingredient.of('#c:ingots/iron')
        }
    ).id('utilitarian:utility/tnt_minecart');

    event.shaped(Item.of('minecraft:furnace_minecart'),
        [
            'IFI',
            'III'
        ],
        {
            F: Item.of('minecraft:furnace'),
            I: Ingredient.of('#c:ingots/iron')
        }
    ).id('utilitarian:utility/furnace_minecart');
});