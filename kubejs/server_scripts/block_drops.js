BlockEvents.broken(event => {
    const id = event.block.id;
    const { x, y, z } = event.block.pos;
    const posKey = `${x},${y},${z}`;
    const storage = event.server.persistentData;

    // Toggle this to false for testing
    const PERSISTENT_MODE = true;

    // SimplyLight Panel → Drops 1 Redstone and 3 Iron Nuggets
    if (id === 'simplylight:illuminant_panel_light_gray') {
        for (let i = 0; i < 1; i++) {
            event.server.runCommandSilent(`summon item ${x + 0.5} ${y + 0.5} ${z + 0.5} {Item:{id:"minecraft:redstone",Count:1b}}`);
        }
        for (let i = 0; i < 9; i++) {
            event.server.runCommandSilent(`summon item ${x + 0.5} ${y + 0.5} ${z + 0.5} {Item:{id:"minecraft:iron_nugget",Count:1b}}`);
        }
        event.server.runCommandSilent(`setblock ${x} ${y} ${z} minecraft:air`);
    }

    // Bookshelf → Drops FTB Quest Book + 1 Regular Book
    if (id === 'minecraft:bookshelf') {
        event.server.runCommandSilent(`summon item ${x + 0.5} ${y + 0.5} ${z + 0.5} {Item:{id:"ftbquests:book",Count:1b}}`);
        event.server.runCommandSilent(`summon item ${x + 0.5} ${y + 0.5} ${z + 0.5} {Item:{id:"minecraft:book",Count:1b}}`);
        event.server.runCommandSilent(`setblock ${x} ${y} ${z} minecraft:air`);
    }
});
