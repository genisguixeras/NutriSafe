
// 1. Expanded Database of 27 Unique Recipes (9 Breakfasts, 9 Lunches, 9 Dinners)
const recipes = [
    // --- BREAKFASTS (9) ---
    {
        id: 1,
        title: "Gluten-Free Pancakes",
        mealType: "Breakfast",
        prepTime: "15 min",
        safeFrom: ["gluten", "lactose"],
        ingredients: ["Gluten-free flour blend", "Almond milk", "Egg", "Maple syrup"],
        instructions: "Mix the gluten-free flour with almond milk and egg. Whisk until smooth. Cook in a hot pan until golden brown on both sides."
    },
    {
        id: 2,
        title: "Creamy Oatmeal Bowl",
        mealType: "Breakfast",
        prepTime: "10 min",
        safeFrom: ["gluten", "nuts"],
        ingredients: ["Gluten-free oats", "Oat milk", "Banana", "Chia seeds"],
        instructions: "Cook the oats in oat milk. Stir in sliced banana and top with chia seeds."
    },
    {
        id: 3,
        title: "Avocado & Egg Toast",
        mealType: "Breakfast",
        prepTime: "5 min",
        safeFrom: ["lactose", "nuts"],
        ingredients: ["Sourdough bread", "Avocado", "Egg", "Salt and pepper"],
        instructions: "Toast the bread. Mash the avocado on top. Fry or poach an egg and place it on top."
    },
    {
        id: 4,
        title: "Berry & Spinach Smoothie",
        mealType: "Breakfast",
        prepTime: "5 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Mixed berries", "Spinach", "Water or Coconut water", "Plant protein powder"],
        instructions: "Blend all ingredients until completely smooth. Serve cold."
    },
    {
        id: 5,
        title: "Chia Seed Pudding",
        mealType: "Breakfast",
        prepTime: "5 min (prep)",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Chia seeds", "Coconut milk", "Vanilla extract", "Strawberries"],
        instructions: "Mix chia seeds with coconut milk and vanilla. Let it sit in the fridge overnight. Top with fresh strawberries."
    },
    {
        id: 6,
        title: "Scrambled Tofu Toast",
        mealType: "Breakfast",
        prepTime: "12 min",
        safeFrom: ["lactose", "nuts"],
        ingredients: ["Sourdough bread", "Firm tofu", "Turmeric", "Spinach", "Olive oil"],
        instructions: "Crumble tofu into a pan with olive oil and turmeric. Sauté with spinach and serve on toasted sourdough."
    },
    {
        id: 7,
        title: "Banana & Almond Butter Toast",
        mealType: "Breakfast",
        prepTime: "5 min",
        safeFrom: ["gluten", "lactose"],
        ingredients: ["Gluten-free bread", "Almond butter", "Banana slices", "Cinnamon"],
        instructions: "Toast the gluten-free bread. Spread a generous layer of almond butter, top with banana slices and a pinch of cinnamon."
    },
    {
        id: 8,
        title: "Fruit Salad with Mint",
        mealType: "Breakfast",
        prepTime: "10 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Orange", "Apple", "Blueberries", "Fresh mint", "Lime juice"],
        instructions: "Chop the fresh fruits. Toss them in a bowl with freshly squeezed lime juice and chopped mint leaves."
    },
    {
        id: 9,
        title: "Classic Shakshuka",
        mealType: "Breakfast",
        prepTime: "20 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Eggs", "Canned tomatoes", "Bell pepper", "Onion", "Cumin"],
        instructions: "Sauté chopped onion and bell pepper. Add canned tomatoes and cumin, simmer. Make small wells, crack the eggs in, and cover until eggs are cooked."
    },

    // --- LUNCHES (9) ---
    {
        id: 10,
        title: "Chicken and Rice Stir-fry",
        mealType: "Lunch",
        prepTime: "20 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Chicken breast", "Jasmine rice", "Gluten-free soy sauce", "Bell peppers", "Carrots"],
        instructions: "Cook the rice. Sauté chicken and veggies. Mix them together with gluten-free soy sauce."
    },
    {
        id: 11,
        title: "Quinoa Cucumber Salad",
        mealType: "Lunch",
        prepTime: "15 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Quinoa", "Cucumber", "Cherry tomatoes", "Olive oil", "Lemon juice"],
        instructions: "Boil quinoa and let it cool. Toss with diced cucumber, tomatoes, olive oil, and lemon juice."
    },
    {
        id: 12,
        title: "Lentil Vegetable Soup",
        mealType: "Lunch",
        prepTime: "35 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Brown lentils", "Carrots", "Celery", "Tomato paste", "Vegetable broth"],
        instructions: "Simmer diced carrots, celery, and lentils in vegetable broth with a tablespoon of tomato paste until lentils are tender."
    },
    {
        id: 13,
        title: "Beef and Broccoli Bowl",
        mealType: "Lunch",
        prepTime: "20 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Beef strips", "Broccoli florets", "Garlic", "Ginger", "Tamari sauce"],
        instructions: "Sauté garlic and ginger. Add beef and cook through. Add broccoli and Tamari sauce, stir-fry until broccoli is tender-crisp."
    },
    {
        id: 14,
        title: "Tuna Salad Wrap",
        mealType: "Lunch",
        prepTime: "10 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Canned tuna", "Gluten-free tortilla", "Cucumber", "Mayonnaise (dairy-free)", "Lettuce"],
        instructions: "Mix tuna with dairy-free mayonnaise. Spread onto a gluten-free tortilla, add sliced cucumber and lettuce, then wrap tightly."
    },
    {
        id: 15,
        title: "Greek Chickpea Salad",
        mealType: "Lunch",
        prepTime: "12 min",
        safeFrom: ["gluten", "nuts"],
        ingredients: ["Canned chickpeas", "Feta cheese", "Cucumber", "Red onion", "Olive oil"],
        instructions: "Rinse chickpeas. Combine in a bowl with crumbled feta, diced cucumber, red onion, and drizzle with olive oil."
    },
    {
        id: 16,
        title: "Turkey and Avocado Sandwich",
        mealType: "Lunch",
        prepTime: "8 min",
        safeFrom: ["lactose", "nuts"],
        ingredients: ["Sourdough bread", "Sliced turkey breast", "Avocado", "Tomato slices", "Mustard"],
        instructions: "Assemble the sandwich using fresh sourdough bread, turkey slices, mashed avocado, tomato, and a spread of mustard."
    },
    {
        id: 17,
        title: "Sweet Potato & Black Bean Bowl",
        mealType: "Lunch",
        prepTime: "25 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Sweet potato cubes", "Canned black beans", "Coriander", "Lime", "Olive oil"],
        instructions: "Roast sweet potato cubes in the oven. Mix with warmed black beans, fresh coriander, and a squeeze of lime juice."
    },
    {
        id: 18,
        title: "Egg Fried Rice",
        mealType: "Lunch",
        prepTime: "15 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Cooked rice", "Eggs", "Green peas", "Spring onions", "Sesame oil"],
        instructions: "Sauté peas and spring onions. Push to the side, scramble the eggs in the pan, mix with rice and a dash of sesame oil."
    },

    // --- DINNERS (9) ---
    {
        id: 19,
        title: "Grilled Salmon with Broccoli",
        mealType: "Dinner",
        prepTime: "25 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Salmon fillet", "Broccoli", "Olive oil", "Lemon", "Garlic"],
        instructions: "Steam the broccoli. Sear the salmon in a pan with olive oil. Drizzle both with lemon juice and garlic."
    },
    {
        id: 20,
        title: "Steak with Sweet Potato Fries",
        mealType: "Dinner",
        prepTime: "30 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Beef steak", "Sweet potato", "Olive oil", "Rosemary"],
        instructions: "Bake sweet potato wedges with olive oil and rosemary. Sear steak in a hot pan to your preferred doneness."
    },
    {
        id: 21,
        title: "Lemon Herb Cod",
        mealType: "Dinner",
        prepTime: "20 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Cod fillet", "Fresh parsley", "Lemon slices", "Olive oil", "Asparagus"],
        instructions: "Place cod and asparagus on a baking tray. Drizzle with olive oil, top with parsley and lemon slices. Bake at 200°C for 15 minutes."
    },
    {
        id: 22,
        title: "Pork Chops with Apples",
        mealType: "Dinner",
        prepTime: "25 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Pork chops", "Apples", "Onion", "Cinnamon", "Olive oil"],
        instructions: "Sear pork chops. In the same pan, sauté sliced apples and onions with a pinch of cinnamon until soft. Serve apples over the chops."
    },
    {
        id: 23,
        title: "Baked Chicken Breasts",
        mealType: "Dinner",
        prepTime: "30 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Chicken breast", "Paprika", "Oregano", "Garlic powder", "Green beans"],
        instructions: "Season chicken with paprika, oregano, and garlic. Bake alongside green beans at 200°C for 22 minutes."
    },
    {
        id: 24,
        title: "Shrimp Garlic Pasta",
        mealType: "Dinner",
        prepTime: "18 min",
        safeFrom: ["lactose", "nuts"],
        ingredients: ["Pasta", "Shrimp", "Garlic", "Olive oil", "Red pepper flakes"],
        instructions: "Boil pasta. Sauté minced garlic and shrimp in plenty of olive oil. Toss pasta with the shrimp, garlic oil, and pepper flakes."
    },
    {
        id: 25,
        title: "Beef Bolognese with Zoodles",
        mealType: "Dinner",
        prepTime: "25 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Minced beef", "Zucchini (Zoodles)", "Crushed tomatoes", "Italian herbs", "Onion"],
        instructions: "Cook minced beef with onions. Pour crushed tomatoes and herbs, let it simmer. Serve over lightly sautéed zucchini noodles."
    },
    {
        id: 26,
        title: "Tofu & Vegetable Curry",
        mealType: "Dinner",
        prepTime: "25 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Tofu cubes", "Coconut milk", "Yellow curry paste", "Bell pepper", "Spinach"],
        instructions: "Sauté curry paste, pour coconut milk and bring to simmer. Add tofu and sliced vegetables, cook until tender."
    },
    {
        id: 27,
        title: "Turkey Burgers with Salad",
        mealType: "Dinner",
        prepTime: "20 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Ground turkey", "Mixed greens", "Tomato", "Cucumber", "Olive oil dressing"],
        instructions: "Shape ground turkey into patties and grill until cooked through. Serve alongside a fresh mixed salad with olive oil dressing."
    }
];

