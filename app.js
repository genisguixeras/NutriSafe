document.addEventListener("DOMContentLoaded", () => {
    // 1. DIETES I AL·LÈRGIES
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

    // 2. BASE DE DADES AMB QUANTITATS REALS (Grams, Kg, ml, Unitats)
    const recipes = [
        { id: 1, title: "Gluten-Free Pancakes", mealType: "Breakfast", prepTime: "15 min", calories: 380, safeFor: ["vegetarian", "cows_milk", "peanuts", "fish", "shellfish", "soy", "lactose"], ingredients: ["150g Gluten-free flour", "200ml Almond milk", "2 Eggs", "2 tbsp Maple syrup"], instructions: "1. Whisk eggs and almond milk.\n2. Add gluten-free flour while stirring.\n3. Cook on a hot pan 2-3 min per side.\n4. Serve with maple syrup." },
        { id: 2, title: "Creamy Oatmeal Bowl", mealType: "Breakfast", prepTime: "10 min", calories: 310, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["80g Gluten-free oats", "250ml Oat milk", "1 Banana", "1 tbsp Chia seeds"], instructions: "1. Cook oats in oat milk for 5 min.\n2. Slice fresh banana.\n3. Top oatmeal with banana slices and chia seeds." },
        { id: 3, title: "Avocado & Egg Toast", mealType: "Breakfast", prepTime: "5 min", calories: 340, safeFor: ["vegetarian", "cows_milk", "peanuts", "tree_nuts", "fish", "shellfish", "soy", "lactose"], ingredients: ["2 slices Sourdough bread", "1 Avocado", "2 Eggs", "1 pinch Salt and pepper"], instructions: "1. Toast bread.\n2. Mash avocado with salt and spread on toast.\n3. Fry an egg and place on top." },
        { id: 4, title: "Berry & Spinach Smoothie", mealType: "Breakfast", prepTime: "5 min", calories: 220, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["100g Mixed berries", "50g Spinach", "200ml Water", "30g Plant protein powder"], instructions: "1. Add berries, spinach, water, and protein powder to blender.\n2. Blend for 45s until smooth." },
        { id: 5, title: "Chia Seed Pudding", mealType: "Breakfast", prepTime: "5 min", calories: 280, safeFor: ["vegan", "vegetarian", "keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["40g Chia seeds", "200ml Coconut milk", "1 tsp Vanilla extract", "100g Strawberries"], instructions: "1. Mix chia seeds and coconut milk with vanilla.\n2. Refrigerate 2 hours.\n3. Top with fresh strawberries." },
        { id: 6, title: "Scrambled Tofu Toast", mealType: "Breakfast", prepTime: "12 min", calories: 320, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "lactose"], ingredients: ["2 slices Sourdough bread", "200g Tofu", "1/2 tsp Turmeric", "30g Spinach", "1 tbsp Olive oil"], instructions: "1. Crumble tofu into pan with olive oil and turmeric.\n2. Sauté with spinach for 4 minutes.\n3. Serve on toasted sourdough." },
        { id: 7, title: "Banana & Almond Butter Toast", mealType: "Breakfast", prepTime: "5 min", calories: 360, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["2 slices Gluten-free bread", "2 tbsp Almond butter", "1 Banana", "1/2 tsp Cinnamon"], instructions: "1. Toast bread.\n2. Spread almond butter, top with banana slices and cinnamon." },
        { id: 8, title: "Fruit Salad with Mint", mealType: "Breakfast", prepTime: "10 min", calories: 180, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["1 Orange", "1 Apple", "80g Blueberries", "4 leaves Fresh mint", "1 tbsp Lime juice"], instructions: "1. Dice orange and apple.\n2. Mix with blueberries, chopped mint, and lime juice." },
        { id: 9, title: "Classic Shakshuka", mealType: "Breakfast", prepTime: "20 min", calories: 390, safeFor: ["vegetarian", "keto", "cows_milk", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["2 Eggs", "200g Canned tomatoes", "1 Bell pepper", "1/2 Onion", "1 tsp Cumin"], instructions: "1. Sauté onion and peppers.\n2. Add tomatoes and spices, simmer 10 min.\n3. Make wells, crack eggs inside, cover and cook 5 min." },
        { id: 10, title: "Chicken and Rice Stir-fry", mealType: "Lunch", prepTime: "20 min", calories: 520, safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose", "fructose"], ingredients: ["200g Chicken breast", "150g Jasmine rice", "2 tbsp Soy sauce", "1 Bell pepper", "1 Carrot"], instructions: "1. Cook rice.\n2. Stir-fry chicken strips and sliced veggies.\n3. Add soy sauce and combine with rice." },
        { id: 11, title: "Quinoa Cucumber Salad", mealType: "Lunch", prepTime: "15 min", calories: 410, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["100g Quinoa", "1 Cucumber", "100g Cherry tomatoes", "2 tbsp Olive oil", "1/2 Lemon"], instructions: "1. Boil quinoa and let cool.\n2. Mix with diced cucumber and cherry tomatoes.\n3. Dress with olive oil and lemon juice." },
        { id: 12, title: "Lentil Vegetable Soup", mealType: "Lunch", prepTime: "35 min", calories: 380, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["120g Lentils", "2 Carrots", "2 stalks Celery", "1 tbsp Tomato paste", "400ml Vegetable broth"], instructions: "1. Sauté carrots and celery.\n2. Add tomato paste, lentils, and broth.\n3. Simmer for 25 minutes until tender." },
        { id: 13, title: "Beef and Broccoli Bowl", mealType: "Lunch", prepTime: "20 min", calories: 580, safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose", "fructose"], ingredients: ["200g Beef steak", "150g Broccoli", "2 cloves Garlic", "10g Ginger", "2 tbsp Tamari sauce"], instructions: "1. Slice beef thinly.\n2. Sear beef with garlic and ginger.\n3. Add steamed broccoli florets and tamari sauce." },
        { id: 14, title: "Tuna Salad Wrap", mealType: "Lunch", prepTime: "10 min", calories: 450, safeFor: ["cows_milk", "peanuts", "tree_nuts", "shellfish", "wheat", "lactose", "fructose"], ingredients: ["1 canned Tuna (120g)", "1 Gluten-free tortilla", "1/2 Cucumber", "1 tbsp Mayonnaise", "3 leaves Lettuce"], instructions: "1. Mix tuna with mayonnaise and diced cucumber.\n2. Wrap in tortilla with lettuce leaves." },
        { id: 15, title: "Greek Chickpea Salad", mealType: "Lunch", prepTime: "12 min", calories: 430, safeFor: ["vegetarian", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "fructose"], ingredients: ["200g Canned chickpeas", "60g Feta cheese", "1 Cucumber", "1/2 Onion", "2 tbsp Olive oil"], instructions: "1. Rinse chickpeas.\n2. Combine with chopped cucumber, onion, and feta.\n3. Drizzle with olive oil." },
        { id: 16, title: "Turkey and Avocado Sandwich", mealType: "Lunch", prepTime: "8 min", calories: 470, safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "lactose"], ingredients: ["2 slices Sourdough bread", "100g Turkey breast", "1/2 Avocado", "1 Tomato", "1 tsp Mustard"], instructions: "1. Spread mustard on sourdough bread.\n2. Layer turkey breast, sliced avocado, and tomato." },
        { id: 17, title: "Sweet Potato & Black Bean Bowl", mealType: "Lunch", prepTime: "25 min", calories: 490, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["1 Sweet potato (200g)", "150g Black beans", "5g Coriander", "1/2 Lime", "1 tbsp Olive oil"], instructions: "1. Roast sweet potato cubes at 200°C for 20 min.\n2. Serve with warmed black beans, coriander, and lime juice." },
        { id: 18, title: "Egg Fried Rice", mealType: "Lunch", prepTime: "15 min", calories: 510, safeFor: ["cows_milk", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose", "fructose"], ingredients: ["180g Jasmine rice", "2 Eggs", "50g Green peas", "1/2 Onion", "1 tbsp Sesame oil"], instructions: "1. Sauté onion and peas in sesame oil.\n2. Scramble eggs in the pan, then toss in cooked rice." },
        { id: 19, title: "Grilled Salmon with Broccoli", mealType: "Dinner", prepTime: "25 min", calories: 610, safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["200g Salmon fillet", "180g Broccoli", "2 tbsp Olive oil", "1/2 Lemon", "1 clove Garlic"], instructions: "1. Grill salmon 4-5 min per side.\n2. Roast broccoli with olive oil and garlic, serve with lemon." },
        { id: 20, title: "Steak with Sweet Potato Fries", mealType: "Dinner", prepTime: "30 min", calories: 680, safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["220g Beef steak", "200g Sweet potato", "2 tbsp Olive oil", "1 sprig Rosemary"], instructions: "1. Cut sweet potatoes into fries, toss with oil and bake 25 min at 210°C.\n2. Sear steak 3-4 min per side." },
        { id: 21, title: "Lemon Herb Cod", mealType: "Dinner", prepTime: "20 min", calories: 420, safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["200g Cod fillet", "10g Fresh parsley", "1/2 Lemon", "2 tbsp Olive oil", "150g Asparagus"], instructions: "1. Place cod and asparagus on baking dish.\n2. Drizzle with oil, lemon, and parsley.\n3. Bake at 200°C for 12-15 min." },
        { id: 22, title: "Pork Chops with Apples", mealType: "Dinner", prepTime: "25 min", calories: 590, safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["200g Pork chops", "1 Apple", "1/2 Onion", "1/2 tsp Cinnamon", "1 tbsp Olive oil"], instructions: "1. Sear pork chops 4 min per side.\n2. Sauté apple wedges and onions with cinnamon, serve together." },
        { id: 23, title: "Baked Chicken Breasts", mealType: "Dinner", prepTime: "30 min", calories: 480, safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["220g Chicken breast", "1 tsp Paprika", "1 tsp Oregano", "1 clove Garlic", "150g Green beans"], instructions: "1. Rub chicken with spices and oil.\n2. Bake at 190°C with green beans for 22-25 min." },
        { id: 24, title: "Shrimp Garlic Pasta", mealType: "Dinner", prepTime: "18 min", calories: 540, safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "soy", "lactose", "fructose"], ingredients: ["120g Pasta", "150g Shrimp", "2 cloves Garlic", "2 tbsp Olive oil", "1 pinch Red pepper flakes"], instructions: "1. Boil pasta.\n2. Sauté garlic and shrimp in olive oil for 3 min.\n3. Toss pasta in garlic shrimp oil." },
        { id: 25, title: "Beef Bolognese with Zoodles", mealType: "Dinner", prepTime: "25 min", calories: 460, safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["180g Minced beef", "2 Zucchinis", "200g Canned tomatoes", "1 tsp Italian herbs", "1/2 Onion"], instructions: "1. Brown beef and onions, add tomatoes and herbs, simmer 15 min.\n2. Serve over spiralized zucchini noodles." },
        { id: 26, title: "Tofu & Vegetable Curry", mealType: "Dinner", prepTime: "25 min", calories: 430, safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"], ingredients: ["180g Tofu", "200ml Coconut milk", "1 tbsp Yellow curry paste", "1 Bell pepper", "50g Spinach"], instructions: "1. Sauté curry paste in coconut milk.\n2. Add peppers, tofu, simmer 12 min.\n3. Stir in spinach at the end." },
        { id: 27, title: "Turkey Burgers with Salad", mealType: "Dinner", prepTime: "20 min", calories: 450, safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["180g Turkey breast", "80g Mixed greens", "1 Tomato", "1 Cucumber", "1 tbsp Olive oil"], instructions: "1. Form turkey patties and cook 5 min per side.\n2. Serve over fresh mixed salad." }
    ];

    const calendarGrid = document.getElementById("calendar-grid");
    const mainGroceryList = document.getElementById("main-grocery-list");
    const pantryList = document.getElementById("pantry-list");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    
    let selectedRestrictions = JSON.parse(localStorage.getItem("nutrisafe_restrictions")) || [];
    let currentWeeklyPlan = [];
    let isProUser = localStorage.getItem("nutrisafe_pro") === "true";
    let familyUsageCount = parseInt(localStorage.getItem("nutrisafe_family_count") || "0");

    function init() {
        setupTheme();
        renderCheckboxGrids();
        setupNavigation();
        checkOnboarding();
        setupFamilyUI();
        setupExport();
        setupRecipeModal();
        generateMenu();
    }

    function showToast(message, emoji = "✨") {
        const container = document.getElementById("toast-container");
        if (!container) return;
        const toast = document.createElement("div");
        toast.className = "toast-msg";
        toast.innerHTML = `<span>${emoji}</span> <span>${message}</span>`;
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transition = "opacity 0.3s";
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    function setupNavigation() {
        const navButtons = document.querySelectorAll(".nav-btn");
        const tabContents = document.querySelectorAll(".tab-content");

        navButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                navButtons.forEach(b => b.classList.remove("active"));
                tabContents.forEach(t => t.classList.remove("active"));
                
                btn.classList.add("active");
                const targetTab = document.getElementById(btn.dataset.tab);
                if (targetTab) targetTab.classList.add("active");

                if (btn.dataset.tab === "planner-tab" && currentWeeklyPlan.length === 0) {
                    generateMenu();
                }
            });
        });
    }

    function setupTheme() {
        const isDark = localStorage.getItem("nutrisafe_dark_mode") === "true";
        if (isDark) {
            document.body.classList.add("dark-mode");
            if (darkModeToggle) darkModeToggle.checked = true;
        }
        if (darkModeToggle) {
            darkModeToggle.addEventListener("change", () => {
                document.body.classList.toggle("dark-mode");
                localStorage.setItem("nutrisafe_dark_mode", darkModeToggle.checked);
            });
        }
    }

    function renderCheckboxGrids() {
        const onboardingGrid = document.getElementById("onboarding-checkboxes");
        const settingsGrid = document.getElementById("settings-checkboxes");
        if (onboardingGrid) onboardingGrid.innerHTML = "";
        if (settingsGrid) settingsGrid.innerHTML = "";

        dietaryOptions.forEach(opt => {
            const isChecked = selectedRestrictions.includes(opt.id) ? "checked" : "";
            const html = `<label style="display:block; margin: 5px 0;"><input type="checkbox" value="${opt.id}" ${isChecked}> ${opt.label}</label>`;
            if (onboardingGrid) onboardingGrid.innerHTML += html;
            if (settingsGrid) settingsGrid.innerHTML += html;
        });

        if (settingsGrid) {
            settingsGrid.querySelectorAll("input").forEach(input => {
                input.addEventListener("change", (e) => handleRestrictionChange(e.target.value, e.target.checked));
            });
        }
    }

    function handleRestrictionChange(value, isChecked) {
        if (value === "none" && isChecked) {
            selectedRestrictions = ["none"];
            document.querySelectorAll("#settings-checkboxes input").forEach(i => { if (i.value !== "none") i.checked = false; });
        } else {
            if (isChecked) {
                selectedRestrictions.push(value);
                selectedRestrictions = selectedRestrictions.filter(i => i !== "none");
                const noneInput = document.querySelector("#settings-checkboxes input[value='none']");
                if (noneInput) noneInput.checked = false;
            } else {
                selectedRestrictions = selectedRestrictions.filter(i => i !== value);
            }
        }
        localStorage.setItem("nutrisafe_restrictions", JSON.stringify(selectedRestrictions));
        generateMenu();
        showToast("Dietary preferences updated!");
    }

    function checkOnboarding() {
        const hasVisited = localStorage.getItem("nutrisafe_visited");
        const modal = document.getElementById("onboarding-modal");
        if (!hasVisited && modal) {
            modal.style.display = "flex";
            document.getElementById("save-onboarding-btn").addEventListener("click", () => {
                const checked = Array.from(document.querySelectorAll("#onboarding-checkboxes input:checked")).map(i => i.value);
                selectedRestrictions = checked.length ? checked : ["none"];
                localStorage.setItem("nutrisafe_restrictions", JSON.stringify(selectedRestrictions));
                localStorage.setItem("nutrisafe_visited", "true");
                modal.style.display = "none";
                renderCheckboxGrids();
                generateMenu();
            });
        }
    }

    function shuffle(array) { return array.sort(() => Math.random() - 0.5); }

    function generateMenu() {
        if (!calendarGrid) return;
        currentWeeklyPlan = [];
        
        const safeRecipes = recipes.filter(r => {
            if (selectedRestrictions.length === 0 || selectedRestrictions.includes("none")) return true;
            return selectedRestrictions.every(req => r.safeFor && r.safeFor.includes(req));
        });

        const getRandomMeal = (type) => {
            let f = safeRecipes.filter(r => r.mealType === type);
            if (f.length === 0) f = recipes.filter(r => r.mealType === type);
            return shuffle([...f])[0];
        };

        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        
        days.forEach((dayName) => {
            currentWeeklyPlan.push({
                day: dayName,
                meals: {
                    Breakfast: getRandomMeal("Breakfast"),
                    Lunch: getRandomMeal("Lunch"),
                    Dinner: getRandomMeal("Dinner")
                }
            });
        });
        
        renderIndividualCalendar();
    }

    function renderIndividualCalendar() {
        if (!calendarGrid) return;
        calendarGrid.innerHTML = "";
        let activeMenuIngredients = [];

        currentWeeklyPlan.forEach((dayData, dayIdx) => {
            const div = document.createElement("div");
            div.className = "day-card";

            let totalTime = 0;
            let totalCals = 0;
            Object.values(dayData.meals).forEach(m => {
                totalTime += parseInt(m.prepTime) || 10;
                totalCals += m.calories || 400;
            });

            div.innerHTML = `<h3>${dayData.day} <br><small style="font-size:0.65em; font-weight:normal; color:#7f8c8d;">⏱️ ~${totalTime} min | 🔥 ~${totalCals} kcal</small></h3>`;
            
            ["Breakfast", "Lunch", "Dinner"].forEach(type => {
                const m = dayData.meals[type];
                const mealDiv = document.createElement("div");
                mealDiv.className = "meal-item";
                mealDiv.style.display = "flex";
                mealDiv.style.justifyContent = "space-between";
                mealDiv.style.alignItems = "center";
                mealDiv.style.marginBottom = "6px";
                
                mealDiv.innerHTML = `
                    <div class="clickable-meal" style="cursor:pointer; flex-grow:1;">
                        <strong>${m.mealType}: ${m.title}</strong><br>
                        <small style="color:#7f8c8d;">⏱️ ${m.prepTime} | 🔥 ${m.calories} kcal</small>
                    </div>
                    <button class="btn-swap-meal" title="Swap this meal">🔄</button>
                `;

                mealDiv.querySelector(".clickable-meal").addEventListener("click", () => openRecipeModal(m.id));
                mealDiv.querySelector(".btn-swap-meal").addEventListener("click", () => swapSingleMeal(dayIdx, type));

                div.appendChild(mealDiv);
                activeMenuIngredients.push(...m.ingredients);
            });

            calendarGrid.appendChild(div);
        });

        updateShoppingList(activeMenuIngredients);
    }

    function swapSingleMeal(dayIndex, mealType) {
        const safeRecipes = recipes.filter(r => {
            if (selectedRestrictions.length === 0 || selectedRestrictions.includes("none")) return true;
            return selectedRestrictions.every(req => r.safeFor && r.safeFor.includes(req));
        });

        let available = safeRecipes.filter(r => r.mealType === mealType && r.id !== currentWeeklyPlan[dayIndex].meals[mealType].id);
        if (available.length === 0) available = recipes.filter(r => r.mealType === mealType);

        const newMeal = shuffle(available)[0];
        currentWeeklyPlan[dayIndex].meals[mealType] = newMeal;
        
        renderIndividualCalendar();
        showToast(`Swapped ${mealType} for ${newMeal.title}!`, "🔄");
    }

    function setupFamilyUI() {
        let familyMembers = JSON.parse(localStorage.getItem("nutrisafe_family")) || [
            { id: 1, name: "Person 1", restrictions: ["none"] },
            { id: 2, name: "Person 2", restrictions: ["none"] }
        ];

        const countInput = document.getElementById("family-count-input");
        if (countInput) countInput.value = familyMembers.length;

        const renderMembers = () => {
            const grid = document.getElementById("family-members-grid");
            if (!grid) return;
            grid.innerHTML = "";
            
            familyMembers.forEach((m, idx) => {
                let card = document.createElement("div");
                card.className = "card";
                card.style.padding = "15px";
                
                let optionsHtml = dietaryOptions.map(opt => {
                    let checked = m.restrictions.includes(opt.id) ? "checked" : "";
                    return `<label style="display:block; font-size: 0.85em; margin: 3px 0;"><input type="checkbox" value="${opt.id}" class="fam-restriction" data-member="${idx}" ${checked}> ${opt.label}</label>`;
                }).join("");

                card.innerHTML = `
                    <div style="margin-bottom: 10px;">
                        <strong>Member #${idx + 1} Name:</strong><br>
                        <input type="text" value="${m.name}" class="fam-name-input" data-member="${idx}" style="width: 100%; padding: 6px; margin-top: 4px; border-radius: 4px; border: 1px solid #ccc;">
                    </div>
                    <strong style="font-size: 0.9em;">Dietary Needs:</strong>
                    <div style="max-height: 140px; overflow-y: auto; margin-top: 5px; padding: 5px; background: rgba(0,0,0,0.02); border-radius: 4px;">
                        ${optionsHtml}
                    </div>
                `;
                grid.appendChild(card);
            });

            document.querySelectorAll(".fam-name-input").forEach(inp => {
                inp.addEventListener("input", (e) => {
                    familyMembers[e.target.dataset.member].name = e.target.value || `Person ${parseInt(e.target.dataset.member)+1}`;
                    saveFamily();
                });
            });

            document.querySelectorAll(".fam-restriction").forEach(chk => {
                chk.addEventListener("change", (e) => {
                    let mIdx = e.target.dataset.member;
                    let val = e.target.value;
                    if (val === "none" && e.target.checked) {
                        familyMembers[mIdx].restrictions = ["none"];
                        e.target.closest("div").querySelectorAll("input").forEach(i => { if(i.value !== "none") i.checked = false; });
                    } else {
                        if (e.target.checked) {
                            familyMembers[mIdx].restrictions.push(val);
                            familyMembers[mIdx].restrictions = familyMembers[mIdx].restrictions.filter(r => r !== "none");
                            let noneInp = e.target.closest("div").querySelector("input[value='none']");
                            if (noneInp) noneInp.checked = false;
                        } else {
                            familyMembers[mIdx].restrictions = familyMembers[mIdx].restrictions.filter(r => r !== val);
                            if (familyMembers[mIdx].restrictions.length === 0) familyMembers[mIdx].restrictions = ["none"];
                        }
                    }
                    saveFamily();
                });
            });
        };

        const saveFamily = () => localStorage.setItem("nutrisafe_family", JSON.stringify(familyMembers));

        const updateBtn = document.getElementById("update-family-count-btn");
        if (updateBtn) {
            updateBtn.addEventListener("click", () => {
                let count = parseInt(countInput.value) || 1;
                if (count < 1) count = 1; if (count > 10) count = 10;
                while (familyMembers.length < count) {
                    familyMembers.push({ id: familyMembers.length + 1, name: `Person ${familyMembers.length + 1}`, restrictions: ["none"] });
                }
                while (familyMembers.length > count) familyMembers.pop();
                saveFamily();
                renderMembers();
            });
        }

        const genFamBtn = document.getElementById("generate-family-btn");
        const premModal = document.getElementById("premium-modal");

        if (genFamBtn) {
            genFamBtn.addEventListener("click", () => {
                if (!isProUser && familyUsageCount >= 1) {
                    premModal.style.display = "flex";
                    return;
                }

                familyUsageCount++;
                localStorage.setItem("nutrisafe_family_count", familyUsageCount.toString());

                generateFamilyMenu(familyMembers);
                showToast("Family menu generated successfully!", "👨‍👩‍👧‍👦");
            });
        }

        document.getElementById("close-premium-modal").addEventListener("click", () => premModal.style.display = "none");
        
        document.getElementById("start-free-trial-btn").addEventListener("click", () => {
            isProUser = true;
            localStorage.setItem("nutrisafe_pro", "true");
            premModal.style.display = "none";
            showToast("🎉 PRO Trial Activated! Enjoy unlimited family menus.", "👑");
            generateFamilyMenu(familyMembers);
        });

        renderMembers();
    }

    function getFamilyMealPlan(mealType, members) {
        let unassigned = [...members];
        let assignments = [];
        let availableRecipes = shuffle([...recipes.filter(r => r.mealType === mealType)]);
        if (availableRecipes.length === 0) availableRecipes = shuffle([...recipes]);

        while (unassigned.length > 0) {
            let bestRecipe = null;
            let bestMatchMembers = [];

            for (let recipe of availableRecipes) {
                let compatibleMembers = unassigned.filter(member => {
                    if (member.restrictions.length === 0 || member.restrictions.includes("none")) return true;
                    return member.restrictions.every(req => recipe.safeFor && recipe.safeFor.includes(req));
                });

                if (compatibleMembers.length > bestMatchMembers.length) {
                    bestMatchMembers = compatibleMembers;
                    bestRecipe = recipe;
                }
            }

            if (bestMatchMembers.length === 0) {
                bestRecipe = availableRecipes[0];
                bestMatchMembers = [unassigned[0]];
            }

            assignments.push({
                recipe: bestRecipe,
                members: bestMatchMembers.map(m => m.name || `Person ${m.id}`)
            });

            unassigned = unassigned.filter(m => !bestMatchMembers.includes(m));
        }
        return assignments;
    }

    function generateFamilyMenu(members) {
        const famGrid = document.getElementById("family-calendar-grid");
        if (!famGrid) return;
        famGrid.innerHTML = "";
        let allFamilyIngredients = [];

        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        
        days.forEach(dayName => {
            const div = document.createElement("div");
            div.className = "day-card";
            div.innerHTML = `<h3>${dayName}</h3>`;

            ["Breakfast", "Lunch", "Dinner"].forEach(mealType => {
                const assignments = getFamilyMealPlan(mealType, members);
                
                const mealDiv = document.createElement("div");
                mealDiv.className = "meal-item";
                mealDiv.style.marginBottom = "8px";
                mealDiv.style.padding = "8px";
                mealDiv.style.background = "rgba(0,0,0,0.03)";
                mealDiv.style.borderRadius = "6px";

                mealDiv.innerHTML = `<strong style="color:#2c3e50;">${mealType}:</strong>`;

                assignments.forEach(assign => {
                    let namesStr = assign.members.length === members.length ? "👨‍👩‍👧‍👦 <b>Everyone:</b>" : `👤 <b>${assign.members.join(", ")}:</b>`;
                    
                    let itemRow = document.createElement("div");
                    itemRow.style.marginTop = "6px";
                    itemRow.style.cursor = "pointer";
                    itemRow.style.color = "#2ecc71";
                    itemRow.className = "clickable-meal";
                    itemRow.innerHTML = `${namesStr} ${assign.recipe.title} <br><small style="color:#7f8c8d;">(⏱️ ${assign.recipe.prepTime} | 🔥 ${assign.recipe.calories} kcal)</small>`;
                    
                    itemRow.addEventListener("click", () => openRecipeModal(assign.recipe.id));
                    mealDiv.appendChild(itemRow);
                    allFamilyIngredients.push(...assign.recipe.ingredients);
                });

                div.appendChild(mealDiv);
            });

            famGrid.appendChild(div);
        });

        updateShoppingList(allFamilyIngredients);
    }

    // LLISTA DE LA COMPRA AMB SUPORT PER A QUANTITATS EXPLICITES
    function updateShoppingList(ingredients) {
        if (!mainGroceryList || !pantryList) return;
        mainGroceryList.innerHTML = "";
        pantryList.innerHTML = "";
        
        if (!ingredients || ingredients.length === 0) {
            mainGroceryList.innerHTML = "<li style='list-style:none; padding:10px;'>No ingredients needed.</li>";
            return;
        }

        const stapleKeywords = [
            "oil", "salt", "pepper", "garlic", "onion", "oregano", "paprika", "cumin", 
            "cinnamon", "mint", "parsley", "herbs", "lime", "lemon", "curry paste", 
            "mustard", "vanilla", "sesame", "ginger", "turmeric", "sauce", "spices", 
            "powder", "water", "broth"
        ];

        const uniqueItems = Array.from(new Set(ingredients.map(i => i.trim())));
        uniqueItems.sort().forEach(item => {
            const li = document.createElement("li");
            li.style.listStyle = "none";
            li.style.padding = "10px 0";
            li.style.borderBottom = "1px solid rgba(0,0,0,0.06)";

            li.innerHTML = `
                <label style="display: flex; align-items: center; gap: 12px; cursor: pointer; font-size: 1.05em;">
                    <input type="checkbox" style="width: 18px; height: 18px; cursor: pointer;">
                    <span>${item}</span>
                </label>
            `;

            const checkbox = li.querySelector("input");
            const span = li.querySelector("span");

            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {
                    span.style.textDecoration = "line-through";
                    span.style.opacity = "0.5";
                } else {
                    span.style.textDecoration = "none";
                    span.style.opacity = "1";
                }
            });

            const lower = item.toLowerCase();
            const isStaple = stapleKeywords.some(keyword => lower.includes(keyword));

            if (isStaple) {
                pantryList.appendChild(li);
            } else {
                mainGroceryList.appendChild(li);
            }
        });
    }

    function setupExport() {
        const regenBtn = document.getElementById("regen-individual-btn");
        if (regenBtn) {
            regenBtn.addEventListener("click", () => {
                generateMenu();
                showToast("Generated new weekly menu!", "✨");
            });
        }

        const getFormattedTextList = () => {
            let text = "🛒 *NutriSafe - Shopping List*\n\n";
            text += "*TO BUY:*\n";
            document.querySelectorAll("#main-grocery-list li span").forEach(s => text += `• ${s.innerText}\n`);
            text += "\n*PANTRY STAPLES (Check at home):*\n";
            document.querySelectorAll("#pantry-list li span").forEach(s => text += `• ${s.innerText}\n`);
            return text;
        };

        document.getElementById("copy-list-btn")?.addEventListener("click", () => {
            navigator.clipboard.writeText(getFormattedTextList()).then(() => {
                showToast("Shopping list copied to clipboard!", "📋");
            });
        });

        document.getElementById("whatsapp-list-btn")?.addEventListener("click", () => {
            const url = "https://wa.me/?text=" + encodeURIComponent(getFormattedTextList());
            window.open(url, "_blank");
        });

        document.getElementById("print-list-btn")?.addEventListener("click", () => {
            window.print();
        });
    }

    function setupRecipeModal() {
        let modal = document.getElementById("recipe-detail-modal");
        if (!modal) {
            modal = document.createElement("div");
            modal.id = "recipe-detail-modal";
            modal.className = "modal";
            modal.style.display = "none";
            
            modal.innerHTML = `
                <div class="modal-content">
                    <span id="close-recipe-modal" style="position: absolute; right: 20px; top: 15px; font-size: 28px; font-weight: bold; cursor: pointer;">&times;</span>
                    <h2 id="modal-recipe-title" style="margin-top: 0; color: #2ecc71;"></h2>
                    <p id="modal-recipe-meta" style="font-size: 0.9em; color: #7f8c8d; border-bottom: 1px solid #ccc; padding-bottom: 10px;"></p>
                    <h4 style="margin-bottom: 5px;">🛒 Ingredients:</h4>
                    <ul id="modal-recipe-ingredients" style="margin-top: 5px; padding-left: 20px;"></ul>
                    <h4 style="margin-bottom: 5px; margin-top: 15px;">👨‍🍳 Step-by-Step Instructions:</h4>
                    <div id="modal-recipe-instructions" style="background: rgba(0,0,0,0.05); padding: 12px; border-radius: 8px; white-space: pre-line; line-height: 1.5; font-size: 0.95em;"></div>
                </div>
            `;
            document.body.appendChild(modal);

            document.getElementById("close-recipe-modal").addEventListener("click", () => modal.style.display = "none");
            modal.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });
        }
    }

    function openRecipeModal(recipeId) {
        const r = recipes.find(item => item.id === recipeId);
        if (!r) return;

        document.getElementById("modal-recipe-title").innerText = r.title;
        document.getElementById("modal-recipe-meta").innerHTML = `<strong>Type:</strong> ${r.mealType} | <strong>Prep Time:</strong> ⏱️ ${r.prepTime} | <strong>Calories:</strong> 🔥 ${r.calories} kcal`;
        document.getElementById("modal-recipe-ingredients").innerHTML = r.ingredients.map(ing => `<li>${ing}</li>`).join("");
        document.getElementById("modal-recipe-instructions").innerText = r.instructions || "No detailed instructions available.";

        document.getElementById("recipe-detail-modal").style.display = "flex";
    }

    init();
});
