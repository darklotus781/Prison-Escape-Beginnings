RecipeViewerEvents.removeEntries('item', event => {
    // Dimension Expansion
    event.remove('dimension_expansion:stone_block_teleporter');
    event.remove('dimension_expansion:mining_teleporter');

    // ATO
    event.remove(/alltheores\:other_.*_ore/);

    // Reliquary
    event.remove('reliquary:mob_charm_fragment');

    // exdeorum
    event.remove('exdeorum:end_cake');
    event.remove('exdeorum:crushed_blackstone');
    event.remove('exdeorum:compressed_crushed_blackstone');

    // opolisutilities
    event.remove('opolisutilities:crook');
});