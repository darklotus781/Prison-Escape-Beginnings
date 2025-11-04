ServerEvents.recipes(event => {
    event.remove({output: 'sophisticatedstorage:copper_chest'});
    event.remove({output: 'sophisticatedstorage:iron_chest'});
    event.remove({output: 'sophisticatedstorage:gold_chest'});
    event.remove({output: 'sophisticatedstorage:diamond_chest'});
    event.remove({output: 'sophisticatedstorage:netherite_chest'});
    event.remove({output: 'sophisticatedstorage:basic_to_copper_tier_upgrade'});
    event.remove({output: 'sophisticatedstorage:basic_to_iron_tier_upgrade'});
    event.remove({output: 'sophisticatedstorage:basic_to_gold_tier_upgrade'});
    event.remove({output: 'sophisticatedstorage:basic_to_diamond_tier_upgrade'});
    event.remove({output: 'sophisticatedstorage:basic_to_netherite_tier_upgrade'});
    event.remove({output: 'sophisticatedstorage:copper_to_iron_tier_upgrade'});
    event.remove({output: 'sophisticatedstorage:iron_to_gold_tier_upgrade'});
    event.remove({output: 'sophisticatedstorage:gold_to_diamond_tier_upgrade'});
    event.remove({output: 'sophisticatedstorage:diamond_to_netherite_tier_upgrade'});
    event.remove({output: 'sophisticatedstorage:stack_upgrade_omega_tier'});


    // Storage Crafting Upgrade
    event.shaped('sophisticatedstorage:crafting_upgrade', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: 'minecraft:crafting_table',
        B: 'minecraft:iron_ingot',
        C: 'sophisticatedstorage:upgrade_base',
        D: 'minecraft:chest'
    }).id('sophisticatedstorage:crafting_upgrade');

    // Copper Upgrade
    event.shaped('sophisticatedstorage:basic_to_copper_tier_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'securitycraft:reinforced_oak_planks',
        B: 'minecraft:copper_block',
        C: 'sophisticatedstorage:upgrade_base'
    });

    // Iron Upgrade
    event.shaped('sophisticatedstorage:basic_to_iron_tier_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'securitycraft:reinforced_oak_planks',
        B: 'minecraft:iron_block',
        C: 'sophisticatedstorage:upgrade_base'
    });

    // Gold Upgrade
    event.shaped('sophisticatedstorage:basic_to_gold_tier_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'securitycraft:reinforced_oak_planks',
        B: 'minecraft:gold_block',
        C: 'sophisticatedstorage:upgrade_base'
    });

    // Diamond Upgrade
    event.shaped('sophisticatedstorage:basic_to_diamond_tier_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'securitycraft:reinforced_oak_planks',
        B: 'minecraft:diamond_block',
        C: 'sophisticatedstorage:upgrade_base'
    });

    // Netherite Upgrade
    event.shaped('sophisticatedstorage:basic_to_netherite_tier_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'securitycraft:reinforced_oak_planks',
        B: 'minecraft:netherite_block',
        C: 'sophisticatedstorage:upgrade_base'
    });

    // Copper → Iron (cheaper: no full iron blocks)
    event.shaped('sophisticatedstorage:copper_to_iron_tier_upgrade', [
        ' I ',
        'RCR',
        ' I '
    ], {
        I: 'minecraft:iron_ingot',
        R: 'securitycraft:reinforced_oak_planks',
        C: 'sophisticatedstorage:basic_to_copper_tier_upgrade'
    });

    // Iron → Gold
    event.shaped('sophisticatedstorage:iron_to_gold_tier_upgrade', [
        ' G ',
        'RCR',
        ' G '
    ], {
        G: 'minecraft:gold_ingot',
        R: 'securitycraft:reinforced_oak_planks',
        C: 'sophisticatedstorage:basic_to_iron_tier_upgrade'
    });

    // Gold → Diamond (downgraded cost to diamond items)
    event.shaped('sophisticatedstorage:gold_to_diamond_tier_upgrade', [
        ' D ',
        'RCR',
        ' D '
    ], {
        D: 'minecraft:diamond',
        R: 'securitycraft:reinforced_oak_planks',
        C: 'sophisticatedstorage:basic_to_gold_tier_upgrade'
    });

    // Diamond → Netherite (cheaper: single ingots instead of blocks)
    event.shaped('sophisticatedstorage:diamond_to_netherite_tier_upgrade', [
        ' N ',
        'RCR',
        ' N '
    ], {
        N: 'minecraft:netherite_ingot',
        R: 'securitycraft:reinforced_oak_planks',
        C: 'sophisticatedstorage:basic_to_diamond_tier_upgrade'
    });

    event.shaped('sophisticatedstorage:stack_upgrade_omega_tier', [
        'NNN',
        'NSN',
        'NEN'
    ], {
        N: 'minecraft:netherite_block',
        S: 'sophisticatedbackpacks:stack_upgrade_tier_4',
        E: 'extendedcrafting:enhanced_ender_ingot'
    }).id('custom:stack_upgrade_omega_tier');
});