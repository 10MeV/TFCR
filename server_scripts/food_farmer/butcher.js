ServerEvents.recipes(e=> {
    e.shaped("16x butcher:sponge",
        ['ABA',
         'B B',
         'ABA'],
        {A:"tfc:glue",
         B:"#forge:string"})//海绵
    e.remove({id:"tfcbutchery:crafting/hook"})
    e.recipes.tfc.anvil('4x butcher:hook', 'tfc:metal/rod/wrought_iron', ['hit_not_last', 'bend_any','bend_any']).tier(3)
    //用锻铁棒打造钩子
    e.remove({id:'butcher:boneskinningkniferecipe'})
    e.remove({id:'butcher:bonebutchersknife_recipe'})//移除骨切肉和剥皮刀
    e.replaceInput({id:'butcher:roperecipe'},'minecraft:string','farmersdelight:rope')//
    e.remove({id:"tfcbutchery:crafting/spitroast"})//移除烧烤架
    e.replaceOutput({id:"tfcbutchery:heating/rawsalmon"},'butcher:salmon','butcher:cookedsalmon')
})

ServerEvents.tags("item",event=>{
    event.add("tfc:pig_food",['#butcher:organs'])
})