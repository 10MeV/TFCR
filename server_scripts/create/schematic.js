ServerEvents.recipes(e => {
    //蓝图炮和蓝图桌，需要蓝钢
    e.shaped('create:schematicannon',
      ['AAA',
       ' B ',
       'BCB'],
      {A:"tfc:metal/block/blue_steel_slab",
       B:'tfc:metal/block/blue_steel',
       C:'minecraft:dispenser'})
    e.remove({id:"create:crafting/schematics/schematicannon"})
    e.shaped('create:schematic_table',
      ['AAA',
       ' A ',
       'BBB'],
      {B:"tfc:metal/block/blue_steel_slab",
       A:'tfc:metal/block/blue_steel'})
    e.remove({id:'create:crafting/schematics/schematic_table'})
      })