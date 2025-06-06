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
  })