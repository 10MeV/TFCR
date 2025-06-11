//群峦方便食品属性
TFCEvents.data(event => {
    event.foodItem('tfcr:super_hardtack', food => {
        food.hunger(4)
        food.protein(14.4)
        food.decayModifier(1)
        food.grain(1)
        food.fruit(1)
        food.vegetables(1)
        food.protein(1)
        food.dairy(1)
        food.decayModifier(1.5)
    })

    event.foodItem('tfcr:powdered_vegetable', food => {
        food.hunger(1)
        food.decayModifier(3)
    })
    event.foodItem('tfcr:powdered_meat', food => {
        food.hunger(1)
        food.decayModifier(3)
    })
    event.foodItem('tfcr:powdered_fruit', food => {
        food.hunger(1)
        food.decayModifier(3)
    })
})


//群峦方便食物合成
ServerEvents.recipes(e => {
            e.recipes.create.sequenced_assembly(
		["tfcr:blue_steelcan3"],"tfcr:blue_steelcan1",
       [
        e.recipes.createDeploying("tfcr:blue_steelcan1", ["tfcr:blue_steelcan1", "#firmalife:foods/extra_dough"]),
        e.recipes.createDeploying("tfcr:blue_steelcan1", ["tfcr:blue_steelcan1", "tfcr:powdered_meat"]),
        e.recipes.createDeploying("tfcr:blue_steelcan1", ["tfcr:blue_steelcan1", "tfcr:powdered_meat"]),
        e.recipes.createDeploying("tfcr:blue_steelcan1", ["tfcr:blue_steelcan1", "tfc:powder/salt"]),
        e.recipes.createDeploying("tfcr:blue_steelcan1", ["tfcr:blue_steelcan1", "tfcr:powdered_vegetable"]),
        e.recipes.createDeploying("tfcr:blue_steelcan1", ["tfcr:blue_steelcan1", "tfcr:powdered_fruit"]),
        e.recipes.createDeploying("tfcr:blue_steelcan1", ["tfcr:blue_steelcan1", "#tfcr:powdered_milk"]),
        e.recipes.createDeploying("tfcr:blue_steelcan1", ["tfcr:blue_steelcan1", "#firmalife:foods/extra_dough"]),
        e.recipes.createDeploying("tfcr:blue_steelcan1", ["tfcr:blue_steelcan1", 'tfc:metal/hammer/red_steel']).keepHeldItem()
       ]).transitionalItem("tfcr:blue_steelcan1").loops(4)
    //未杀菌的蓝钢罐头处理
    e.recipes.create.compacting("tfcr:blue_steelcan0",[Fluid.of('minecraft:water',50),"tfcr:blue_steelcan3"]).heated()
    //脏蓝钢罐子洗涤
    e.recipes.create.mixing("tfcr:blue_steelcan1",[Fluid.of("artisanal:soapy_water",100),"tfcr:blue_steelcan2"])
    //三种沫儿的合成
    e.recipes.createDeploying("tfcr:powdered_meat", ["#tfc:foods/raw_meats", 'tfc:metal/hammer/red_steel']).keepHeldItem()
    e.recipes.createDeploying("tfcr:powdered_fruit", ["#tfc:foods/fruits", 'tfc:metal/hammer/red_steel']).keepHeldItem()
    e.recipes.createDeploying("tfcr:powdered_vegetable", ["#tfc:foods/vegetables", 'tfc:metal/hammer/red_steel']).keepHeldItem()
})

//能量棒罐头开出能量棒
ItemEvents.rightClicked('tfcr:blue_steelcan0', event => {
    let { player } = event;   
    // 非创造模式下消耗1个罐头
    if (!player.isCreative()) {
        const heldItem = event.getItem(); // 获取被点击的物品堆栈
        heldItem.shrink(1); // 减少1个
        player.setMainHandItem(heldItem); // 更新玩家手中物品
    }  
    // 给予玩家物品：1个脏罐头和8个能量棒
    player.give(Item.of('tfcr:blue_steelcan2', 1));
    player.give(Item.of('tfcr:super_hardtack', 8));
})

