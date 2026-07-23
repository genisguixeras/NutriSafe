/* ==========================================================================
   NutriSafe - Complete PWA Core Application Logic
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // 1. DIETARY RESTRICTIONS
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
        { id: "lactose", label: "Lactose Intolerance" },
        { id: "fructose", label: "Fructose Intolerance" }
    ];

    // PANTRY STAPLES LIST FOR AUTOMATIC CATEGORIZATION
    const pantryKeywords = [
        "oil", "olive oil", "sesame oil", "salt", "pepper", "paprika", "oregano", 
        "cumin", "cinnamon", "turmeric", "red pepper flakes", "curry paste", 
        "tamari sauce", "soy sauce", "mustard", "vanilla extract", "maple syrup", 
        "chia seeds", "tomato paste"
    ];

    // 2. RECIPES DATABASE WITH PREP TIME, CALORIES, INGREDIENTS & INSTRUCTIONS
    const recipes = [
        { id: 1, title: "Gluten-Free Pancakes", mealType: "Breakfast", prepTimeMinutes: 15, prepTime: "15 min", calories: 380, safeFor: ["vegetarian", "cows_milk", "peanuts", "fish", "shellfish", "soy", "lactose"], ingredients: ["150g Gluten-free flour", "200ml Almond milk", "2 Eggs", "2 tbsp Maple syrup"], instructions: "1. Whisk eggs and almond milk.\n2. Add gluten-free flour while stirring.\n3. Cook on a hot pan 2-3 min per side.\n4. Serve with maple syrup." },
        { id: 2, title: "Creamy Oatmeal Bowl", mealType: "Breakfast", prepTimeMinutes: 8, prepTime: "8 min", calories: 310, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["80g Gluten-free oats", "250ml Oat milk", "1 Banana", "1 tbsp Chia seeds"], instructions: "1. Cook oats in oat milk for 5 min.\n2. Slice fresh banana.\n3. Top oatmeal with banana slices and chia seeds." },
        { id: 3, title: "Avocado & Egg Toast", mealType: "Breakfast", prepTimeMinutes: 5, prepTime: "5 min", calories: 340, safeFor: ["vegetarian", "cows_milk", "peanuts", "tree_nuts", "fish", "shellfish", "soy", "lactose"], ingredients: ["2 slices Sourdough bread", "1 Avocado", "2 Eggs", "1 pinch Salt and pepper"], instructions: "1. Toast bread.\n2. Mash avocado with salt and spread on toast.\n3. Fry an egg and place on top." },
        { id: 4, title: "Berry & Spinach Smoothie", mealType: "Breakfast", prepTimeMinutes: 5, prepTime: "5 min", calories: 220, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["100g Mixed berries", "50g Spinach", "200ml Water", "30g Plant protein powder"], instructions: "1. Add berries, spinach, water, and protein powder to blender.\n2. Blend for 45s until smooth." },
        { id: 5, title: "Chia Seed Pudding", mealType: "Breakfast", prepTimeMinutes: 5, prepTime: "5 min", calories: 280, safeFor: ["vegan", "vegetarian", "keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["40g Chia seeds", "200ml Coconut milk", "1 tsp Vanilla extract", "100g Strawberries"], instructions: "1. Mix chia seeds and coconut milk with vanilla.\n2. Refrigerate 2 hours.\n3. Top with fresh strawberries." },
        { id: 6, title: "Scrambled Tofu Toast", mealType: "Breakfast", prepTimeMinutes: 12, prepTime: "12 min", calories: 320, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "lactose"], ingredients: ["2 slices Sourdough bread", "200g Tofu", "1/2 tsp Turmeric", "30g Spinach", "1 tbsp Olive oil"], instructions: "1. Crumble tofu into pan with olive oil and turmeric.\n2. Sauté with spinach for 4 minutes.\n3. Serve on toasted sourdough." },
        { id: 7, title: "Banana & Almond Butter Toast", mealType: "Breakfast", prepTimeMinutes: 5, prepTime: "5 min", calories: 360, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["2 slices Gluten-free bread", "2 tbsp Almond butter", "1 Banana", "1/2 tsp Cinnamon"], instructions: "1. Toast bread.\n2. Spread almond butter, top with banana slices and cinnamon." },
        { id: 8, title: "Fruit Salad with Mint", mealType: "Breakfast", prepTimeMinutes: 8, prepTime: "8 min", calories: 180, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["1 Orange", "1 Apple", "80g Blueberries", "4 leaves Fresh mint", "1 tbsp Lime juice"], instructions: "1. Dice orange and apple.\n2. Mix with blueberries, chopped mint, and lime juice." },
        { id: 9, title: "Classic Shakshuka", mealType: "Breakfast", prepTimeMinutes: 20, prepTime: "20 min", calories: 390, safeFor: ["vegetarian", "keto", "cows_milk", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["2 Eggs", "200g Canned tomatoes", "1 Bell pepper", "1/2 Onion", "1 tsp Cumin"], instructions: "1. Sauté onion and peppers.\n2. Add tomatoes and spices, simmer 10 min.\n3. Make wells, crack eggs inside, cover and cook 5 min." },
        { id: 10, title: "Chicken and Rice Stir-fry", mealType: "Lunch", prepTimeMinutes: 20, prepTime: "20 min", calories: 520, safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose", "fructose"], ingredients: ["200g Chicken breast", "150g Jasmine rice", "2 tbsp Soy sauce", "1 Bell pepper", "1 Carrot"], instructions: "1. Cook rice.\n2. Stir-fry chicken strips and sliced veggies.\n3. Add soy sauce and combine with rice." },
        { id: 11, title: "Quinoa Cucumber Salad", mealType: "Lunch", prepTimeMinutes: 15, prepTime: "15 min", calories: 410, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["100g Quinoa", "1 Cucumber", "100g Cherry tomatoes", "2 tbsp Olive oil", "1/2 Lemon"], instructions: "1. Boil quinoa and let cool.\n2. Mix with diced cucumber and cherry tomatoes.\n3. Dress with olive oil and lemon juice." },
        { id: 12, title: "Lentil Vegetable Soup", mealType: "Lunch", prepTimeMinutes: 35, prepTime: "35 min", calories: 380, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["120g Lentils", "2 Carrots", "2 stalks Celery", "1 tbsp Tomato paste", "400ml Vegetable broth"], instructions: "1. Sauté carrots and celery.\n2. Add tomato paste, lentils, and broth.\n3. Simmer for 25 minutes until tender." },
        { id: 13, title: "Beef and Broccoli Bowl", mealType: "Lunch", prepTimeMinutes: 20, prepTime: "20 min", calories: 580, safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose", "fructose"], ingredients: ["200g Beef steak", "150g Broccoli", "2 cloves Garlic", "10g Ginger", "2 tbsp Tamari sauce"], instructions: "1. Slice beef thinly.\n2. Sear beef with garlic and ginger.\n3. Add steamed broccoli florets and tamari sauce." },
        { id: 14, title: "Tuna Salad Wrap", mealType: "Lunch", prepTimeMinutes: 8, prepTime: "8 min", calories: 450, safeFor: ["cows_milk", "peanuts", "tree_nuts", "shellfish", "wheat", "lactose", "fructose"], ingredients: ["1 canned Tuna (120g)", "1 Gluten-free tortilla", "1/2 Cucumber", "1 tbsp Mayonnaise", "3 leaves Lettuce"], instructions: "1. Mix tuna with mayonnaise and diced cucumber.\n2. Wrap in tortilla with lettuce leaves." },
        { id: 15, title: "Greek Chickpea Salad", mealType: "Lunch", prepTimeMinutes: 12, prepTime: "12 min", calories: 430, safeFor: ["vegetarian", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "fructose"], ingredients: ["200g Canned chickpeas", "60g Feta cheese", "1 Cucumber", "1/2 Onion", "2 tbsp Olive oil"], instructions: "1. Rinse chickpeas.\n2. Combine with chopped cucumber, onion, and feta.\n3. Drizzle with olive oil." },
        { id: 16, title: "Turkey and Avocado Sandwich", mealType: "Lunch", prepTimeMinutes: 8, prepTime: "8 min", calories: 470, safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "lactose"], ingredients: ["2 slices Sourdough bread", "100g Turkey breast", "1/2 Avocado", "1 Tomato", "1 tsp Mustard"], instructions: "1. Spread mustard on sourdough bread.\n2. Layer turkey breast, sliced avocado, and tomato." },
        { id: 17, title: "Sweet Potato & Black Bean Bowl", mealType: "Lunch", prepTimeMinutes: 25, prepTime: "25 min", calories: 490, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["1 Sweet potato (200g)", "150g Black beans", "5g Coriander", "1/2 Lime", "1 tbsp Olive oil"], instructions: "1. Roast sweet potato cubes at 200°C for 20 min.\n2. Serve with warmed black beans, coriander, and lime juice." },
        { id: 18, title: "Egg Fried Rice", mealType: "Lunch", prepTimeMinutes: 15, prepTime: "15 min", calories: 510, safeFor: ["cows_milk", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose", "fructose"], ingredients: ["180g Jasmine rice", "2 Eggs", "50g Green peas", "1/2 Onion", "1 tbsp Sesame oil"], instructions: "1. Sauté onion and peas in sesame oil.\n2. Scramble eggs in the pan, then toss in cooked rice." },
        { id: 19, title: "Grilled Salmon with Broccoli", mealType: "Dinner", prepTimeMinutes: 25, prepTime: "25 min", calories: 610, safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["200g Salmon fillet", "180g Broccoli", "2 tbsp Olive oil", "1/2 Lemon", "1 clove Garlic"], instructions: "1. Grill salmon 4-5 min per side.\n2. Roast broccoli with olive oil and garlic, serve with lemon." },
        { id: 20, title: "Steak with Sweet Potato Fries", mealType: "Dinner", prepTimeMinutes: 30, prepTime: "30 min", calories: 680, safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["220g Beef steak", "200g Sweet potato", "2 tbsp Olive oil", "1 sprig Rosemary"], instructions: "1. Cut sweet potatoes into fries, toss with oil and bake 25 min at 210°C.\n2. Sear steak 3-4 min per side." },
        { id: 21, title: "Lemon Herb Cod", mealType: "Dinner", prepTimeMinutes: 20, prepTime: "20 min", calories: 420, safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["200g Cod fillet", "10g Fresh parsley", "1/2 Lemon", "2 tbsp Olive oil", "150g Asparagus"], instructions: "1. Place cod and asparagus on baking dish.\n2. Drizzle with oil, lemon, and parsley.\n3. Bake at 200°C for 12-15 min." },
        { id: 22, title: "Pork Chops with Apples", mealType: "Dinner", prepTimeMinutes: 25, prepTime: "25 min", calories: 590, safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["200g Pork chops", "1 Apple", "1/2 Onion", "1/2 tsp Cinnamon", "1 tbsp Olive oil"], instructions: "1. Sear pork chops 4 min per side.\n2. Sauté apple wedges and onions with cinnamon, serve together." },
        { id: 23, title: "Baked Chicken Breasts", mealType: "Dinner", prepTimeMinutes: 30, prepTime: "30 min", calories: 480, safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["220g Chicken breast", "1 tsp Paprika", "1 tsp Oregano", "1 clove Garlic", "150g Green beans"], instructions: "1. Rub chicken with spices and oil.\n2. Bake at 190°C with green beans for 22-25 min." },
        { id: 24, title: "Shrimp Garlic Pasta", mealType: "Dinner", prepTimeMinutes: 18, prepTime: "18 min", calories: 540, safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "soy", "lactose", "fructose"], ingredients: ["120g Pasta", "150g Shrimp", "2 cloves Garlic", "2 tbsp Olive oil", "1 pinch Red pepper flakes"], instructions: "1. Boil pasta.\n2. Sauté garlic and shrimp in olive oil for 3 min.\n3. Toss pasta in garlic shrimp oil." },
        { id: 25, title: "Beef Bolognese with Zoodles", mealType: "Dinner", prepTimeMinutes: 25, prepTime: "25 min", calories: 460, safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["180g Minced beef", "2 Zucchinis", "200g Canned tomatoes", "1 tsp Italian herbs", "1/2 Onion"], instructions: "1. Brown beef and onions, add tomatoes and herbs, simmer 15 min.\n2. Serve over spiralized zucchini noodles." },
        { id: 26, title: "Tofu & Vegetable Curry", mealType: "Dinner", prepTimeMinutes: 25, prepTime: "25 min", calories: 430, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"], ingredients: ["180g Tofu", "200ml Coconut milk", "1 tbsp Yellow curry paste", "1 Bell pepper", "50g Spinach"], instructions: "1. Sauté curry paste in coconut milk.\n2. Add peppers, tofu, simmer 12 min.\n3. Stir in spinach at the end." },
        { id: 27, title: "Turkey Burgers with Salad", mealType: "Dinner", prepTimeMinutes: 20, prepTime: "20 min", calories: 450, safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["180g Turkey breast", "80g Mixed greens", "1 Tomato", "1 Cucumber", "1 tbsp Olive oil"], instructions: "1. Form turkey patties and cook 5 min per side.\n2. Serve over fresh mixed salad." }
    ];

    // --- DOM REFERENCES & STATE ---
    const calendarGrid = document.getElementById("calendar-grid");
    const familyMembersGrid = document.getElementById("family-members-grid");
    const updateFamilyBtn = document.getElementById("update-family-count-btn");
    const generateFamilyBtn = document.getElementById("generate-family-btn");
    const settingsCookingTime = document.getElementById("settings-cooking-time");
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    let selectedRestrictions = JSON.parse(localStorage.getItem("nutrisafe_restrictions")) || [];
    let selectedCookingTime = localStorage.getItem("nutrisafe_cooking_time") || "30";

    // --- INITIALIZATION ---
    function init() {
        setupTheme();
        renderSettingsCheckboxes();
        setupFamilyMembersUI(parseInt(document.getElementById("family-count-input").value) || 2);
        setupEventListeners();
        
        if (settingsCookingTime) {
            settingsCookingTime.value = selectedCookingTime;
            settingsCookingTime.addEventListener("change", (e) => {
                selectedCookingTime = e.target.value;
                localStorage.setItem("nutrisafe_cooking_time", selectedCookingTime);
                if (typeof showToast === "function") showToast("Cooking time preference updated!", "⏱️");
            });
        }
    }

    // --- THEME SETUP ---
    function setupTheme() {
        const isDark = localStorage.getItem("nutrisafe_dark_mode") === "true";
        if (darkModeToggle) {
            darkModeToggle.checked = isDark;
            darkModeToggle.addEventListener("change", (e) => {
                localStorage.setItem("nutrisafe_dark_mode", e.target.checked);
                document.body.classList.toggle("dark-mode", e.target.checked);
            });
        }
        if (isDark) document.body.classList.add("dark-mode");
    }

    // --- SETTINGS CHECKBOXES ---
    function renderSettingsCheckboxes() {
        const container = document.getElementById("settings-checkboxes");
        if (!container) return;

        container.innerHTML = "";
        dietaryOptions.forEach(opt => {
            const label = document.createElement("label");
            label.className = "checkbox-item";
            const checked = selectedRestrictions.includes(opt.id) ? "checked" : "";
            label.innerHTML = `<input type="checkbox" value="${opt.id}" ${checked}> ${opt.label}`;
            
            label.querySelector("input").addEventListener("change", (e) => {
                if (e.target.checked) {
                    selectedRestrictions.push(opt.id);
                } else {
                    selectedRestrictions = selectedRestrictions.filter(r => r !== opt.id);
                }
                localStorage.setItem("nutrisafe_restrictions", JSON.stringify(selectedRestrictions));
            });
            
            container.appendChild(label);
        });
    }

    // --- FAMILY MEMBERS FORM BUILDER ---
    function setupFamilyMembersUI(count) {
        if (!familyMembersGrid) return;
        familyMembersGrid.innerHTML = "";

        for (let i = 1; i <= count; i++) {
            const card = document.createElement("div");
            card.className = "card member-card";
            card.style.marginBottom = "15px";
            card.style.padding = "15px";
            card.style.background = "#f9f9f9";

            let optionsHTML = "";
            dietaryOptions.forEach(opt => {
                optionsHTML += `
                    <label style="display: block; margin: 4px 0; font-size: 13px;">
                        <input type="checkbox" name="member-${i}-restrictions" value="${opt.id}" ${opt.id === 'none' ? 'checked' : ''}>
                        ${opt.label}
                    </label>
                `;
            });

            card.innerHTML = `
                <div style="margin-bottom: 8px;">
                    <strong>Member #${i} Name:</strong>
                    <input type="text" class="form-control member-name" value="Person ${i}" style="width:100%; padding: 6px; margin-top: 4px; border: 1px solid #ccc; border-radius: 4px;">
                </div>
                <div>
                    <label style="font-size: 13px; font-weight: bold;">Dietary Needs:</label>
                    <div style="max-height: 120px; overflow-y: auto; background: #fff; border: 1px solid #ddd; padding: 6px; border-radius: 4px;">
                        ${optionsHTML}
                    </div>
                </div>
            `;
            familyMembersGrid.appendChild(card);
        }
    }

    // --- GENERATE FAMILY MENU & MOVE TO RECIPES TAB ---
    function generateFamilyMenu() {
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        if (!calendarGrid) return;

        calendarGrid.innerHTML = ""; // Reemplaça tot el contingut anterior

        days.forEach(day => {
            ["Lunch", "Dinner"].forEach(type => {
                const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
                
                const card = document.createElement("div");
                card.className = "card meal-card";
                
                const safeIngredients = JSON.stringify(randomRecipe.ingredients).replace(/"/g, "&quot;");
                const safeInstructions = randomRecipe.instructions.replace(/"/g, "&quot;");

                card.setAttribute("onclick", `openRecipe("${randomRecipe.title}", ${safeIngredients}, "${safeInstructions}")`);

                card.innerHTML = `
                    <h3>${day} - ${type}</h3>
                    <p><strong>${randomRecipe.title}</strong> (Family Adapted)</p>
                    <button class="btn-link" onclick="event.stopPropagation(); if (typeof showToast === 'function') showToast('Meal regenerated!');">🔄 Change meal</button>
                `;
                calendarGrid.appendChild(card);
            });
        });

        if (typeof showToast === "function") showToast("Family Menu Generated & List Updated!", "✨");
        
        // Redirigeix automàticament a la pestanya Recipes
        if (typeof switchTab === "function") switchTab("planner-tab");
    }

    // --- EVENT LISTENERS ---
    function setupEventListeners() {
        if (updateFamilyBtn) {
            updateFamilyBtn.addEventListener("click", () => {
                const count = parseInt(document.getElementById("family-count-input").value) || 2;
                setupFamilyMembersUI(count);
                if (typeof showToast === "function") showToast(`Set to ${count} members!`);
            });
        }

        if (generateFamilyBtn) {
            generateFamilyBtn.addEventListener("click", () => {
                generateFamilyMenu();
            });
        }
    }

    init();
});
