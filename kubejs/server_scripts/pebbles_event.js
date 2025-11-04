// === PEBBLE DROP CONFIG ===
var PEBBLE_DROPS = {
    "minecraft:dirt": [
        "exdeorum:andesite_pebble:1",
        "exdeorum:calcite_pebble:0",
        "exdeorum:deepslate_pebble:1",
        "exdeorum:diorite_pebble:1",
        "exdeorum:blackstone_pebble:0",
        "exdeorum:granite_pebble:1",
        "exdeorum:tuff_pebble:0",
        "exdeorum:stone_pebble:10"
    ],
    "minecraft:grass_block": [
        "exdeorum:andesite_pebble:1",
        "exdeorum:calcite_pebble:1",
        "exdeorum:deepslate_pebble:1",
        "exdeorum:diorite_pebble:1",
        "havenpebbles:dripstone_pebble:1",
        "exdeorum:granite_pebble:1",
        "exdeorum:tuff_pebble:1",
        "exdeorum:stone_pebble:1"
    ],
    "minecraft:netherrack": [
        "havenpebbles:netherrack_pebble:1",
        "exdeorum:basalt_pebble:1",
        "exdeorum:blackstone_pebble:1"
    ],
    "minecraft:soul_sand": [
        "havenpebbles:netherrack_pebble:1",
        "exdeorum:basalt_pebble:1",
        "exdeorum:blackstone_pebble:1"
    ]
};

// === HELPERS ===
function pickWeighted(entryList) {
    var parsed = [];
    var total = 0;
    for (var i = 0; i < entryList.length; i++) {
        var s = String(entryList[i]);
        var last = s.lastIndexOf(":");
        if (last <= 0) continue;

        var id = s.substring(0, last);
        var w = parseInt(s.substring(last + 1), 10);
        if (isNaN(w) || w <= 0) continue;

        parsed.push({ id: id, w: w });
        total += w;
    }

    if (parsed.length === 0) return null;

    var r = Math.random() * total;
    var acc = 0;
    for (var j = 0; j < parsed.length; j++) {
        acc += parsed[j].w;
        if (r < acc) return parsed[j].id;
    }

    return parsed[0].id;
}

// === EVENT HANDLER ===
BlockEvents.rightClicked(function (event) {
    var hand = event.hand;
    var block = event.block;
    var player = event.player;
    var item = event.item;
    var facing = event.facing;

    if (hand !== "MAIN_HAND") return;
    if (!player || !block) return;
    if (!item.isEmpty()) return;
    if (!player.isShiftKeyDown()) return;

    var blockId = String(block.id);
    var drops = PEBBLE_DROPS[blockId];
    if (!drops) return; // block not configured

    player.swing();

    var offhand = player.getOffHandItem();
    var drop = null;

    // --- Prefer offhand pebble, but only if valid for this block ---
    if (!offhand.isEmpty() && String(offhand.id).endsWith("_pebble")) {
        var offId = String(offhand.id);
        var valid = false;

        for (var i = 0; i < drops.length; i++) {
            // match pebble id at start of entry (before :weight)
            if (drops[i].indexOf(offId) === 0) {
                valid = true;
                break;
            }
        }

        if (valid) {
            drop = offId;
        } else {
            // Offhand pebble not valid for this block → no drop
            // console.log("[Pebbles] Offhand " + offId + " not valid for " + blockId);
            return;
        }
    } else {
        drop = pickWeighted(drops);
    }

    if (!drop) return;

    try {
        if (facing) block.popItemFromFace(Item.of(drop), facing);
        else block.popItem(Item.of(drop));
    } catch (e) {
        console.log("[Pebbles] Error spawning " + drop + " for " + blockId + ": " + e);
    }
});

