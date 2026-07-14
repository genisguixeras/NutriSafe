document.addEventListener("DOMContentLoaded", () => {
    const recipes = [
        { id: 1, title: "Gluten-Free Pancakes", mealType: "Breakfast", prepTime: "15 min", safeFrom: ["gluten", "lactose"], ingredients: ["Gluten-free flour", "Almond milk", "Eggs", "Maple syrup"] },
        { id: 2, title: "Creamy Oatmeal Bowl", mealType: "Breakfast", prepTime: "10 min", safeFrom: ["gluten", "nuts"], ingredients: ["Gluten-free oats", "Oat milk", "Banana", "Chia seeds"] },
        { id: 3, title: "Avocado & Egg Toast", mealType: "Breakfast", prepTime: "5 min", safeFrom: ["lactose", "nuts"], ingredients: ["Sourdough bread", "Avocado", "Eggs", "Salt and pepper"] },
        { id: 4, title: "Berry & Spinach Smoothie", mealType: "Breakfast", prepTime: "5 min", safeFrom: ["gluten", "lactose", "nuts"], ingredients: ["Mixed berries", "Spinach", "Water", "Plant protein powder"] },
        { id: 5, title: "Chia Seed Pudding", mealType: "Breakfast", prepTime: "5 min", safeFrom: ["gluten", "lactose", "nuts"], ingredients: ["Chia seeds", "Coconut milk", "Vanilla extract", "Strawberries"] },
        { id: 6, title: "Scrambled Tofu Toast", mealType: "Breakfast", prepTime: "12 min", safeFrom: ["lactose", "nuts"], ingredients: ["Sourdough bread", "Tofu", "Turmeric", "Spinach", "Olive oil"] },
        { id: 7, title: "Banana & Almond Butter Toast", mealType: "Breakfast", prepTime: "5 min", safeFrom: ["gluten", "lactose"], ingredients: ["Gluten-free bread", "Almond butter", "Banana", "Cinnamon"] },
        { id: 8, title: "Fruit Salad with Mint", mealType: "Breakfast", prepTime: "10 min", safeFrom: ["gluten", "lactose", "nuts"], ingredients: ["Orange", "Apple", "Blueberries", "Fresh mint", "Lime juice"] },
        { id: 9, title: "Classic Shakshuka", mealType: "Breakfast", prepTime: "20 min", safeFrom: ["gluten", "lactose", "nuts"], ingredients: ["Eggs", "Canned tomatoes", "Bell peppers", "Onion", "Cumin"] },
        { id: 10, title: "Chicken and Rice Stir-fry", mealType: "Lunch", prepTime: "20 min", safeFrom: ["gluten", "lactose", "nuts"], ingredients: ["Chicken breast", "Jasmine rice", "Gluten-free soy sauce", "Bell peppers", "Carrots"] },
        { id: 11, title: "Quinoa Cucumber Salad", mealType: "Lunch", prepTime: "15 min", safeFrom: ["gluten", "lactose", "nuts"], ingredients: ["Quinoa", "Cucumber", "Cherry tomatoes", "Olive oil", "Lemon"] },
        { id: 12, title: "Lentil Vegetable Soup", mealType: "Lunch", prepTime: "35 min", safeFrom: ["gluten", "lactose", "nuts"], ingredients: ["Lentils", "Carrots", "Celery", "Tomato paste", "Vegetable broth"] },
        { id: 13, title: "Beef and Broccoli Bowl", mealType: "Lunch", prepTime: "20 min", safeFrom: ["gluten", "lactose", "nuts"], ingredients: ["Beef steak", "Broccoli", "Garlic", "Ginger", "Tamari sauce"] },
        { id: 14, title: "Tuna Salad Wrap", mealType: "Lunch", prepTime: "10 min", safeFrom: ["gluten", "lactose", "nuts"], ingredients: ["Canned tuna", "Gluten-free tortilla", "Cucumber", "Mayonnaise", "Lettuce"] },
        { id: 15, title: "Greek Chickpea Salad", mealType: "Lunch", prepTime: "12 min", safeFrom: ["gluten", "nuts"], ingredients: ["Canned chickpeas", "Feta cheese", "Cucumber", "Onion", "Olive oil"] },
        { id: 16, title: "Turkey and Avocado Sandwich", mealType: "Lunch", prepTime: "8 min", safeFrom: ["lactose", "nuts"], ingredients: ["Sourdough bread", "Turkey breast", "Avocado", "Tomato", "Mustard"] },
        { id: 17, title: "Sweet Potato & Black Bean Bowl", mealType: "Lunch", prepTime: "25 min", safeFrom: ["gluten", "lactose", "nuts"], ingredients: ["Sweet potato", "Black beans", "Coriander", "Lime", "Olive oil"] },
        { id: 18, title: "Egg Fried Rice", mealType: "Lunch", prepTime: "15 min", safeFrom: ["gluten", "lactose", "nuts"], ingredients: ["Jasmine rice", "Eggs", "Green peas", "Onion", "Sesame oil"] },
        { id: 19, title: "Grilled Salmon with Broccoli", mealType: "Dinner", prepTime: "25 min", safeFrom: ["gluten", "lactose", "nuts"], ingredients: ["Salmon fillet", "Broccoli", "Olive oil", "Lemon", "Garlic"] },
        { id: 20, title: "Steak with Sweet Potato Fries", mealType: "Dinner", prepTime: "30 min", safeFrom: ["gluten", "lactose", "nuts"], ingredients: ["Beef steak", "Sweet potato", "Olive oil", "Rosemary"] },
        { id: 21, title: "Lemon Herb Cod", mealType: "Dinner", prepTime: "20 min", safeFrom: ["gluten", "lactose", "nuts"], ingredients: ["Cod fillet", "Fresh parsley", "Lemon", "Olive oil", "Asparagus"] },
        { id: 22, title: "Pork Chops with Apples", mealType: "Dinner", prepTime: "25 min", safeFrom: ["gluten", "lactose", "nuts"], ingredients: ["Pork chops", "Apple", "Onion", "Cinnamon", "Olive oil"] },
        { id: 23, title: "Baked Chicken Breasts", mealType: "Dinner", prepTime: "30 min", safeFrom: ["gluten", "lactose", "nuts"], ingredients: ["Chicken breast", "Paprika", "Oregano", "Garlic", "Green beans"] },
        { id: 24, title: "Shrimp Garlic Pasta", mealType: "Dinner", prepTime: "18 min", safeFrom: ["lactose", "nuts"], ingredients: ["Pasta", "Shrimp", "Garlic", "Olive oil", "Red pepper flakes"] },
        { id: 25, title: "Beef Bolognese with Zoodles", mealType: "Dinner", prepTime: "25 min", safeFrom: ["gluten", "lactose", "nuts"], ingredients: ["Beef steak", "Zucchini", "Canned tomatoes", "Italian herbs", "Onion"] },
        { id: 26, title: "Tofu & Vegetable Curry", mealType: "Dinner", prepTime: "25 min", safeFrom: ["gluten", "lactose", "nuts"], ingredients: ["Tofu", "Coconut milk", "Yellow curry paste", "Bell peppers", "Spinach"] },
        { id: 27, title: "Turkey Burgers with Salad", mealType: "Dinner", prepTime: "20 min", safeFrom: ["gluten", "lactose", "nuts"], ingredients: ["Turkey breast", "Mixed greens", "Tomato", "Cucumber", "Olive oil"] }
    ];

    const calendarGrid = document.getElementById("calendar-grid");
    const listContainer = document.getElementById("list-container");
    const checkboxes = document.querySelectorAll("#settings input[type='checkbox']");
    let selectedIntolerances = [];
    let showPantry = false;

    function shuffle(array) { return array.sort(() => Math.random() - 0.5); }

    function generateMenu() {
        calendarGrid.innerHTML = "";
        let activeMenuIngredients = [];
        const safeRecipes = recipes.filter(r => selectedIntolerances.every(i => r.safeFrom.includes(i)));
        
        const getChoices = (type) => {
            let f = safeRecipes.filter(r => r.mealType === type);
            if (f.length === 0) f = recipes.filter(r => r.mealType === type);
            return shuffle([...f]);
        };

        const b = getChoices("Breakfast"), l = getChoices("Lunch"), d = getChoices("Dinner");
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        
        days.forEach((dayName, index) => {
            const div = document.createElement("div");
            div.className = "day-card";
            div.innerHTML = `<h3>${dayName}</h3>`;
            const dailyMeals = [b[index % b.length], l[index % l.length], d[index % d.length]];
            dailyMeals.forEach(m => {
                div.innerHTML += `<div class="meal-item"><strong>${m.title}</strong><br>${m.prepTime}</div>`;
                activeMenuIngredients.push(...m.ingredients);
            });
            calendarGrid.appendChild(div);
        });
        updateShoppingList(activeMenuIngredients);
    }

    function updateShoppingList(ingredients) {
        listContainer.innerHTML = "";
        const pantry = ["olive oil", "salt and pepper", "water", "garlic", "onion", "onions", "black pepper", "salt", "oregano", "paprika", "cumin", "cinnamon", "fresh mint", "fresh parsley", "italian herbs", "lime juice", "lemon juice", "red pepper flakes", "yellow curry paste", "mustard"];
        const norm = { "egg":"Eggs", "eggs":"Eggs", "avocado":"Avocado", "apple":"Apple", "apples":"Apple", "bell pepper":"Bell peppers", "bell peppers":"Bell peppers", "sweet potato":"Sweet potato", "tofu":"Tofu", "beef steak":"Beef steak", "chicken breast":"Chicken breast", "sourdough bread":"Sourdough bread", "canned tomatoes":"Canned tomatoes", "cherry tomatoes":"Cherry tomatoes", "tomato":"Tomato", "mayonnaise":"Mayonnaise", "lentils":"Lentils", "jasmine rice":"Jasmine rice", "zucchini":"Zucchini", "lemon":"Lemon" };

        let clean = ingredients.filter(i => i && typeof i === "string").map(i => {
            let l = i.trim().toLowerCase();
            return norm[l] || i.charAt(0).toUpperCase() + i.slice(1).trim();
        });

        if (!showPantry) clean = clean.filter(i => !pantry.includes(i.toLowerCase()));
        const unique = [...new Set(clean)].sort();

        const btn = document.createElement("button");
        btn.className = "toggle-btn"; // Utilitzem una classe per a l'estil
        btn.textContent = showPantry ? "Hide Pantry Staples" : "Show Pantry Staples";
        btn.onclick = () => { showPantry = !showPantry; generateMenu(); };
        listContainer.appendChild(btn);

        unique.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `<label class="shopping-item"><input type="checkbox"> <span>${item}</span></label>`;
            listContainer.appendChild(li);
        });
    }

    checkboxes.forEach(cb => cb.addEventListener("change", (e) => {
        if (e.target.checked) selectedIntolerances.push(e.target.value);
        else selectedIntolerances = selectedIntolerances.filter(i => i !== e.target.value);
        generateMenu();
    }));

    generateMenu();
});
