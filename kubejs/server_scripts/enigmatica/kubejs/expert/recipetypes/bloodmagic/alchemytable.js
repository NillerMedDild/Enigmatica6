onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    data = {
        recipes: [
            {
                inputs: ['ars_nouveau:magic_clay', 'minecraft:blaze_powder'],
                output: 'bloodmagic:arcaneashes',
                count: 1,
                syphon: 500,
                ticks: 200,
                orbLevel: 1,
                id: 'bloodmagic:alchemytable/arcane_ash'
            },
            {
                inputs: ['alexsmobs:komodo_spit', 'alexsmobs:rattlesnake_rattle', '#forge:dusts/charcoal'],
                output: 'kubejs:cutting_essence',
                count: 8,
                syphon: 500,
                ticks: 100,
                orbLevel: 1
            },
            {
                inputs: ['bloodmagic:plantoil', 'kubejs:cutting_essence'],
                output: 'bloodmagic:basiccuttingfluid',
                count: 1,
                syphon: 500,
                ticks: 100,
                orbLevel: 1,
                id: 'bloodmagic:alchemytable/basic_cutting_fluid'
            },
            {
                inputs: [
                    'upgrade_aquatic:glowing_ink_sac',
                    '#forge:dusts/regalium',
                    '#forge:dusts/regalium',
                    '#forge:dusts/regalium',
                    '#forge:dusts/regalium'
                ],
                output: 'astralsorcery:illumination_powder',
                count: 16,
                syphon: 200,
                ticks: 200,
                orbLevel: 1,
                id: 'astralsorcery:altar/illumination_powder'
            },
            {
                inputs: [
                    'occultism:purified_ink',
                    '#forge:dusts/obsidian',
                    '#forge:dusts/obsidian',
                    'astralsorcery:illumination_powder'
                ],
                output: 'astralsorcery:nocturnal_powder',
                count: 4,
                syphon: 200,
                ticks: 200,
                orbLevel: 1,
                id: 'astralsorcery:altar/nocturnal_powder'
            },
            {
                inputs: [
                    'bloodmagic:plantoil',
                    'occultism:burnt_otherstone',
                    'occultism:burnt_otherstone',
                    'occultism:otherworld_ashes',
                    'occultism:otherworld_ashes',
                    'occultism:otherworld_ashes'
                ],
                output: 'occultism:chalk_white_impure',
                count: 1,
                syphon: 500,
                ticks: 200,
                orbLevel: 1,
                id: 'occultism:crafting/chalk_white_impure'
            },
            {
                inputs: [
                    'bloodmagic:plantoil',
                    'occultism:chalk_white_impure',
                    'architects_palette:sunmetal_blend',
                    'naturesaura:gold_powder'
                ],
                output: 'occultism:chalk_gold_impure',
                count: 1,
                syphon: 1000,
                ticks: 200,
                orbLevel: 2,
                id: 'occultism:crafting/chalk_gold_impure'
            },
            {
                inputs: [
                    'bloodmagic:plantoil',
                    'occultism:chalk_white_impure',
                    'betterendforge:enchanted_petal',
                    'eidolon:ender_calx'
                ],
                output: 'occultism:chalk_purple_impure',
                count: 1,
                syphon: 1500,
                ticks: 200,
                orbLevel: 3,
                id: 'occultism:crafting/chalk_purple_impure'
            },
            {
                inputs: [
                    'bloodmagic:plantoil',
                    'occultism:chalk_white_impure',
                    'occultism:afrit_essence',
                    'create:cinder_flour'
                ],
                output: 'occultism:chalk_red_impure',
                count: 1,
                syphon: 5000,
                ticks: 200,
                orbLevel: 4,
                id: 'occultism:crafting/chalk_red_impure'
            },
            {
                inputs: [
                    'alexsmobs:bone_serpent_tooth',
                    '#forge:dusts/sulfur',
                    'minecraft:magma_cream',
                    'ars_nouveau:red_archwood_wood'
                ],
                output: 'bloodmagic:reagentlava',
                count: 1,
                syphon: 1000,
                ticks: 200,
                orbLevel: 0,
                id: 'bloodmagic:alchemytable/reagent_lava'
            },
            {
                inputs: ['#forge:saplings', '#forge:saplings', 'minecraft:sugar_cane', 'thermal:phytogro'],
                output: 'bloodmagic:reagentgrowth',
                count: 1,
                syphon: 2000,
                ticks: 200,
                orbLevel: 2,
                id: 'bloodmagic:alchemytable/reagent_growth'
            },
            {
                inputs: [
                    'eidolon:ender_calx',
                    'astralsorcery:nocturnal_powder',
                    'astralsorcery:nocturnal_powder',
                    'astralsorcery:nocturnal_powder'
                ],
                output: 'bloodmagic:reagentvoid',
                count: 1,
                syphon: 1000,
                ticks: 200,
                orbLevel: 2,
                id: 'bloodmagic:alchemytable/reagent_void'
            },
            {
                inputs: ['minecraft:ghast_tear', 'alexsmobs:tarantula_hawk_wing', 'ars_nouveau:wilden_wing'],
                output: 'bloodmagic:reagentair',
                count: 1,
                syphon: 2000,
                ticks: 200,
                orbLevel: 2,
                id: 'bloodmagic:alchemytable/reagent_air'
            },
            {
                inputs: [
                    'upgrade_aquatic:thrasher_tooth',
                    '#forge:dusts/lapis',
                    'minecraft:prismarine_shard',
                    'minecraft:kelp'
                ],
                output: 'bloodmagic:reagentwater',
                count: 1,
                syphon: 300,
                ticks: 200,
                orbLevel: 2,
                id: 'bloodmagic:alchemytable/reagent_water'
            },
            {
                inputs: [
                    'alexsmobs:kangaroo_hide',
                    'alexsmobs:kangaroo_hide',
                    'ars_nouveau:mana_fiber',
                    'ars_nouveau:mana_fiber'
                ],
                output: 'bloodmagic:reagentholding',
                count: 1,
                syphon: 2000,
                ticks: 200,
                orbLevel: 2,
                id: 'bloodmagic:alchemytable/reagent_holding'
            },
            {
                inputs: ['minecraft:lodestone', 'ars_nouveau:mana_fiber', 'eidolon:gold_inlay'],
                output: 'bloodmagic:reagentmagnetism',
                count: 1,
                syphon: 1000,
                ticks: 200,
                orbLevel: 3,
                id: 'bloodmagic:alchemytable/reagent_magnetism'
            },
            {
                inputs: [
                    'occultism:afrit_essence',
                    Item.of('botania:incense_stick', { brewKey: 'botania:bloodthirst' }),
                    'eidolon:crimson_essence'
                ],
                output: 'bloodmagic:weakbloodshard',
                count: 2,
                syphon: 20000,
                ticks: 200,
                orbLevel: 3,
                id: 'bloodmagic:arc/weakbloodshard'
            },
            {
                inputs: [
                    ['minecraft:crimson_roots', 'undergarden:blisterberry'],
                    '#forge:crops/nether_wart',
                    '#forge:dusts/sulfur'
                ],
                output: 'eidolon:crimson_essence',
                count: 2,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            },
            {
                inputs: [
                    'eidolon:zombie_heart',
                    'minecraft:rotten_flesh',
                    '#forge:dusts/charcoal',
                    'projectvibrantjourneys:charred_bones',
                    'undergarden:ink_mushroom'
                ],
                output: 'eidolon:death_essence',
                count: 4,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            },
            {
                inputs: ['eidolon:enchanted_ash', '#forge:dusts/ender_pearl'],
                output: 'eidolon:ender_calx',
                count: 2,
                syphon: 50,
                ticks: 100,
                orbLevel: 1
            },
            {
                inputs: ['minecraft:warped_fungus', 'eidolon:ender_calx', '#forge:crops/nether_wart'],
                output: 'eidolon:warped_sprouts',
                count: 2,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.bloodmagic
            .alchemytable(Item.of(recipe.output, recipe.count), recipe.inputs)
            .syphon(recipe.syphon)
            .ticks(recipe.ticks)
            .upgradeLevel(recipe.orbLevel);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
