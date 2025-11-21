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
];

// under 32 deepslate

// under 92 (deadly)

// above 145 (safe)

const deepBeneathOreTooltips = [
    { id: "minecraft:coal_ore", yMin: -64, yMax: 320 },
    { id: "minecraft:deepslate_coal_ore", yMin: -64, yMax: 320 },
    { id: "minecraft:iron_ore", yMin: -64, yMax: 320 },
    { id: "minecraft:deepslate_iron_ore", yMin: -64, yMax: 320 },
    { id: "minecraft:copper_ore", yMin: -64, yMax: 320 },
    { id: "minecraft:deepslate_copper_ore", yMin: -64, yMax: 320 },
    { id: "minecraft:gold_ore", yMin: -64, yMax: 320 },
    { id: "minecraft:diamond_ore", yMin: -64, yMax: 92 },
    { id: "minecraft:deepslate_diamond_ore", yMin: -64, yMax: 92 },
    { id: "minecraft:deepslate_gold_ore", yMin: -64, yMax: 320 },
    { id: "dimension_expansion:quartz_ore", yMin: -64, yMax: 320 },
    { id: "dimension_expansion:deepslate_quartz_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:aluminum_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:deepslate_aluminum_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:lead_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:deepslate_lead_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:nickel_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:deepslate_nickel_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:osmium_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:deepslate_osmium_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:platinum_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:deepslate_platinum_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:silver_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:deepslate_silver_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:tin_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:deepslate_tin_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:uranium_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:deepslate_uranium_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:zinc_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:deepslate_zinc_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:ruby_ore", yMin: 0, yMax: 92 },
    { id: "alltheores:deepslate_ruby_ore", yMin: 0, yMax: 92 },
    { id: "alltheores:peridot_ore", yMin: 0, yMax: 92 },
    { id: "alltheores:deepslate_peridot_ore", yMin: 0, yMax: 92 },
    { id: "alltheores:sapphire_ore", yMin: 0, yMax: 92 },
    { id: "alltheores:deepslate_sapphire_ore", yMin: 0, yMax: 92 },
    { id: "alltheores:cinnabar_ore", yMin: 0, yMax: 92 },
    { id: "alltheores:deepslate_cinnabar_ore", yMin: 0, yMax: 92 },
    { id: "alltheores:fluorite_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:deepslate_fluorite_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:salt_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:deepslate_salt_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:sulfur_ore", yMin: -64, yMax: 320 },
    { id: "alltheores:deepslate_sulfur_ore", yMin: -64, yMax: 320 },
    { id: "powah:uraninite_ore_poor", yMin: 128, yMax: 320 },
    { id: "powah:deepslate_uraninite_ore_poor", yMin: 128, yMax: 320 },
    { id: "powah:uraninite_ore", yMin: 0, yMax: 128 },
    { id: "powah:deepslate_uraninite_ore", yMin: 0, yMax: 128 },
    { id: "powah:uraninite_ore_dense", yMin: -64, yMax: 0 },
    { id: "powah:deepslate_uraninite_ore_dense", yMin: -64, yMax: 0 },
    { id: "actuallyadditions:black_quartz_ore", yMin: -64, yMax: 320 },
    { id: "rftoolsbase:dimensionalshard_overworld", yMin: 32, yMax: 320 },
    { id: "mysticalagriculture:inferium_ore", yMin: -64, yMax: 320 },
    { id: "mysticalagriculture:deepslate_inferium_ore", yMin: -64, yMax: 320 },
    { id: "mysticalagriculture:prosperity_ore", yMin: -64, yMax: 320 },
    { id: "mysticalagriculture:deepslate_prosperity_ore", yMin: -64, yMax: 320 },
    { id: "silentgear:bort_ore", yMin: -64, yMax: 320 },
    { id: "silentgear:deepslate_bort_ore", yMin: -64, yMax: 320 },
    { id: "darkblades:dark_ore", yMin: -64, yMax: 32 },
    { id: "irons_spellbooks:mithril_ore", yMin: -64, yMax: 320 },
    { id: "irons_spellbooks:deepslate_mithril_ore", yMin: -64, yMax: 320 }
];

ItemEvents.modifyTooltips(event => {
    deepBeneathOreTooltips.forEach(ore => {
        event.modify(ore.id, tooltip => {
            tooltip.removeLine(1); // remove default/invalid line
            tooltip.add([Text.gold('Found between Y ' + ore.yMin + ' and Y ' + ore.yMax)]);
            tooltip.add([Text.darkAqua('In the Deep Beneath Dimension')]);
        });
    });

    aoa3Ids.forEach(id => {
        event.add(id, Text.gray("This material can be obtained in the Advent Of Ascension Dimension"));
    });

    event.add('deeperdarker:heart_of_the_deep', Text.darkPurple('Gained by killing wardens. A powerful relic that pulses with dark energy.'));
    event.add('deeperdarker:heart_of_the_deep', Text.gray('Right-click to descend into the Otherside, consumes on use.'));
});
