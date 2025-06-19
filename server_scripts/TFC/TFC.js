ServerEvents.recipes(e => {
      //谁改的原版工作台......
      e.remove({id:"minecraft:crafting_table"})
      //起落架配方适配
      e.replaceInput({output:"immersive_aircraft:improved_landing_gear"},"minecraft:coal","#minecraft:coals")
})