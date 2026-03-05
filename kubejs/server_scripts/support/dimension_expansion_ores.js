//kubejs/server_scripts/support/dimension_expansion_ores.js


/**
 *     'irons_spellbooks:mithril_ore',
 *     'irons_spellbooks:deepslate_mithril_ore',
 *     'gobber2:gobber2_ore',
 *     'gobber2:gobber2_ore_deepslate',
 *     'mysticalagriculture:soulium_ore',
 */

// under 32 deepslate

// under 92 (deadly)

// above 145 (safe)

const deepBeneathOres = [
    // Dimension Expansion
    {
        name: "upper_coal_ore",
        hosts: { stone: "minecraft:coal_ore" },
        yMin: 145, yMax: 320, veinSize: 17, count: 30
    },
    {
        name: "lower_coal_ore",
        hosts: { stone: "minecraft:coal_ore", deepslate: "minecraft:deepslate_coal_ore" },
        yMin: -64, yMax: 80, veinSize: 17, count: 30
    },
    {
        name: "upper_iron_ore",
        hosts: { stone: "minecraft:iron_ore" },
        yMin: 145, yMax: 320, veinSize: 9, count: 65
    },
    {
        name: "lower_iron_ore",
        hosts: { stone: "minecraft:iron_ore", deepslate: "minecraft:deepslate_iron_ore" },
        yMin: -64, yMax: 80, veinSize: 9, count: 65
    },
    {
        name: "upper_copper_ore",
        hosts: { stone: "minecraft:copper_ore" },
        yMin: 145, yMax: 320, veinSize: 12, count: 20
    },
    {
        name: "lower_copper_ore",
        hosts: { stone: "minecraft:copper_ore", deepslate: "minecraft:deepslate_copper_ore" },
        yMin: -64, yMax: 80, veinSize: 12, count: 20
    },
    {
        name: "upper_gold_ore",
        hosts: { stone: "minecraft:gold_ore" },
        yMin: 145, yMax: 320, veinSize: 9, count: 15
    },
    {
        name: "lower_gold_ore",
        hosts: { stone: "minecraft:gold_ore", deepslate: "minecraft:deepslate_gold_ore" },
        yMin: -64, yMax: 80, veinSize: 9, count: 15
    },
    {
        name: "upper_redstone_ore",
        hosts: { stone: "minecraft:redstone_ore" },
        yMin: 145, yMax: 320, veinSize: 8, count: 15
    },
    {
        name: "lower_redstone_ore",
        hosts: { stone: "minecraft:redstone_ore", deepslate: "minecraft:deepslate_redstone_ore" },
        yMin: -64, yMax: 80, veinSize: 8, count: 15
    },
    {
        name: "upper_lapis_ore",
        hosts: { stone: "minecraft:lapis_ore" },
        yMin: 145, yMax: 320, veinSize: 7, count: 15
    },
    {
        name: "lower_lapis_ore",
        hosts: { stone: "minecraft:lapis_ore", deepslate: "minecraft:deepslate_lapis_ore" },
        yMin: -64, yMax: 80, veinSize: 7, count: 20
    },
    {
        name: "upper_diamond_ore",
        hosts: { stone: "minecraft:diamond_ore" },
        yMin: 145, yMax: 320, veinSize: 4, count: 15
    },
    {
        name: "lower_diamond_ore",
        hosts: { stone: "minecraft:diamond_ore", deepslate: "minecraft:deepslate_diamond_ore" },
        yMin: -64, yMax: 80, veinSize: 8, count: 20
    },
    {
        name: "upper_emerald_ore",
        hosts: { stone: "minecraft:emerald_ore" },
        yMin: 145, yMax: 320, veinSize: 3, count: 10
    },
    {
        name: "lower_emerald_ore",
        hosts: { stone: "minecraft:emerald_ore", deepslate: "minecraft:deepslate_emerald_ore" },
        yMin: -64, yMax: 80, veinSize: 6, count: 15
    },
    {
        name: "upper_quartz_ore",
        hosts: { stone: "dimension_expansion:quartz_ore" },
        yMin: 145, yMax: 320, veinSize: 12, count: 20
    },
    {
        name: "lower_quartz_ore",
        hosts: { stone: "dimension_expansion:quartz_ore", deepslate: "dimension_expansion:deepslate_quartz_ore" },
        yMin: -64, yMax: 80, veinSize: 12, count: 25
    },

    { name: "dark_ore", hosts: { deepslate: "darkblades:dark_ore" }, yMin: -64, yMax: 32, veinSize: 3, count: 8 },
    { name: "ancient_debris", hosts: { deepslate: "minecraft:ancient_debris" }, yMin: -64, yMax: 80, veinSize: 4, count: 10 },

    // All The Ores
    { name: "upper_aluminum", hosts: { stone: "alltheores:aluminum_ore" }, yMin: 145, yMax: 320, veinSize: 12, count: 32 },
    { name: "lower_aluminum", hosts: { stone: "alltheores:aluminum_ore", deepslate: "alltheores:deepslate_aluminum_ore" }, yMin: -64, yMax: 80, veinSize: 12, count: 32 },
    { name: "upper_lead", hosts: { stone: "alltheores:lead_ore" }, yMin: 145, yMax: 320, veinSize: 12, count: 32 },
    { name: "lower_lead", hosts: { stone: "alltheores:lead_ore", deepslate: "alltheores:deepslate_lead_ore" }, yMin: -64, yMax: 80, veinSize: 12, count: 32 },
    { name: "upper_nickel", hosts: { stone: "alltheores:nickel_ore" }, yMin: 145, yMax: 320, veinSize: 12, count: 32 },
    { name: "lower_nickel", hosts: { stone: "alltheores:nickel_ore", deepslate: "alltheores:deepslate_nickel_ore" }, yMin: -64, yMax: 80, veinSize: 12, count: 32 },
    { name: "upper_osmium", hosts: { stone: "alltheores:osmium_ore" }, yMin: 145, yMax: 320, veinSize: 12, count: 32 },
    { name: "lower_osmium", hosts: { stone: "alltheores:osmium_ore", deepslate: "alltheores:deepslate_osmium_ore" }, yMin: -64, yMax: 80, veinSize: 12, count: 32 },
    { name: "upper_platinum", hosts: { stone: "alltheores:platinum_ore" }, yMin: 145, yMax: 320, veinSize: 12, count: 32 },
    { name: "lower_platinum", hosts: { stone: "alltheores:platinum_ore", deepslate: "alltheores:deepslate_platinum_ore" }, yMin: -64, yMax: 80, veinSize: 12, count: 32 },
    { name: "upper_silver", hosts: { stone: "alltheores:silver_ore" }, yMin: 145, yMax: 320, veinSize: 12, count: 32 },
    { name: "lower_silver", hosts: { stone: "alltheores:silver_ore", deepslate: "alltheores:deepslate_silver_ore" }, yMin: -64, yMax: 80, veinSize: 12, count: 32 },
    { name: "upper_tin", hosts: { stone: "alltheores:tin_ore" }, yMin: 145, yMax: 320, veinSize: 12, count: 32 },
    { name: "lower_tin", hosts: { stone: "alltheores:tin_ore", deepslate: "alltheores:deepslate_tin_ore" }, yMin: -64, yMax: 80, veinSize: 12, count: 32 },
    { name: "upper_uranium", hosts: { stone: "alltheores:uranium_ore" }, yMin: 145, yMax: 320, veinSize: 12, count: 32 },
    { name: "lower_uranium", hosts: { stone: "alltheores:uranium_ore", deepslate: "alltheores:deepslate_uranium_ore" }, yMin: -64, yMax: 80, veinSize: 12, count: 32 },
    { name: "upper_zinc", hosts: { stone: "alltheores:zinc_ore" }, yMin: 145, yMax: 320, veinSize: 12, count: 32 },
    { name: "lower_zinc", hosts: { stone: "alltheores:zinc_ore", deepslate: "alltheores:deepslate_zinc_ore" }, yMin: -64, yMax: 80, veinSize: 12, count: 32 },
    { name: "upper_ruby", hosts: { stone: "alltheores:ruby_ore" }, yMin: 145, yMax: 320, veinSize: 4, count: 16 },
    { name: "lower_ruby", hosts: { stone: "alltheores:ruby_ore", deepslate: "alltheores:deepslate_ruby_ore" }, yMin: -64, yMax: 80, veinSize: 4, count: 16 },
    { name: "upper_peridot", hosts: { stone: "alltheores:peridot_ore" }, yMin: 145, yMax: 320, veinSize: 4, count: 16 },
    { name: "lower_peridot", hosts: { stone: "alltheores:peridot_ore", deepslate: "alltheores:deepslate_peridot_ore" }, yMin: -64, yMax: 80, veinSize: 4, count: 16 },
    { name: "upper_sapphire", hosts: { stone: "alltheores:sapphire_ore" }, yMin: 145, yMax: 320, veinSize: 4, count: 16 },
    { name: "lower_sapphire", hosts: { stone: "alltheores:sapphire_ore", deepslate: "alltheores:deepslate_sapphire_ore" }, yMin: -64, yMax: 80, veinSize: 4, count: 16 },
    { name: "upper_cinnabar", hosts: { stone: "alltheores:cinnabar_ore" }, yMin: 145, yMax: 320, veinSize: 4, count: 16 },
    { name: "lower_cinnabar", hosts: { stone: "alltheores:cinnabar_ore", deepslate: "alltheores:deepslate_cinnabar_ore" }, yMin: -64, yMax: 80, veinSize: 4, count: 16 },
    { name: "upper_fluorite", hosts: { stone: "alltheores:fluorite_ore" }, yMin: -64, yMax: 320, veinSize: 12, count: 8 },
    { name: "lower_fluorite", hosts: { stone: "alltheores:fluorite_ore", deepslate: "alltheores:deepslate_fluorite_ore" }, yMin: -64, yMax: 80, veinSize: 12, count: 8 },
    { name: "upper_salt", hosts: { stone: "alltheores:salt_ore" }, yMin: 145, yMax: 320, veinSize: 12, count: 8 },
    { name: "lower_salt", hosts: { stone: "alltheores:salt_ore", deepslate: "alltheores:deepslate_salt_ore" }, yMin: -64, yMax: 80, veinSize: 12, count: 8 },
    { name: "upper_sulfur", hosts: { stone: "alltheores:sulfur_ore" }, yMin: 145, yMax: 320, veinSize: 12, count: 8 },
    { name: "lower_sulfur", hosts: { stone: "alltheores:sulfur_ore", deepslate: "alltheores:deepslate_sulfur_ore" }, yMin: -64, yMax: 80, veinSize: 12, count: 8 },

    // Powah
    { name: "uraninite_poor", hosts: { stone: "powah:uraninite_ore_poor", deepslate: "powah:deepslate_uraninite_ore_poor" }, yMin: 128, yMax: 320, veinSize: 8, count: 8 },
    { name: "uraninite", hosts: { stone: "powah:uraninite_ore", deepslate: "powah:deepslate_uraninite_ore" }, yMin: 0, yMax: 128, veinSize: 8, count: 8 },
    { name: "uraninite_dense", hosts: { stone: "powah:uraninite_ore_dense", deepslate: "powah:deepslate_uraninite_ore_dense" }, yMin: -64, yMax: 0, veinSize: 8, count: 8 },

    // Actually Additions
    { name: "black_quartz", hosts: { stone: "actuallyadditions:black_quartz_ore" }, yMin: -64, yMax: 320, veinSize: 10, count: 8 },

    // RFTools Base
    { name: "dimensional_shard", hosts: { stone: "rftoolsbase:dimensionalshard_overworld"}, yMin: 32, yMax: 320, veinSize: 8, count: 8 },

    // Mystical Agriculture
    { name: "inferium", hosts: { stone: "mysticalagriculture:inferium_ore", deepslate: "mysticalagriculture:deepslate_inferium_ore" }, yMin: -64, yMax: 320, veinSize: 10, count: 8 },
    { name: "prosperity", hosts: { stone: "mysticalagriculture:prosperity_ore", deepslate: "mysticalagriculture:deepslate_prosperity_ore" }, yMin: -64, yMax: 320, veinSize: 10, count: 8 },

    // Silent Gear
    { name: "bort", hosts: { stone: "silentgear:bort_ore", deepslate: "silentgear:deepslate_bort_ore" }, yMin: -64, yMax: 320, veinSize: 3, count: 8 },

    // Irons Spells
    { name: "mithril_ore", hosts: { stone: "irons_spellbooks:mithril_ore", deepslate: "irons_spellbooks:deepslate_mithril_ore" }, yMin: -64, yMax: 320, veinSize: 5, count: 8 }
]

