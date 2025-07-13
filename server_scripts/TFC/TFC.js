ServerEvents.recipes(e => {
      //谁改的原版工作台......
      e.remove({id:"minecraft:crafting_table"})
      //起落架配方适配
      e.replaceInput({output:"immersive_aircraft:improved_landing_gear"},"minecraft:coal","#minecraft:coals")
      //风帆配方适配
      e.replaceInput({output:"immersive_aircraft:sail"},"minecraft:string","#forge:string")
      //newage铜线电路适配
      e.replaceInput({output:"create_new_age:copper_circuit"},"create_new_age:copper_wire",'immersiveengineering:wirecoil_copper')
      //脉冲计时器紫水晶
      e.replaceInput({output:'create:pulse_timer'},'minecraft:amethyst_shard','tfc:gem/amethyst')
      //移除诅咒疣猪皮套工作台合成
      e.remove({id:"cold_sweat:hoglin_headpiece"})
      e.remove({id:"cold_sweat:hoglin_tunic"})
      e.remove({id:"cold_sweat:hoglin_trousers"})
      e.remove({id:"cold_sweat:hoglin_hooves"})
      //移除大锤开掘铲模具
      e.remove({id:'tfc_hammer_time:clay_knapping/sledgehammer_head_mold'})
      e.remove({id:'tfc_hammer_time:heating/ceramic/sledgehammer_mold'})
      e.remove({id:'tfc_hammer_time:clay_knapping/excavator_head_mold'})
      e.remove({id:'tfc_hammer_time:heating/ceramic/excavator_mold'})

      //自动纺织
      e.recipes.create.mixing('8x tfc:wool_yarn','tfc:wool')
      e.recipes.create.mixing('8x firmalife:pineapple_yarn','firmalife:pineapple_fiber')
      e.recipes.create.mixing('textile:cotton_string','3x textile:cotton_ball')


})