ItemEvents.modification(event => {
    event.modify('minecraft:wooden_axe', item => {
        item.maxDamage = 25;
        console.log('Set wooden axe durability to 25 at startup!');
    });
});
