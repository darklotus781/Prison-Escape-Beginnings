ItemEvents.rightClicked(event => {
  if (event.item.id === 'deeperdarker:heart_of_the_deep') {
    event.player.runCommandSilent(`execute in deeperdarker:otherside run tp @s 0 100 0`);
    event.player.potionEffects.add('minecraft:slow_falling', 200, 0); // 10 seconds
    event.player.tell("You feel the Heart pull you into the Otherside...");
    event.item.count--; // Remove if you don’t want to consume the item
  }
});
