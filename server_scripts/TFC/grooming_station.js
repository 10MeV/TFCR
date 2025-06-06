var kind=["bismuth_bronze","black_bronze", "bronze", "copper", "wrought_iron", "steel", "black_steel", "blue_steel", "red_steel"]
ServerEvents.recipes(e => {
    for(let i in kind)
    {e.recipes.tfc.heating("tfcgroomer:"+kind[i]+"_grooming_station",1500).resultFluid(Fluid.of('tfc:metal/'+kind[i], 1000))}
})
TFCEvents.data(event => {
    for(let i in kind)
    event.itemHeat("tfcgroomer:"+kind[i]+"_grooming_station", 0.7, null,null)
})