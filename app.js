// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registered!', reg))
      .catch(err => console.error('Service Worker failed:', err));
  });
}

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

// Days of the week
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// DOM Elements
const calendarGrid = document.getElementById("calendar-grid");
const listContainer = document.getElementById("list-container");
const checkboxes = document.querySelectorAll("#settings input[type='checkbox']");

// Store currently selected intolerances
let selectedIntolerances = [];

// Helper function to shuffle an array (for random selection)
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// 2. Main function to filter recipes and build the menu (No repetitions in a 3-day window)
function generateMenu() {
    calendarGrid.innerHTML = "";
    let allIngredients = [];

    // Tracks recently used recipe IDs for the last 3 days to avoid immediate repeats
    // Index 0 = Breakfasts, Index 1 = Lunches, Index 2 = Dinners
    let recentMeals = {
        "Breakfast": [],
        "Lunch": [],
        "Dinner": []
    };

    days.forEach((day, index) => {
        // Create card for the day
        const dayCard = document.createElement("div");
        dayCard.className = "day-card";
        dayCard.innerHTML = `<h3>${day}</h3>`;

        // 1. Filter recipes safe from checked intolerances
        const safeRecipes = recipes.filter(recipe => {
            return selectedIntolerances.every(intolerance => recipe.safeFrom.includes(intolerance));
        });

        // Helper to select a unique meal type
        const getUniqueMeal = (mealType) => {
            // Find safe recipes for this specific meal type
            let filtered = safeRecipes.filter(r => r.mealType === mealType);
            
            // If no recipes match the strict filters, fallback to general recipe database for this type
            if (filtered.length === 0) {
                filtered = recipes.filter(r => r.mealType === mealType);
            }

            // Shuffle available choices to keep it dynamic
            let choices = shuffle([...filtered]);

            // Try to find a choice not used in the last 3 days
            let selected = choices.find(choice => !recentMeals[mealType].includes(choice.id));

            // If absolutely everything was used (e.g. strict filters left only 1-2 recipes), fallback to any choice
            if (!selected) {
                selected = choices[0];
            }

            // Update the 3-day history tracker (FIFO queue of max length 3)
            recentMeals[mealType].push(selected.id);
            if (recentMeals[mealType].length > 3) {
                recentMeals[mealType].shift(); // Remove the oldest item (4 days ago)
            }

            return selected;
        };

        // Select one breakfast, lunch, and dinner for the day
        const breakfast = getUniqueMeal("Breakfast");
        const lunch = getUniqueMeal("Lunch");
        const dinner = getUniqueMeal("Dinner");

        const dayMeals = [breakfast, lunch, dinner];

        dayMeals.forEach(meal => {
            const mealDiv = document.createElement("div");
            mealDiv.className = "meal-item";
            
            // Build tags HTML
            const tagsHTML = meal.safeFrom.map(tag => `<span class="tag">${tag}-Free</span>`).join(" ");

            mealDiv.innerHTML = `
                <div class="meal-time-label">${meal.mealType}</div>
                <strong>${meal.title}</strong>
                <div class="meal-meta">${meal.prepTime} | ${tagsHTML}</div>
            `;
            dayCard.appendChild(mealDiv);

            // Collect ingredients for the shopping list
            allIngredients.push(...meal.ingredients);
        });

        calendarGrid.appendChild(dayCard);
    });

    updateShoppingList(allIngredients);
}

// 3. Update the shopping list view
function updateShoppingList(ingredients) {
    listContainer.innerHTML = "";
    
    // Remove duplicates
    const uniqueIngredients = [...new Set(ingredients)];

    if (uniqueIngredients.length === 0) {
        listContainer.innerHTML = "<li>No items in your shopping list yet.</li>";
        return;
    }

    uniqueIngredients.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <label class="shopping-item">
                <input type="checkbox">
                <span>${item}</span>
            </label>
        `;
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
