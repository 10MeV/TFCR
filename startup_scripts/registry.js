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

	//信息时代奖励袋
	event.create('tfcr:information_age')
	.texture('kubejs:item/information_age')
	.displayName('信息时代奖励袋')

	//种子奖励袋
    event.create('tfcr:seed')
	.texture('kubejs:item/seed')
	.displayName('种子奖励袋')

	//电子元件
	event.create('tfcr:ec_r').texture('tfcr:item/1').displayName('电阻')
	event.create('tfcr:ec_c').texture('tfcr:item/2').displayName('电容')
	event.create('tfcr:ec_d').texture('tfcr:item/3').displayName('二极管')
	event.create('tfcr:ec_q').texture('tfcr:item/4').displayName('晶体管')
	event.create('tfcr:ec_l').texture('tfcr:item/23').displayName('电感')

	//光刻相关
	event.create('tfcr:scs').texture('tfcr:item/5').displayName('单晶硅')
	event.create('tfcr:wafer').texture('tfcr:item/6').displayName('晶圆')
	event.create('tfcr:w_ic').texture('tfcr:item/7').displayName('IC晶圆')
	event.create('tfcr:ccd_ic').texture('tfcr:item/8').displayName('IC硅片')
	event.create('tfcr:w_ram').texture('tfcr:item/9').displayName('RAM晶圆')
	event.create('tfcr:ccd_ram').texture('tfcr:item/10').displayName('RAM硅片')
	event.create('tfcr:w_soc').texture('tfcr:item/11').displayName('SOC晶圆')
	event.create('tfcr:ccd_soc').texture('tfcr:item/12').displayName('SOC硅片')
	event.create('tfcr:w_qsoc').texture('tfcr:item/19').displayName('量子SOC晶圆')
	event.create('tfcr:ccd_qsoc').texture('tfcr:item/20').displayName('量子SOC硅片')

	//电路板相关
	event.create('tfcr:ic_1').texture('tfcr:item/13').displayName('计算机')
	event.create('tfcr:ic_2').texture('tfcr:item/14').displayName('计算机集群')
	event.create('tfcr:ic_3').texture('tfcr:item/15').displayName('超算单元')
	event.create('tfcr:ic_4').texture('tfcr:item/16').displayName('量子计算机')
	event.create('tfcr:ic_5').texture('tfcr:item/17').displayName('量子计算机集群')
	event.create('tfcr:ic_6').texture('tfcr:item/18').displayName('量子超算单元')

	//电路板基板
	event.create('tfcr:cbs_basic').texture('tfcr:item/21').displayName('基础pcb基板')
	event.create('tfcr:cbs_ultra').texture('tfcr:item/22').displayName('高级pcb基板')


	


})
