ServerEvents.tags('item', e => {
    //三种木棍加木棍标签
    e.add('forge:rods/wooden', 'afc:wood/twig/black_oak')
    e.add('forge:rods/wooden', 'afc:wood/twig/rainbow_eucalyptus')
    e.add('forge:rods/wooden', 'afc:wood/twig/redcedar')
    e.add('forge:rods/wooden', 'afc:wood/twig/rubber_fig')
    e.add('forge:rods/wooden', 'afc:wood/twig/poplar')
    //添加矿粉标签，方便写玻璃配方
    e.add('tfc:glassdusts/iron','tfc:powder/limonite')
    e.add('tfc:glassdusts/iron','tfc:powder/magnetite')
    e.add('tfc:glassdusts/iron','tfc:powder/hematite')
    e.add('tfc:glassdusts/copper','tfc:powder/malachite')
    e.add('tfc:glassdusts/copper','tfc:powder/native_copper')
    e.add('tfc:glassdusts/copper','tfc:powder/tetrahedrite')
    //奶粉添加标签
    e.add('tfcr:powdered_milk','artisanal:powdered_milk')
    e.add('tfcr:powdered_milk','artisanal:powdered_goat_milk')
    e.add('tfcr:powdered_milk','artisanal:powdered_yak_milk')
    //造纸添加标签
    e.add('create:pulpifiable','immersiveengineering:dust_wood')
    //添加海带tag
    e.add('tfc:plants/kelp','tfc:plant/leafy_kelp')
    e.add('tfc:plants/kelp','tfc:plant/winged_kelp')
    //添加岩浆块tag
    e.add('forge:magma_block','tfc_coldsweat:rock/magma/basalt')
    //添加afc树苗造纸标签
    e.add('create:pulpifiable', /.*sapling.*/)
    //添加小粉末标签
    e.add('tfcr:dirty_pile_dust', /.*dirty_pile.*/)

  })