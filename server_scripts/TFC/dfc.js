//移除dfc中材质错误的物品配方
var stone=["granite","diorite","gabbro","shale","claystone","limestone","conglomerate","dolomite","chert",
    "chalk","rhyolite","basalt","andesite","dacite","quartzite","slate","phyllite","schist","gneiss","marble"]
ServerEvents.recipes(e => {
    for(let i in stone){
        e.remove({id:"dfc:crafting/rock/thin_outline/"+stone[i]})
        e.remove({id:"dfc:chisel/smooth/thin_outline/"+stone[i]})
        e.remove({id:"dfc:crafting/rock/thick_outline/"+stone[i]})
        e.remove({id:"dfc:chisel/smooth/thick_outline/"+stone[i]})
    }
})