function makeTargets(hosts) {
    const targets = []
    if (hosts.stone) targets.push({ target: { predicate_type: "minecraft:tag_match", tag: "minecraft:stone_ore_replaceables" }, state: { Name: hosts.stone } })
    if (hosts.deepslate) targets.push({ target: { predicate_type: "minecraft:tag_match", tag: "minecraft:deepslate_ore_replaceables" }, state: { Name: hosts.deepslate } })
    if (hosts.endstone) targets.push({ target: { predicate_type: "minecraft:block_match", block: "minecraft:end_stone" }, state: { Name: hosts.endstone } })
    if (hosts.netherrack) targets.push({ target: { predicate_type: "minecraft:block_match", block: "minecraft:netherrack" }, state: { Name: hosts.netherrack } })
    return targets
}

function makeConfigured(ore) {
    return {
        type: "minecraft:ore",
        config: {
            size: ore.veinSize,
            discard_chance_on_air_exposure: 0.0,
            targets: makeTargets(ore.hosts)
        }
    }
}

function makePlaced(ore, prefix) {
    return {
        feature: `dimension_expansion:${prefix}${ore.name}`,
        placement: [
            { type: "minecraft:count", count: ore.count },
            { type: "minecraft:in_square" },
            {
                type: "minecraft:height_range",
                height: {
                    type: "minecraft:trapezoid",
                    min_inclusive: { absolute: ore.yMin },
                    max_inclusive: { absolute: ore.yMax }
                }
            },
            { type: "minecraft:biome" }
        ]
    }
}

