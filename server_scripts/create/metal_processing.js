ServerEvents.recipes(e => {

    //自动打钢
    e.recipes.create.compacting('kubejs:hot_high_carbon_steel','tfc:metal/ingot/pig_iron').superheated()
    e.recipes.create.sequenced_assembly(
      ['tfc:metal/ingot/steel'],'kubejs:hot_high_carbon_steel',
         [
          e.recipes.createDeploying('kubejs:hot_high_carbon_steel', ['kubejs:hot_high_carbon_steel', 'tfc:metal/hammer/steel']).keepHeldItem(),
          e.recipes.create.pressing('kubejs:hot_high_carbon_steel','kubejs:hot_high_carbon_steel'),
          e.recipes.createDeploying('kubejs:hot_high_carbon_steel', ['kubejs:hot_high_carbon_steel', 'tfc:metal/hammer/steel']).keepHeldItem()
         ]).transitionalItem('kubejs:hot_high_carbon_steel').loops(5)
         
    //自动打锻铁
    e.recipes.create.compacting('kubejs:hot_iron_bloom','tfc:raw_iron_bloom').heated()
    e.recipes.create.sequenced_assembly(
		['tfc:metal/ingot/wrought_iron'],'kubejs:hot_iron_bloom',
       [
        e.recipes.createDeploying('kubejs:hot_iron_bloom', ['kubejs:hot_iron_bloom', 'tfc:metal/hammer/wrought_iron']).keepHeldItem(),
        e.recipes.create.pressing('kubejs:hot_iron_bloom','kubejs:hot_iron_bloom'),
        e.recipes.createDeploying('kubejs:hot_iron_bloom', ['kubejs:hot_iron_bloom', 'tfc:metal/hammer/wrought_iron']).keepHeldItem()
       ]).transitionalItem('kubejs:hot_iron_bloom').loops(3)

    //下界合金制作
    e.custom({
    "type": "immersiveengineering:arc_furnace",
    "results":[{"count": 1,"base_ingredient":{"item":"minecraft:netherite_ingot"}}],
    "additives": [{"count": 8,"base_ingredient":{"item":"tfc:metal/ingot/blue_steel"}},{"count": 32,"base_ingredient":{"item":"minecraft:nether_wart"}}],
    "input": {"count": 8,"base_ingredient":{"item": "tfc:metal/ingot/red_steel"}},
    "time": 400,
    "energy": 102400
    })
})