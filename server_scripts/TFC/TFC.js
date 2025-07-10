ServerEvents.recipes(e => {
      //谁改的原版工作台......
      e.remove({id:"minecraft:crafting_table"})
      //起落架配方适配
      e.replaceInput({output:"immersive_aircraft:improved_landing_gear"},"minecraft:coal","#minecraft:coals")
      //风帆配方适配
      e.replaceInput({output:"immersive_aircraft:sail"},"minecraft:string","#forge:string")
      //newage铜线电路适配
      e.replaceInput({output:"create_new_age:copper_circuit"},"create_new_age:copper_wire",'immersiveengineering:wirecoil_copper')
      //移除诅咒疣猪皮套工作台合成
      e.remove({id:"cold_sweat:hoglin_headpiece"})
      e.remove({id:"cold_sweat:hoglin_tunic"})
      e.remove({id:"cold_sweat:hoglin_trousers"})
      e.remove({id:"cold_sweat:hoglin_hooves"})

})