RecipeViewerEvents.addInformation('item', e => {
    const pebbles = [
        "exdeorum:andesite_pebble",
        "exdeorum:basalt_pebble",
        "exdeorum:blackstone_pebble",
        "exdeorum:calcite_pebble",
        "exdeorum:deepslate_pebble",
        "exdeorum:diorite_pebble",
        "exdeorum:granite_pebble",
        "exdeorum:tuff_pebble",
        "exdeorum:stone_pebble",
        "havenpebbles:dripstone_pebble",
        "havenpebbles:netherrack_pebble"
    ];

    e.add(
        pebbles,
        [
            "§6Shift-right-click§r on Dirt, Grass, Netherrack or Soul Sand with an empty hand to pop out the pebbles contained within.",
            "Some Pebbles will be returned from sieving recipes, figure out how to recycle them in your processing chain.",
            "",
            "§3Tip: Hold a pebble in your offhand to find more of that type." // thanks for the idea Direwolf20!
        ]
    );
});