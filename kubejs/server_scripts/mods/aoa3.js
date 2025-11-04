const buffedAoa3Bosses = [
    'aoa3:king_bambambam',
    'aoa3:nethengeic_wither',
    'aoa3:smash',
    'aoa3:tyrosaur',
    'aoa3:king_charger',
    'aoa3:elite_king_bambambam',
    'aoa3:elite_nethengeic_wither',
    'aoa3:elite_smash',
    'aoa3:elite_tyrosaur'
]

const buffedAoa3Mobs = [
    'aoa3:ancient_golem',
    'aoa3:bonecreeper',
    'aoa3:dyrehorn',
    'aoa3:sabretooth',
    'aoa3:tree_spirit',
    'aoa3:wood_giant',
    'aoa3:charger',
    'aoa3:chomper',
    'aoa3:bush_baby',
    'aoa3:cyclops',
    'aoa3:embrake',
    'aoa3:ghost',
    'aoa3:goblin',
    'aoa3:ice_giant',
    'aoa3:infernal',
    'aoa3:yeti',
    'aoa3:bomb_carrier',
    'aoa3:deinotherium',
    'aoa3:scolopendis',
    'aoa3:sniffer',
    'aoa3:spinoledon',
    'aoa3:smilodon',
    'aoa3:attercopus',
    'aoa3:horndron',
    'aoa3:flamewalker',
    'aoa3:voidwalker',
    // Add more Precasia mobs here from https://adventofascension.fandom.com/wiki/Precasia
];

const blockedOverworldSpawns = [
    "aoa3:goblin",
    "aoa3:ghost",
    "aoa3:bomb_carrier",
    "aoa3:leafy_giant",
    "aoa3:infernal",
    "aoa3:dyrehorn",
    "aoa3:ice_giant",
    "aoa3:stone_giant",
    "aoa3:sasquatch",
    "aoa3:tree_spirit",
    "aoa3:wood_giant",
    "aoa3:charger",
    "aoa3:yeti",
    "aoa3:king_charger",
    "aoa3:little_bam",
    "aoa3:sand_giant",
    "aoa3:chomper",
    "aoa3:cyclops",
    "aoa3:embrake",
    "aoa3:bush_baby"
];

EntityEvents.spawned(event => {
    const {entity} = event
    if (!entity || !entity.type) return

    const id = entity.type.toString()
    if (buffedAoa3Bosses.includes(id)) {
        const healthAttr = entity.getAttribute('minecraft:generic.max_health')
        const damageAttr = entity.getAttribute('minecraft:generic.attack_damage')

        if (healthAttr) {
            const base = healthAttr.baseValue
            healthAttr.baseValue = base * 2.5 // Stronger buff for bosses
            entity.health = healthAttr.baseValue
        }

        if (damageAttr) {
            const base = damageAttr.baseValue
            damageAttr.baseValue = base * 2.5 // Heavier punch
        }

        console.log(`[BOSS BUFF] ${id} - HP: ${healthAttr?.baseValue}, DMG: ${damageAttr?.baseValue}`)
    }
})

EntityEvents.spawned(event => {
    const entity = event.entity;
    if (!entity || !entity.type) return;

    const id = entity.type.toString();
    if (!buffedAoa3Mobs.includes(id)) return;

    const healthAttr = entity.getAttribute('minecraft:generic.max_health');
    const damageAttr = entity.getAttribute('minecraft:generic.attack_damage');

    if (healthAttr) {
        healthAttr.baseValue *= 2.0;
        entity.health = healthAttr.baseValue;
    }

    if (damageAttr) {
        damageAttr.baseValue *= 2.2;
    }
});

// Disable AoA3 mob spawns in the Overworld
EntityEvents.spawned(event => {
    const mob = event.entity;
    const level = mob.level;

    if (!level || !level.dimension || !mob.type) return;

    // Only act in the Overworld
    if (level.dimension.toString() !== "minecraft:overworld") return;

    if (blockedOverworldSpawns.includes(mob.type.toString())) {
        mob.kill(); // or use .discard() in some KubeJS versions
        console.log(`[KubeJS] Blocked ${mob.type} from spawning in the Overworld`);
    }
});

BlockEvents.broken(event => {
    let block = event.block;

    if (block.id === 'aoa3:cocoon') {
        if (Math.random() < 0.25) {
            block.popItem('aoa3:bone_horn');
        }
    }
});