// Days of the week in Catalan for the UI
const days = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"];

// DOM Elements
const calendarGrid = document.getElementById("calendar-grid");
const listContainer = document.getElementById("list-container");
const checkboxes = document.querySelectorAll("#settings input[type='checkbox']");

// Store currently selected intolerances
let selectedIntolerances = [];

// Helper function to shuffle an array
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// 2. Intelligent Menu Generation (Leftovers are rotated, never consecutive)
function generateMenu() {
    calendarGrid.innerHTML = "";
    let activeMenuIngredients = [];

    // Filter recipes safe from checked intolerances
    const safeRecipes = recipes.filter(recipe => {
        return selectedIntolerances.every(intolerance => recipe.safeFrom.includes(intolerance));
    });

    // Helper to get unique, filtered options for each category
    const getFilteredChoices = (mealType) => {
        let filtered = safeRecipes.filter(r => r.mealType === mealType);
        if (filtered.length === 0) {
            filtered = recipes.filter(r => r.mealType === mealType);
        }
        return shuffle([...filtered]);
    };

    // --- STEP 1: PRE-SELECT THE UNIQUE MEALS TO BE ROTATED ---
    const bChoices = getFilteredChoices("Breakfast");
    const lChoices = getFilteredChoices("Lunch");
    const dChoices = getFilteredChoices("Dinner");

    // We only select 3 breakfast options
    const b1 = bChoices[0];
    const b2 = bChoices[1] || bChoices[0];
    const b3 = bChoices[2] || bChoices[0];

    // We only select 4 unique lunches (Lunch A, B, C, D)
    const lA = lChoices[0];
    const lB = lChoices[1] || lChoices[0];
    const lC = lChoices[2] || lChoices[0];
    const lD = lChoices[3] || lChoices[0];

    // We only select 4 unique dinners (Dinner A, B, C, D)
    const dA = dChoices[0];
    const dB = dChoices[1] || dChoices[0];
    const dC = dChoices[2] || dChoices[0];
    const dD = dChoices[3] || dChoices[0];

    // --- STEP 2: ASSIGN ROTATION TO PREVENT CONSECUTIVE REPETITIONS ---
    // Dilluns -> A, Dimarts -> B, Dimecres -> C, Dijous -> A, Divendres -> B, Dissabte -> C, Diumenge -> D
    const weeklyMenu = [
        { day: "Dilluns", breakfast: b1, lunch: lA, dinner: dA },
        { day: "Dimarts", breakfast: b2, lunch: lB, dinner: dB },
        { day: "Dimecres", breakfast: b3, lunch: lC, dinner: dC },
        { day: "Dijous", breakfast: b1, lunch: lA, dinner: dA },
        { day: "Divendres", breakfast: b2, lunch: lB, dinner: dB },
        { day: "Dissabte", breakfast: b3, lunch: lC, dinner: dC },
        { day: "Diumenge", breakfast: b1, lunch: lD, dinner: dD }
    ];

    // --- STEP 3: RENDER THE MENU ---
    weeklyMenu.forEach(dayPlan => {
        const dayCard = document.createElement("div");
        dayCard.className = "day-card";
        dayCard.innerHTML = `<h3>${dayPlan.day}</h3>`;

        const dayMeals = [dayPlan.breakfast, dayPlan.lunch, dayPlan.dinner];

        dayMeals.forEach(meal => {
            const mealDiv = document.createElement("div");
            mealDiv.className = "meal-item";
            
            const tagsHTML = meal.safeFrom.map(tag => `<span class="tag">${tag}-Free</span>`).join(" ");

            mealDiv.innerHTML = `
                <div class="meal-time-label">${meal.mealType}</div>
                <strong>${meal.title}</strong>
                <div class="meal-meta">${meal.prepTime} | ${tagsHTML}</div>
            `;
            dayCard.appendChild(mealDiv);

            // Collect ingredients
            activeMenuIngredients.push(...meal.ingredients);
        });

        calendarGrid.appendChild(dayCard);
    });

    // Update shopping list using only these selected ingredients
    updateShoppingList(activeMenuIngredients);
}

