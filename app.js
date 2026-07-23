/* ==========================================================================
   NutriSafe - Complete App Engine with Family Matching & Macros
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

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

    const pantryKeywords = [
        "oil", "olive oil", "salt", "pepper", "paprika", "oregano", "cumin", "cinnamon", "turmeric", "soy sauce", "mustard", "vanilla", "chia seeds"
    ];

    // RECIPES DATABASE WITH BREAKFASTS, LUNCHES, DINNERS AND MACROS
    const recipes = [
        // --- BREAKFASTS ---
        { id: 1, title: "Gluten-Free Pancakes", mealType: "Breakfast", prepTime: "15 min", calories: 380, macros: { protein: "14g", carbs: "52g", fat: "10g" }, safeFor: ["vegetarian", "cows_milk", "peanuts", "fish", "shellfish", "soy", "lactose"], ingredients: ["150g Gluten-free flour", "200ml Almond milk", "2 Eggs", "2 tbsp Maple syrup"], instructions: "1. Whisk eggs and almond milk.\n2. Add gluten-free flour while stirring.\n3. Cook on a hot pan 2-3 min per side.\n4. Serve with maple syrup." },
        { id: 2, title: "Creamy Oatmeal Bowl", mealType: "Breakfast", prepTime: "8 min", calories: 310, macros: { protein: "11g", carbs: "48g", fat: "6g" }, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["80g Oats", "250ml Oat milk", "1 Banana", "1 tbsp Chia seeds"], instructions: "1. Cook oats in oat milk for 5 min.\n2. Slice fresh banana.\n3. Top oatmeal with banana slices and chia seeds." },
        { id: 3, title: "Avocado & Egg Toast", mealType: "Breakfast", prepTime: "5 min", calories: 340, macros: { protein: "15g", carbs: "28g", fat: "18g" }, safeFor: ["vegetarian", "cows_milk", "peanuts", "tree_nuts", "fish", "shellfish", "soy", "lactose"], ingredients: ["2 slices Bread", "1 Avocado", "2 Eggs", "1 pinch Salt"], instructions: "1. Toast bread.\n2. Mash avocado with salt and spread on toast.\n3. Fry or poach eggs and place on top." },
        { id: 4, title: "Chia Seed Pudding", mealType: "Breakfast", prepTime: "5 min", calories: 280, macros: { protein: "8g", carbs: "22g", fat: "14g" }, safeFor: ["vegan", "vegetarian", "keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["40g Chia seeds", "200ml Coconut milk", "1 tsp Vanilla", "100g Strawberries"], instructions: "1. Mix chia seeds and coconut milk with vanilla.\n2. Refrigerate overnight or 2 hours.\n3. Top with fresh strawberries." },

        // --- LUNCHES ---
        { id: 5, title: "Chicken & Rice Stir-fry", mealType: "Lunch", prepTime: "20 min", calories: 520, macros: { protein: "42g", carbs: "58g", fat: "12g" }, safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"], ingredients: ["200g Chicken breast", "150g Jasmine rice", "2 tbsp Soy sauce", "1 Bell pepper"], instructions: "1. Boil rice.\n2. Stir-fry chicken strips and sliced pepper in pan.\n3. Add soy sauce and serve with rice." },
        { id: 6, title: "Quinoa Cucumber Salad", mealType: "Lunch", prepTime: "15 min", calories: 410, macros: { protein: "12g", carbs: "54g", fat: "16g" }, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["100g Quinoa", "1 Cucumber", "100g Cherry tomatoes", "2 tbsp Olive oil"], instructions: "1. Boil quinoa and let cool.\n2. Mix with diced cucumber and cherry tomatoes.\n3. Dress with olive oil and salt." },
        { id: 7, title: "Beef & Broccoli Bowl", mealType: "Lunch", prepTime: "20 min", calories: 580, macros: { protein: "45g", carbs: "20g", fat: "28g" }, safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"], ingredients: ["200g Beef steak", "150g Broccoli", "2 cloves Garlic", "2 tbsp Soy sauce"], instructions: "1. Slice beef thinly.\n2. Sear beef with garlic in pan.\n3. Toss in steamed broccoli florets and soy sauce." },

        // --- DINNERS ---
        { id: 8, title: "Grilled Salmon & Asparagus", mealType: "Dinner", prepTime: "25 min", calories: 610, macros: { protein: "46g", carbs: "8g", fat: "38g" }, safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "shellfish", "wheat", "soy", "lactose"], ingredients: ["200g Salmon fillet", "150g Asparagus", "2 tbsp Olive oil", "1/2 Lemon"], instructions: "1. Grill salmon fillet 4-5 minutes per side.\n2. Sauté asparagus in olive oil.\n3. Serve with fresh lemon slice." },
        { id: 9, title: "Steak with Sweet Potato", mealType: "Dinner", prepTime: "30 min", calories: 680, macros: { protein: "50g", carbs: "42g", fat: "24g" }, safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["220g Beef steak", "200g Sweet potato", "2 tbsp Olive oil"], instructions: "1. Cut sweet potato into wedges and bake at 200°C for 25 min.\n2. Sear steak 3-4 min per side on pan." },
        { id: 10, title: "Tofu & Vegetable Curry", mealType: "Dinner", prepTime: "25 min", calories: 430, macros: { protein: "18g", carbs: "26g", fat: "22g" }, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"], ingredients: ["180g Tofu", "200ml Coconut milk", "1 Bell pepper", "50g Spinach"], instructions: "1. Sauté peppers and tofu in pan.\n2. Pour coconut milk and simmer for 10 min.\n3. Stir in spinach at the end." }
    ];

    const calendarGrid = document.getElementById("calendar-grid");
    const familyMembersGrid = document.getElementById("family-members-grid");
    const updateFamilyBtn = document.getElementById("update-family-count-btn");
    const generateFamilyBtn = document.getElementById("generate-family-btn");
    const settingsCookingTime = document.getElementById("settings-cooking-time");
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    let selectedRestrictions = JSON.parse(localStorage.getItem("nutrisafe_restrictions")) || [];
    let currentWeekPlan = [];

    function init() {
        setupTheme();
        renderSettingsCheckboxes();
        setupFamilyMembersUI(parseInt(document.getElementById("family-count-input").value) || 2);
        setupEventListeners();
        generateIndividualMenu(); // Carrega menú inicial amb esmorzars
    }

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
                if (e.target.checked) selectedRestrictions.push(opt.id);
                else selectedRestrictions = selectedRestrictions.filter(r => r !== opt.id);
                localStorage.setItem("nutrisafe_restrictions", JSON.stringify(selectedRestrictions));
            });
            container.appendChild(label);
        });
    }

    function setupFamilyMembersUI(count) {
        if (!familyMembersGrid) return;
        familyMembersGrid.innerHTML = "";

        for (let i = 1; i <= count; i++) {
            const card = document.createElement("div");
            card.className = "card member-card";
            card.style.cssText = "margin-bottom: 12px; padding: 12px; background: #f9f9f9; border-radius: 8px;";

            let optionsHTML = "";
            dietaryOptions.forEach(opt => {
                optionsHTML += `
                    <label style="display: inline-block; margin: 3px 6px; font-size: 12px;">
                        <input type="checkbox" class="member-${i}-restriction" value="${opt.id}">
                        ${opt.label}
                    </label>
                `;
            });

            card.innerHTML = `
                <div>
                    <strong>Member #${i} Name:</strong>
                    <input type="text" class="member-name" value="Persona ${i}" style="width:100%; padding: 6px; margin: 4px 0 8px 0; border: 1px solid #ccc; border-radius: 4px;">
                </div>
                <div>
                    <label style="font-size: 12px; font-weight: bold;">Dietary Needs:</label>
                    <div style="background: #fff; border: 1px solid #ddd; padding: 6px; border-radius: 4px; max-height: 90px; overflow-y: auto;">
                        ${optionsHTML}
                    </div>
                </div>
            `;
            familyMembersGrid.appendChild(card);
        }
    }

    // --- REGENERAR / GENERAR MENÚ AMB ESMORZARS ---
    function generateIndividualMenu() {
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const mealTypes = ["Breakfast", "Lunch", "Dinner"];
        currentWeekPlan = [];

        calendarGrid.innerHTML = "";

        days.forEach(day => {
            mealTypes.forEach(type => {
                const availableRecipes = recipes.filter(r => r.mealType === type);
                const recipe = availableRecipes[Math.floor(Math.random() * availableRecipes.length)];

                currentWeekPlan.push(recipe);
                renderMealCard(day, type, recipe, "Personal Plan");
            });
        });

        updateShoppingList();
    }

    // --- GENERADOR DE MENÚ FAMILIAR AMB DETALLS PER PERSONA ---
    function generateFamilyMenu() {
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const mealTypes = ["Breakfast", "Lunch", "Dinner"];
        currentWeekPlan = [];

        // Obtenir dades dels membres de la família
        const memberCards = document.querySelectorAll(".member-card");
        const familyData = [];

        memberCards.forEach((card, idx) => {
            const name = card.querySelector(".member-name").value || `Persona ${idx + 1}`;
            const checkboxes = card.querySelectorAll("input[type='checkbox']:checked");
            const restrictions = Array.from(checkboxes).map(cb => cb.value);
            familyData.push({ name, restrictions });
        });

        calendarGrid.innerHTML = "";

        days.forEach(day => {
            mealTypes.forEach(type => {
                const availableRecipes = recipes.filter(r => r.mealType === type);
                const recipe = availableRecipes[Math.floor(Math.random() * availableRecipes.length)];
                currentWeekPlan.push(recipe);

                // Calcular quins membres poden menjar-se aquesta recepta
                const suitableMembers = familyData.filter(member => {
                    if (member.restrictions.length === 0) return true;
                    return member.restrictions.every(rest => recipe.safeFor.includes(rest));
                }).map(m => m.name);

                let familyInfoText = "";
                if (suitableMembers.length === familyData.length) {
                    familyInfoText = "Apte per a: Tots els membres";
                } else if (suitableMembers.length > 0) {
                    familyInfoText = `Apte per a: ${suitableMembers.join(", ")}`;
                } else {
                    familyInfoText = "Atenció: Adaptació especial requerida";
                }

                renderMealCard(day, type, recipe, familyInfoText);
            });
        });

        updateShoppingList();

        if (typeof showToast === "function") showToast("Family menu updated & shopping list synced!", "✨");
        if (typeof switchTab === "function") switchTab("planner-tab");
    }

    // --- RENDER CARD DINS DEL CALENDARI ---
    function renderMealCard(day, type, recipe, familyTag) {
        const card = document.createElement("div");
        card.className = "card meal-card";
        
        card.onclick = () => {
            showRecipeModal(recipe, familyTag);
        };

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h3 style="margin:0;">${day} - ${type}</h3>
                <span style="font-size: 11px; color: #666;">⏱️ ${recipe.prepTime}</span>
            </div>
            <p style="font-weight:bold; font-size:16px; margin: 8px 0 4px 0; color:#2e7d32;">${recipe.title}</p>
            <span class="family-tag">${familyTag}</span>
            <div style="margin-top: 8px; font-size: 12px; color: #555;">
                🔥 ${recipe.calories} kcal | 💪 Prot: ${recipe.macros.protein}
            </div>
        `;
        calendarGrid.appendChild(card);
    }

    // --- MOSTRAR MODAL AMB QUANTITATS, MACROS I INSTRUCCIONS ---
    function showRecipeModal(recipe, familyTag) {
        document.getElementById("recipe-title").innerText = recipe.title;
        document.getElementById("recipe-family-info").innerText = familyTag;

        // Macros
        document.getElementById("macro-calories").innerText = `${recipe.calories} kcal`;
        document.getElementById("macro-protein").innerText = recipe.macros.protein;
        document.getElementById("macro-carbs").innerText = recipe.macros.carbs;
        document.getElementById("macro-fat").innerText = recipe.macros.fat;

        // Ingredients amb Quantitats
        const ingList = document.getElementById("recipe-ingredients");
        ingList.innerHTML = "";
        recipe.ingredients.forEach(ing => {
            const li = document.createElement("li");
            li.innerText = ing;
            ingList.appendChild(li);
        });

        // Instruccions
        document.getElementById("recipe-instructions").innerText = recipe.instructions;

        document.getElementById("recipe-modal").style.display = "flex";
    }

    // --- ACTUALITZACIÓ DINÀMICA DE LA LLISTA DE LA COMPRA ---
    function updateShoppingList() {
        const mainGroceryList = document.getElementById("main-grocery-list");
        const pantryList = document.getElementById("pantry-list");

        if (!mainGroceryList || !pantryList) return;

        mainGroceryList.innerHTML = "";
        pantryList.innerHTML = "";

        const groceriesSet = new Set();
        const pantrySet = new Set();

        currentWeekPlan.forEach(recipe => {
            recipe.ingredients.forEach(ing => {
                const lower = ing.toLowerCase();
                const isPantry = pantryKeywords.some(keyword => lower.includes(keyword));
                if (isPantry) {
                    pantrySet.add(ing);
                } else {
                    groceriesSet.add(ing);
                }
            });
        });

        groceriesSet.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>•</strong> ${item}`;
            mainGroceryList.appendChild(li);
        });

        pantrySet.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>•</strong> ${item}`;
            pantryList.appendChild(li);
        });
    }

    function setupEventListeners() {
        if (updateFamilyBtn) {
            updateFamilyBtn.addEventListener("click", () => {
                const count = parseInt(document.getElementById("family-count-input").value) || 2;
                setupFamilyMembersUI(count);
                if (typeof showToast === "function") showToast(`Set to ${count} family members!`);
            });
        }

        if (generateFamilyBtn) {
            generateFamilyBtn.addEventListener("click", generateFamilyMenu);
        }
    }

    window.regenerateWeek = generateIndividualMenu;

    init();
});
