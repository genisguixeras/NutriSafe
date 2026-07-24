/* ==========================================================================
   NutriSafe - Complete App Engine with Alternative Family Meals & Smart Scaling
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

    // Supermarket sections and keywords for smart sorting
    const supermarketSections = {
        "🍎 Fruits & Vegetables": ["banana", "strawberry", "strawberries", "pepper", "cucumber", "tomato", "tomatoes", "broccoli", "asparagus", "potato", "lemon", "spinach", "avocado", "garlic", "cherry tomatoes", "sweet potato"],
        "🥩 Meat & Seafood": ["chicken", "beef", "salmon", "steak"],
        "🥚 Dairy & Eggs": ["milk", "egg", "eggs", "cheese", "butter"],
        "🌾 Grains & Legumes": ["flour", "oats", "rice", "quinoa", "bread", "chia", "tofu"],
        "🧂 Pantry & Spices": ["syrup", "oil", "salt", "pepper", "paprika", "oregano", "cumin", "cinnamon", "turmeric", "soy sauce", "mustard", "vanilla", "coconut milk"]
    };

    // RECIPES WITH MACROS & FOOD SAFETY PROFILES
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
    let currentSelectedMealIndex = null; // Tracks which meal is being modified
    let isFamilyMode = false; // Tracks mode for regenerating meals

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

    // Converts dropdown time to maximum time per meal
    function getMaxTimePerMeal() {
        const timeSelect = document.getElementById("settings-cooking-time");
        const totalMinutes = timeSelect ? parseInt(timeSelect.value) : 60;
        // Divide total daily time by 3 meals + add 5 minutes margin for flexibility
        return (totalMinutes / 3) + 5; 
    }

    function getPrepTimeInt(prepTimeStr) {
        return parseInt(prepTimeStr) || 0;
    }

    // --- INDIVIDUAL GENERATION ---
    function generateIndividualMenu() {
        isFamilyMode = false;
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const mealTypes = ["Breakfast", "Lunch", "Dinner"];
        const maxTimePerMeal = getMaxTimePerMeal();
        
        currentWeekPlan = [];

        days.forEach(day => {
            mealTypes.forEach(type => {
                let availableRecipes = recipes.filter(r => 
                    r.mealType === type && getPrepTimeInt(r.prepTime) <= maxTimePerMeal
                );
                
                // Fallback to fastest recipe if time limit is too strict
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

    // --- FAMILY GENERATION ---
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

    // --- CALENDAR RENDERING ---
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
            currentSelectedMealIndex = planIndex; 
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

    // --- SWAP SINGLE MEAL LOGIC ---
    window.changeSingleMeal = function() {
        if (currentSelectedMealIndex === null) return;
        
        const currentItem = currentWeekPlan[currentSelectedMealIndex];
        const maxTimePerMeal = getMaxTimePerMeal();
        
        let availableRecipes = recipes.filter(r => 
            r.mealType === currentItem.type && 
            r.id !== currentItem.recipe.id && 
            getPrepTimeInt(r.prepTime) <= maxTimePerMeal
        );

        if (availableRecipes.length === 0) {
            availableRecipes = recipes.filter(r => r.mealType === currentItem.type && r.id !== currentItem.recipe.id);
        }

        if (availableRecipes.length > 0) {
            const newRecipe = availableRecipes[Math.floor(Math.random() * availableRecipes.length)];
            
            currentWeekPlan[currentSelectedMealIndex].recipe = newRecipe;
            
            if (isFamilyMode) {
                currentWeekPlan[currentSelectedMealIndex].familyTag = "Swapped Meal (Check ingredients manually)";
                currentWeekPlan[currentSelectedMealIndex].altMealData = null; 
            }

            renderCalendarFromPlan();
            updateShoppingList();
            
            if (typeof showToast === "function") showToast("Meal changed successfully! 🔄");
        } else {
            if (typeof showToast === "function") showToast("No other meals available! ⚠️");
        }
    };

    // --- ADVANCED SMART SHOPPING LIST ENGINE ---

    // Parses string like "150g Gluten-free flour" -> { amount: 150, unit: "g", name: "Gluten-free flour" }
    function parseIngredient(ingStr) {
        let amount = 1;
        let unit = "";
        let name = ingStr;
        
        const regex = /^([\d\.\/]+)\s*([a-zA-Z]+)?\s*(.*)$/;
        const match = ingStr.trim().match(regex);
        
        if (match) {
            const numStr = match[1];
            let potentialUnit = match[2] ? match[2].toLowerCase() : "";
            let rest = match[3] || "";
            
            if (numStr.includes('/')) {
                const [num, den] = numStr.split('/');
                amount = parseFloat(num) / parseFloat(den);
            } else {
                amount = parseFloat(numStr);
            }
            
            const validUnits = ['g', 'ml', 'kg', 'l', 'tbsp', 'tsp', 'pinch', 'cloves', 'slices', 'cup', 'cups'];
            if (validUnits.includes(potentialUnit)) {
                unit = potentialUnit;
                name = rest;
            } else {
                name = (potentialUnit + " " + rest).trim();
            }
        }
        
        return { 
            amount: amount, 
            unit: unit, 
            name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() 
        };
    }

    // Finds the matching supermarket section for an ingredient
    function getSection(ingredientName) {
        const lowerName = ingredientName.toLowerCase();
        for (const [section, keywords] of Object.entries(supermarketSections)) {
            if (keywords.some(kw => lowerName.includes(kw))) {
                return section;
            }
        }
        return "🛒 Others"; // Fallback category
    }

    // Generates, multiplies, accumulates, and categorizes the shopping list
    function updateShoppingList() {
        // Find the parent container where the old lists were to safely inject the new layout
        const mainGroceryList = document.getElementById("main-grocery-list");
        if (!mainGroceryList) return;
        
        const listContainer = mainGroceryList.parentElement; // We use the parent div of the old ul
        const aggregatedIngredients = {};

        // Loop through the entire week
        currentWeekPlan.forEach(planItem => {
            
            // --- SCALING LOGIC (MULTIPLIER) ---
            let mainMultiplier = 1; // Default for personal plan
            
            if (isFamilyMode) {
                if (planItem.familyTag.includes("All family members")) {
                    mainMultiplier = parseInt(document.getElementById("family-count-input").value) || 4;
                } else if (planItem.familyTag.includes("Suitable for:")) {
                    const namesString = planItem.familyTag.replace("Suitable for:", "").trim();
                    if (namesString !== "None" && namesString !== "") {
                        mainMultiplier = namesString.split(",").length;
                    } else {
                        mainMultiplier = 0; // No one eats this main dish
                    }
                }
            }

            // A. Process main recipe
            if (mainMultiplier > 0) {
                planItem.recipe.ingredients.forEach(ing => {
                    const parsed = parseIngredient(ing);
                    const finalAmount = parsed.amount * mainMultiplier;
                    const key = parsed.name + "_" + parsed.unit; 

                    if (aggregatedIngredients[key]) {
                        aggregatedIngredients[key].amount += finalAmount;
                    } else {
                        aggregatedIngredients[key] = {
                            amount: finalAmount,
                            unit: parsed.unit,
                            name: parsed.name,
                            section: getSection(parsed.name)
                        };
                    }
                });
            }

            // B. Process alternative recipe (if any)
            if (planItem.altMealData) {
                let altMultiplier = planItem.altMealData.forNames.split(",").length;

                planItem.altMealData.recipe.ingredients.forEach(ing => {
                    const parsed = parseIngredient(ing);
                    const finalAmount = parsed.amount * altMultiplier;
                    const key = parsed.name + "_" + parsed.unit; 

                    if (aggregatedIngredients[key]) {
                        aggregatedIngredients[key].amount += finalAmount;
                    } else {
                        aggregatedIngredients[key] = {
                            amount: finalAmount,
                            unit: parsed.unit,
                            name: parsed.name,
                            section: getSection(parsed.name)
                        };
                    }
                });
            }
        });

        // --- RENDER CATEGORIZED HTML ---
        
        const sectionsData = {};
        Object.values(aggregatedIngredients).forEach(item => {
            if (!sectionsData[item.section]) sectionsData[item.section] = [];
            sectionsData[item.section].push(item);
        });

        // Clear existing containers to avoid duplication
        listContainer.innerHTML = ""; 

        const sortedSections = Object.keys(sectionsData).sort();
        let indexCounter = 0;

        sortedSections.forEach(sectionTitle => {
            const sectionCard = document.createElement("div");
            sectionCard.className = "card";
            sectionCard.style.marginBottom = "15px";
            
            sectionCard.innerHTML = `<h3 style="color: #2e7d32; border-bottom: 2px solid #e8f5e9; padding-bottom: 5px; font-size: 16px;">${sectionTitle}</h3>`;
            
            const ul = document.createElement("ul");
            ul.className = "clean-list";
            ul.style.listStyleType = "none";
            ul.style.paddingLeft = "0";

            sectionsData[sectionTitle].forEach(ing => {
                const li = document.createElement("li");
                li.className = "shopping-list-item";
                li.style.padding = "6px 0";
                
                let displayAmount = Number.isInteger(ing.amount) ? ing.amount : parseFloat(ing.amount.toFixed(2));
                let unitStr = ing.unit ? ` ${ing.unit}` : "";
                let textNet = `${displayAmount}${unitStr} ${ing.name}`;
                
                li.innerHTML = `
                    <label style="display:flex; align-items:center; cursor:pointer;">
                        <input type="checkbox" id="grocery-${indexCounter}" onchange="toggleShoppingItem(this, '${textNet}')" style="margin-right: 10px; width: 16px; height: 16px;">
                        <span>${textNet}</span>
                    </label>
                `;
                ul.appendChild(li);
                indexCounter++;
            });

            sectionCard.appendChild(ul);
            listContainer.appendChild(sectionCard);
        });

        // Restore checkbox states if the helper function exists
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
