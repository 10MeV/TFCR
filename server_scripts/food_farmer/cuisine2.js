// 引入 FoodHandler 和 FoodCapability 类
const FoodHandler = Java.loadClass('net.dries007.tfc.common.capabilities.food.FoodHandler');
const FoodCapability = Java.loadClass('net.dries007.tfc.common.capabilities.food.FoodCapability');

BlockEvents.rightClicked('cuisinedelight:cuisine_skillet', event => {
    const player = event.player; // 获取玩家对象
    const mainHandItem = player.mainHandItem; // 获取主手物品
    const offHandItem = player.offHandItem; // 获取副手物品

    // 检查副手物品是否具有 FoodCapability
    offHandItem.getCapability(FoodCapability.CAPABILITY).ifPresent(foodHandler => {
    const rottenDate = foodHandler.getRottenDate(); // 获取腐坏日期
    const ROTTEN_DATE = FoodHandler.ROTTEN_DATE; // 获取腐坏常量
    if (rottenDate === ROTTEN_DATE) {
        // 如果副手的食物已腐坏
        player.setStatusMessage(Text.of('副手食物已变质，无法用于炒菜！').red());
        event.cancel(); // 取消右键事件
    }});
    

    // 主手同上
    mainHandItem.getCapability(FoodCapability.CAPABILITY).ifPresent(foodHandler => {
    const rottenDate = foodHandler.getRottenDate(); // 获取腐坏日期
    const ROTTEN_DATE = FoodHandler.ROTTEN_DATE; // 获取腐坏常量
    if (rottenDate === ROTTEN_DATE) {
        // 如果主手的食物已腐坏
        player.setStatusMessage(Text.of('主手食物已变质，无法用于炒菜！').red());
        event.cancel(); // 取消右键事件
    }})
})

ItemEvents.rightClicked("cuisinedelight:cuisine_skillet",event => {
    const player = event.player; // 获取玩家对象
    const offHandItem = player.offHandItem; // 获取副手物品
        // 检查副手物品是否有 FoodCapability
    offHandItem.getCapability(FoodCapability.CAPABILITY).ifPresent(foodHandler => {
        const rottenDate = foodHandler.getRottenDate(); // 获取腐坏日期
        const ROTTEN_DATE = FoodHandler.ROTTEN_DATE; // 获取腐坏常量

        if (rottenDate === ROTTEN_DATE) {
            // 如果副手的食物已腐坏
            player.setStatusMessage(Text.of('你的副手食物已变质，无法用于炒菜！').red());
            event.cancel(); // 取消右键事件
        }
    });
});

ItemEvents.rightClicked("#tfc:foods",event => {
    const player = event.player; // 获取玩家对象
    const mainHandItem = player.mainHandItem; // 获取主手物品
    const offHandItem = player.offHandItem; // 获取副手物品
    // 检查副手物品是否有 FoodCapability
    if (offHandItem.id === 'cuisinedelight:cuisine_skillet') {
        mainHandItem.getCapability(FoodCapability.CAPABILITY).ifPresent(foodHandler => {
        const rottenDate = foodHandler.getRottenDate(); // 获取腐坏日期
        const ROTTEN_DATE = FoodHandler.ROTTEN_DATE; // 获取腐坏常量

        if (rottenDate === ROTTEN_DATE) {
            // 如果副手的食物已腐坏
            player.setStatusMessage(Text.of('你的主手食物已变质，无法用于炒菜！').red());
            event.cancel(); // 取消右键事件
        }
    });}
});
