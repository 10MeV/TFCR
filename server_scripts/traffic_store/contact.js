ServerEvents.recipes(e => {
    //包装纸用tag的线
    e.replaceInput({id:'contact:wrapping_paper'},'minecraft:string','#forge:string')
    e.replaceInput({mod:'contact'},'minecraft:iron_ingot','tfc:metal/ingot/wrought_iron')
    e.replaceInput({mod:'contact'},'minecraft:stone','#forge:stone')
})