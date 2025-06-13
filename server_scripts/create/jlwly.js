ServerEvents.recipes(e => {
//下界岩粉碎
e.custom({
    "type": "create:crushing",
    "ingredients": [{"item": "beneath:cobblerack"}],
    "results": [
      {"item": "create:cinder_flour", "count": 1, "chance": 1},
      {"item": "create:cinder_flour", "count": 1, "chance": 0.25}
    ]
  })
  //TFC防腐木
  e.custom({
    "type": "create:mixing",
    "ingredients": [ {"tag": "tfc:lumber", "count": 8,},{"amount": 1000, "fluid": "immersiveengineering:creosote"}],
    "results": [
      {"item": "firmalife:treated_lumber",'count': 8}
    ]
  })
  //金胡萝卜兼容
    e.remove({ output: "minecraft:golden_carrot" })
    e.shaped("minecraft:golden_carrot",[
        "AAA",
        "ABA",
        "AAA"
    ], {
        A:"minecraft:gold_nugget",
        B:"tfc:food/carrot"
    });
    //腐烂蜘蛛眼兼容
    e.shaped("minecraft:fermented_spider_eye",[
        "ABC"
    ], {
        A:"beneath:food/portobello",
        B:"minecraft:spider_eye",
        C:"#tfc:sweetener"
    });
    //钻机平衡性调整
    e.remove({id: "createoreexcavation:drilling_machine" })
    e.custom({
        "type": "create:mechanical_crafting",
        "pattern": [
            "ABCBA",
            "BDEDB",
            "FGHGI",
            "BJJJB",
            "ABBBA"
        ],
        "key": {
            "A": {"item": "immersiveengineering:storage_steel"},
            "B": {"item": "create:brass_sheet"},
            "C": {"item": "create:copper_casing"},
            "D": {"item": "create:electron_tube"},
            "E": {"item": "create:spout"},
            "F": {"item": "create:brass_casing"},
            "G": {"item": "create:precision_mechanism"},
            "H": {"item": "create:mechanical_drill"},
            "I": {"item": "create:brass_tunnel"},
            "J": {"item": "create:sturdy_sheet"}
        },
        "result": {"item": "createoreexcavation:drilling_machine"},
        "group": "reateoreexcavation:drilling_machine"
    })
    //黄铜板剪切配方
    e.shapeless(Item.of('create:brass_sheet',2), [
        'tfc:metal/sheet/brass',
        'immersiveengineering:wirecutter'
    ]).damageIngredient({'immersiveengineering:wirecutter': 1})
    //铁锭与锻铁锭互换
    e.shapeless('minecraft:iron_ingot', ['tfc:metal/ingot/wrought_iron'])
    e.shapeless('tfc:metal/ingot/wrought_iron', ['minecraft:iron_ingot'])
    //甜菜炼糖浆
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {"item":'tfc:food/beet', "count": 5},
            {"amount": 1000, "fluid": "tfc:salt_water"}
        ],
        "results": [
            {"amount": 100, "fluid": "artisanal:molasses"},
        ],
        "heatRequirement": "heated"
    })
    e.custom({
      "type": "create:mixing",
      "ingredients": [
          {"item":'artisanal:food/cleaned_sugarcane', "count": 5},
          {"amount": 1000, "fluid": "water"},
          {"item":'tfc:jute_net', "count": 4}
      ],
      "results": [
          {"amount": 100, "fluid": "artisanal:molasses"},
          {"item":'tfc:dirty_jute_net', "count": 4}
      ],
      "heatRequirement": "heated"
  })
    //糖浆制糖
    e.custom({
      "type": "create:mixing",
      "ingredients": [
          {"amount": 100, "fluid": "artisanal:molasses"}
      ],
      "results": [
          {"item": "artisanal:non_perishable_sugar", "count": 5}
      ],
      "heatRequirement": "heated"
    })
    e.custom({
      "type": "create:mixing",
      "ingredients": [
          {"item": "artisanal:non_perishable_sugar", "count": 5},
          {"amount":1000, "fluid": "water"}
      ],
      "results": [
        {"amount": 100, "fluid": "artisanal:molasses"}
      ],
      "heatRequirement": "heated"
    })
    //清洗甘蔗
      e.custom({
        "type": "create:mixing",
        "ingredients": [
            {"item": "tfc:food/sugarcane", "count": 5},
            {"amount":1000, "fluid": "water"}
        ],
        "results": [
            {"item": 'artisanal:food/cleaned_sugarcane', "count": 5},
        ]
    })
    e.remove({id: "artisanal:vat/perishable_sugar"})+
    //清洗黄麻网
        e.custom({
          "type": "create:mixing",
          "ingredients": [
              {"amount":1000, "fluid":'artisanal:soapy_water'},
              {"item":'tfc:dirty_jute_net', "count": 4}
          ],
          "results": [
              {"item":'tfc:jute_net', "count": 4}
          ],
        })
    //肥皂水制作
        e.custom({
          "type": "create:mixing",
          "ingredients": [
            {"amount":10, "fluid":'tfc:lye'},
             {"amount":900, "fluid":'immersiveengineering:creosote'}
          ],
          "results": [
               {"amount":1000, "fluid":'artisanal:soap'}
          ],
          "heatRequirement": "heated"
        })
    //制作肥皂
    e.custom({
      "type": "create:compacting",
      "ingredients": [ {"amount":125, "fluid":'artisanal:soap'}
      ],
      "results": [
          {"item": 'artisanal:soap', "count": 1}
      ],
    })
    //肥皂水
    e.custom({
      "type": "create:mixing",
      "ingredients": [ {"item":'artisanal:soap', "count": 1},{"amount": 1000, "fluid": 'water'}
      ],
      "results": [
          {"amount":1000, "fluid": 'artisanal:soapy_water'}
      ],
    })
    //抽屉平衡
    e.remove({id: "functionalstorage:simple_compacting_drawer"})
    e.shaped("functionalstorage:simple_compacting_drawer",[
        "BBB",
        "BCD",
        "BAB"
    ], {
        A: "tfc:metal/sheet/wrought_iron",
        B: "#bookshelf:stones",
        C: "#functionalstorage:drawer", 
        D:"create:mechanical_press"
    })
    e.remove({id: "functionalstorage:compacting_drawer"})
    e.shaped("functionalstorage:compacting_drawer",[
        "BBB",
        "DCD",
        "BAB"
    ], {
        A: "tfc:metal/sheet/wrought_iron",
        B: "#bookshelf:stones",
        C: '#functionalstorage:drawer',
        D:"create:mechanical_press"
    })
    //硝石矿脉
    e.recipes.createoreexcavation.vein('{"text": "硝石矿脉"}', 'tfc:ore/saltpeter')
		.placement(256, 128, 64825185)
		.id("kubejstfc:ore/saltpeter_drill")
    e.recipes.createoreexcavation.drilling([
      Item.of('tfc:ore/saltpeter',2).withChance(0.25),
			Item.of('tfc:ore/saltpeter', 2),
    ], 'tfc:ore/saltpeter',500)
    .id("kubejstfc:ore/saltpeter_drilling")
    e.smithing( 'minecraft:netherite_leggings','minecraft:netherite_upgrade_smithing_template','tfc:metal/greaves/blue_steel', 'minecraft:netherite_ingot')
    e.remove({id: "create_new_age:cutting/copper_sheet"})
    e.remove({id: "create_new_age:cutting/overcharged_iron_sheet"})
    e.remove({id: "create_new_age:cutting/overcharged_golden_sheet"})
    e.remove({id: "create_new_age:diamond_wire"})
})