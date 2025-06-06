//食物（内脏）营养值
TFCEvents.data(event => {
    const food=['intestines','stomach','kidney','lungs','liver','heart']
    for(let i in food)
    {event.foodItem("butcher:"+food[i], food => {
        food.saturation(2)
        food.protein(1.5)
    })
    event.foodItem("butcher:cooked"+food[i], food => {
        food.saturation(5)
        food.protein(2.5)
    })
    }
    event.itemHeat('#forge:meats', 1,null,null)
})
ServerEvents.recipes(e => {
    const food=['intestines','stomach','kidney','lungs','liver','heart']
    for(let i in food)
    e.recipes.tfc.heating("butcher:"+food[i], 200).resultItem("butcher:cooked"+food[i])
})