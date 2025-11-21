ServerEvents.tags('block', event => {
    event.add('justdirethings:phase_deny', [
        "minecraft:barrier",
        "minecraft:bedrock",
        "ftbquests:barrier",
        "ftbquests:stage_barrier",
        "securitycraft:reinforced_iron_bars"
    ]);

    event.add('justdirethings:eclipsegate_deny', [
        "minecraft:barrier",
        "minecraft:bedrock",
        "ftbquests:barrier",
        "ftbquests:stage_barrier",
        "securitycraft:reinforced_iron_bars"
    ]);

    event.add('justdirethings:swapper_deny', [
        "minecraft:barrier",
        "minecraft:bedrock",
        "ftbquests:barrier",
        "ftbquests:stage_barrier",
        "securitycraft:reinforced_iron_bars"
    ]);
    event.add('justdirethings:paradox_absorb_deny', [
        "minecraft:barrier",
        "minecraft:bedrock",
        "ftbquests:barrier",
        "ftbquests:stage_barrier",
        "securitycraft:reinforced_iron_bars"
    ]);
    event.add('c:relocation_not_supported', [
        "minecraft:barrier",
        "minecraft:bedrock",
        "ftbquests:barrier",
        "ftbquests:stage_barrier",
        "securitycraft:reinforced_iron_bars"
    ]);

    event.add('ae2:blacklisted/spatial', [
        "minecraft:barrier",
        "minecraft:bedrock",
        "ftbquests:barrier",
        "ftbquests:stage_barrier",
        "securitycraft:reinforced_iron_bars"
    ]);
});

ServerEvents.tags("item", (event) => {
    event.add('c:tools/knife', 'ae2:certus_quartz_cutting_knife');
    event.add('c:tools/knife', 'ae2:nether_quartz_cutting_knife');
    event.add('c:buckets/empty', 'exdeorum:porcelain_bucket');
    event.add('minecraft:bookshelf_books', 'ftbquests:book');
    event.add('supplementaries:placeable_books', 'ftbquests:book');
});