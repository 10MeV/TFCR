//定义烧结铝土矿砖温度
TFCEvents.data(event => {
    event.itemHeat('tfcr:roasted_brick/bauxite', 3, null, 1500)
})
//大煮机动适配
ServerEvents.recipes(e => {
    var ore=["bismuthinite","cassiterite","native_copper","garnierite","native_gold",
        "hematite","limonite","magnetite","malachite","native_silver","sphalerite","tetrahedrite"]
        for(let i in ore){
        //矿粉变浆液
        e.recipes.create.mixing(Fluid.of("tfcoreprocessing:slurry_"+ore[i],250),[Fluid.water(250),"tfc:powder/"+ore[i]])
        //浆液变精制矿粉
        e.recipes.create.mixing("tfcoreprocessing:refined/"+ore[i],Fluid.of("tfcoreprocessing:slurry_"+ore[i],250)).heated()
        //压缩粉烧结
        e.recipes.create.compacting("tfcoreprocessing:roasted_brick/"+ore[i],["tfcoreprocessing:compressed/"+ore[i],Fluid.water(100)]).heated()
        }
    //铝土矿补充
    e.recipes.create.compacting("tfcr:roasted_brick/bauxite","4x tfc_ie_addon:powder/bauxite").superheated()
    e.recipes.tfc.heating('tfcr:roasted_brick/bauxite', 1500).resultFluid(Fluid.of('tfc_ie_addon:metal/aluminum', 50))


})
