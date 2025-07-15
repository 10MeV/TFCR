StartupEvents.registry("block",event=>{
    event.create("kubejs:bloomery_io","basic")
    event.create("tfcr:laser_engraver_idle","basic").hardness(0.5)
    event.create("tfcr:laser_engraver_work","basic")
})