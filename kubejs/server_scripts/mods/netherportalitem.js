ServerEvents.recipes(event => {
    event.remove('netherportalitem:nether_portal_item');
    event.remove('netherportalitem:end_portal_item');

    event.shaped(Item.of('netherportalitem:nether_portal_item'), [
        'OOO',
        'OWO',
        'OOO'
    ], {
        O: Item.of('minecraft:obsidian'),
        W: Item.of('waystones:warp_stone')
    }).id('netherportalitem:nether_portal_item');

    event.shaped(Item.of('netherportalitem:end_portal_item'), [
        'ECS',
        'CWC',
        'SCE'
    ], {
        C: Item.of('minecraft:end_crystal'),
        E: Item.of('minecraft:ender_eye'),
        S: Item.of('exdeorum:crushed_end_stone'),
        W: Item.of('waystones:warp_stone')
    }).id('netherportalitem:end_portal_item');
});