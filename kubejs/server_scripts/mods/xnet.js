ServerEvents.recipes(event => {
    event.shaped('xnet:connector_red', [
        "ABA",
        "CDC",
        "ACA"
    ], {
        A: "minecraft:red_dye",
        B: "minecraft:chest",
        C: "minecraft:redstone",
        D: "minecraft:gold_block"
    }).id("xnet:connector_red");

    event.shaped('xnet:connector_blue', [
        "ABA",
        "CDC",
        "ACA"
    ], {
        A: "minecraft:blue_dye",
        B: "minecraft:chest",
        C: "minecraft:redstone",
        D: "minecraft:gold_block"
    }).id("xnet:connector_blue");

    event.shaped('xnet:connector_green', [
        "ABA",
        "CDC",
        "ACA"
    ], {
        A: "minecraft:green_dye",
        B: "minecraft:chest",
        C: "minecraft:redstone",
        D: "minecraft:gold_block"
    }).id("xnet:connector_green");

    event.shaped('xnet:connector_yellow', [
        "ABA",
        "CDC",
        "ACA"
    ], {
        A: "minecraft:yellow_dye",
        B: "minecraft:chest",
        C: "minecraft:redstone",
        D: "minecraft:gold_block"
    }).id("xnet:connector_yellow");
});