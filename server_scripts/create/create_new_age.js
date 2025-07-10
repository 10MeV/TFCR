ServerEvents.recipes(e => {
    //使用群峦钻石
    e.custom({
        "type": "create_new_age:energising",
        "energy_needed": 10000,
        "ingredients": [{"item": 'tfc:gem/diamond'}],
        "results": [{"item": "create_new_age:overcharged_diamond"}]})
    //充电铁锭
    e.custom({
      "type": "create_new_age:energising",
      "energy_needed": 1000,
      "ingredients": [{"item": 'tfc:metal/ingot/wrought_iron'}],
      "results": [{"item": "create_new_age:overcharged_iron"}]})
    //充电金锭
    e.custom({
      "type": "create_new_age:energising",
      "energy_needed": 2000,
      "ingredients": [{"item": 'tfc:metal/ingot/gold'}],
      "results": [{"item": "create_new_age:overcharged_gold"}]})    
    //用铁块充电得磁铁块(中后期用)
    e.custom({
        "type": "create_new_age:energising",
        "energy_needed": 5000,
        "ingredients": [
          {
            "item": 'minecraft:iron_block'
          }
        ],
        "results": [
          {
            "item": 'create_new_age:magnetite_block',
            'count':9
          }
        ]
    })
    //磁铁矿块直接合成(前期想发电用)
    e.shapeless('create_new_age:magnetite_block','9x tfcorewashing:pellet_magnetite')
    //碳刷用木炭
    e.custom({
        "type": "minecraft:crafting_shaped",
        "category": "building",
        "key": {
          "c": {"item": "minecraft:charcoal"},
          "a": {"item": "create:andesite_alloy"},
          "s": {"item": "create:shaft"}},
        "pattern": [
          "aaa",
          "csc",
          "aaa"],
        "result": {
          "count": 1,
          "item": "create_new_age:carbon_brushes"},
        "show_notification": true
    })
    //移除接线柱配方
    //e.remove({output:'create_new_age:electrical_connector'})
})