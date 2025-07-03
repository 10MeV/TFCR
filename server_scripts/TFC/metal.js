ServerEvents.recipes(e => {
    //替换铜、金、钻石、石英为标签
    e.replaceInput({not:[{id:"tfc:welding/cast_iron_double_ingot"},{id:"tfc:anvil/cast_iron_rod"},{id:"vintageimprovements:pressing/cast_iron_ingot"}]},'minecraft:iron_ingot',"tfc:metal/ingot/wrought_iron")
    e.replaceInput({},'minecraft:gold_ingot','#forge:ingots/gold')
    e.replaceInput({},'minecraft:copper_ingot','#forge:ingots/copper')
    e.replaceInput({},'minecraft:diamond','#forge:gems/diamond')
    e.replaceInput({},'minecraft:quartz','#forge:gems/quartz')
    //有群峦特色配方却没有删原版配方的
    e.remove({id:"minecraft:observer"})//侦测器
    e.remove({id:"minecraft:comparator"})//红石比较器
    e.remove({id:"minecraft:daylight_detector"})//阳光探测器
    e.remove({id:'minecraft:minecart'})//矿车
    e.remove({id:'minecraft:piston'})//活塞
    e.remove({id:"minecraft:cauldron"})//炼药锅
    //制作铁砧
    e.shapeless('minecraft:anvil','tfc:metal/anvil/wrought_iron')
    //制作羊毛块
    e.custom({
    "__comment__": "This file was automatically created by mcresources",
    "type": "advancedtfctech:power_loom",
    "result": {"item": "minecraft:white_wool","count": 32},
    "secondaries": [{"output": {"item": "advancedtfctech:pirn"}}],
    "inputs": [{"base_ingredient": {"item": "tfc:wool_cloth"},"count": 3},{"item": "advancedtfctech:wool_winded_pirn"}],
    "secondary_input": {"base_ingredient": {"item": "tfc:wool_yarn"},"count": 16},
    "in_progress_texture": "advancedtfctech:block/multiblock/power_loom/wool",
    "time": 250,
    "energy": 20000
})
})