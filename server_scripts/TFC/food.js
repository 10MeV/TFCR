//群峦方便食品属性
TFCEvents.data(event => {
    event.foodItem('tfcr:super_hardtack', food => {
        food.hunger(4)
        food.decayModifier(1.2)
        food.grain(1.2)
        food.fruit(1.2)
        food.vegetables(1.2)
        food.protein(1.2)
        food.dairy(1.2)
        food.decayModifier(1.5)
    })
})

//灵魂豆芽保质期延长
TFCEvents.data(event => {
    event.foodItem('cold_sweat:soul_sprout', food => {
        food.decayModifier(0.5)
    })
})

//群峦方便食物合成
ServerEvents.recipes(e => {
            e.recipes.create.sequenced_assembly(
		["tfcr:blue_steelcan3"],"tfcr:blue_steelcan1",
       [
        e.recipes.createDeploying("tfcr:blue_steelcan1", ["tfcr:blue_steelcan1", {"type": "tfc:not_rotten","ingredient": {"tag": "firmalife:foods/extra_dough"}}]),
        e.recipes.createDeploying("tfcr:blue_steelcan1", ["tfcr:blue_steelcan1", "tfcr:powdered_meat"]),
        e.recipes.createDeploying("tfcr:blue_steelcan1", ["tfcr:blue_steelcan1", "tfcr:powdered_meat"]),
        e.recipes.createDeploying("tfcr:blue_steelcan1", ["tfcr:blue_steelcan1", "tfc:powder/salt"]),
        e.recipes.createDeploying("tfcr:blue_steelcan1", ["tfcr:blue_steelcan1", "tfcr:powdered_vegetable"]),
        e.recipes.createDeploying("tfcr:blue_steelcan1", ["tfcr:blue_steelcan1", "tfcr:powdered_fruit"]),
        e.recipes.createDeploying("tfcr:blue_steelcan1", ["tfcr:blue_steelcan1", "#tfcr:powdered_milk"]),
        e.recipes.createDeploying("tfcr:blue_steelcan1", ["tfcr:blue_steelcan1", {"type": "tfc:not_rotten","ingredient": {"tag": "firmalife:foods/extra_dough"}}]),
        e.recipes.createDeploying("tfcr:blue_steelcan1", ["tfcr:blue_steelcan1", 'tfc:metal/hammer/red_steel']).keepHeldItem()
       ]).transitionalItem("tfcr:blue_steelcan1").loops(4)
    //未杀菌的蓝钢罐头处理
    e.recipes.create.compacting("tfcr:blue_steelcan0",[Fluid.of('minecraft:water',50),"tfcr:blue_steelcan3"]).heated()
    //脏蓝钢罐子洗涤
    e.recipes.create.mixing("tfcr:blue_steelcan1",[Fluid.of("artisanal:soapy_water",100),"tfcr:blue_steelcan2"])
    //三种沫儿的合成
    e.custom({
    "type": "farmersdelight:cooking",
    "recipe_book_tab": "misc",
    "ingredients": [{"tag": "tfc:sweetener"},{"type": "tfc:not_rotten","ingredient": {"tag": "tfc:foods/fruits"}}],
    "result": {"item": "tfcr:powdered_fruit","modifiers": ["tfc:copy_food"]},"experience": 0.35,"cookingtime": 100})

    e.custom({
    "type": "farmersdelight:cooking",
    "recipe_book_tab": "misc",
    "ingredients": [{"tag": "tfc:sweetener"},{"type": "tfc:not_rotten","ingredient": {"tag": "tfc:foods/vegetables"}}],
    "result": {"item": "tfcr:powdered_vegetable","modifiers": ["tfc:copy_food"]},"experience": 0.35,"cookingtime": 100})

    e.custom({
    "type": "farmersdelight:cooking",
    "recipe_book_tab": "misc",
    "ingredients": [{"tag": "forge:dusts/salt"},{"type": "tfc:not_rotten","ingredient": {"tag": "tfc:foods/raw_meats"}}],
    "result": {"item": "tfcr:powdered_meat","modifiers": ["tfc:copy_food"]},"experience": 0.35,"cookingtime": 100})

    //移除南瓜派
    e.remove({id:"create_central_kitchen:crafting/pumpkin_pie"})
    //切山羊肉
    e.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [{"type": "tfc:not_rotten","ingredient": [
        {"item": "tfc:food/mutton"},{"item": "minecraft:mutton"},{"item":'tfc:food/chevon'}
      ]}],
    "tool": {"tag": "forge:tools/knives"},
    "result": [
    {"item": "farmersdelight:mutton_chops","count": 2,"modifiers": ["tfc:copy_food"]}]
    })

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
    // 给予玩家物品：1个脏罐头和16个能量棒
    player.give(Item.of('tfcr:blue_steelcan2', 1));
    player.give(Item.of('tfcr:super_hardtack', 16));
})

