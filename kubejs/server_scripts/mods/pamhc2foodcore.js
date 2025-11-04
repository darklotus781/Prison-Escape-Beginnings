ServerEvents.recipes(event => {
    event.remove({output: 'pamhc2foodcore:freshwateritem'});

    event.shapeless('pamhc2foodcore:freshwateritem', [
        'mysticalagriculture:water_essence'
    ]);
});
