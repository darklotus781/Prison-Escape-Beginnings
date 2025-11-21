RecipeViewerEvents.removeEntries('item', event => {
    // Dimension Expansion
    event.remove('dimension_expansion:stone_block_teleporter');
    event.remove('dimension_expansion:mining_teleporter');
    event.remove('exdeorum:end_cake');
    // event.remove(/alltheores\:nether_.*_ore/);
    // event.remove(/alltheores\:end_.*_ore/);
    event.remove(/alltheores\:other_.*_ore/);
    event.remove('reliquary:mob_charm_fragment');
});