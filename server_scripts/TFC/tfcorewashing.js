ServerEvents.recipes(e => {
    e.remove({mod:"tfcorewashing"})
    //参数分别代表 前缀（富集度）后缀  粗块  脏粉  粉末  小团    大团   锭
    function main(ore1,        ore2,rocky,dirty,dust,pellet,briquet,ingot)
    {
        //四种富集度的矿
        content=["small","poor","normal","rich"]
        num=[2,3,5,7]
        for(let i in content){
            //锤砸碎成粗块
            e.custom({
                "type": "tfc:extra_products_shapeless_crafting",
                "extra_products": [],
                "recipe": {"type": "tfc:damage_inputs_shapeless_crafting",
                  "recipe": {
                    "type": "minecraft:crafting_shapeless",
                    "ingredients": [{"item": ore1+content[i]+ore2},{"tag": "forge:tools/hammers"}],
                    "result": {"item": rocky,"count": num[i]}}}
            })
            //辊压机砸成粗块
            e.recipes.create.pressing(num[j]+"x "+rocky,ore1+content[j]+ore2)
            //粉碎机直接出脏粉末
            e.custom({"type":"immersiveengineering:crusher",
                "energy":1600,
                "input":{"item":ore1+content[i]+ore2},
                "result":{"item":rocky,"count":num[i]},
                "secondaries":[]})
        }
        //粗块磨成脏粉末
        e.recipes.create.milling([rocky,Item.of(dirty).withChance(0.5)],dirty)
        e.recipes.tfc.quern(dirty,rocky)
        //脏粉洗净，暂无额外副产物
        e.recipes.create.splashing(dust,dirty)
        //粉末合成小团
        e.shapeless(pellet,"4x "+dust)
        //机动常规煮矿
        e.recipes.create.mixing(briquet,[pellet,Fluid.of('minecraft:water', 500)]).heated()
        //电弧炉出锭
        e.custom({
            "type":"immersiveengineering:arc_furnace","additives":[],"energy":25600,
            "input":{"base_ingredient": {"item": briquet},"count": 4},
            "results":[{"item":ingot}],
            "time":100})
        e.custom({
            "type":"immersiveengineering:arc_furnace","additives":[],"energy":25600,
            "input":{"base_ingredient": {"item": pellet},"count": 5},
            "results":[{"item":ingot}],
            "time":100})
    }
})