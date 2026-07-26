/* ==========================================================================
   NutriSafe - Core App Engine (versió consolidada i millorada)
   Aquest és l'únic fitxer JS de l'app. index.html ja NO té script propi.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* --------------------------------------------------------------------
       DADES BASE
       -------------------------------------------------------------------- */

    const dietaryOptions = [
        { id: "none", label: "None (Eat Everything)" },
        { id: "vegan", label: "Vegan" },
        { id: "vegetarian", label: "Vegetarian" },
        { id: "keto", label: "Keto" },
        { id: "cows_milk", label: "Cow's Milk-Free" },
        { id: "eggs", label: "Egg-Free" },
        { id: "peanuts", label: "Peanut-Free" },
        { id: "tree_nuts", label: "Tree Nut-Free" },
        { id: "fish", label: "Fish-Free" },
        { id: "shellfish", label: "Shellfish-Free" },
        { id: "wheat", label: "Wheat-Free" },
        { id: "soy", label: "Soy-Free" },
        { id: "lactose", label: "Lactose Intolerance" }
    ];

    const supermarketSections = {
        "🍎 Fruits & Vegetables": ["banana", "strawberry", "strawberries", "pepper", "cucumber", "tomato", "tomatoes", "broccoli", "asparagus", "potato", "lemon", "spinach", "avocado", "garlic", "cherry tomatoes", "sweet potato", "carrot", "onion", "zucchini", "mushroom", "kale", "lime", "apple", "blueberr"],
        "🥩 Meat & Fish": ["chicken", "beef", "salmon", "steak", "turkey", "shrimp", "prawn", "tuna", "cod", "pork", "bacon"],
        "🥚 Dairy & Eggs": ["milk", "egg", "eggs", "cheese", "butter", "yogurt", "yoghurt", "feta", "parmesan"],
        "🌾 Grains & Legumes": ["flour", "oats", "rice", "quinoa", "bread", "chia", "tofu", "pasta", "lentil", "chickpea", "beans", "tortilla", "couscous"],
        "🧂 Spices & Pantry": ["syrup", "oil", "salt", "pepper flakes", "paprika", "oregano", "cumin", "cinnamon", "turmeric", "soy sauce", "mustard", "vanilla", "coconut milk", "basil", "thyme", "rosemary", "chili", "ginger", "vinegar", "honey", "stock", "broth", "nutritional yeast", "black pepper"]
    };

    const recipes = [
        {
            id: 1, title: "Fluffy Gluten-Free Pancakes", mealType: "Breakfast", prepTime: "20 min", calories: 380,
            macros: { protein: "14 g", carbs: "52 g", fat: "10 g" },
            safeFor: ["vegetarian", "cows_milk", "peanuts", "fish", "shellfish", "soy", "lactose"],
            ingredients: ["150g Gluten-free flour", "200ml Almond milk", "2 Eggs", "1 tsp Baking powder", "2 tbsp Maple syrup", "1 tbsp Melted butter"],
            instructions: "1. In a bowl, whisk the eggs with the almond milk and melted butter until combined.\n2. In a separate bowl, mix the gluten-free flour with the baking powder, then fold it into the wet mixture until you get a smooth batter (a few small lumps are fine).\n3. Let the batter rest for 5 minutes so the flour hydrates properly.\n4. Heat a non-stick pan over medium heat, pour small ladles of batter and cook 2-3 minutes per side until golden and bubbles form on the surface.\n5. Stack the pancakes and serve warm, drizzled with maple syrup."
        },
        {
            id: 2, title: "Creamy Overnight Oats Bowl", mealType: "Breakfast", prepTime: "10 min", calories: 320,
            macros: { protein: "12 g", carbs: "50 g", fat: "7 g" },
            safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"],
            ingredients: ["80g Oats", "250ml Oat milk", "1 Banana", "1 tbsp Chia seeds", "1 tsp Cinnamon", "1 tsp Honey"],
            instructions: "1. In a jar or bowl, combine the oats, oat milk, chia seeds and cinnamon, stirring well.\n2. Cover and refrigerate for at least 2 hours, or ideally overnight, so the oats soften completely.\n3. In the morning, slice the banana.\n4. Top the oatmeal with the sliced banana and a drizzle of honey before serving cold, or warm it up for 1 minute in the microwave if you prefer it hot."
        },
        {
            id: 3, title: "Avocado & Poached Egg Toast", mealType: "Breakfast", prepTime: "12 min", calories: 340,
            macros: { protein: "15 g", carbs: "28 g", fat: "18 g" },
            safeFor: ["vegetarian", "cows_milk", "peanuts", "tree_nuts", "fish", "shellfish", "soy", "lactose"],
            ingredients: ["2 slices Whole-grain bread", "1 Ripe avocado", "2 Eggs", "1/2 Lemon", "1 pinch Chili flakes", "1 pinch Salt & black pepper"],
            instructions: "1. Bring a small pot of water to a gentle simmer and add a splash of vinegar for poaching.\n2. Toast the bread slices until golden and crisp.\n3. Mash the avocado in a bowl with a squeeze of lemon juice, salt and pepper, then spread it evenly over the toast.\n4. Crack each egg into a cup and slide gently into the simmering water; poach for 3 minutes for a runny yolk.\n5. Lift the eggs out with a slotted spoon, place on top of the avocado toast, and finish with chili flakes."
        },
        {
            id: 4, title: "Vanilla Chia Seed Pudding", mealType: "Breakfast", prepTime: "10 min", calories: 280,
            macros: { protein: "8 g", carbs: "22 g", fat: "14 g" },
            safeFor: ["vegan", "vegetarian", "keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"],
            ingredients: ["40g Chia seeds", "200ml Coconut milk", "1 tsp Vanilla extract", "100g Fresh strawberries", "1 tsp Honey"],
            instructions: "1. In a glass jar, whisk together the chia seeds, coconut milk, vanilla extract and honey until no lumps remain.\n2. Cover and let it rest in the fridge for at least 2 hours, stirring once after 30 minutes to avoid clumping.\n3. Once it has thickened to a pudding-like texture, chop the fresh strawberries.\n4. Garnish with the strawberries just before serving."
        },
        {
            id: 5, title: "Spinach & Feta Egg Muffins", mealType: "Breakfast", prepTime: "25 min", calories: 260,
            macros: { protein: "18 g", carbs: "4 g", fat: "18 g" },
            safeFor: ["vegetarian", "keto", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy"],
            ingredients: ["6 Eggs", "60g Fresh spinach", "50g Feta cheese", "1/4 Onion", "1 pinch Salt & black pepper", "1 tbsp Olive oil"],
            instructions: "1. Preheat the oven to 180°C and grease a muffin tin lightly with olive oil.\n2. Finely chop the onion and sauté it for 2 minutes until soft, then wilt the spinach in the same pan.\n3. Whisk the eggs in a bowl with salt and pepper, then stir in the spinach, onion and crumbled feta.\n4. Divide the mixture evenly among the muffin cups.\n5. Bake for 16-18 minutes until set and lightly golden on top, then let cool for 5 minutes before removing."
        },
        {
            id: 6, title: "Honey Soy Chicken & Rice Stir-fry", mealType: "Lunch", prepTime: "25 min", calories: 520,
            macros: { protein: "42 g", carbs: "58 g", fat: "12 g" },
            safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"],
            ingredients: ["200g Chicken breast", "150g Jasmine rice", "2 tbsp Soy sauce", "1 tbsp Honey", "1 Red bell pepper", "2 cloves Garlic", "1 tbsp Vegetable oil"],
            instructions: "1. Rinse the jasmine rice and cook it according to package instructions.\n2. While the rice cooks, slice the chicken breast and bell pepper into thin strips, and mince the garlic.\n3. Heat the oil in a wok over high heat, add the garlic and stir-fry for 30 seconds until fragrant.\n4. Add the chicken and cook for 4-5 minutes until browned, then add the bell pepper and stir-fry for 2 more minutes.\n5. Pour in the soy sauce and honey, toss everything together for 1 minute, and serve hot over the rice."
        },
        {
            id: 7, title: "Mediterranean Quinoa Salad", mealType: "Lunch", prepTime: "20 min", calories: 410,
            macros: { protein: "12 g", carbs: "54 g", fat: "16 g" },
            safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"],
            ingredients: ["100g Quinoa", "1 Cucumber", "100g Cherry tomatoes", "1/4 Red onion", "2 tbsp Extra virgin olive oil", "1 Lemon", "1 tsp Oregano"],
            instructions: "1. Rinse the quinoa well, then boil in salted water for 12 minutes until the grains turn translucent; drain and let it cool.\n2. Dice the cucumber, halve the cherry tomatoes, and finely chop the red onion.\n3. In a large bowl, whisk together the olive oil, juice of the lemon and oregano to make a dressing.\n4. Combine the cooled quinoa with the chopped vegetables and toss everything with the dressing.\n5. Let it sit for 10 minutes before serving so the flavors meld together."
        },
        {
            id: 8, title: "Garlic Beef & Broccoli Bowl", mealType: "Lunch", prepTime: "22 min", calories: 580,
            macros: { protein: "45 g", carbs: "20 g", fat: "28 g" },
            safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"],
            ingredients: ["200g Beef steak", "150g Broccoli florets", "3 cloves Garlic", "2 tbsp Soy sauce", "1 tbsp Sesame oil", "1 tsp Ginger, grated"],
            instructions: "1. Slice the beef thinly against the grain and mince the garlic and ginger.\n2. Steam the broccoli florets for 4 minutes until just tender, then set aside.\n3. Heat the sesame oil in a hot skillet, sear the beef strips for 2 minutes per side until browned.\n4. Add the garlic and ginger to the pan and cook for 30 seconds until fragrant.\n5. Toss in the steamed broccoli and soy sauce, stir everything together for 1-2 minutes, and serve immediately."
        },
        {
            id: 9, title: "Turkey & Veggie Wrap", mealType: "Lunch", prepTime: "12 min", calories: 450,
            macros: { protein: "35 g", carbs: "40 g", fat: "14 g" },
            safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "lactose"],
            ingredients: ["1 Large tortilla", "120g Turkey slices", "1/2 cup Lettuce", "1 Tomato", "2 tbsp Hummus", "1/4 Avocado"],
            instructions: "1. Lay the tortilla flat and spread the hummus evenly over the surface.\n2. Slice the tomato and avocado, and shred the lettuce.\n3. Layer the turkey slices, lettuce, tomato and avocado down the center of the tortilla.\n4. Fold in the sides and roll the tortilla up tightly into a wrap.\n5. Cut in half diagonally and serve, or wrap in foil to take on the go."
        },
        {
            id: 10, title: "Chickpea & Spinach Curry", mealType: "Lunch", prepTime: "25 min", calories: 430,
            macros: { protein: "16 g", carbs: "48 g", fat: "16 g" },
            safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"],
            ingredients: ["1 can Chickpeas", "200ml Coconut milk", "80g Fresh spinach", "1 Onion", "2 cloves Garlic", "1 tbsp Curry powder", "1 tbsp Olive oil"],
            instructions: "1. Finely chop the onion and mince the garlic.\n2. Heat the olive oil in a pot and sauté the onion for 4 minutes until translucent, then add the garlic and curry powder and cook for 1 minute until fragrant.\n3. Drain the chickpeas and add them to the pot along with the coconut milk.\n4. Simmer gently for 12 minutes, stirring occasionally, until the sauce thickens slightly.\n5. Stir in the fresh spinach and cook for 2 more minutes until wilted, then serve with rice or flatbread."
        },
        {
            id: 11, title: "Grilled Salmon & Asparagus", mealType: "Dinner", prepTime: "25 min", calories: 610,
            macros: { protein: "46 g", carbs: "8 g", fat: "38 g" },
            safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "shellfish", "wheat", "soy", "lactose"],
            ingredients: ["200g Salmon fillet", "150g Asparagus", "2 tbsp Olive oil", "1/2 Fresh lemon", "2 sprigs Fresh thyme", "1 pinch Salt & pepper"],
            instructions: "1. Preheat a grill pan or skillet over medium-high heat with 1 tbsp of olive oil.\n2. Season the salmon fillet with salt, pepper and fresh thyme.\n3. Grill the salmon skin-side down for 4 minutes, then flip and cook for 3 more minutes until it flakes easily.\n4. Meanwhile, toss the asparagus with the remaining olive oil and sauté in a separate pan for 4-5 minutes until tender-crisp.\n5. Plate the salmon with the asparagus and finish with a squeeze of fresh lemon."
        },
        {
            id: 12, title: "Herb-Crusted Steak with Sweet Potato Wedges", mealType: "Dinner", prepTime: "35 min", calories: 680,
            macros: { protein: "50 g", carbs: "42 g", fat: "24 g" },
            safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"],
            ingredients: ["220g Beef steak", "200g Sweet potato", "2 tbsp Olive oil", "1 tsp Rosemary", "1 tsp Paprika", "1 pinch Salt & pepper"],
            instructions: "1. Preheat the oven to 200°C. Cut the sweet potato into wedges and toss with 1 tbsp olive oil, paprika, salt and pepper.\n2. Spread the wedges on a baking tray and roast for 25 minutes, flipping halfway, until golden and tender.\n3. Meanwhile, season the steak with rosemary, salt and pepper.\n4. Heat the remaining oil in a hot pan and sear the steak for 3-4 minutes per side for medium-rare.\n5. Let the steak rest for 5 minutes before slicing, then serve alongside the sweet potato wedges."
        },
        {
            id: 13, title: "Tofu & Vegetable Coconut Curry", mealType: "Dinner", prepTime: "25 min", calories: 430,
            macros: { protein: "18 g", carbs: "26 g", fat: "22 g" },
            safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"],
            ingredients: ["180g Firm tofu", "200ml Coconut milk", "1 Bell pepper", "50g Fresh spinach", "1 tbsp Curry paste", "1 tbsp Vegetable oil"],
            instructions: "1. Press the tofu to remove excess water, then cube it.\n2. Heat the oil in a pot and sear the tofu cubes for 4-5 minutes until lightly golden on all sides; set aside.\n3. In the same pot, sauté the sliced bell pepper for 2 minutes, then stir in the curry paste and cook for 1 minute until fragrant.\n4. Pour in the coconut milk, return the tofu to the pot, and let it simmer gently for 10 minutes.\n5. Stir in the fresh spinach right before serving until wilted, and serve with rice."
        },
        {
            id: 14, title: "Baked Cod with Roasted Vegetables", mealType: "Dinner", prepTime: "30 min", calories: 470,
            macros: { protein: "38 g", carbs: "24 g", fat: "20 g" },
            safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "shellfish", "wheat", "soy", "lactose"],
            ingredients: ["220g Cod fillet", "1 Zucchini", "1 Red bell pepper", "1 Carrot", "2 tbsp Olive oil", "1 tsp Paprika", "1/2 Lemon"],
            instructions: "1. Preheat the oven to 200°C. Chop the zucchini, bell pepper and carrot into bite-sized pieces.\n2. Toss the vegetables with 1 tbsp olive oil, paprika, salt and pepper, and spread on a baking tray.\n3. Roast the vegetables for 10 minutes, then push them to one side and add the cod fillet, drizzled with the remaining olive oil.\n4. Bake for another 12-15 minutes until the cod flakes easily and the vegetables are tender.\n5. Squeeze fresh lemon juice over everything before serving."
        },
        {
            id: 15, title: "Lentil & Vegetable Stew", mealType: "Dinner", prepTime: "35 min", calories: 400,
            macros: { protein: "20 g", carbs: "50 g", fat: "10 g" },
            safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"],
            ingredients: ["150g Red lentils", "1 Carrot", "1 Onion", "2 cloves Garlic", "400ml Vegetable stock", "1 tsp Cumin", "1 tbsp Olive oil"],
            instructions: "1. Finely dice the carrot and onion, and mince the garlic.\n2. Heat the olive oil in a pot and sauté the onion and carrot for 5 minutes until softened.\n3. Add the garlic and cumin, stirring for 1 minute until fragrant.\n4. Rinse the lentils and add them to the pot along with the vegetable stock.\n5. Bring to a boil, then reduce heat and simmer for 20 minutes, stirring occasionally, until the lentils are soft and the stew has thickened."
        },
        {
            id: 16, title: "Shrimp & Zucchini Noodles", mealType: "Dinner", prepTime: "20 min", calories: 380,
            macros: { protein: "32 g", carbs: "14 g", fat: "22 g" },
            safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "wheat", "lactose"],
            ingredients: ["200g Shrimp, peeled", "2 Zucchini, spiralized", "3 cloves Garlic", "2 tbsp Olive oil", "1 pinch Chili flakes", "1/2 Lemon"],
            instructions: "1. Spiralize the zucchini into noodle shapes, or use a peeler to create thin ribbons.\n2. Pat the shrimp dry and season lightly with salt and pepper.\n3. Heat the olive oil in a large pan over medium-high heat, add the minced garlic and chili flakes and cook for 30 seconds.\n4. Add the shrimp and cook for 2 minutes per side until pink and opaque, then remove and set aside.\n5. Add the zucchini noodles to the same pan, toss for 1-2 minutes until just softened, return the shrimp to the pan, squeeze over the lemon juice, and serve immediately."
        },
        {
            id: 17, title: "Greek Yogurt & Berry Parfait", mealType: "Breakfast", prepTime: "8 min", calories: 300,
            macros: { protein: "18 g", carbs: "34 g", fat: "8 g" },
            safeFor: ["vegetarian", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy"],
            ingredients: ["250g Greek yogurt", "80g Mixed berries", "2 tbsp Granola", "1 tsp Honey"],
            instructions: "1. Spoon half of the Greek yogurt into a glass or bowl.\n2. Add a layer of mixed berries and a sprinkle of granola.\n3. Repeat with the remaining yogurt, berries and granola to build a second layer.\n4. Drizzle with honey just before serving."
        },
        {
            id: 18, title: "Banana Peanut Butter Smoothie Bowl", mealType: "Breakfast", prepTime: "10 min", calories: 350,
            macros: { protein: "12 g", carbs: "44 g", fat: "14 g" },
            safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"],
            ingredients: ["2 Frozen bananas", "2 tbsp Peanut butter", "150ml Oat milk", "1 tbsp Chia seeds", "1 tbsp Granola"],
            instructions: "1. Blend the frozen bananas, peanut butter and oat milk together until thick and creamy.\n2. Pour the mixture into a bowl.\n3. Top with chia seeds and granola.\n4. Serve immediately while still cold and thick."
        },
        {
            id: 19, title: "Veggie & Egg Breakfast Burrito", mealType: "Breakfast", prepTime: "15 min", calories: 400,
            macros: { protein: "20 g", carbs: "38 g", fat: "18 g" },
            safeFor: ["vegetarian", "cows_milk", "peanuts", "tree_nuts", "fish", "shellfish", "soy", "lactose"],
            ingredients: ["1 Large tortilla", "3 Eggs", "1/4 Bell pepper", "1/4 Onion", "30g Cheese, shredded", "1 tbsp Olive oil"],
            instructions: "1. Finely dice the bell pepper and onion, then sauté in olive oil for 3 minutes until softened.\n2. Whisk the eggs and pour them into the pan, scrambling gently for 2-3 minutes until just set.\n3. Sprinkle the shredded cheese over the eggs and let it melt slightly.\n4. Warm the tortilla, spoon the egg mixture down the center, and roll it up tightly.\n5. Slice in half and serve warm."
        },
        {
            id: 20, title: "Buckwheat Berry Crepes", mealType: "Breakfast", prepTime: "20 min", calories: 320,
            macros: { protein: "9 g", carbs: "46 g", fat: "10 g" },
            safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "soy", "lactose"],
            ingredients: ["120g Buckwheat flour", "250ml Almond milk", "1 tbsp Maple syrup", "100g Mixed berries", "1 tsp Vanilla extract"],
            instructions: "1. Whisk the buckwheat flour, almond milk, maple syrup and vanilla together until smooth.\n2. Let the batter rest for 10 minutes.\n3. Heat a lightly oiled non-stick pan and pour a thin layer of batter, swirling to coat the base.\n4. Cook for 1-2 minutes per side until lightly golden.\n5. Fold or roll the crepes and top with fresh mixed berries."
        },
        {
            id: 21, title: "Smoked Turkey & Egg Breakfast Cups", mealType: "Breakfast", prepTime: "25 min", calories: 270,
            macros: { protein: "22 g", carbs: "3 g", fat: "17 g" },
            safeFor: ["keto", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy"],
            ingredients: ["6 Eggs", "80g Smoked turkey slices", "30g Cheese, shredded", "1/4 Onion, diced", "1 pinch Salt & pepper"],
            instructions: "1. Preheat the oven to 180°C and line a muffin tin with the turkey slices to form little cups.\n2. Whisk the eggs with the diced onion, salt and pepper.\n3. Pour the egg mixture into each turkey cup, filling about three-quarters full.\n4. Sprinkle shredded cheese on top.\n5. Bake for 15-18 minutes until the eggs are set and lightly golden."
        },
        {
            id: 22, title: "Grilled Chicken Caesar Salad", mealType: "Lunch", prepTime: "20 min", calories: 480,
            macros: { protein: "40 g", carbs: "16 g", fat: "28 g" },
            safeFor: ["cows_milk", "peanuts", "tree_nuts", "fish", "shellfish", "soy", "lactose"],
            ingredients: ["200g Chicken breast", "1 Romaine lettuce", "30g Parmesan, shaved", "2 tbsp Caesar dressing", "1 Egg"],
            instructions: "1. Season the chicken breast and grill for 5-6 minutes per side until cooked through, then let it rest and slice.\n2. Boil the egg for 8 minutes, cool, peel and quarter it.\n3. Wash and chop the romaine lettuce, and place in a large bowl.\n4. Toss the lettuce with the Caesar dressing.\n5. Top with the sliced chicken, boiled egg and shaved Parmesan."
        },
        {
            id: 23, title: "Black Bean & Corn Salad", mealType: "Lunch", prepTime: "15 min", calories: 390,
            macros: { protein: "14 g", carbs: "56 g", fat: "12 g" },
            safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"],
            ingredients: ["1 can Black beans", "150g Sweet corn", "1 Red bell pepper", "1 Lime", "2 tbsp Olive oil", "1 tsp Cumin"],
            instructions: "1. Drain and rinse the black beans and corn.\n2. Dice the red bell pepper into small pieces.\n3. In a large bowl, combine the beans, corn and bell pepper.\n4. Whisk together the lime juice, olive oil and cumin to make a dressing.\n5. Toss everything together and let it sit for 10 minutes before serving to let the flavors combine."
        },
        {
            id: 24, title: "Tuna Salad Lettuce Wraps", mealType: "Lunch", prepTime: "12 min", calories: 340,
            macros: { protein: "30 g", carbs: "8 g", fat: "20 g" },
            safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "shellfish", "wheat", "soy", "lactose"],
            ingredients: ["1 can Tuna, drained", "2 tbsp Mayonnaise", "1/4 Red onion, diced", "1 stalk Celery, diced", "1 Iceberg lettuce"],
            instructions: "1. Flake the tuna into a bowl and mix with the mayonnaise.\n2. Stir in the diced red onion and celery.\n3. Separate the lettuce into individual leaves to use as wraps.\n4. Spoon the tuna mixture into each lettuce leaf.\n5. Fold and serve immediately, or chill for 10 minutes for extra crunch."
        },
        {
            id: 25, title: "Falafel Pita with Tahini", mealType: "Lunch", prepTime: "25 min", calories: 460,
            macros: { protein: "16 g", carbs: "58 g", fat: "18 g" },
            safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "soy", "lactose"],
            ingredients: ["8 Falafel balls", "1 Pita bread", "2 tbsp Tahini sauce", "1/2 Cucumber", "1 Tomato", "2 tbsp Fresh parsley, chopped"],
            instructions: "1. Warm or fry the falafel balls according to package instructions until golden and heated through.\n2. Dice the cucumber and tomato.\n3. Warm the pita bread lightly in a dry pan or toaster.\n4. Fill the pita with falafel, cucumber, tomato and chopped parsley.\n5. Drizzle generously with tahini sauce before serving."
        },
        {
            id: 26, title: "Vegan Black Bean Tacos", mealType: "Dinner", prepTime: "20 min", calories: 420,
            macros: { protein: "16 g", carbs: "56 g", fat: "14 g" },
            safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"],
            ingredients: ["1 can Black beans", "4 Corn tortillas", "1 Avocado", "1/4 Red cabbage, shredded", "1 Lime", "1 tsp Smoked paprika"],
            instructions: "1. Warm the black beans in a pan with smoked paprika for 5 minutes, mashing slightly.\n2. Warm the corn tortillas in a dry skillet for 30 seconds per side.\n3. Slice the avocado and shred the red cabbage.\n4. Fill each tortilla with the black beans, avocado and cabbage.\n5. Squeeze fresh lime juice over the tacos before serving."
        },
        {
            id: 27, title: "Chicken Fajita Bowl", mealType: "Dinner", prepTime: "25 min", calories: 500,
            macros: { protein: "42 g", carbs: "30 g", fat: "22 g" },
            safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"],
            ingredients: ["200g Chicken breast", "1 Bell pepper", "1/2 Onion", "150g Cooked rice", "1 tbsp Olive oil", "1 tsp Chili powder"],
            instructions: "1. Slice the chicken, bell pepper and onion into thin strips.\n2. Heat the olive oil in a large skillet and cook the chicken with the chili powder for 5-6 minutes until browned.\n3. Add the peppers and onion, and sauté for another 4-5 minutes until softened.\n4. Serve the fajita mixture over the cooked rice.\n5. Finish with a squeeze of lime if desired."
        },
        {
            id: 28, title: "Turkey Meatballs with Zucchini Noodles", mealType: "Dinner", prepTime: "30 min", calories: 440,
            macros: { protein: "38 g", carbs: "16 g", fat: "24 g" },
            safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"],
            ingredients: ["250g Ground turkey", "1 Egg", "2 Zucchini, spiralized", "1/2 Onion, grated", "2 tbsp Tomato sauce", "1 tsp Italian herbs"],
            instructions: "1. Mix the ground turkey with the egg, grated onion and Italian herbs, then shape into small meatballs.\n2. Heat a pan and cook the meatballs for 8-10 minutes, turning occasionally, until browned and cooked through.\n3. Spiralize the zucchini into noodles.\n4. Warm the tomato sauce in a separate pan and toss in the zucchini noodles for 2 minutes to soften slightly.\n5. Serve the meatballs over the zucchini noodles, topped with extra sauce."
        },
        {
            id: 29, title: "Eggplant Parmesan Bake", mealType: "Dinner", prepTime: "40 min", calories: 480,
            macros: { protein: "20 g", carbs: "38 g", fat: "26 g" },
            safeFor: ["vegetarian", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "soy"],
            ingredients: ["1 Large eggplant", "200g Tomato sauce", "100g Mozzarella, shredded", "30g Parmesan, grated", "2 tbsp Olive oil", "1 tsp Oregano"],
            instructions: "1. Preheat the oven to 200°C. Slice the eggplant into rounds and brush lightly with olive oil.\n2. Roast the eggplant slices for 15 minutes until softened and lightly browned.\n3. In a baking dish, layer the eggplant with tomato sauce, mozzarella and a sprinkle of oregano, repeating the layers.\n4. Top with the grated Parmesan.\n5. Bake for 15-18 minutes until the cheese is bubbly and golden, then let rest for 5 minutes before serving."
        }
    ];


    /* --------------------------------------------------------------------
       ESTAT DE L'APLICACIÓ
       -------------------------------------------------------------------- */

    let selectedRestrictions = JSON.parse(localStorage.getItem("nutrisafe_restrictions")) || [];
    let tempOnboardingRestrictions = [];
    let currentWeekPlan = [];
    let currentFamilyData = [];
    let isFamilyMode = false;
    let currentSelectedMealId = null;
    let pendingSwapIndex = null;
    let pendingSwapRecipe = null;

    function init() {
        renderSettingsCheckboxes();
        setupFamilyMembersUI(parseInt(document.getElementById("family-count-input")?.value) || 4);
        setupEventListeners();
        generateIndividualMenu();
    }

    /* --------------------------------------------------------------------
       FUNCIONS D'INTERFÍCIE GENERALS (abans vivien a l'HTML, ara centralitzades aquí)
       -------------------------------------------------------------------- */

    window.switchTab = function(tabId) {
        document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
        const target = document.getElementById(tabId);
        if (target) target.classList.add("active");

        document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
        const activeBtn = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
        if (activeBtn) activeBtn.classList.add("active");
    };

    window.openModal = function(id) {
        const modal = document.getElementById(id);
        if (modal) modal.style.display = "flex";
    };

    window.closeModal = function(id) {
        const modal = document.getElementById(id);
        if (modal) modal.style.display = "none";
    };

    window.showToast = function(msg) {
        const container = document.getElementById("toast-container");
        if (!container) return;
        const t = document.createElement("div");
        t.className = "toast";
        t.innerText = msg;
        container.appendChild(t);
        setTimeout(() => t.remove(), 2500);
    };

    window.shareWhatsApp = function() {
        const items = buildShoppingListText();
        const text = encodeURIComponent(items);
        window.open(`https://wa.me/?text=${text}`, "_blank");
    };

    window.copyShoppingList = function() {
        const text = buildShoppingListText();
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                showToast("Shopping list copied to clipboard! 📋");
            }).catch(() => {
                showToast("Could not copy the list. Please try manually.");
            });
        } else {
            showToast("Copy is not supported in this browser.");
        }
    };

    function buildShoppingListText() {
        const listEl = document.getElementById("main-grocery-list");
        if (!listEl) return "🛒 NutriSafe Shopping List";
        let text = "🛒 *NutriSafe Shopping List*\n";
        listEl.querySelectorAll("li").forEach(li => {
            if (li.classList.contains("shopping-list-item")) {
                const span = li.querySelector("span");
                text += `- ${span ? span.innerText : li.innerText}\n`;
            } else {
                text += `\n${li.innerText}\n`;
            }
        });
        return text.trim();
    }

    /* --------------------------------------------------------------------
       CHECKBOXES DE DIETES/AL·LÈRGIES (reutilitzable per settings i onboarding)
       -------------------------------------------------------------------- */

    function renderDietCheckboxList(containerId, selectedList, onToggle) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = "";

        dietaryOptions.forEach(opt => {
            const label = document.createElement("label");
            label.className = "checkbox-item";

            const isChecked = selectedList.includes(opt.id) ? "checked" : "";
            label.innerHTML = `<input type="checkbox" value="${opt.id}" ${isChecked}> ${opt.label}`;

            const checkbox = label.querySelector("input");
            checkbox.addEventListener("change", () => onToggle(opt.id, checkbox.checked));

            container.appendChild(label);
        });
    }

    function renderSettingsCheckboxes() {
        renderDietCheckboxList("settings-checkboxes", selectedRestrictions, (id, checked) => {
            if (checked) {
                if (id === "none") {
                    selectedRestrictions = ["none"];
                } else {
                    selectedRestrictions = selectedRestrictions.filter(r => r !== "none");
                    selectedRestrictions.push(id);
                }
            } else {
                selectedRestrictions = selectedRestrictions.filter(r => r !== id);
            }
            localStorage.setItem("nutrisafe_restrictions", JSON.stringify(selectedRestrictions));
            renderSettingsCheckboxes();
            generateIndividualMenu();
            showToast("Preferences updated & menu regenerated! 🥗");
        });
    }

    function renderOnboardingDietCheckboxes() {
        tempOnboardingRestrictions = [...selectedRestrictions];
        renderDietCheckboxList("onboarding-diet-checkboxes", tempOnboardingRestrictions, (id, checked) => {
            if (checked) {
                if (id === "none") {
                    tempOnboardingRestrictions = ["none"];
                } else {
                    tempOnboardingRestrictions = tempOnboardingRestrictions.filter(r => r !== "none");
                    tempOnboardingRestrictions.push(id);
                }
            } else {
                tempOnboardingRestrictions = tempOnboardingRestrictions.filter(r => r !== id);
            }
        });
    }

    function setupFamilyMembersUI(count) {
        const grid = document.getElementById("family-members-grid");
        if (!grid) return;
        grid.innerHTML = "";

        for (let i = 1; i <= count; i++) {
            const card = document.createElement("div");
            card.className = "card member-card";
            card.style.cssText = "margin-bottom: 12px; padding: 12px; background: #f9f9f9; border-radius: 8px;";

            let optionsHTML = "";
            dietaryOptions.forEach(opt => {
                optionsHTML += `
                    <label style="display: inline-block; margin: 3px 6px; font-size: 12px;">
                        <input type="checkbox" class="member-restriction" value="${opt.id}">
                        ${opt.label}
                    </label>
                `;
            });

            card.innerHTML = `
                <div>
                    <strong>Member #${i} Name:</strong>
                    <input type="text" class="member-name" value="Person ${i}" style="width:100%; padding: 6px; margin: 4px 0 8px 0; border: 1px solid #ccc; border-radius: 4px;">
                </div>
                <div>
                    <label style="font-size: 12px; font-weight: bold;">Dietary Needs:</label>
                    <div style="background: #fff; border: 1px solid #ddd; padding: 6px; border-radius: 4px; max-height: 90px; overflow-y: auto;">
                        ${optionsHTML}
                    </div>
                </div>
            `;
            grid.appendChild(card);
        }
    }

    function getMaxTimePerMeal() {
        const timeSelect = document.getElementById("settings-cooking-time");
        const totalMinutes = timeSelect ? parseInt(timeSelect.value) : 60;
        return (totalMinutes / 3) + 5;
    }

    function getPrepTimeInt(prepTimeStr) {
        return parseInt(prepTimeStr) || 0;
    }

    /* --------------------------------------------------------------------
       FILTRATGE DE RESTRICCIONS
       -------------------------------------------------------------------- */

    function isRecipeSafeForRestrictions(recipe, restrictions) {
        if (!restrictions || restrictions.length === 0 || restrictions.includes("none")) return true;

        const ingText = recipe.ingredients.join(" ").toLowerCase();
        const titleText = recipe.title.toLowerCase();
        const safeList = recipe.safeFor || [];

        for (const rest of restrictions) {
            if (rest === "vegan") {
                const hasMeat = /chicken|beef|salmon|steak|turkey|shrimp|cod|prawn/.test(ingText) || /chicken|beef|salmon|steak|turkey|shrimp|cod|prawn/.test(titleText);
                const hasAnimalByproducts = /egg|eggs|milk|cheese|butter|honey|feta/.test(ingText);
                if (hasMeat || hasAnimalByproducts || !safeList.includes("vegan")) return false;
            } else if (rest === "vegetarian") {
                const hasMeat = /chicken|beef|salmon|steak|turkey|shrimp|cod|prawn/.test(ingText) || /chicken|beef|salmon|steak|turkey|shrimp|cod|prawn/.test(titleText);
                if (hasMeat || !safeList.includes("vegetarian")) return false;
            } else {
                if (!safeList.includes(rest)) return false;
            }
        }
        return true;
    }

    function isRecipeSafeForFamily(recipe, familyData) {
        if (!familyData || familyData.length === 0) return true;
        for (const member of familyData) {
            if (!isRecipeSafeForRestrictions(recipe, member.restrictions)) return false;
        }
        return true;
    }

    /* --------------------------------------------------------------------
       ONBOARDING
       -------------------------------------------------------------------- */

    window.finishOnboarding = function(target) {
        const onboardingModal = document.getElementById("onboarding-modal");

        const onboardingTime = document.getElementById("onboarding-time");
        const settingsTime = document.getElementById("settings-cooking-time");
        if (onboardingTime && settingsTime) {
            settingsTime.value = onboardingTime.value;
        }

        if (target === "family") {
            if (onboardingModal) onboardingModal.style.display = "none";
            document.getElementById("nav-text-individual").innerText = "Recipes";
            document.getElementById("planner-tab-title").innerText = "Family Recipes";
            const restrCard = document.getElementById("settings-restrictions-card");
            if (restrCard) restrCard.style.display = "none";
            openModal("premium-modal");
            switchTab("family-tab");
        } else {
            // En lloc de tancar l'onboarding directament, preguntem primer per al·lèrgies/dietes
            if (onboardingModal) onboardingModal.style.display = "none";
            renderOnboardingDietCheckboxes();
            openModal("onboarding-diet-modal");
        }
    };

    window.confirmOnboardingDiet = function() {
        selectedRestrictions = [...tempOnboardingRestrictions];
        localStorage.setItem("nutrisafe_restrictions", JSON.stringify(selectedRestrictions));

        closeModal("onboarding-diet-modal");
        renderSettingsCheckboxes();

        document.getElementById("nav-text-individual").innerText = "Individual Plan";
        document.getElementById("planner-tab-title").innerText = "Your Weekly Plan";
        const restrCard = document.getElementById("settings-restrictions-card");
        if (restrCard) restrCard.style.display = "block";

        generateIndividualMenu();
        switchTab("planner-tab");
        showToast("Menu generated based on your preferences! 🥗");
    };

    /* --------------------------------------------------------------------
       ACCIONS DE LLISTA DE LA COMPRA
       -------------------------------------------------------------------- */

    window.clearCheckedShoppingItems = function() {
        const checkboxes = document.querySelectorAll("#main-grocery-list input[type='checkbox']");
        checkboxes.forEach(cb => cb.checked = false);
        document.querySelectorAll("#main-grocery-list .shopping-list-item").forEach(li => li.classList.remove("checked"));
        showToast("Checked items cleared! 🛒");
    };

    window.toggleShoppingItem = function(checkbox) {
        const li = checkbox.closest("li");
        if (li) {
            if (checkbox.checked) li.classList.add("checked");
            else li.classList.remove("checked");
        }
    };

    window.regenerateWeekWithRotation = function() {
        if (isFamilyMode) generateFamilyMenu();
        else generateIndividualMenu(true);
        showToast("New weekly plan generated! 🔄");
    };

    /* --------------------------------------------------------------------
       GENERACIÓ DE MENÚS
       -------------------------------------------------------------------- */

    function generateIndividualMenu(isRotation = false) {
        isFamilyMode = false;
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const mealTypes = ["Breakfast", "Lunch", "Dinner"];
        const maxTimePerMeal = getMaxTimePerMeal();

        const oldTitles = currentWeekPlan.map(item => item.recipe.title);
        currentWeekPlan = [];

        // Recorda els darrers 2 dies triats per a cada tipus d'àpat, per no repetir
        // el mateix plat dins d'una finestra de 3 dies.
        const recentByType = { Breakfast: [], Lunch: [], Dinner: [] };

        days.forEach(day => {
            mealTypes.forEach(type => {
                // Cascada: intentem sempre trobar una recepta segura per a les teves restriccions,
                // relaxant primer el temps de cocció i, com a últim recurs, el tipus d'àpat.
                let available = recipes.filter(r =>
                    r.mealType === type &&
                    getPrepTimeInt(r.prepTime) <= maxTimePerMeal &&
                    isRecipeSafeForRestrictions(r, selectedRestrictions)
                );
                if (available.length === 0) available = recipes.filter(r => r.mealType === type && isRecipeSafeForRestrictions(r, selectedRestrictions));
                if (available.length === 0) available = recipes.filter(r => isRecipeSafeForRestrictions(r, selectedRestrictions));
                if (available.length === 0) available = recipes.filter(r => r.mealType === type);

                // Evitem repetir un plat que ja hem menjat en els 2 dies anteriors (finestra de 3 dies)
                const notRecent = available.filter(r => !recentByType[type].includes(r.title));
                if (notRecent.length > 0) available = notRecent;

                if (isRotation && available.length > 1) {
                    const filtered = available.filter(r => !oldTitles.includes(r.title));
                    if (filtered.length > 0) available = filtered;
                }

                const recipe = available[Math.floor(Math.random() * available.length)];
                recentByType[type] = [recipe.title, ...recentByType[type]].slice(0, 2);

                currentWeekPlan.push({
                    day, type, recipe,
                    familyTag: selectedRestrictions.length && !selectedRestrictions.includes("none") ? `Personal (Adapted)` : "Personal Plan"
                });
            });
        });

        renderCalendarFromPlan();
        updateShoppingList();
    }

    function generateFamilyMenu() {
        isFamilyMode = true;
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const mealTypes = ["Breakfast", "Lunch", "Dinner"];
        const maxTimePerMeal = getMaxTimePerMeal();

        currentWeekPlan = [];
        const memberCards = document.querySelectorAll(".member-card");
        const familyData = [];

        memberCards.forEach((card, idx) => {
            const nameInput = card.querySelector(".member-name");
            const name = nameInput?.value.trim() || `Person ${idx + 1}`;
            const restrictions = Array.from(card.querySelectorAll("input.member-restriction:checked")).map(cb => cb.value);
            familyData.push({ name, restrictions });
        });

        currentFamilyData = familyData;

        // Només diem "Adapted" si algú de la família té una restricció de veritat.
        const anyRealRestrictions = familyData.some(m => m.restrictions && m.restrictions.length > 0 && !m.restrictions.includes("none"));
        const familyTagText = anyRealRestrictions
            ? `Adapted for ${familyData.length} members`
            : `Family Plan (${familyData.length} members)`;

        // Recorda els darrers 2 dies triats per a cada tipus d'àpat, per no repetir
        // el mateix plat dins d'una finestra de 3 dies.
        const recentByType = { Breakfast: [], Lunch: [], Dinner: [] };

        days.forEach(day => {
            mealTypes.forEach(type => {
                // Cascada: si no trobem cap recepta segura per a tothom dins del tipus d'àpat
                // i el temps disponible, anem relaxant les condicions però MAI la seguretat,
                // fins trobar una recepta que sigui apta per a tots els membres de la família.
                let valid = recipes.filter(r =>
                    r.mealType === type &&
                    getPrepTimeInt(r.prepTime) <= maxTimePerMeal &&
                    isRecipeSafeForFamily(r, familyData)
                );
                if (valid.length === 0) valid = recipes.filter(r => r.mealType === type && isRecipeSafeForFamily(r, familyData));
                if (valid.length === 0) valid = recipes.filter(r => isRecipeSafeForFamily(r, familyData));
                if (valid.length === 0) valid = recipes.filter(r => r.mealType === type);

                // Evitem repetir un plat que ja hem menjat en els 2 dies anteriors (finestra de 3 dies)
                const notRecent = valid.filter(r => !recentByType[type].includes(r.title));
                if (notRecent.length > 0) valid = notRecent;

                const recipe = valid[Math.floor(Math.random() * valid.length)];
                recentByType[type] = [recipe.title, ...recentByType[type]].slice(0, 2);

                // Si, malgrat la cascada, el plat triat no és apte per a algú en concret,
                // li busquem una alternativa personal que SÍ pugui menjar.
                const personalAlternatives = [];
                familyData.forEach(m => {
                    if (!isRecipeSafeForRestrictions(recipe, m.restrictions)) {
                        let altPool = recipes.filter(r => r.mealType === type && getPrepTimeInt(r.prepTime) <= maxTimePerMeal && isRecipeSafeForRestrictions(r, m.restrictions));
                        if (altPool.length === 0) altPool = recipes.filter(r => r.mealType === type && isRecipeSafeForRestrictions(r, m.restrictions));
                        if (altPool.length === 0) altPool = recipes.filter(r => isRecipeSafeForRestrictions(r, m.restrictions));
                        if (altPool.length > 0) {
                            const altRecipe = altPool[Math.floor(Math.random() * altPool.length)];
                            personalAlternatives.push({ name: m.name, recipe: altRecipe });
                        }
                    }
                });

                currentWeekPlan.push({
                    day, type, recipe,
                    familyTag: familyTagText,
                    personalAlternatives
                });
            });
        });

        renderCalendarFromPlan();
        updateShoppingList();
        showToast("Smart Family Plan generated successfully! 👨‍👩‍👧‍👦");
    }

    /* --------------------------------------------------------------------
       RENDERITZAT DEL CALENDARI
       -------------------------------------------------------------------- */

    function renderCalendarFromPlan() {
        const grid = document.getElementById("calendar-grid");
        if (!grid) return;
        grid.innerHTML = "";

        currentWeekPlan.forEach((item, index) => {
            const card = document.createElement("div");
            card.className = "card meal-card";

            const altHtml = (item.personalAlternatives || []).map((pa, i) =>
                `<div class="alt-for-box" data-alt-i="${i}" style="background:#fff3e0;color:#e65100;font-size:11px;padding:6px 8px;border-radius:6px;margin-top:6px;cursor:pointer;font-weight:bold;">🍽️ Alternative for: ${pa.name} — tap to view</div>`
            ).join("");

            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                        <span style="font-size: 11px; font-weight: bold; color: #888; text-transform: uppercase;">${item.day} — ${item.type}</span>
                        <h3 style="margin: 4px 0; color: #2e7d32;">${item.recipe.title}</h3>
                        <p style="font-size: 12px; color: #555;">⏱️ ${item.recipe.prepTime} &nbsp;|&nbsp; 🔥 ${item.recipe.calories} kcal</p>
                        <span class="family-tag">${item.familyTag}</span>
                        ${altHtml}
                    </div>
                    <button class="btn-secondary" style="font-size: 11px; padding: 4px 8px;" onclick="event.stopPropagation(); openSwapModal(${index})">🔄 Change</button>
                </div>
            `;

            card.querySelectorAll(".alt-for-box").forEach(box => {
                const i = parseInt(box.getAttribute("data-alt-i"));
                box.addEventListener("click", (e) => {
                    e.stopPropagation();
                    const pa = (item.personalAlternatives || [])[i];
                    if (pa) openPersonalAlternativeModal(pa);
                });
            });
            card.addEventListener("click", () => openRecipeModal(index));
            grid.appendChild(card);
        });
    }

    /* --------------------------------------------------------------------
       MODAL DE RECEPTA (normal + previsualització d'alternatives)
       -------------------------------------------------------------------- */

    function populateRecipeModal(recipe, tagText) {
        document.getElementById("recipe-title").innerText = recipe.title;
        document.getElementById("recipe-family-info").innerText = tagText;

        const macrosList = document.getElementById("recipe-macros");
        macrosList.innerHTML = "";
        const macroEntries = [
            ["Calories", recipe.calories + " kcal"],
            ["Protein", recipe.macros.protein],
            ["Carbs", recipe.macros.carbs],
            ["Fat", recipe.macros.fat]
        ];
        macroEntries.forEach(([label, value]) => {
            const li = document.createElement("li");
            li.innerText = `${label}: ${value}`;
            macrosList.appendChild(li);
        });

        const ingList = document.getElementById("recipe-ingredients");
        ingList.innerHTML = "";
        recipe.ingredients.forEach(ing => {
            const li = document.createElement("li");
            li.innerText = ing;
            ingList.appendChild(li);
        });

        document.getElementById("recipe-instructions").innerText = recipe.instructions;
    }

    function openRecipeModal(index) {
        currentSelectedMealId = index;
        const meal = currentWeekPlan[index];
        if (!meal) return;

        populateRecipeModal(meal.recipe, meal.familyTag);

        const useBtn = document.getElementById("recipe-use-btn");
        if (useBtn) useBtn.style.display = "none";
        pendingSwapIndex = null;
        pendingSwapRecipe = null;

        openModal("recipe-modal");
    }

    function previewAlternativeRecipe(mealIndex, altRecipe, tagText) {
        pendingSwapIndex = mealIndex;
        pendingSwapRecipe = altRecipe;

        populateRecipeModal(altRecipe, tagText || "Alternative option");

        const useBtn = document.getElementById("recipe-use-btn");
        if (useBtn) useBtn.style.display = "block";

        openModal("recipe-modal");
    }

    function openPersonalAlternativeModal(personalAlt) {
        populateRecipeModal(personalAlt.recipe, `Alternative for ${personalAlt.name}`);

        const useBtn = document.getElementById("recipe-use-btn");
        if (useBtn) useBtn.style.display = "none";
        pendingSwapIndex = null;
        pendingSwapRecipe = null;

        openModal("recipe-modal");
    }

    window.openSwapFromModal = function() {
        if (currentSelectedMealId === null || currentSelectedMealId === undefined) return;
        closeModal("recipe-modal");
        window.openSwapModal(currentSelectedMealId);
    };

    window.confirmUseAlternative = function() {
        if (pendingSwapIndex === null || !pendingSwapRecipe) return;

        currentWeekPlan[pendingSwapIndex].recipe = pendingSwapRecipe;

        renderCalendarFromPlan();
        updateShoppingList();

        pendingSwapIndex = null;
        pendingSwapRecipe = null;

        closeModal("recipe-modal");
        closeModal("swap-modal");
        showToast("Meal updated successfully! 🔄");
    };

    /* --------------------------------------------------------------------
       MODAL DE CANVI DE PLAT (SWAP) - amb previsualització completa
       -------------------------------------------------------------------- */

    window.openSwapModal = function(index) {
        currentSelectedMealId = index;
        const meal = currentWeekPlan[index];
        const modalList = document.getElementById("swap-alternatives-list");
        if (!meal || !modalList) return;
        modalList.innerHTML = "";

        const maxTime = getMaxTimePerMeal();
        const candidates = recipes.filter(r => r.mealType === meal.type && r.title !== meal.recipe.title);

        const safeCandidates = isFamilyMode
            ? candidates.filter(r => isRecipeSafeForFamily(r, currentFamilyData))
            : candidates.filter(r => isRecipeSafeForRestrictions(r, selectedRestrictions));

        const timeFiltered = safeCandidates.filter(r => getPrepTimeInt(r.prepTime) <= maxTime);
        const finalList = timeFiltered.length > 0 ? timeFiltered : (safeCandidates.length > 0 ? safeCandidates : candidates);

        if (finalList.length === 0) {
            modalList.innerHTML = "<p style='font-size:12px; color:#666;'>No alternatives available.</p>";
        } else {
            finalList.forEach(alt => {
                const isSafe = isFamilyMode
                    ? isRecipeSafeForFamily(alt, currentFamilyData)
                    : isRecipeSafeForRestrictions(alt, selectedRestrictions);

                const div = document.createElement("div");
                div.style.cssText = "display: flex; justify-content: space-between; align-items: center; background: #f8f9fa; padding: 10px; border-radius: 8px; border: 1px solid #e9ecef; gap: 8px;";
                div.innerHTML = `
                    <div>
                        <strong>${alt.title}</strong> ${isSafe ? '<span style="color:#2e7d32;font-size:10px;">✅ Safe for everyone</span>' : '<span style="color:#e67e22;font-size:10px;">⚠️ Check restrictions</span>'}
                        <p style="font-size: 11px; color: #666; margin: 2px 0 0 0;">⏱️ ${alt.prepTime} | 🔥 ${alt.calories} kcal</p>
                    </div>
                    <div style="display:flex; gap:6px; flex-shrink:0;">
                        <button class="btn-secondary view-alt-btn" style="padding: 5px 8px; font-size: 12px; width:auto;" title="View full recipe">👁️</button>
                        <button class="btn-primary select-alt-btn" style="padding: 5px 10px; font-size: 12px; width:auto;">Select</button>
                    </div>
                `;

                div.querySelector(".view-alt-btn").addEventListener("click", () => {
                    previewAlternativeRecipe(index, alt, isFamilyMode ? `Adapted for ${currentFamilyData.length} members` : "Personal (Adapted)");
                });

                div.querySelector(".select-alt-btn").addEventListener("click", () => {
                    currentWeekPlan[index].recipe = alt;
                    renderCalendarFromPlan();
                    updateShoppingList();
                    closeModal("swap-modal");
                    showToast(`Meal updated to ${alt.title}! ✨`);
                });

                modalList.appendChild(div);
            });
        }

        openModal("swap-modal");
    };

    /* --------------------------------------------------------------------
       LLISTA DE LA COMPRA (per categories, es refà a cada canvi de menú)
       -------------------------------------------------------------------- */

    function updateShoppingList() {
        const groceryList = document.getElementById("main-grocery-list");
        if (!groceryList) return;
        groceryList.innerHTML = "";

        const aggregated = {};
        currentWeekPlan.forEach(item => {
            item.recipe.ingredients.forEach(ing => {
                aggregated[ing] = (aggregated[ing] || 0) + 1;
            });
        });

        const grouped = {};
        Object.keys(supermarketSections).forEach(sec => grouped[sec] = []);
        grouped["📦 Other Ingredients"] = [];

        Object.keys(aggregated).forEach(ing => {
            let placed = false;
            const lower = ing.toLowerCase();
            for (const [sec, keywords] of Object.entries(supermarketSections)) {
                if (keywords.some(kw => lower.includes(kw))) {
                    grouped[sec].push(ing);
                    placed = true;
                    break;
                }
            }
            if (!placed) grouped["📦 Other Ingredients"].push(ing);
        });

        Object.keys(grouped).forEach(sectionName => {
            const list = grouped[sectionName];
            if (list.length === 0) return;

            const secTitle = document.createElement("li");
            secTitle.style.cssText = "font-weight: bold; color: #2e7d32; margin-top: 12px; margin-bottom: 4px; font-size: 14px; list-style: none;";
            secTitle.innerText = sectionName;
            groceryList.appendChild(secTitle);

            list.forEach(ing => {
                const li = document.createElement("li");
                li.className = "shopping-list-item";
                li.innerHTML = `
                    <input type="checkbox" onchange="toggleShoppingItem(this)">
                    <span>${ing}</span>
                `;
                groceryList.appendChild(li);
            });
        });
    }

    /* --------------------------------------------------------------------
       EVENT LISTENERS ESTÀTICS
       -------------------------------------------------------------------- */

    function setupEventListeners() {
        const updateFamilyBtn = document.getElementById("update-family-count-btn");
        if (updateFamilyBtn) {
            updateFamilyBtn.addEventListener("click", () => {
                const count = parseInt(document.getElementById("family-count-input").value) || 4;
                setupFamilyMembersUI(count);
                showToast(`Family updated to ${count} members! 👥`);
            });
        }

        const generateFamilyBtn = document.getElementById("generate-family-btn");
        if (generateFamilyBtn) {
            generateFamilyBtn.addEventListener("click", () => {
                closeModal("premium-modal");
                switchTab("planner-tab");
                generateFamilyMenu();
            });
        }

        const timeSelect = document.getElementById("settings-cooking-time");
        if (timeSelect) {
            timeSelect.addEventListener("change", () => {
                if (isFamilyMode) generateFamilyMenu();
                else generateIndividualMenu();
                showToast("Menu updated based on cooking time! ⏱️");
            });
        }
    }

    init();
});
