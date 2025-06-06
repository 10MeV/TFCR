var tfc_wood=["chestnut","douglas_fir","hickory","kapok","mangrove","maple","palm","ash","spruce","aspen","birch","blackwood","blackwood","rosewood","willow","pine","sequoia","white_cedar","oak"]
var afc_wood=["baobab","eucalyptus","mahogany","hevea","tualang","teak","cypress","fig","ironwood","ipe","acacia"]
ServerEvents.recipes(e=> {
    function farmcut(input,output){
        e.custom({
            "type": "farmersdelight:cutting",
            "ingredients": [{"item": input}],
            "result": [{"item": output},{"item": "farmersdelight:tree_bark"}],
            "sound": "minecraft:item.axe.strip",
            "tool": {"type": "farmersdelight:tool_action","action": "axe_strip"}})
    }
    const create=e.recipes.create
    for(let i in afc_wood){
        create.cutting('12x afc:wood/lumber/'+afc_wood[i],'afc:wood/stripped_log/'+afc_wood[i])
        create.cutting('12x afc:wood/lumber/'+afc_wood[i],'afc:wood/stripped_wood/'+afc_wood[i])
        farmcut('afc:wood/log/'+afc_wood[i],'afc:wood/stripped_log/'+afc_wood[i])
    }
    for(let i in tfc_wood){
        create.cutting('12x tfc:wood/lumber/'+tfc_wood[i],'tfc:wood/stripped_log/'+tfc_wood[i])
        create.cutting('12x tfc:wood/lumber/'+tfc_wood[i],'tfc:wood/stripped_wood/'+tfc_wood[i])
        farmcut('tfc:wood/log/'+tfc_wood[i],'tfc:wood/stripped_log/'+tfc_wood[i])
    }
})