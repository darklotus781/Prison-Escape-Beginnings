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
});

ServerEvents.tags("item", (event) => {
    event.add('c:tools/knife', 'ae2:certus_quartz_cutting_knife');
    event.add('c:tools/knife', 'ae2:nether_quartz_cutting_knife');
    event.add('c:buckets/empty', 'exdeorum:porcelain_bucket');
});