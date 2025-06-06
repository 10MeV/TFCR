ServerEvents.recipes(e => {
    //抽取输入升级用钢
    e.replaceInput([{id:"functionalstorage:puller_upgrade"},{id:"functionalstorage:pusher_upgrade"}],"#forge:stone","#forge:ingots/steel")
    e.replaceInput({id:'functionalstorage:storage_controller'},'#forge:stone',"tfc:metal/ingot/wrought_iron")
    e.replaceInput({mod:"functionalstorage"},"minecraft:stone","#forge:stone")
    e.replaceInput({id:'functionalstorage:configuration_tool'},"minecraft:emerald","tfc:gem/emerald")
})