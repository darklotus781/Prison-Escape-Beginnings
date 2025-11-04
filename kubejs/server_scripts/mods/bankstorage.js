ServerEvents.recipes(event => {
    // Bank Link
    event.shaped('bankstorage:bank_link', [
        'ACA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:crying_obsidian',
        B: 'bankstorage:bank_1',
        C: 'minecraft:ender_eye'
    }).id('bankstorage:bank_link');
});