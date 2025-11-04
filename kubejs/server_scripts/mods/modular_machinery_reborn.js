ServerEvents.recipes(event => {
    event.shaped('modular_machinery_reborn:controller', [
        "ABC",
        "DEF",
        "GHI"
    ], {
        A: "xnet:controller",
        B: "minecraft:dragon_head",
        C: "fluxnetworks:flux_controller",
        D: "minecraft:nether_star",
        E: "ae2:controller",
        F: "pipez:ultimate_upgrade",
        G: "sophisticatedstorage:controller",
        H: "exdeorum:compressed_end_stone",
        I: "functionalstorage:storage_controller"
    }).id("modular_machinery_reborn:controller");
});

ItemEvents.crafted(event => {
    if (event.item.id === "modular_machinery_reborn:controller") {
        let newItem = 'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:villager_summoner"]'
        event.player.give(newItem);
        event.item.count = 0;
    }
});

ServerEvents.recipes(event => {
    event.shaped('modular_machinery_reborn:blueprint', [
        "AB"
    ], {
        A: "minecraft:paper",
        B: "minecraft:lapis_lazuli"
    }).id('modular_machinery_reborn:blueprint');
});