function makeBiomeModifier(ore, set, prefix) {
    return {
        type: "neoforge:add_features",
        biomes: `#dimension_expansion:mining_features/${set}`,
        features: [`dimension_expansion:${prefix}${ore.name}`],
        step: "underground_ores"
    }
}

// function registerOres(event, ores, set, prefix) {
//     ores.forEach(ore => {
//         event.json(`dimension_expansion:worldgen/configured_feature/${prefix}${ore.name}.json`, makeConfigured(ore))
//         event.json(`dimension_expansion:worldgen/placed_feature/${prefix}${ore.name}.json`, makePlaced(ore, prefix))
//         event.json(`dimension_expansion:neoforge/biome_modifier/dimension_expansion/${prefix}${ore.name}_${set}.json`, makeBiomeModifier(ore, set, prefix))
//     })
// }

function registerOres(event, ores, set, prefix) {
    ores.forEach(ore => {
        const configured = makeConfigured(ore)
        const placed = makePlaced(ore, prefix)
        const biomeModifier = makeBiomeModifier(ore, set, prefix)

        // 🔍 Debug output
        // console.log(`=== ${ore.name.toUpperCase()} CONFIGURED FEATURE ===`)
        // console.log(JSON.stringify(configured, null, 2))
        // console.log(`=== ${ore.name.toUpperCase()} PLACED FEATURE ===`)
        // console.log(JSON.stringify(placed, null, 2))
        // console.log(`=== ${ore.name.toUpperCase()} BIOME MODIFIER ===`)
        // console.log(JSON.stringify(biomeModifier, null, 2))
        // console.log('---------------------------------------------')

        // Write to DataGen
        event.json(`dimension_expansion:worldgen/configured_feature/${prefix}${ore.name}.json`, configured)
        event.json(`dimension_expansion:worldgen/placed_feature/${prefix}${ore.name}.json`, placed)
        event.json(`dimension_expansion:neoforge/biome_modifier/dimension_expansion/${prefix}${ore.name}_${set}.json`, biomeModifier)
    })
}


ServerEvents.generateData('after_mods', event => {
    registerOres(event, deepBeneathOres, "deep_beneath_ores", "deep_beneath_")
})
