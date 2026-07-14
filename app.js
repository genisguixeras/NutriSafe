// 1. Database of safe recipes with allergy tags
const recipes = [
    {
        id: 1,
        title: "Gluten-Free Pancakes",
        mealType: "Breakfast",
        prepTime: "15 min",
        safeFrom: ["gluten", "lactose"],
        ingredients: ["Gluten-free flour blend", "Almond milk", "Egg", "Maple syrup"],
        instructions: "Mix the gluten-free flour with almond milk and egg. Whisk until smooth. Cook in a hot pan until golden brown on both sides. Serve with maple syrup."
    },
    {
        id: 2,
        title: "Creamy Oatmeal bowl",
        mealType: "Breakfast",
        prepTime: "10 min",
        safeFrom: ["gluten", "nuts"],
        ingredients: ["Gluten-free oats", "Oat milk", "Banana", "Chia seeds"],
        instructions: "Cook the oats in oat milk over medium heat for 5-7 minutes. Stir in sliced banana and top with chia seeds."
    },
    {
        id: 3,
        title: "Avocado & Egg Toast",
        mealType: "Breakfast",
        prepTime: "5 min",
        safeFrom: ["lactose", "nuts"],
        ingredients: ["Sourdough bread", "Avocado", "Egg", "Salt and pepper"],
        instructions: "Toast the bread. Mash the avocado on top. Fry or poach an egg, place it on top of the avocado, and season with salt and pepper."
    },
    {
        id: 4,
        title: "Grilled Salmon with Broccoli",
        mealType: "Dinner",
        prepTime: "25 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Salmon fillet", "Broccoli", "Olive oil", "Lemon", "Garlic"],
        instructions: "Steam the broccoli. Heat olive oil in a pan, sear the salmon for 4 minutes on each side. Toss broccoli with minced garlic and lemon juice."
    },
    {
        id: 5,
        title: "Chicken and Rice Stir-fry",
        mealType: "Lunch",
        prepTime: "20 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Chicken breast", "Jasmine rice", "Soy sauce (Gluten-free)", "Bell peppers", "Carrots"],
        instructions: "Cook the rice. Sauté cubed chicken and sliced veggies in a pan. Add the cooked rice, pour gluten-free soy sauce, and stir-fry for 3 minutes."
    },
    {
        id: 6,
        title: "Quinoa Salad",
        mealType: "Lunch",
        prepTime: "15 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Quinoa", "Cucumber", "Cherry tomatoes", "Olive oil", "Lemon juice"],
        instructions: "Boil quinoa and let it cool. Dice the cucumber and tomatoes. Mix everything together in a bowl and dress with olive oil and fresh lemon juice."
    },
    {
        id: 7,
        title: "Steak with Sweet Potato Fries",
        mealType: "Dinner",
        prepTime: "30 min",
        safeFrom: ["gluten", "lactose", "nuts"],
        ingredients: ["Beef steak", "Sweet potato", "Olive oil", "Rosemary"],
        instructions: "Cut sweet potatoes into wedges, coat with olive oil and rosemary, and bake at 200°C for 25 minutes. Sear steak in a hot pan to your liking."
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

// 2. Main function to filter recipes and build the menu
function generateMenu() {
    calendarGrid.innerHTML = "";
    let allIngredients = [];

    days.forEach(day => {
        // Create card for the day
        const dayCard = document.createElement("div");
        dayCard.className = "day-card";
        dayCard.innerHTML = `<h3>${day}</h3>`;

        // Find meals that are safe based on checked filters
        const safeMeals = recipes.filter(recipe => {
            // Check if recipe is safe from ALL checked intolerances
            return selectedIntolerances.every(intolerance => recipe.safeFrom.includes(intolerance));
        });

        // Fallback if no recipes match the strict filters
        const availableMeals = safeMeals.length > 0 ? safeMeals : recipes;

        // Group by Breakfast, Lunch, Dinner and select one
        const breakfast = availableMeals.find(r => r.mealType === "Breakfast") || recipes[1];
        const lunch = availableMeals.find(r => r.mealType === "Lunch") || recipes[5];
        const dinner = availableMeals.find(r => r.mealType === "Dinner") || recipes[3];

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
