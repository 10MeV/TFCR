// 引入 FoodHandler 和 FoodCapability 类
const FoodHandler = Java.loadClass('net.dries007.tfc.common.capabilities.food.FoodHandler');
const FoodCapability = Java.loadClass('net.dries007.tfc.common.capabilities.food.FoodCapability');

ItemEvents.foodEaten(event => {
    const player = event.player; // 获取玩家对象
    const foodItem = event.item; // 获取被食用的食物
    
    // 检查食物是否有FoodCapability
    const cap = foodItem.getCapability(FoodCapability.CAPABILITY);
    if (!cap.isPresent()) return; // 如果没有能力则退出
    
    // 获取食物属性
    const foodHandler = cap.resolve().get();
    const rottenDate = foodHandler.getRottenDate();
    const ROTTEN_DATE = FoodHandler.ROTTEN_DATE;
    
    // 检查食物是否腐烂
    if (rottenDate === ROTTEN_DATE) {
        // 添加2分钟(1200 ticks)的反胃效果
        player.potionEffects.add('minecraft:nausea', 30*20, 0);
        player.potionEffects.add('minecraft:poison', 20*20, 1)
        
        // 提示玩家
        player.tell(Text.of("食用了腐烂食物，感觉恶心想吐！").red());
    }
});