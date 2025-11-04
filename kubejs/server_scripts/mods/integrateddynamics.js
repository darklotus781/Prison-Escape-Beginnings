ServerEvents.recipes(event => {
    event.remove({output: 'integrateddynamics:squeezer'});
    event.remove({id: 'integrateddynamics:squeezer/convenience/minecraft_dye_green'});
    event.remove({id: 'integrateddynamics:squeezer/ore/glowstone_dust'});

    event.shaped(
        Item.of('integrateddynamics:squeezer'),
        ['AAA', 'B B', 'CDC'],
        {
            A: 'supplementaries:flint_block',
            B: 'minecraft:stick',
            D: 'minecraft:black_dye',
            C: 'securitycraft:reinforced_oak_planks'
        }
    );

    event.custom({
        type: 'integrateddynamics:squeezer',
        input_item: {
            item: 'minecraft:cactus'
        },
        output_items: [
            {
                item: {
                    id: 'minecraft:slime_ball',
                    count: 1
                }
            },
            {
                item: {
                    id: 'minecraft:green_dye',
                    count: 2
                },

            }
        ],
        duration: 40
    });

    event.custom({
        type: 'integrateddynamics:squeezer',
        input_item: {
            item: 'minecraft:sand'
        },
        output_items: [
            {
                item: {
                    id: 'exdeorum:dust',
                    count: 1
                }
            }
        ],
        duration: 40
    });

    event.custom({
        type: 'integrateddynamics:squeezer',
        input_item: {
            item: 'minecraft:glowstone'
        },
        output_items: [
            {
                item: {
                    id: 'minecraft:glowstone_dust',
                    count: 4
                }
            },
            {
                item: {
                    id: 'minecraft:glowstone_dust'
                },
                chance: 0.5
            }
        ],
        duration: 40
    });

    event.custom({
        type: 'integrateddynamics:squeezer',
        input_item: {
            item: 'minecraft:terracotta'
        },
        output_items: [
            {
                item: {
                    id: 'minecraft:red_sand',
                    count: 3
                }
            },
            {
                item: {
                    id: 'minecraft:red_sand'
                },
                chance: 0.5
            }
        ],
        duration: 40
    });
});