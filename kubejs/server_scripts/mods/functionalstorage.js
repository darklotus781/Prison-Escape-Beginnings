ServerEvents.recipes(event => {
    let compactify = (topItem, bottomItem) => {
        event.custom({
            "type": "functionalstorage:custom_compacting",
            "higher_input": topItem.toJson(),
            "lower_input": bottomItem.toJson()
        })
    }
    compactify(Item.of('minecraft:clay'), Item.of('minecraft:clay_ball', 4));
    compactify(Item.of('minecraft:cobblestone'), Item.of('exdeorum:stone_pebble', 4));
    compactify(Item.of('minecraft:diorite'), Item.of('exdeorum:diorite_pebble', 4));
    compactify(Item.of('minecraft:granite'), Item.of('exdeorum:granite_pebble', 4));
    compactify(Item.of('minecraft:andesite'), Item.of('exdeorum:andesite_pebble', 4));
    compactify(Item.of('minecraft:cobbled_deepslate'), Item.of('exdeorum:deepslate_pebble', 4));
    compactify(Item.of('minecraft:tuff'), Item.of('exdeorum:tuff_pebble', 4));
    compactify(Item.of('minecraft:calcite'), Item.of('exdeorum:calcite_pebble', 4));
    compactify(Item.of('minecraft:basalt'), Item.of('exdeorum:basalt_pebble', 4));
    compactify(Item.of('minecraft:bamboo_block'), Item.of('minecraft:bamboo', 9)); // This is just for easier storage :D
    compactify(Item.of('immersiveengineering:ingot_lead'), Item.of('alltheores:lead_nugget', 9));
    compactify(Item.of('immersiveengineering:ingot_steel'), Item.of('alltheores:steel_nugget', 9));
    compactify(Item.of('immersiveengineering:ingot_aluminum'), Item.of('alltheores:aluminum_nugget', 9));
    compactify(Item.of('immersiveengineering:ingot_nickel'), Item.of('alltheores:nickel_nugget', 9));
    compactify(Item.of('immersiveengineering:ingot_silver'), Item.of('alltheores:silver_nugget', 9));
    compactify(Item.of('alltheores:zinc_ingot'), Item.of('alltheores:zinc_nugget', 9));
    compactify(Item.of('mekanism:ingot_osmium'), Item.of('alltheores:osmium_nugget', 9));
    compactify(Item.of('mekanism:ingot_tin'), Item.of('alltheores:tin_nugget', 9));
    compactify(Item.of('mekanism:ingot_bronze'), Item.of('alltheores:bronze_nugget', 9));
    compactify(Item.of('minecraft:copper_ingot'), Item.of('alltheores:copper_nugget', 9));
});