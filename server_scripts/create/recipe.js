ServerEvents.recipes(event => {
  event.recipes.create.mixing(['create_new_age:thorium'], [Fluid.water(1000), 'immersiveengineering:storage_uranium']).heated()
  event.recipes.create.haunting('minecraft:crying_obsidian', 'minecraft:obsidian')
  event.replaceInput({id:'create_new_age:thorium_multiplication'},'minecraft:stone','#forge:cobblestone')
  event.recipes.create.pressing("minecraft:bucket","tfc:metal/double_sheet/wrought_iron")


})