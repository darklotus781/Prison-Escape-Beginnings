ServerEvents.recipes(event => {
    event.remove({ output: 'simplemagnets:basicmagnet' });

    // Basic Magnet
    event.shaped(
        Item.of('simplemagnets:basicmagnet'),
        [
            'AAD',
            'AC ',
            'AAB'
        ],
        {
            A: 'justdirethings:ferricore_ingot',
            C: 'minecraft:ender_pearl',
            B: 'actuallyadditions:empowered_restonia_crystal',
            D: 'actuallyadditions:empowered_palis_crystal'
        }
    );
});
