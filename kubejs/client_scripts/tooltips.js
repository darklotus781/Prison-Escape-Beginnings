const aoa3Ids = [
    'aoa3:ancient_tile_core',
    'aoa3:archaic_dirt',
    'aoa3:aromatic_dirt',
    'aoa3:baronyte_ore',
    'aoa3:blazium_ore',
    'aoa3:bloodstone_ore',
    'aoa3:blue_gemstone_ore',
    'aoa3:bone_fragments_ore',
    'aoa3:candied_dirt',
    'aoa3:celevian_dirt',
    'aoa3:charged_runium_ore',
    'aoa3:creep_dirt',
    'aoa3:crystallite_ore',
    'aoa3:deepslate_bone_fragments_ore',
    'aoa3:deepslate_jade_ore',
    'aoa3:deepslate_limonite_ore',
    'aoa3:deepslate_runium_ore',
    'aoa3:elecanium_ore',
    'aoa3:emberstone_ore',
    'aoa3:fungal_dirt',
    'aoa3:gemenyte_ore',
    'aoa3:ghastly_ore',
    'aoa3:ghoulish_ore',
    'aoa3:limonite_ore',
    'aoa3:greckon_dirt'
    // add any others you'd like
];

ItemEvents.modifyTooltips(event => {
    aoa3Ids.forEach(id => {
        event.add(id, Text.gray("This material can be obtained in the Advent Of Ascension Dimension"));
    });

    event.add('deeperdarker:heart_of_the_deep', Text.darkPurple('Gained by killing wardens. A powerful relic that pulses with dark energy.'));
    event.add('deeperdarker:heart_of_the_deep', Text.gray('Right-click to descend into the Otherside, consumes on use.'));
});
