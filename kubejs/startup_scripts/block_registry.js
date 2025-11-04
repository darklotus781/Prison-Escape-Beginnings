StartupEvents.registry('block', event => {
    event.create('budding_amethyst_proxy')
        .displayName('Proxy Patch Block')
        .texture('minecraft:block/stone')
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .noDrops()
        .blockEntity((_, __) => {
        });
});
