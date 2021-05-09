events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            inputs: [
                { item: 'minecraft:snowball', count: 16 },
                { item: 'quark:bottled_cloud', count: 1 },
                { tag: 'forge:dusts/fluorite', count: 1, return_chance: 0.75 }
            ],
            output: {
                entries: [{ result: { item: 'powah:charged_snowball', count: 1 }, weight: 7 }],
                empty_weight: 3,
                rolls: 16
            }
        },
        {
            inputs: [
                { tag: 'forge:stone', count: 4 },
                { tag: 'forge:dusts/mana', count: 1 },
                { tag: 'forge:dusts/apatite', count: 1 }
            ],
            output: {
                entries: [{ result: { item: 'ars_nouveau:arcane_stone', count: 1 }, weight: 9 }],
                empty_weight: 1,
                rolls: 4
            },
            id: 'ars_nouveau:arcane_stone'
        },
        {
            inputs: [
                { item: 'minecraft:heart_of_the_sea', count: 1 },
                { item: 'minecraft:nautilus_shell', count: 4 },
                { tag: 'forge:dusts/lapis', count: 2 },
                { tag: 'forge:dusts/fluorite', count: 2 },
                { tag: 'forge:dusts/mana', count: 1 }
            ],
            output: {
                entries: [{ result: { item: 'minecraft:conduit', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'minecraft:conduit'
        },
        {
            inputs: [
                { item: 'eidolon:gold_inlay', count: 2 },
                { item: 'ars_nouveau:green_archwood_log', count: 1 },
                { item: 'naturesaura:gold_leaf', count: 1 },
                { tag: 'forge:dusts/apatite', count: 1 }
            ],
            output: {
                entries: [{ result: { item: 'naturesaura:wood_stand', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'naturesaura:wood_stand'
        },
        {
            inputs: [
                { item: 'undergarden:music_disc_relict', count: 1, return_chance: 1.0 },
                { item: 'aquaculture:fish_bones', count: 1 },
                { tag: 'forge:dusts/lapis', count: 2 },
                { item: 'minecraft:fermented_spider_eye', count: 2 },
                { item: 'undergarden:raw_dweller_meat', count: 4 }
            ],
            output: {
                entries: [{ result: { item: 'meetyourfight:fossil_bait', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'meetyourfight:fossil_bait'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'interactio:item_lightning',
            inputs: recipe.inputs,
            output: recipe.output
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});