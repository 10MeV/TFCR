ServerEvents.recipes(event => {
    event.shaped(Item.of("mbd2:bloomery_io",1), [
            'QLQ',
            'LML',
            'QLQ'
        ],
        {
            L: "tfc:metal/double_sheet/steel",
            Q: "minecraft:air",
            M: "tfc:fire_bricks"
        })
    })