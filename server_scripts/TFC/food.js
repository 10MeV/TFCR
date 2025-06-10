//群峦方便食品属性
TFCEvents.data(event => {
    event.foodItem('tfcr:super_hardtack', food => {
        food.hunger(4)
        food.protein(1.5)
        food.decayModifier(1)
        food.grain(1)
        food.fruit(1)
        food.vegetables(1)
        food.protein(1)
        food.dairy(1)
        food.decayModifier(1.5)
    })
})