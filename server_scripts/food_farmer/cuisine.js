ServerEvents.recipes(e => {
    //合成锅铲
    e.shaped('cuisinedelight:spatula',
        ['  A',
         ' A ',
         'B  '],
        {A:'tfc:metal/ingot/wrought_iron',
         B:'#balm:wooden_rods'})
})