ServerEvents.recipes(e=> {
    const create=e.recipes.create
    create.milling('4x tfc:powder/sulfur','tfc:ore/sulfur')
    create.milling('4x tfc:powder/graphite','tfc:ore/graphite')
    create.milling('6x tfc:powder/flux','tfc:ore/borax')
    create.milling('2x tfc:powder/flux','#tfc:fluxstone')
    create.milling('tfc:ore/gypsum','tfc:rock/raw/limestone')
    create.milling('4x tfc:powder/ruby','tfc:ore/ruby')
    create.milling('4x tfc:powder/ruby','tfc:gem/ruby')
    create.milling('4x minecraft:redstone','tfc:ore/cinnabar')
    create.milling('4x minecraft:redstone','tfc:ore/cryolite')
    create.milling('4x tfc:powder/pyrite','tfc:gem/pyrite')
    create.milling('4x tfc:powder/pyrite','tfc:ore/pyrite')
    create.milling('4x tfc:powder/lapis_lazuli','tfc:ore/lapis_lazuli')
    create.milling('4x tfc:powder/lapis_lazuli','tfc:gem/lapis_lazuli')
    create.milling('4x tfc:powder/diamond','tfc:gem/diamond')
    create.milling('4x tfc:powder/diamond','tfc:ore/diamond')
    create.milling('4x tfc:powder/opal','tfc:gem/opal')
    create.milling('4x tfc:powder/opal','tfc:ore/opal')
    create.milling('4x tfc:powder/emerald','tfc:gem/emerald')
    create.milling('4x tfc:powder/emerald','tfc:ore/emerald')
    create.milling('4x tfc:powder/topaz','tfc:gem/topaz')
    create.milling('4x tfc:powder/topaz','tfc:ore/topaz')
    create.milling('4x tfc:powder/sapphire','tfc:gem/sapphire')
    create.milling('4x tfc:powder/sapphire','tfc:ore/sapphire')
    create.milling('4x tfc:powder/amethyst','tfc:gem/amethyst')
    create.milling('4x tfc:powder/amethyst','tfc:ore/amethyst')

    //群峦动力提前
    e.shaped(Item.of("tfcr:wooden_cogwheel",4), [
            'QLQ',
            'LML',
            'QLQ'
        ],
        {
            L: "#forge:rods/wooden",
            Q: "#minecraft:planks",
            M: "tfc:glue"
        })
    e.replaceInput({output:"#tfc:gear_boxes"},"#tfc:brass_mechanisms","tfcr:wooden_cogwheel")
    e.replaceInput({output:"#tfc:clutches"},["#tfc:brass_mechanisms","#forge:dusts/redstone"],"tfcr:wooden_cogwheel")
    
})