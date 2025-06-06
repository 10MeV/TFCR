ServerEvents.recipes(e => {
//海带烧干
e.custom({
    "type": "tfc:heating",
    "ingredient": {"tag": 'tfc:plants/kelp'},
    "result_item": {"item": "tfc:food/dried_kelp"},
    "temperature": 200
  })
  e.custom({
    "type": "tfc:heating",
    "ingredient": {"item": 'tfc:plant/laminaria'},
    "result_item": {"item": "tfc:food/dried_kelp"},
    "temperature": 200
  })
  })
  TFCEvents.data(event => {
    event.itemHeat('tfc:plant/leafy_kelp', 1, null,null)
    event.itemHeat('tfc:plant/winged_kelp', 1, null,null)
    event.itemHeat('tfc:plant/laminaria', 1, null,null)
  })