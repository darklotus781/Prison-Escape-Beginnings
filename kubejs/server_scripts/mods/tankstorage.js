ServerEvents.recipes(event => {
    event.shaped('tankstorage:tank_2', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:copper_block',
        B: 'tankstorage:tank_1'
    }).id('tankstorage:tank_2');

    event.shaped('tankstorage:tank_3', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:iron_block',
        B: 'tankstorage:tank_2'
    }).id('tankstorage:tank_3');

    event.shaped('tankstorage:tank_4', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:gold_block',
        B: 'tankstorage:tank_3'
    }).id('tankstorage:tank_4');

    event.shaped('tankstorage:tank_5', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:emerald_block',
        B: 'tankstorage:tank_4'
    }).id('tankstorage:tank_5');

    event.shaped('tankstorage:tank_6', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:diamond_block',
        B: 'tankstorage:tank_5'
    }).id('tankstorage:tank_6');

    event.shaped('tankstorage:tank_7', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:netherite_ingot',
        B: 'tankstorage:tank_6'
    }).id('tankstorage:tank_7');

    event.shaped('tankstorage:tank_link', [
        'ACA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:crying_obsidian',
        B: 'tankstorage:tank_1',
        C: 'minecraft:ender_eye'
    }).id('tankstorage:tank_link');
});