// 3. Update the shopping list view (with dynamic duplicates removed)
// 3. Smart Shopping List (Cleans duplicates, unifies casing and plurals)
function updateShoppingList(ingredients) {
    // 3. Smart Shopping List (Amb botó de control de bàsics)
let showPantry = false; // Estat inicial: amagats

function updateShoppingList(ingredients) {
    listContainer.innerHTML = "";
    
    const pantryStaples = [
        "olive oil", "salt and pepper", "water", "garlic", "onion", "onions", 
        "black pepper", "salt", "oregano", "paprika", "cumin", "cinnamon", 
        "fresh mint", "fresh parsley", "italian herbs", "lime juice", "lemon juice",
        "red pepper flakes", "yellow curry paste", "mustard"
    ];

    const normalizationMap = { /* (Mantén el mateix mapa de normalització que tenies) */
        "egg": "Eggs", "eggs": "Eggs", "avocado": "Avocado", "apple": "Apple",
        "apples": "Apple", "bell pepper": "Bell peppers", "bell peppers": "Bell peppers",
        "sweet potato cubes": "Sweet potato", "sweet potato": "Sweet potato",
        "tofu cubes": "Tofu", "tofu": "Tofu", "beef strips": "Beef steak",
        "beef steak": "Beef steak", "chicken breast": "Chicken breast",
        "sourdough bread": "Sourdough bread", "gluten-free bread": "Gluten-free bread",
        "canned tomato": "Canned tomatoes", "canned tomatoes": "Canned tomatoes",
        "cherry tomato": "Cherry tomatoes", "cherry tomatoes": "Cherry tomatoes",
        "tomato slices": "Tomato", "tomato": "Tomato", "mayonnaise (dairy-free)": "Mayonnaise",
        "mayonnaise": "Mayonnaise", "brown lentils": "Lentils", "lentils": "Lentils",
        "jasmine rice": "Jasmine rice", "cooked rice": "Jasmine rice",
        "zucchini (zoodles)": "Zucchini", "zucchini": "Zucchini", "lemon slices": "Lemon",
        "lemon": "Lemon"
    };

    // 1. Processar ingredients
    let cleanIngredients = ingredients
        .filter(item => item && typeof item === "string")
        .map(item => {
            const lower = item.trim().toLowerCase();
            return normalizationMap[lower] || item.charAt(0).toUpperCase() + item.slice(1).trim();
        });

    // 2. Aplicar filtre de rebost només si showPantry és fals
    if (!showPantry) {
        cleanIngredients = cleanIngredients.filter(item => !pantryStaples.includes(item.toLowerCase()));
    }

    const uniqueIngredients = [...new Set(cleanIngredients)].sort();

    // 3. Crear botó d'alternança
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = showPantry ? "Amagar bàsics" : "Veure bàsics del rebost";
    toggleBtn.style.marginBottom = "15px";
    toggleBtn.onclick = () => {
        showPantry = !showPantry;
        updateShoppingList(ingredients); // Torna a dibuixar amb l'estat nou
    };
    listContainer.appendChild(toggleBtn);

    // 4. Renderitzar la llista
    if (uniqueIngredients.length === 0) {
        listContainer.innerHTML += "<li>Tot net! No necessites res.</li>";
        return;
    }

    uniqueIngredients.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<label class="shopping-item"><input type="checkbox"> <span>${item}</span></label>`;
        listContainer.appendChild(li);
    });
}
// 4. Listen to checkbox changes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            selectedIntolerances.push(value);
        } else {
            selectedIntolerances = selectedIntolerances.filter(item => item !== value);
        }
        generateMenu();
    });
});

// Initial run on page load
generateMenu();
