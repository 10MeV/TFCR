ServerEvents.recipes(e => {
  //锯末生产
  e.recipes.create.milling("tfcoreprocessing:kindle/sawdust","#tfc:lumber")
  e.recipes.create.milling("tfcoreprocessing:kindle/sawdust",'tfc:wattle_sticks')
  e.recipes.create.milling("2x tfcoreprocessing:kindle/sawdust","minecraft:hay_block")
  e.recipes.create.milling("tfcoreprocessing:kindle/sawdust",'tfc:thatch')
  e.recipes.create.milling("2x tfcoreprocessing:kindle/sawdust",'tfc:stick_bundle')
  e.recipes.create.milling("2x tfcoreprocessing:kindle/sawdust","#minecraft:leaves")

  //棕榈与竹子燃料
  e.recipes.create.milling("8x tfcoreprocessing:kindle/palm_fiber","#tfc:palm_logs")
  e.recipes.create.milling("tfcoreprocessing:kindle/bamboo_fiber",'minecraft:bamboo')
  
  //木炭粉与煤粉
  e.recipes.create.milling('4x tfc:powder/charcoal',"#forge:charcoal")
  e.recipes.create.milling('6x tfcoreprocessing:kindle/coal_dust','tfc:ore/bituminous_coal')
  e.recipes.create.milling('4x tfcoreprocessing:kindle/coal_dust','tfc:ore/lignite')

  //焦炭粉
  e.recipes.create.milling('6x tfcoreprocessing:kindle/coke_dust','immersiveengineering:coal_coke')

  //胶水制作
  e.recipes.create.mixing('tfc:glue',[Fluid.of('tfc:limewater',500),'minecraft:bone_meal']).heated()

  //禁止刷皮革
  e.remove([{id:'create:milling/saddle'},{id:'create:crushing/leather_horse_armor'},{id:"farmersdelight:cutting/leather_horse_armor"}])
  //树木肥料珊瑚用标签
  e.shapeless('2x create:tree_fertilizer',['2x #minecraft:small_flowers','minecraft:bone_meal','#forge:coral'])
  e.replaceInput({id:'create:crafting/kinetics/super_glue'},'minecraft:slime_ball','tfc:glue')//强力胶
  e.replaceInput({id:'create:crafting/materials/sand_paper'},'minecraft:sand','#forge:sand')//砂纸
  //用TFC面团制作粘液球
  e.shapeless('minecraft:slime_ball',["#tfc:foods/dough","minecraft:lime_dye"])

  //麦机动磨粉
  e.recipes.create.milling(["tfc:food/barley_flour",Item.of("tfc:food/barley_flour").withChance(0.2)],{"type": "tfc:not_rotten","ingredient": {"item": "tfc:food/barley_grain"}})
  e.recipes.create.milling(["tfc:food/oat_flour",Item.of("tfc:food/oat_flour").withChance(0.2)],{"type": "tfc:not_rotten","ingredient": {"item": "tfc:food/oat_grain"}})
  e.recipes.create.milling(["tfc:food/rye_flour",Item.of("tfc:food/rye_flour").withChance(0.2)],{"type": "tfc:not_rotten","ingredient": {"item": "tfc:food/rye_grain"}})
  e.recipes.create.milling(["tfc:food/wheat_flour",Item.of("tfc:food/wheat_flour").withChance(0.2)],{"type": "tfc:not_rotten","ingredient": {"item": "tfc:food/wheat_grain"}})

  //空烈焰人燃烧室
  e.recipes.tfc.anvil('create:empty_blaze_burner', 'tfc:metal/double_ingot/wrought_iron', ['hit_not_last', 'bend_any','bend_any']).tier(3)

  //蓝钢罐头制造
  e.recipes.create.compacting('2x tfcr:blue_steelcan1','tfc:metal/sheet/blue_steel').superheated()

  //奶粉机动适配
  e.recipes.create.mixing("artisanal:milk_flakes",Fluid.of("minecraft:milk",200)).heated()
  e.recipes.create.milling("2x artisanal:powdered_milk","artisanal:milk_flakes")
  e.recipes.create.mixing("artisanal:goat_milk_flakes",Fluid.of("firmalife:goat_milk",200)).heated()
  e.recipes.create.milling("2x artisanal:powdered_goat_milk","artisanal:goat_milk_flakes")
  e.recipes.create.mixing("artisanal:yak_milk_flakes",Fluid.of("firmalife:yak_milk",200)).heated()
  e.recipes.create.milling("2x artisanal:powdered_yak_milk","artisanal:yak_milk_flakes")

  
  //海带
  e.shaped("3x create:belt_connector",
    ['AAA',
     'ABA',
     'AAA'],
    {A:"#forge:food/dried_kelp",
     B:"tfc:glue"})
  //替换海带为标签
  e.replaceInput({},"minecraft:dried_kelp","#forge:food/dried_kelp")
  //蒸汽机、保险库原版木桶换储物木桶
  e.replaceInput({id:"create:crafting/kinetics/item_vault"},'minecraft:barrel','#tfc:barrels')
  e.replaceInput({id:"create:crafting/kinetics/fluid_tank"},'minecraft:barrel','#tfc:barrels')
  //洗沙砾出铁矿而不是粒
  e.remove({id:"create:splashing/gravel"})
  e.custom({
    "type": "create:splashing",
    "ingredients": [{"item": "#forge:gravel"}],
    "results": [
      {"chance": 0.25,"item": "minecraft:flint"},
      {"chance": 0.125,"item": 'tfc:ore/small_limonite'}]
  })
})
