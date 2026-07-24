/* ==========================================================================
   NutriSafe - Complete App Engine with Alternative Family Meals & Time Limits
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

    // RECEPTES AMB MACROS I SEGURETAT ALIMENTÀRIA
    const recipes = [
        // --- BREAKFASTS ---
        { id: 1, title: "Gluten-Free Pancakes", mealType: "Breakfast", prepTime: "15 min", calories: 380, macros: { protein: "14g", carbs: "52g", fat: "10g" }, safeFor: ["vegetarian", "cows_milk", "peanuts", "fish", "shellfish", "soy", "lactose"], ingredients: ["150g Gluten-free flour", "200ml Almond milk", "2 Eggs", "2 tbsp Maple syrup"], instructions: "1. Whisk eggs and almond milk together in a bowl.\n2. Gradually add gluten-free flour while stirring.\n3. Heat a non-stick pan and cook 2-3 min per side.\n4. Serve hot drizzled with maple syrup." },
        { id: 2, title: "Creamy Oatmeal Bowl", mealType: "Breakfast", prepTime: "8 min", calories: 310, macros: { protein: "11g", carbs: "48g", fat: "6g" }, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["80g Oats", "250ml Oat milk", "1 Banana", "1 tbsp Chia seeds"], instructions: "1. Bring oat milk to a gentle simmer in a small pot.\n2. Stir in oats and cook for 5 minutes on low heat.\n3. Slice the fresh banana.\n4. Pour oatmeal into a bowl and top with sliced banana and chia seeds." },
        { id: 3, title: "Avocado & Egg Toast", mealType: "Breakfast", prepTime: "5 min", calories: 340, macros: { protein: "15g", carbs: "28g", fat: "18g" }, safeFor: ["vegetarian", "cows_milk", "peanuts", "tree_nuts", "fish", "shellfish", "soy", "lactose"], ingredients: ["2 slices Whole-grain bread", "1 Ripe avocado", "2 Eggs", "1 pinch Salt & Black pepper"], instructions: "1. Toast bread slices until golden and crisp.\n2. Mash avocado in a bowl with salt and pepper, then spread evenly on toast.\n3. Fry or poach eggs to your liking and place on top." },
        { id: 4, title: "Chia Seed Pudding", mealType: "Breakfast", prepTime: "5 min", calories: 280, macros: { protein: "8g", carbs: "22g", fat: "14g" }, safeFor: ["vegan", "vegetarian", "keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["40g Chia seeds", "200ml Coconut milk", "1 tsp Vanilla extract", "100g Fresh strawberries"], instructions: "1. In a glass or jar, mix chia seeds, coconut milk, and vanilla extract.\n2. Let rest in the fridge for at least 2 hours (or overnight).\n3. Garnish with chopped fresh strawberries before serving." },

        // --- LUNCHES ---
        { id: 5, title: "Chicken & Rice Stir-fry", mealType: "Lunch", prepTime: "20 min", calories: 520, macros: { protein: "42g", carbs: "58g", fat: "12g" }, safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"], ingredients: ["200g Chicken breast", "150g Jasmine rice", "2 tbsp Soy sauce", "1 Red bell pepper"], instructions: "1. Boil jasmine rice according to package instructions.\n2. Slice chicken breast and bell pepper into thin strips.\n3. Sauté chicken and peppers in a hot pan, add soy sauce, and toss with rice." },
        { id: 6, title: "Quinoa Cucumber Salad", mealType: "Lunch", prepTime: "15 min", calories: 410, macros: { protein: "12g", carbs: "54g", fat: "16g" }, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["100g Quinoa", "1 Cucumber", "100g Cherry tomatoes", "2 tbsp Extra virgin olive oil"], instructions: "1. Boil quinoa in water for 12 minutes, drain and let cool.\n2. Chop cucumber and halved cherry tomatoes.\n3. Combine all ingredients in a bowl and drizzle with olive oil." },
        { id: 7, title: "Beef & Broccoli Bowl", mealType: "Lunch", prepTime: "20 min", calories: 580, macros: { protein: "45g", carbs: "20g", fat: "28g" }, safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"], ingredients: ["200g Beef steak", "150g Broccoli florets", "2 cloves Garlic", "2 tbsp Soy sauce"], instructions: "1. Slice beef thinly against the grain.\n2. Sear beef strips with minced garlic in a hot skillet for 4-5 minutes.\n3. Steam broccoli florets, add to skillet with soy sauce, and stir to combine." },

        // --- DINNERS ---
        { id: 8, title: "Grilled Salmon & Asparagus", mealType: "Dinner", prepTime: "25 min", calories: 610, macros: { protein: "46g", carbs: "8g", fat: "38g" }, safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "shellfish", "wheat", "soy", "lactose"], ingredients: ["200g Salmon fillet", "150g Asparagus", "2 tbsp Olive oil", "1/2 Fresh lemon"], instructions: "1. Heat grill or skillet with olive oil.\n2. Grill salmon fillet skin-side down for 4 minutes, flip and cook 3 minutes more.\n3. Sauté asparagus in the same pan and serve with fresh lemon wedges." },
        { id: 9, title: "Steak with Sweet Potato", mealType: "Dinner", prepTime: "30 min", calories: 680, macros: { protein: "50g", carbs: "42g", fat: "24g" }, safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["220g Beef steak", "200g Sweet potato", "2 tbsp Olive oil"], instructions: "1. Cut sweet potato into wedges, toss with 1 tbsp olive oil and bake at 200°C for 25 mins.\n2. Season steak and sear on high heat for 3-4 minutes per side.\n3. Let steak rest for 5 minutes before serving with sweet potato wedges." },
        { id: 10, title: "Tofu & Vegetable Curry", mealType: "Dinner", prepTime: "25 min", calories: 430, macros: { protein: "18g", carbs: "26g", fat: "22g" }, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"], ingredients: ["180g Firm tofu", "200ml Coconut milk", "1 Bell pepper", "50g Fresh spinach"], instructions: "1. Cube tofu and sauté with sliced bell pepper in a pot for 5 minutes.\n2. Pour in coconut milk and let simmer gently for 10 minutes.\n3. Stir in fresh spinach right before serving until wilted." }
    ];

    const calendarGrid = document.getElementById("calendar-grid");
    const familyMembersGrid = document.getElementById("family-members-grid");
    const updateFamilyBtn = document.getElementById("update-family-count-btn");
    const generateFamilyBtn = document.getElementById("generate-family-btn");
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    let selectedRestrictions = JSON.parse(localStorage.getItem("nutrisafe_restrictions")) || [];
    let currentWeekPlan = []; 
    let currentSelectedMealIndex = null; // Per saber quin àpat estem canviant
    let isFamilyMode = false; // Per saber com regenerar àpats

    function init() {
        setupTheme();
        renderSettingsCheckboxes();
        setupFamilyMembersUI(parseInt(document.getElementById("family-count-input").value) || 4);
        setupEventListeners();
        generateIndividualMenu();
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
                    <input type="text" class="member-name" value="Person ${i}" style="width:100%; padding: 6px; margin: 4px 0 8px 0; border: 1px solid #ccc; border-radius: 4px;">
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

    // --- FUNCIÓ PER FILTRAR PER TEMPS ---
    // Converteix el temps del desplegable en un temps màxim per àpat
    function getMaxTimePerMeal() {
        const timeSelect = document.getElementById("settings-cooking-time");
        const totalMinutes = timeSelect ? parseInt(timeSelect.value) : 60;
        // Dividim el temps total entre els 3 àpats diaris (i donem 5 minutets extres de marge per tenir més opcions)
        return (totalMinutes / 3) + 5; 
    }

    function getPrepTimeInt(prepTimeStr) {
        return parseInt(prepTimeStr) || 0;
    }

    // --- GENERACIÓ INDIVIDUAL ---
    function generateIndividualMenu() {
        isFamilyMode = false;
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const mealTypes = ["Breakfast", "Lunch", "Dinner"];
        const maxTimePerMeal = getMaxTimePerMeal();
        
        currentWeekPlan = [];

        days.forEach(day => {
            mealTypes.forEach(type => {
                // Filtrem per tipus i que el temps no superi el límit per àpat
                let availableRecipes = recipes.filter(r => 
                    r.mealType === type && getPrepTimeInt(r.prepTime) <= maxTimePerMeal
                );
                
                // Si som massa restrictius amb el temps i ens quedem sense opcions, agafem la més ràpida que tinguem
                if (availableRecipes.length === 0) {
                    availableRecipes = recipes.filter(r => r.mealType === type).sort((a,b) => getPrepTimeInt(a.prepTime) - getPrepTimeInt(b.prepTime));
                    availableRecipes = [availableRecipes[0]];
                }

                const recipe = availableRecipes[Math.floor(Math.random() * availableRecipes.length)];

                currentWeekPlan.push({
                    day: day,
                    type: type,
                    recipe: recipe,
                    familyTag: "Personal Plan",
                    altMealData: null
                });
            });
        });

        renderCalendarFromPlan();
        updateShoppingList();
    }

    // --- GENERACIÓ FAMILIAR ---
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
            const name = nameInput && nameInput.value.trim() !== "" ? nameInput.value.trim() : `Person ${idx + 1}`;
            const checkboxes = card.querySelectorAll("input[type='checkbox']:checked");
            const restrictions = Array.from(checkboxes).map(cb => cb.value);
            familyData.push({ name, restrictions });
        });

        days.forEach(day => {
            mealTypes.forEach(type => {
                // Filtre per temps per la recepta principal
                let availableRecipes = recipes.filter(r => 
                    r.mealType === type && getPrepTimeInt(r.prepTime) <= maxTimePerMeal
                );

                if (availableRecipes.length === 0) {
                    availableRecipes = recipes.filter(r => r.mealType === type).sort((a,b) => getPrepTimeInt(a.prepTime) - getPrepTimeInt(b.prepTime));
                    availableRecipes = [availableRecipes[0]];
                }

                const recipe = availableRecipes[Math.floor(Math.random() * availableRecipes.length)];
                
                const suitableMembers = [];
                const restrictedMembers = [];

                familyData.forEach(member => {
                    const isSafe = member.restrictions.length === 0 || 
                                   member.restrictions.includes("none") || 
                                   member.restrictions.every(rest => recipe.safeFor.includes(rest));
                    if (isSafe) {
                        suitableMembers.push(member);
                    } else {
                        restrictedMembers.push(member);
                    }
                });

                let familyInfoText = "";
                let altMealData = null;

                if (suitableMembers.length === familyData.length) {
                    familyInfoText = "Suitable for: All family members";
                } else {
                    const suitableNames = suitableMembers.map(m => m.name).join(", ");
                    const restrictedNames = restrictedMembers.map(m => m.name).join(", ");
                    familyInfoText = `Suitable for: ${suitableNames || "None"}`;

                    const combinedRestrictions = Array.from(new Set(restrictedMembers.flatMap(m => m.restrictions)));
                    // Busquem l'alternativa (pot ser una miqueta més llarga si no hi ha més remei)
                    const alternativeRecipe = recipes.find(r => 
                        r.mealType === type && r.id !== recipe.id && combinedRestrictions.every(rest => r.safeFor.includes(rest))
                    ) || recipes.find(r => r.mealType === type && r.id !== recipe.id);

                    if (alternativeRecipe) {
                        altMealData = {
                            forNames: restrictedNames,
                            recipe: alternativeRecipe
                        };
                    }
                }

                currentWeekPlan.push({
                    day: day,
                    type: type,
                    recipe: recipe,
                    familyTag: familyInfoText,
                    altMealData: altMealData
                });
            });
        });

        renderCalendarFromPlan();
        updateShoppingList();

        if (typeof showToast === "function") showToast("Family menu generated & shopping list synced!", "✨");
        if (typeof switchTab === "function") switchTab("planner-tab");
    }

    // --- RENDERITZAT DEL CALENDARI ---
    function renderCalendarFromPlan() {
        calendarGrid.innerHTML = "";
        currentWeekPlan.forEach((planItem, index) => {
            renderMealCard(planItem.day, planItem.type, planItem.recipe, planItem.familyTag, planItem.altMealData, index);
        });
    }

    function renderMealCard(day, type, recipe, familyTag, altMealData, planIndex) {
        const card = document.createElement("div");
        card.className = "card meal-card";
        
        card.onclick = () => {
            currentSelectedMealIndex = planIndex; // Guardem l'índex quan fem clic
            showRecipeModal(recipe, familyTag, altMealData);
        };

        let altMealHTML = "";
        if (altMealData) {
            altMealHTML = `
                <div class="alt-meal-box" style="background:#fff3e0; padding:8px; border-radius:6px; margin-top:8px; font-size:12px;">
                    <strong>⚠️ Alt for ${altMealData.forNames}:</strong><br>
                    <span>${altMealData.recipe.title}</span>
                </div>
            `;
        }

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h3 style="margin:0;">${day} - ${type}</h3>
                <span style="font-size: 11px; color: #666;">⏱️ ${recipe.prepTime}</span>
            </div>
            <p style="font-weight:bold; font-size:16px; margin: 8px 0 4px 0; color:#2e7d32;">${recipe.title}</p>
            <span class="family-tag">${familyTag}</span>
            ${altMealHTML}
            <div style="margin-top: 8px; font-size: 12px; color: #555;">
                🔥 ${recipe.calories} kcal | 💪 Prot: ${recipe.macros.protein}
            </div>
        `;
        calendarGrid.appendChild(card);
    }

    function showRecipeModal(recipe, familyTag, altMealData) {
        document.getElementById("recipe-title").innerText = recipe.title;
        document.getElementById("recipe-family-info").innerText = familyTag;

        document.getElementById("macro-calories").innerText = `${recipe.calories} kcal`;
        document.getElementById("macro-protein").innerText = recipe.macros.protein;
        document.getElementById("macro-carbs").innerText = recipe.macros.carbs;
        document.getElementById("macro-fat").innerText = recipe.macros.fat;

        const ingList = document.getElementById("recipe-ingredients");
        ingList.innerHTML = "";
        recipe.ingredients.forEach(ing => {
            const li = document.createElement("li");
            li.innerText = ing;
            ingList.appendChild(li);
        });

        document.getElementById("recipe-instructions").innerText = recipe.instructions;

        document.getElementById("recipe-modal").style.display = "flex";
    }

    // --- LÒGICA PER CANVIAR UN SOL ÀPAT ---
    window.changeSingleMeal = function() {
        if (currentSelectedMealIndex === null) return;
        
        const currentItem = currentWeekPlan[currentSelectedMealIndex];
        const maxTimePerMeal = getMaxTimePerMeal();
        
        // Busquem una altra recepta del mateix tipus que no sigui la mateixa i compleixi el temps
        let availableRecipes = recipes.filter(r => 
            r.mealType === currentItem.type && 
            r.id !== currentItem.recipe.id && 
            getPrepTimeInt(r.prepTime) <= maxTimePerMeal
        );

        // Si ens quedem sense opcions de temps, traiem el límit de temps per aquest canvi
        if (availableRecipes.length === 0) {
            availableRecipes = recipes.filter(r => r.mealType === currentItem.type && r.id !== currentItem.recipe.id);
        }

        if (availableRecipes.length > 0) {
            const newRecipe = availableRecipes[Math.floor(Math.random() * availableRecipes.length)];
            
            // Actualitzem l'objecte dins de l'array setmanal
            currentWeekPlan[currentSelectedMealIndex].recipe = newRecipe;
            
            // Si estem en mode familiar, hauríem de recalcular l'àpat alternatiu (ho simplifiquem deixant el mateix text o regenerant-lo completament)
            if (isFamilyMode) {
                // Per simplificar, esborrem la dada de l'àpat alternatiu i diem que verifiquin les al·lèrgies manualment per aquest àpat canviat
                currentWeekPlan[currentSelectedMealIndex].familyTag = "Swapped Meal (Check ingredients)";
                currentWeekPlan[currentSelectedMealIndex].altMealData = null; 
            }

            // Recarreguem la vista sense esborrar res més
            renderCalendarFromPlan();
            updateShoppingList();
            
            if (typeof showToast === "function") showToast("Meal changed successfully! 🔄");
        } else {
            if (typeof showToast === "function") showToast("No other meals available! ⚠️");
        }
    };

    // --- LLISTA DE LA COMPRA AMB CHECKBOX I SENSE PUNTS ---
    function updateShoppingList() {
        const mainGroceryList = document.getElementById("main-grocery-list");
        const pantryList = document.getElementById("pantry-list");

        if (!mainGroceryList || !pantryList) return;

        mainGroceryList.innerHTML = "";
        pantryList.innerHTML = "";

        const groceriesSet = new Set();
        const pantrySet = new Set();

        currentWeekPlan.forEach(planItem => {
            // Ingredients del plat principal
            planItem.recipe.ingredients.forEach(ing => {
                const lower = ing.toLowerCase();
                if (pantryKeywords.some(keyword => lower.includes(keyword))) pantrySet.add(ing);
                else groceriesSet.add(ing);
            });
            // Ingredients del plat alternatiu (si n'hi ha)
            if (planItem.altMealData) {
                planItem.altMealData.recipe.ingredients.forEach(ing => {
                    const lower = ing.toLowerCase();
                    if (pantryKeywords.some(keyword => lower.includes(keyword))) pantrySet.add(ing);
                    else groceriesSet.add(ing);
                });
            }
        });

        // Crear la llista amb checkboxes i eliminant espais inicials (sense •)
        groceriesSet.forEach((item, index) => {
            let textNet = item.replace(/^[\s•\-]+/, ''); 
            const li = document.createElement("li");
            li.className = "shopping-list-item";
            li.innerHTML = `
                <input type="checkbox" id="grocery-${index}" onchange="toggleShoppingItem(this, '${textNet}')">
                <span>${textNet}</span>
            `;
            mainGroceryList.appendChild(li);
        });

        pantrySet.forEach((item, index) => {
            let textNet = item.replace(/^[\s•\-]+/, '');
            const li = document.createElement("li");
            li.className = "shopping-list-item";
            li.innerHTML = `
                <input type="checkbox" id="pantry-${index}" onchange="toggleShoppingItem(this, '${textNet}')">
                <span>${textNet}</span>
            `;
            pantryList.appendChild(li);
        });

        // Recuperar els elements que ja tenies marcats
        if (typeof restoreShoppingListState === 'function') {
            restoreShoppingListState();
        }
    }

    function setupEventListeners() {
        if (updateFamilyBtn) {
            updateFamilyBtn.addEventListener("click", () => {
                const count = parseInt(document.getElementById("family-count-input").value) || 4;
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
