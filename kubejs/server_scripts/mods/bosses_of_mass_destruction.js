const bomdBosses = [
  'bosses_of_mass_destruction:obsidilith',
  'bosses_of_mass_destruction:gauntlet'
]

EntityEvents.spawned(event => {
  const { entity } = event
  if (!entity || !entity.type) return

  const id = entity.type.toString()
  if (bomdBosses.includes(id)) {
    const healthAttr = entity.getAttribute('minecraft:generic.max_health')
    const damageAttr = entity.getAttribute('minecraft:generic.attack_damage')

    if (healthAttr) {
      const base = healthAttr.baseValue
      healthAttr.baseValue = base * 2.5
      entity.health = healthAttr.baseValue
    }

    if (damageAttr) {
      const base = damageAttr.baseValue
      damageAttr.baseValue = base * 2.5
    }

    console.log(`[BOMD BUFF] ${id} - HP: ${healthAttr?.baseValue}, DMG: ${damageAttr?.baseValue}`)
  }
});
