ServerEvents.recipes(e => {
//生物柴油倍率20
var n=20;
e.remove({id:'immersiveengineering:refinery/biodiesel'})
e.custom({"type":"immersiveengineering:refinery",
    "catalyst":{"tag":"forge:dusts/saltpeter"},"energy":80*n,
    "input0":{"amount":8,"tag":"forge:plantoil"},
    "input1":{"amount":8,"tag":"forge:ethanol"},
    "result":{"amount":16*n,"fluid":"immersiveengineering:biodiesel"}})
    //高定向热解石墨
    e.custom({"type":"immersiveengineering:squeezer","energy":19200,
        "input":{"base_ingredient":{"item":"tfc:powder/charcoal"},"count":48},
        "result":{"tag":"forge:dusts/hop_graphite"}})
})