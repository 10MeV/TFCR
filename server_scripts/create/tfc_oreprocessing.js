//定义烧结铝土矿砖温度
TFCEvents.data(event => {
    event.itemHeat('tfcr:roasted_brick/bauxite', 3, null, 1500)
})
//大煮机动适配
ServerEvents.recipes(e => {
    var ore=["bismuthinite","cassiterite","native_copper","garnierite","native_gold",
        "hematite","limonite","magnetite","malachite","native_silver","sphalerite","tetrahedrite"]
    var ingot=["bismuthinite","cassiterite","copper","garnierite","gold",
        "hematite","limonite","magnetite","malachite","native_silver","sphalerite","tetrahedrite"]
        for(let i in ore){
        //矿团变浆液
        e.recipes.create.mixing(Fluid.of("tfcoreprocessing:slurry_"+ore[i],800),[Fluid.water(800),"tfcorewashing:briquet_"+ore[i]])
        //矿块变浆液
        e.recipes.create.mixing(Fluid.of("tfcoreprocessing:slurry_"+ore[i],200),[Fluid.water(200),"tfcorewashing:pellet_"+ore[i]])
        //矿粉变浆液
        e.recipes.create.mixing(Fluid.of("tfcoreprocessing:slurry_"+ore[i],50),[Fluid.water(50),"tfc:powder/"+ore[i]])
        //浆液变精制矿粉
        e.recipes.create.mixing("tfcoreprocessing:refined/"+ore[i],Fluid.of("tfcoreprocessing:slurry_"+ore[i],50)).heated()
        //压缩粉烧结
        e.recipes.create.compacting("tfcoreprocessing:roasted_brick/"+ore[i],["tfcoreprocessing:compressed/"+ore[i],Fluid.water(200)]).heated()
        }
    //铝土矿补充
    e.recipes.create.compacting("tfcr:roasted_brick/bauxite","4x tfc_ie_addon:powder/bauxite").superheated()
    e.recipes.tfc.heating('tfcr:roasted_brick/bauxite', 1500).resultFluid(Fluid.of('tfc_ie_addon:metal/aluminum', 50))

    //ban开局大煮
        for(let i in ore){
        e.remove({id:'tfcoreprocessing:barrel/slurry/slurry_'+ore[i]})
        e.remove({id:'tfcoreprocessing:pot/slurry/roast_1_'+ore[i]})
        e.remove({id:'tfcoreprocessing:pot/slurry/roast_2_'+ore[i]})
        e.remove({id:'tfcoreprocessing:pot/slurry/roast_3_'+ore[i]})
        e.remove({id:'tfcoreprocessing:pot/slurry/roast_4_'+ore[i]})
        e.remove({id:'tfcoreprocessing:pot/slurry/roast_5_'+ore[i]})
        e.remove({id:'tfcoreprocessing:pot/slurry/slurry_'+ore[i]})
        }

    //电弧烧铅
    e.custom({
    "type": "immersiveengineering:arc_furnace",
    "results":[{"count": 2,"base_ingredient":{"item": "immersiveengineering:ingot_lead"}}],
    "additives": [],
    "input": {"count": 3,"base_ingredient":{"item":"tfc_ie_addon:ore/rich_galena"}},
    "time": 100,
    "energy": 25600
    })

    e.custom({
    "type": "immersiveengineering:arc_furnace",
    "results":[{"count": 2,"base_ingredient":{"item": "immersiveengineering:ingot_lead"}}],
    "additives": [],
    "input": {"count": 7,"base_ingredient":{"item":"tfc_ie_addon:ore/poor_galena"}},
    "time": 100,
    "energy": 25600
    })

    e.custom({
    "type": "immersiveengineering:arc_furnace",
    "results":[{"count": 1,"base_ingredient":{"item": "immersiveengineering:ingot_lead"}}],
    "additives": [],
    "input": {"count": 2,"base_ingredient":{"item":"tfc_ie_addon:ore/normal_galena"}},
    "time": 100,
    "energy": 25600
    })

    e.custom({
    "type": "immersiveengineering:arc_furnace",
    "results":[{"count": 1,"base_ingredient":{"item": "immersiveengineering:ingot_lead"}}],
    "additives": [],
    "input": {"count": 5,"base_ingredient":{"item":"tfc_ie_addon:ore/small_galena"}},
    "time": 100,
    "energy": 25600
    })


    //电弧自动黑红蓝钢
    e.custom({
    "type": "immersiveengineering:arc_furnace",
    "results":[{"count": 1,"base_ingredient":{"item":"tfc:metal/ingot/black_steel"}}],
    "additives": [{"count": 1,"base_ingredient":{"item":"tfc:metal/ingot/pig_iron"}}],
    "input": {"count": 1,"base_ingredient":{"item": "tfc:metal/ingot/weak_steel"}},
    "time": 100,
    "energy": 25600
    })

    e.custom({
    "type": "immersiveengineering:arc_furnace",
    "results":[{"count": 1,"base_ingredient":{"item":"tfc:metal/ingot/blue_steel"}}],
    "additives": [{"count": 1,"base_ingredient":{"item":"tfc:metal/ingot/black_steel"}}],
    "input":{"count": 1,"base_ingredient":{"item":"tfc:metal/ingot/weak_blue_steel"}},
    "time": 100,
    "energy": 25600
    })

    e.custom({
    "type": "immersiveengineering:arc_furnace",
    "results":[{"count": 1,"base_ingredient":{"item":"tfc:metal/ingot/red_steel"}}],
    "additives": [{"count": 1,"base_ingredient":{"item":"tfc:metal/ingot/black_steel"}}],
    "input":{"count": 1,"base_ingredient":{"item":"tfc:metal/ingot/weak_red_steel"}},
    "time": 100,
    "energy": 25600
    })


})
