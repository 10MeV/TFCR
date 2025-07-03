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
  e.remove({output:'minecraft:black_dye',input:'minecraft:charcoal'})

  //焦炭粉
  e.recipes.create.milling('6x tfcoreprocessing:kindle/coke_dust','immersiveengineering:coal_coke')

  //胶水制作
  e.recipes.create.mixing('tfc:glue',[Fluid.of('tfc:limewater',500),'minecraft:bone_meal']).heated()
  //砂浆制作
  e.recipes.create.mixing('64x tfc:mortar',[Fluid.of('tfc:limewater',400),'4x #forge:sand'])
  //石灰水
  e.recipes.create.mixing([Fluid.of('tfc:limewater',500)],[Fluid.water(500),"tfc:powder/lime"])
  //生石灰烤制
  e.recipes.create.mixing('4x tfc:powder/lime','4x tfc:powder/flux').heated()

  //禁止刷皮革
  e.remove([{id:'create:milling/saddle'},{id:'create:crushing/leather_horse_armor'},{id:"farmersdelight:cutting/leather_horse_armor"}])
  //树木肥料珊瑚用标签
  e.shapeless('2x create:tree_fertilizer',['2x #minecraft:small_flowers','minecraft:bone_meal','#forge:coral'])
  e.replaceInput({id:'create:crafting/kinetics/super_glue'},'minecraft:slime_ball','tfc:glue')//强力胶
  e.replaceInput({id:'create:crafting/materials/sand_paper'},'minecraft:sand','#forge:sand')//砂纸
  //用TFC面团制作粘液球
  e.shapeless('minecraft:slime_ball',["#tfc:foods/dough","minecraft:lime_dye"])
  //粘液矿磨碎
  e.recipes.create.milling('minecraft:slime_ball','beneath:raw_slime')
  //钾石岩和硝石粉碎
  e.recipes.create.milling('4x tfc:powder/saltpeter','tfc:ore/saltpeter')
  e.recipes.create.milling('4x tfc:powder/sylvite','tfc:ore/sylvite')

  //麦机动磨粉
  e.recipes.create.milling(["tfc:food/barley_flour"],{"type": "tfc:not_rotten","ingredient": {"item": "tfc:food/barley_grain"}})
  e.recipes.create.milling(["tfc:food/oat_flour"],{"type": "tfc:not_rotten","ingredient": {"item": "tfc:food/oat_grain"}})
  e.recipes.create.milling(["tfc:food/rye_flour"],{"type": "tfc:not_rotten","ingredient": {"item": "tfc:food/rye_grain"}})
  e.recipes.create.milling(["tfc:food/wheat_flour"],{"type": "tfc:not_rotten","ingredient": {"item": "tfc:food/wheat_grain"}})
  e.recipes.create.milling(["tfc:food/maize_flour"],{"type": "tfc:not_rotten","ingredient": {"item": "tfc:food/maize_grain"}})
  e.recipes.create.milling(["tfc:food/rice_flour"],{"type": "tfc:not_rotten","ingredient": {"item": "tfc:food/rice_grain"}})
  e.recipes.create.milling(["firmalife:food/masa_flour"],{"type": "tfc:not_rotten","ingredient": {"item": "firmalife:food/nixtamal"}})

  //砂纸
  e.shapeless('create:sand_paper',['tfc:wool_cloth','#forge:sand'])

  //造纸
   e.recipes.create.sequenced_assembly(
		['2x minecraft:paper'],'create:cardboard',
       [
        e.recipes.createDeploying('create:cardboard', ['create:cardboard','minecraft:white_dye']),
        e.recipes.create.pressing('create:cardboard','create:cardboard'),
       ]).transitionalItem('create:cardboard').loops(1)

  //空烈焰人燃烧室
  e.recipes.tfc.anvil('create:empty_blaze_burner', 'tfc:metal/double_ingot/wrought_iron', ['hit_not_last', 'bend_any','bend_any']).tier(3)
  //烈焰蛋糕调整
  e.replaceInput({output:'create:blaze_cake_base'},"minecraft:egg","#forge:dough")

  //蓝钢罐头制造
  e.recipes.create.compacting('2x tfcr:blue_steelcan1','tfc:metal/sheet/blue_steel').superheated()

  //奶粉机动适配
  e.recipes.create.mixing("artisanal:milk_flakes",Fluid.of("minecraft:milk",200)).heated()
  e.recipes.create.milling("2x artisanal:powdered_milk","artisanal:milk_flakes")
  e.recipes.create.mixing("artisanal:goat_milk_flakes",Fluid.of("firmalife:goat_milk",200)).heated()
  e.recipes.create.milling("2x artisanal:powdered_goat_milk","artisanal:goat_milk_flakes")
  e.recipes.create.mixing("artisanal:yak_milk_flakes",Fluid.of("firmalife:yak_milk",200)).heated()
  e.recipes.create.milling("2x artisanal:powdered_yak_milk","artisanal:yak_milk_flakes")

  //加热得燃烧室
  e.custom({
        "type": "tfc:heating",
        "ingredient": {"item": 'create:empty_blaze_burner'},
        "result_item": {"item": 'create:blaze_burner'},
        "temperature": 1540
      })

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
  //制作原版箱子
  e.shaped(Item.of("minecraft:chest",7), [
            'QLQ',
            'QQQ',
            'QLQ'
        ],
        {
            L: 'create:iron_sheet',
            Q: "#forge:chests",
        })

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

TFCEvents.data(event => {
  //空烈焰人燃烧室
  event.itemHeat('create:empty_blaze_burner', 0.7, null,null)
  event.itemHeat('kubejs:rubber', 1, null,null)
})
