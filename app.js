/* ==========================================================================
   NutriSafe - Complete App Engine with Onboarding & Strict Dietary Filters
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

    const supermarketSections = {
        "🍎 Fruits & Vegetables": ["banana", "strawberry", "strawberries", "pepper", "cucumber", "tomato", "tomatoes", "broccoli", "asparagus", "potato", "lemon", "spinach", "avocado", "garlic", "cherry tomatoes", "sweet potato"],
        "🥩 Meat & Seafood": ["chicken", "beef", "salmon", "steak"],
        "🥚 Dairy & Eggs": ["milk", "egg", "eggs", "cheese", "butter"],
        "🌾 Grains & Legumes": ["flour", "oats", "rice", "quinoa", "bread", "chia", "tofu"],
        "🧂 Pantry & Spices": ["syrup", "oil", "salt", "pepper", "paprika", "oregano", "cumin", "cinnamon", "turmeric", "soy sauce", "mustard", "vanilla", "coconut milk"]
    };

    const recipes = [
        { id: 1, title: "Gluten-Free Pancakes", mealType: "Breakfast", prepTime: "15 min", calories: 380, macros: { protein: "14g", carbs: "52g", fat: "10g" }, safeFor: ["vegetarian", "cows_milk", "peanuts", "fish", "shellfish", "soy", "lactose"], ingredients: ["150g Gluten-free flour", "200ml Almond milk", "2 Eggs", "2 tbsp Maple syrup"], instructions: "1. Whisk eggs and almond milk together in a bowl.\n2. Gradually add gluten-free flour while stirring.\n3. Heat a non-stick pan and cook 2-3 min per side.\n4. Serve hot drizzled with maple syrup." },
        { id: 2, title: "Creamy Oatmeal Bowl", mealType: "Breakfast", prepTime: "8 min", calories: 310, macros: { protein: "11g", carbs: "48g", fat: "6g" }, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["80g Oats", "250ml Oat milk", "1 Banana", "1 tbsp Chia seeds"], instructions: "1. Bring oat milk to a gentle simmer in a small pot.\n2. Stir in oats and cook for 5 minutes on low heat.\n3. Slice the fresh banana.\n4. Pour oatmeal into a bowl and top with sliced banana and chia seeds." },
        { id: 3, title: "Avocado & Egg Toast", mealType: "Breakfast", prepTime: "5 min", calories: 340, macros: { protein: "15g", carbs: "28g", fat: "18g" }, safeFor: ["vegetarian", "cows_milk", "peanuts", "tree_nuts", "fish", "shellfish", "soy", "lactose"], ingredients: ["2 slices Whole-grain bread", "1 Ripe avocado", "2 Eggs", "1 pinch Salt & Black pepper"], instructions: "1. Toast bread slices until golden and crisp.\n2. Mash avocado in a bowl with salt and pepper, then spread evenly on toast.\n3. Fry or poach eggs to your liking and place on top." },
        { id: 4, title: "Chia Seed Pudding", mealType: "Breakfast", prepTime: "5 min", calories: 280, macros: { protein: "8g", carbs: "22g", fat: "14g" }, safeFor: ["vegan", "vegetarian", "keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["40g Chia seeds", "200ml Coconut milk", "1 tsp Vanilla extract", "100g Fresh strawberries"], instructions: "1. In a glass or jar, mix chia seeds, coconut milk, and vanilla extract.\n2. Let rest in the fridge for at least 2 hours (or overnight).\n3. Garnish with chopped fresh strawberries before serving." },
        { id: 5, title: "Chicken & Rice Stir-fry", mealType: "Lunch", prepTime: "20 min", calories: 520, macros: { protein: "42g", carbs: "58g", fat: "12g" }, safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"], ingredients: ["200g Chicken breast", "150g Jasmine rice", "2 tbsp Soy sauce", "1 Red bell pepper"], instructions: "1. Boil jasmine rice according to package instructions.\n2. Slice chicken breast and bell pepper into thin strips.\n3. Sauté chicken and peppers in a hot pan, add soy sauce, and toss with rice." },
        { id: 6, title: "Quinoa Cucumber Salad", mealType: "Lunch", prepTime: "15 min", calories: 410, macros: { protein: "12g", carbs: "54g", fat: "16g" }, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["100g Quinoa", "1 Cucumber", "100g Cherry tomatoes", "2 tbsp Extra virgin olive oil"], instructions: "1. Boil quinoa in water for 12 minutes, drain and let cool.\n2. Chop cucumber and halved cherry tomatoes.\n3. Combine all ingredients in a bowl and drizzle with olive oil." },
        { id: 7, title: "Beef & Broccoli Bowl", mealType: "Lunch", prepTime: "20 min", calories: 580, macros: { protein: "45g", carbs: "20g", fat: "28g" }, safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"], ingredients: ["200g Beef steak", "150g Broccoli florets", "2 cloves Garlic", "2 tbsp Soy sauce"], instructions: "1. Slice beef thinly against the grain.\n2. Sear beef strips with minced garlic in a hot skillet for 4-5 minutes.\n3. Steam broccoli florets, add to skillet with soy sauce, and stir to combine." },
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
    let isFamilyMode = false;

    function init() {
        setupTheme();
        renderSettingsCheckboxes();
        setupFamilyMembersUI(parseInt(document.getElementById("family-count-input")?.value) || 4);
        setupEventListeners();
        setupClearCheckedButton();
        
        // Si ja s'havia guardat selecció prèvia, genera directament
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

    // --- RENDERITZAR CHECKBOXES DE RESTRICCIONS INDIVIDUALS ---
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
                    if (opt.id === "none") {
                        selectedRestrictions = ["none"];
                    } else {
                        selectedRestrictions = selectedRestrictions.filter(r => r !== "none");
                        selectedRestrictions.push(opt.id);
                    }
                } else {
                    selectedRestrictions = selectedRestrictions.filter(r => r !== opt.id);
                }
                localStorage.setItem("nutrisafe_restrictions", JSON.stringify(selectedRestrictions));
                renderSettingsCheckboxes();
                generateIndividualMenu(); // Actualització automàtica del menú individual
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
            familyMembersGrid.appendChild(card);
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

    // --- FILtratge estricte per a qualsevol conjunt de restriccions ---
    function isRecipeSafeForRestrictions(recipe, restrictions) {
        if (!restrictions || restrictions.length === 0 || restrictions.includes("none")) return true;

        const ingText = recipe.ingredients.join(" ").toLowerCase();
        const titleText = recipe.title.toLowerCase();
        const safeList = recipe.safeFor || [];

        for (const rest of restrictions) {
            if (rest === "vegan") {
                const hasMeat = /chicken|beef|salmon|steak/.test(ingText) || /chicken|beef|salmon|steak/.test(titleText);
                const hasAnimalByproducts = /egg|eggs|milk|cheese|butter/.test(ingText);
                if (hasMeat || hasAnimalByproducts || !safeList.includes("vegan")) {
                    return false;
                }
            } else if (rest === "vegetarian") {
                const hasMeat = /chicken|beef|salmon|steak/.test(ingText) || /chicken|beef|salmon|steak/.test(titleText);
                if (hasMeat || !safeList.includes("vegetarian")) {
                    return false;
                }
            } else {
                if (!safeList.includes(rest)) {
                    return false;
                }
            }
        }
        return true;
    }

    // --- FILTRATGE ESTRICTE FAMILIAR ---
    function isRecipeSafeForFamily(recipe, familyData) {
        if (!familyData || familyData.length === 0) return true;
        for (const member of familyData) {
            if (!isRecipeSafeForRestrictions(recipe, member.restrictions)) {
                return false;
            }
        }
        return true;
    }

    // --- CONNEXIÓ AMB ONBOARDING (Just Me -> Demana al·lèrgies i fa menú automàtic) ---
    window.finishOnboarding = function(target) {
        const onboardingModal = document.getElementById('onboarding-modal');
        if (onboardingModal) onboardingModal.style.display = 'none';

        const onboardingTime = document.getElementById('onboarding-time');
        const settingsTime = document.getElementById('settings-cooking-time');
        if (onboardingTime && settingsTime) {
            settingsTime.value = onboardingTime.value;
        }

        if (target === 'family') {
            document.getElementById('nav-text-individual').innerText = 'Recipes';
            document.getElementById('planner-tab-title').innerText = 'Family Recipes';
            const restrCard = document.getElementById('settings-restrictions-card');
            if (restrCard) restrCard.style.display = 'none';
            openModal('premium-modal');
            switchTab('family-tab');
        } else {
            document.getElementById('nav-text-individual').innerText = 'Individual Plan';
            document.getElementById('planner-tab-title').innerText = 'Your Weekly Plan';
            const restrCard = document.getElementById('settings-restrictions-card');
            if (restrCard) restrCard.style.display = 'block';
            
            // Genera menú individual inicial i porta a settings per triar al·lèrgies si ho desitja
            generateIndividualMenu();
            switchTab('settings-tab');
            showToast('Set your diet restrictions below to update your plan automatically! ⚙️');
        }
    };

    // --- CLEAR CHECKED SHOPPING ITEMS ---
    window.clearCheckedShoppingItems = function() {
        const checkboxes = document.querySelectorAll("#main-grocery-list input[type='checkbox']");
        checkboxes.forEach(cb => {
            cb.checked = false;
            const itemLi = cb.closest("li");
            if (itemLi) {
                itemLi.classList.remove("completed", "checked");
                itemLi.style.textDecoration = "none";
                itemLi.style.opacity = "1";
            }
        });
        if (typeof showToast === "function") {
            showToast("Checked items unchecked! 🛒");
        }
    };

    function setupClearCheckedButton() {
        const clearBtn = document.getElementById("clear-checked-btn");
        if (clearBtn) {
            const newBtn = clearBtn.cloneNode(true);
            clearBtn.parentNode.replaceChild(newBtn, clearBtn);
            newBtn.addEventListener("click", (e) => {
                e.preventDefault();
                window.clearCheckedShoppingItems();
            });
        }
    }

    window.toggleShoppingItem = function(checkbox) {
        const li = checkbox.closest("li");
        if (li) {
            if (checkbox.checked) {
                li.classList.add("checked");
            } else {
                li.classList.remove("checked");
            }
            if (typeof saveShoppingListState === "function") {
                saveShoppingListState();
            }
        }
    };

    window.regenerateWeekWithRotation = function() {
        if (isFamilyMode) {
            generateFamilyMenu();
        } else {
            generateIndividualMenu(true);
        }
        showToast("New rotated weekly plan generated! 🔄");
    };

    // --- GENERAR MENÚ INDIVIDUAL AUTOMÀTIC ---
    function generateIndividualMenu(isRotation = false) {
        isFamilyMode = false;
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const mealTypes = ["Breakfast", "Lunch", "Dinner"];
        const maxTimePerMeal = getMaxTimePerMeal();
        
        const oldTitles = currentWeekPlan.map(item => item.recipe.title);
        currentWeekPlan = [];

        days.forEach(day => {
            mealTypes.forEach(type => {
                let availableRecipes = recipes.filter(r => 
                    r.mealType === type && 
                    getPrepTimeInt(r.prepTime) <= maxTimePerMeal &&
                    isRecipeSafeForRestrictions(r, selectedRestrictions)
                );
                
                if (availableRecipes.length === 0) {
                    availableRecipes = recipes.filter(r => r.mealType === type && isRecipeSafeForRestrictions(r, selectedRestrictions));
                }
                if (availableRecipes.length === 0) {
                    availableRecipes = recipes.filter(r => r.mealType === type);
                }

                if (isRotation && availableRecipes.length > 1) {
                    const filteredNew = availableRecipes.filter(r => !oldTitles.includes(r.title));
                    if (filteredNew.length > 0) availableRecipes = filteredNew;
                }

                const recipe = availableRecipes[Math.floor(Math.random() * availableRecipes.length)];

                currentWeekPlan.push({
                    day: day,
                    type: type,
                    recipe: recipe,
                    familyTag: selectedRestrictions.length && !selectedRestrictions.includes("none") ? `Personal (Adapted)` : "Personal Plan"
                });
            });
        });

        renderCalendarFromPlan();
        updateShoppingList();
    }

    // --- GENERAR MENÚ FAMILIAR ---
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
            const checkboxes = card.querySelectorAll("input.member-restriction:checked");
            const restrictions = Array.from(checkboxes).map(cb => cb.value);
            familyData.push({ name, restrictions });
        });

        days.forEach(day => {
            mealTypes.forEach(type => {
                let validRecipes = recipes.filter(r => 
                    r.mealType === type && 
                    getPrepTimeInt(r.prepTime) <= maxTimePerMeal && 
                    isRecipeSafeForFamily(r, familyData)
                );

                if (validRecipes.length === 0) {
                    validRecipes = recipes.filter(r => r.mealType === type && isRecipeSafeForFamily(r, familyData));
                }
                if (validRecipes.length === 0) {
                    validRecipes = recipes.filter(r => r.mealType === type);
                }

                const recipe = validRecipes[Math.floor(Math.random() * validRecipes.length)];
                currentWeekPlan.push({
                    day: day,
                    type: type,
                    recipe: recipe,
                    familyTag: `Adapted for ${familyData.length} members`
                });
            });
        });

        renderCalendarFromPlan();
        updateShoppingList();
        showToast("Smart Family Plan generated successfully! 👨‍👩‍👧‍👦");
    }

    function renderCalendarFromPlan() {
        if (!calendarGrid) return;
        calendarGrid.innerHTML = "";

        currentWeekPlan.forEach((item, index) => {
            const card = document.createElement("div");
            card.className = "card meal-card";
            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                        <span style="font-size: 11px; font-weight: bold; color: #888; text-transform: uppercase;">${item.day} — ${item.type}</span>
                        <h3 style="margin: 4px 0; color: #2e7d32;">${item.recipe.title}</h3>
                        <p style="font-size: 12px; color: #555;">⏱️ ${item.recipe.prepTime} &nbsp;|&nbsp; 🔥 ${item.recipe.calories} kcal</p>
                        <span class="family-tag">${item.familyTag}</span>
                    </div>
                    <button class="btn-secondary" style="font-size: 11px; padding: 4px 8px;" onclick="event.stopPropagation(); openSwapModal(${index})">🔄 Change</button>
                </div>
            `;
            card.addEventListener("click", () => {
                currentSelectedMealId = index;
                openRecipeModal(index);
            });
            calendarGrid.appendChild(card);
        });
    }

    function openRecipeModal(index) {
        currentSelectedMealId = index;
        const meal = currentWeekPlan[index];
        if (!meal) return;

        document.getElementById("recipe-title").innerText = meal.recipe.title;
        document.getElementById("recipe-family-info").innerText = meal.familyTag;
        document.getElementById("macro-calories").innerText = meal.recipe.calories + " kcal";
        document.getElementById("macro-protein").innerText = meal.recipe.macros.protein;
        document.getElementById("macro-carbs").innerText = meal.recipe.macros.carbs;
        document.getElementById("macro-fat").innerText = meal.recipe.macros.fat;

        const ingList = document.getElementById("recipe-ingredients");
        ingList.innerHTML = "";
        meal.recipe.ingredients.forEach(ing => {
            const li = document.createElement("li");
            li.innerText = ing;
            ingList.appendChild(li);
        });

        document.getElementById("recipe-instructions").innerText = meal.recipe.instructions;
        openModal("recipe-modal");
    }

    window.openSwapModal = function(index) {
        currentSelectedMealId = index;
        const meal = currentWeekPlan[index];
        const modalList = document.getElementById("swap-alternatives-list");
        modalList.innerHTML = "";

        const maxTime = getMaxTimePerMeal();
        const activeRestrictions = isFamilyMode ? [] : selectedRestrictions;
        const alternatives = recipes.filter(r => r.mealType === meal.type && r.title !== meal.recipe.title && getPrepTimeInt(r.prepTime) <= maxTime && isRecipeSafeForRestrictions(r, activeRestrictions));

        if (alternatives.length === 0) {
            modalList.innerHTML = `<p style="font-size: 13px; color: #888;">No safe recipes found under current limits. Showing all:</p>`;
            recipes.filter(r => r.mealType === meal.type && r.title !== meal.recipe.title).forEach(alt => {
                appendAlternativeCard(alt, modalList, index);
            });
        } else {
            alternatives.forEach(alt => {
                appendAlternativeCard(alt, modalList, index);
            });
        }

        openModal("swap-modal");
    };

    function appendAlternativeCard(alt, container, index) {
        const div = document.createElement("div");
        div.style.cssText = "display: flex; justify-content: space-between; align-items: center; background: #f8f9fa; padding: 10px; border-radius: 8px; border: 1px solid #e9ecef;";
        div.innerHTML = `
            <div>
                <strong>${alt.title}</strong>
                <p style="font-size: 11px; color: #666; margin: 2px 0 0 0;">⏱️ ${alt.prepTime} | 🔥 ${alt.calories} kcal</p>
            </div>
            <button class="btn-primary" style="padding: 5px 10px; font-size: 12px;">Select</button>
        `;
        div.querySelector("button").addEventListener("click", () => {
            currentWeekPlan[index].recipe = alt;
            renderCalendarFromPlan();
            updateShoppingList();
            closeModal("swap-modal");
            showToast(`Meal updated to ${alt.title}! ✨`);
        });
        container.appendChild(div);
    }

    function updateShoppingList() {
        const groceryList = document.getElementById("main-grocery-list");
        if (!groceryList) return;
        groceryList.innerHTML = "";

        const aggregatedIngredients = {};

        currentWeekPlan.forEach(item => {
            item.recipe.ingredients.forEach(ing => {
                aggregatedIngredients[ing] = (aggregatedIngredients[ing] || 0) + 1;
            });
        });

        const grouped = {};
        Object.keys(supermarketSections).forEach(sec => grouped[sec] = []);
        grouped["📦 Other Ingredients"] = [];

        Object.keys(aggregatedIngredients).forEach(ing => {
            let placed = false;
            const lowerIng = ing.toLowerCase();
            for (const [sec, keywords] of Object.entries(supermarketSections)) {
                if (keywords.some(kw => lowerIng.includes(kw))) {
                    grouped[sec].push(ing);
                    placed = true;
                    break;
                }
            }
            if (!placed) {
                grouped["📦 Other Ingredients"].push(ing);
            }
        });

        Object.keys(grouped).forEach(sectionName => {
            const list = grouped[sectionName];
            if (list.length === 0) return;

            const secTitle = document.createElement("li");
            secTitle.style.cssText = "font-weight: bold; color: #2e7d32; margin-top: 12px; margin-bottom: 4px; font-size: 14px;";
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

        if (typeof restoreShoppingListState === "function") {
            restoreShoppingListState();
        }
    }

    function setupEventListeners() {
        if (updateFamilyBtn) {
            updateFamilyBtn.addEventListener("click", () => {
                const count = parseInt(document.getElementById("family-count-input").value) || 4;
                setupFamilyMembersUI(count);
                setupClearCheckedButton();
                showToast(`Family updated to ${count} members! 👥`);
            });
        }

        if (generateFamilyBtn) {
            generateFamilyBtn.addEventListener("click", () => {
                closeModal('premium-modal');
                switchTab('planner-tab');
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
