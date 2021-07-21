onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            heated: true,
            inputs: ['#forge:ingots/cobalt', '#forge:ingots/cobalt', '#forge:ingots/cobalt', 'thermal:blizz_powder'],
            output: Item.of('undergarden:froststeel_ingot', 3)
        },
        {
            superheated: true,
            inputs: ['#forge:stones/marble', '#forge:stones/marble', '#forge:stones/marble', '#forge:stones/marble'],
            output: Item.of('astralsorcery:black_marble_raw', 4)
        },
        {
            heated: true,
            inputs: [
                '#forge:dusts/lapis',
                '#forge:dusts/lapis',
                '#forge:dusts/lapis',
                '#forge:dusts/lapis',
                '#forge:dusts/lapis',
                '#forge:dusts/quartz',
                '#forge:dusts/quartz',
                '#forge:tar'
            ],
            output: 'kubejs:coarse_lapis_lazuli_compound'
        },
        {
            heated: true,
            inputs: [
                '#forge:gems/quartz',
                '#forge:gems/lapis',
                '#forge:gems/lapis',
                '#forge:dusts/redstone',
                '#forge:dusts/redstone',
                'eidolon:soul_shard',
                'eidolon:soul_shard',
                'eidolon:soul_shard',
                'eidolon:soul_shard',
                Fluid.of('bloodmagic:life_essence_fluid', 1000)
            ],
            output: 'eidolon:lesser_soul_gem'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.recipes.create.mixing(recipe.output, recipe.inputs);

        if (recipe.heated) {
            re.heated();
        } else if (recipe.superheated) {
            re.superheated();
        } else {
            //unheated
        }
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
