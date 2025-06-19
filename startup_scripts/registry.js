StartupEvents.registry('item', event => {
	event.create('kubejs:crystal_seed_certus')
	.texture('kubejs:item/crystal_seed_certus')
	.displayName('石英种子')

	//增加锻铁中间体
	event.create('kubejs:hot_iron_bloom')
	.texture('kubejs:item/hot_iron_bloom')
	.displayName('热铁方坯')

	//增加炼钢中间体
	event.create('hot_high_carbon_steel')
	.texture('kubejs:item/hot_high_carbon_steel')
	.displayName('热高碳钢')

	//烧结铝土矿砖
	event.create('tfcr:roasted_brick/bauxite')
	.texture('kubejs:item/roasted_brick_bauxite')
	.displayName('烧结铝土矿砖')

	//高岭土烧结块和粗块
	event.create('tfcr:roasted_kaolin_clay')
	.texture('kubejs:item/roasted_kaolin_clay')
	.displayName('烧结高岭土块')
	event.create('tfcr:raw_kaolin_clay')
	.texture('kubejs:item/raw_kaolin_clay')
	.displayName('粗高岭土')
	
	//高岭土精制粉
	event.create('tfcr:roasted/bauxite')
	.texture('kubejs:item/roasted_bauxite')
	.displayName('烧结铝土矿粉')

	//蓝钢罐头
	event.create('tfcr:blue_steelcan1')
	.texture('kubejs:item/blue_steelcan1')
	.displayName('空的蓝钢罐头')

	event.create('tfcr:blue_steelcan0')
	.texture('kubejs:item/blue_steelcan0')
	.displayName('群峦牌员工能量棒罐头')

	event.create('tfcr:blue_steelcan2')
	.texture('kubejs:item/blue_steelcan2')
	.displayName('脏的蓝钢罐头')

	event.create('tfcr:blue_steelcan3')
	.texture('kubejs:item/blue_steelcan3')
	.displayName('待杀菌的能量棒罐头')

	//木齿轮
	event.create('tfcr:wooden_cogwheel')
	.texture('kubejs:item/wooden_cogwheel')
	.displayName('木制齿轮')


})
