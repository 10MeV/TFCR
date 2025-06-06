ServerEvents.recipes(e => {
    //注液生产石英
    e.recipes.create.filling('tfc_ie_addon:mineral/quartz_shard', [Fluid.of('minecraft:water',500), 'kubejs:crystal_seed_certus'])
    //合成石英种子
    e.shapeless('4x kubejs:crystal_seed_certus',['#minecraft:sand','#forge:gems/quartz'])
    //石英种子水中生长
    e.recipes.tfc.barrel_sealed(10000)
      .outputItem('tfc_ie_addon:mineral/quartz_shard')
      .inputItem('kubejs:crystal_seed_certus')
      .inputFluid(Fluid.of('minecraft:water',400))
    //TFC-IE石英转普通石英
    e.shapeless('minecraft:quartz','tfc_ie_addon:mineral/quartz_shard')
    //砧板拆IE石英块
    e.custom({
      "type": "farmersdelight:cutting",
      "ingredients": [{"item": 'tfc_ie_addon:mineral/quartz_block'}],
      "result": [{"count": 4,"item": 'tfc_ie_addon:mineral/quartz_shard'}],
      "tool": {"type": "farmersdelight:tool_action","action": "pickaxe_dig"}})
})