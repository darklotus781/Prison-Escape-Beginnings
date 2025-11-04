ServerEvents.recipes(event => {
    event.shaped('enderio:vat', [
        'ISI',
        'CAC',
        'IFI'
    ], {
        I: 'enderio:pulsating_alloy_ingot',
        S: 'enderio:void_chassis',
        C: 'minecraft:cauldron',
        A: 'enderio:fluid_tank',
        F: 'minecraft:furnace'
    });
});
