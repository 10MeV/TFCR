ServerEvents.recipes(e => {
        e.recipes.create.splashing("tfc:sand/white",'#forge:sand')
        e.recipes.create.mixing("tfcr:roasted_kaolin_clay",["tfcr:roasted/bauxite","tfc:sand/white"]).superheated()
        e.recipes.create.sequenced_assembly(
		["tfcr:raw_kaolin_clay"],"tfcr:roasted_kaolin_clay",
       [
        e.recipes.createDeploying("tfcr:roasted_kaolin_clay", ["tfcr:roasted_kaolin_clay", 'tfc:metal/hammer/wrought_iron']).keepHeldItem(),
        e.recipes.create.pressing("tfcr:roasted_kaolin_clay","tfcr:roasted_kaolin_clay"),
        e.recipes.createDeploying("tfcr:roasted_kaolin_clay", ["tfcr:roasted_kaolin_clay", 'tfc:metal/hammer/wrought_iron']).keepHeldItem()
       ]).transitionalItem("tfcr:roasted_kaolin_clay").loops(3)
        e.recipes.create.crushing("4x tfcr:roasted/bauxite","tfcr:roasted_brick/bauxite")
        e.recipes.create.milling(["tfc:kaolin_clay",Item.of("tfc:kaolin_clay").withChance(0.2)],"tfcr:raw_kaolin_clay")
        e.recipes.create.mixing("tfc:powder/kaolinite","3x tfc:kaolin_clay").superheated()
})