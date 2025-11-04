ServerEvents.recipes(event => {
    // Backpack Crafting Upgrade
    event.shaped('sophisticatedbackpacks:crafting_upgrade', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: 'minecraft:crafting_table',
        B: 'minecraft:iron_ingot',
        C: 'sophisticatedbackpacks:upgrade_base',
        D: 'minecraft:chest'
    }).id('sophisticatedbackpacks:crafting_upgrade');
});