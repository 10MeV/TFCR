ServerEvents.recipes(event => {
	//仓鼠写的三个移除，主要表现是鼓风机熔炼没了
    event.remove({ type: 'minecraft:smelting' })
	event.remove({ type: 'minecraft:campfire_cooking' })
	event.remove({ type: 'minecraft:blasting' })
	event.remove({ type: 'minecraft:smoking'})
	event.remove({id:'map_atlases:craft_atlas'})
	event.remove({id:'simpleradio:radio'})
	event.remove({id:'simpleradio:transceiver'})
	event.remove({id:'simpleradio:radiosmither'})
	event.remove({id:'simpleradio:transmitting_module'})
	event.remove({id:'simpleradio:speaker_module'})
	event.remove({id:'simpleradio:receiving_module'})
})
