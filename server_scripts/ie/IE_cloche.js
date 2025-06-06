//沃土加速,暂定0.8
const t=12800*0.8;
const s2='farmersdelight:rich_soil';
ServerEvents.recipes(e => {
  //小麦
  e.custom({
    "type": "immersiveengineering:cloche",
    "results": [{"item": "tfc:food/wheat","count":2},{"item": "tfc:seeds/wheat"}],
    "input": {"item": "tfc:seeds/wheat"},
    "soil": {"item": s2},
    "time": t,
    "render": {"type": "crop","block": "tfc:crop/wheat"}})
  //西红柿
  e.custom({
    "type": "immersiveengineering:cloche",
    "results": [{"item": "tfc:food/tomato",count:2},{"item": "tfc:seeds/tomato"}],
    "input": {"item": "tfc:seeds/tomato"},
    "soil": {"item": s2},
    "time": t,
    "render": {"type": "crop","block": "tfc:crop/tomato"}})
  //甘蔗
  e.custom({
    "type": "immersiveengineering:cloche",
    "results": [{"item": "tfc:food/sugarcane",count:2},{"item": "tfc:seeds/sugarcane"}],
    "input": {"item": "tfc:seeds/sugarcane"},
    "soil": {"item": s2},
    "time": t,
    "render": {"type": "crop","block": "tfc:crop/sugarcane"}})
  //西葫芦
  e.custom({
    "type": "immersiveengineering:cloche",
    "results": [{"item": "tfc:food/squash",count:2},{"item": "tfc:seeds/squash"}],
    "input": {"item": "tfc:seeds/squash"},
    "soil": {"item": s2},
    "time": t,
    "render": {"type": "crop","block": "tfc:crop/squash"}})
  //大豆
  e.custom({
    "type": "immersiveengineering:cloche",
    "results": [{"item": "tfc:food/soybean",count:2},{"item": "tfc:seeds/soybean"}],
    "input": {"item": "tfc:seeds/soybean"},
    "soil": {"item": s2},
    "time": t,
    "render": {"type": "crop","block": "tfc:crop/soybean"}})
  //黑麦
  e.custom({
    "type": "immersiveengineering:cloche",
    "results": [{"item": "tfc:food/rye",count:2},{"item": "tfc:seeds/rye"}],
    "input": {"item": "tfc:seeds/rye"},
    "soil": {"item": s2},
    "time": t,
    "render": {"type": "crop","block": "tfc:crop/rye"}})
  //大米
  e.custom({
    "type": "immersiveengineering:cloche",
    "results": [{"item": "tfc:food/rice",count:2},{"item": "tfc:seeds/rice"}],
    "input": {"item": "tfc:seeds/rice"},
    "soil": {"item": s2},
    "time": t,
    "render": {"type": "crop","block": "tfc:crop/rice"}})
  //南瓜
  e.custom({
    "type": "immersiveengineering:cloche",
    "results": [{"item": "tfc:pumpkin",count:2},{"item": "tfc:seeds/pumpkin"}],
    "input": {"item": "tfc:seeds/pumpkin"},
    "soil": {"item": s2},
    "time": t,
    "render": {"type": "crop","block": "tfc:crop/pumpkin"}})
  //马铃薯
  e.custom({
    "type": "immersiveengineering:cloche",
    "results": [{"item": "tfc:food/potato",count:2},{"item": "tfc:seeds/potato"}],
    "input": {"item": "tfc:seeds/potato"},
    "soil": {"item": s2},
    "time": t,
    "render": {"type": "crop","block": "tfc:crop/potato"}})
  //洋葱   
  e.custom({
    "type": "immersiveengineering:cloche",
    "results": [{"item": "tfc:food/onion",count:2},{"item": "tfc:seeds/onion"}],
    "input": {"item": "tfc:seeds/onion"},
    "soil": {"item": s2},
    "time": t,
    "render": {"type": "crop","block": "tfc:crop/onion"}})
  //燕麦  
  e.custom({
    "type": "immersiveengineering:cloche",
    "results": [{"item": "tfc:food/oat",count:2},{"item": "tfc:seeds/oat"}],
    "input": {"item": "tfc:seeds/oat"},
    "soil": {"item": s2},
    "time": t,
    "render": {"type": "crop","block": "tfc:crop/oat"}})
  //西瓜
  e.custom({
    "type": "immersiveengineering:cloche",
    "results": [{"item": "tfc:melon",count:2},{"item": "tfc:seeds/melon"}],
    "input": {"item": "tfc:seeds/melon"},
    "soil": {"item": s2},
    "time": t,
    "render": {"type": "crop","block": "tfc:crop/melon"}})
  //玉米
  e.custom({
    "type": "immersiveengineering:cloche",
    "results": [{"item": "tfc:food/maize",count:2},{"item": "tfc:seeds/maize"}],
    "input": {"item": "tfc:seeds/maize"},
    "soil": {"item": s2},
    "time": t,
    "render": {"type": "crop","block": "tfc:crop/maize"}})
  //黄麻
  e.custom({
    "type": "immersiveengineering:cloche",
    "results": [{"item": "tfc:jute",count:2},{"item": "tfc:seeds/jute"}],
    "input": {"item": "tfc:seeds/jute"},
    "soil": {"item": s2},
    "time": t,
    "render": {"type": "crop","block": "tfc:crop/jute"}})
  //绿豆  
  e.custom({
    "type": "immersiveengineering:cloche",
    "results": [{"item": "tfc:food/green_bean",count:2},{"item": "tfc:seeds/green_bean"}],
    "input": {"item": "tfc:seeds/green_bean"},
    "soil": {"item": s2},
    "time": t,
    "render": {"type": "crop","block": "tfc:crop/green_bean"}})
  //大蒜
  e.custom({
    "type": "immersiveengineering:cloche",
    "results": [{"item": "tfc:food/garlic",count:2},{"item": "tfc:seeds/garlic"}],
    "input": {"item": "tfc:seeds/garlic"},
    "soil": {"item": s2},
    "time": t,
    "render": {"type": "crop","block": "tfc:crop/garlic"}})
  //胡萝卜
  e.custom({
    "type": "immersiveengineering:cloche",
    "results": [{"item": "tfc:food/carrot",count:2},{"item": "tfc:seeds/carrot"}],
    "input": {"item": "tfc:seeds/carrot"},
    "soil": {"item": s2},
    "time": t,
    "render": {"type": "crop","block": "tfc:crop/carrot"}})
  //卷心菜 
  e.custom({
    "type": "immersiveengineering:cloche",
    "results": [{"item": "tfc:food/cabbage",count:2},{"item": "tfc:seeds/cabbage"}],
    "input": {"item": "tfc:seeds/cabbage"},
    "soil": {"item": s2},
    "time": t,
    "render": {"type": "crop","block": "tfc:crop/cabbage"}})
  //甜菜
  e.custom({
    "type": "immersiveengineering:cloche",
    "results": [{"item": "tfc:food/beet",count:2},{"item": "tfc:seeds/beet"}],
    "input": {"item": "tfc:seeds/beet"},
    "soil": {"item": s2},
    "time": t,
    "render": {"type": "crop","block": "tfc:crop/beet"}})
  //大麦  
  e.custom({
    "type": "immersiveengineering:cloche",
    "results": [{"item": "tfc:food/barley",count:2},{"item": "tfc:seeds/barley"}],
    "input": {"item": "tfc:seeds/barley"},
    "soil": {"item": s2},
    "time": t,
    "render": {"type": "crop","block": "tfc:crop/barley"}})  
})