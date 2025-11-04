onEvent("recipes", (event) => {
    event.remove({ id: "powah:energizing/blazing_crystal" });
    event.remove({ id: "powah:energizing/blazing_crystal_2" });
  
    event
      .custom({
        type: "powah:energizing",
        ingredients: [
          { item: "minecraft:iron_block" },
          { item: "minecraft:gold_block" },
        ],
        energy: 90000,
        result: Item.of("2x powah:energized_steel_block"),
      })
      .id("newstonehollows:powah/energizing/energized_steel_block");
  
    event
      .custom({
        type: "powah:energizing",
        ingredients: [{ item: "silentgear:blaze_gold_block" }],
        energy: 900000,
        result: {
          item: "powah:blazing_crystal_block",
        },
      })
      .id("newstonehollows:powah/energizing/blaze_block");
  
    event
      .custom({
        type: "powah:energizing",
        ingredients: [{ item: "minecraft:diamond_block" }],
        energy: 2700000,
        result: {
          item: "powah:niotic_crystal_block",
        },
      })
      .id("newstonehollows:powah/energizing/niotic_block");
  
    event
      .custom({
        type: "powah:energizing",
        ingredients: [{ item: "minecraft:emerald_block" }],
        energy: 9000000,
        result: {
          item: "powah:spirited_crystal_block",
        },
      })
      .id("newstonehollows:powah/energizing/spirited_block");  

      event
        .custom({
          type: "powah:energizing",
          ingredients: [{ item: "silentgear:blaze_gold_ingot" }],
          energy: 900000,
          result: {
            item: "powah:crystal_blazing",
          },
        })
        .id("newstonehollows:powah/energizing/blaze_crystal");
  });
  