//自动化处理石头
var stone=["granite","diorite","gabbro","shale","claystone","limestone","conglomerate","dolomite","chert",
"chalk","rhyolite","basalt","andesite","dacite","quartzite","slate","phyllite","schist","gneiss","marble"]
ServerEvents.recipes(e => {
    e.replaceInput({id:'minecraft:stonecutter'},'minecraft:stone','#tfc:rock/raw')//切石机
    e.replaceInput({id:'minecraft:grindstone'},'minecraft:stone_slab','#minecraft:slabs')//砂轮
    for(let i in stone){
    //碎石用凿子加工成砖
    e.recipes.create.deploying('tfc:brick/'+stone[i], ['tfc:rock/loose/'+stone[i], '#tfc:chisels'])
    e.recipes.create.deploying('tfc:brick/'+stone[i], ['tfc:rock/mossy_loose/'+stone[i], '#tfc:chisels'])
    //圆石、沙砾的粉碎。不含沙砾石磨
    e.recipes.create.crushing('tfc:rock/gravel/'+stone[i], 'tfc:rock/cobble/'+stone[i]).processingTime(250)
    e.recipes.create.crushing(['minecraft:sand', Item.of('minecraft:flint').withChance(0.1),Item.of('minecraft:clay_ball').withChance(0.05)], 'tfc:rock/gravel/'+stone[i]).processingTime(250)
    e.recipes.create.milling('tfc:rock/gravel/'+stone[i], 'tfc:rock/cobble/'+stone[i]).processingTime(250)
    //和熔岩辊压成天然石
    e.recipes.create.compacting('tfc:rock/raw/'+stone[i], ['4x tfc:rock/loose/'+stone[i],Fluid.lava(50)]).superheated()
}
})