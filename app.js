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
    const familyCalendarGrid = document.getElementById("family-calendar-grid");
    const mainGroceryList = document.getElementById("main-grocery-list") || document.getElementById("fresh-grocery-list");
    const pantryList = document.getElementById("pantry-list") || document.getElementById("pantry-grocery-list");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const settingsCookingTime = document.getElementById("settings-cooking-time");

    let selectedRestrictions = JSON.parse(localStorage.getItem("nutrisafe_restrictions")) || [];
    let selectedCookingTime = localStorage.getItem("nutrisafe_cooking_time") || "30";
    let currentWeeklyPlan = [];
    let isProUser = localStorage.getItem("nutrisafe_pro") === "true";
    let familyUsageCount = parseInt(localStorage.getItem("nutrisafe_family_count") || "0");

    // --- INITIALIZATION ---
    function init() {
        setupTheme();
        renderCheckboxGrids();
        setupNavigation();
        setupOnboarding();
        setupFamilyUI();
        setupExportButtons();
        setupRecipeModal();
        setupRegenButtons();

        if (settingsCookingTime) {
            settingsCookingTime.value = selectedCookingTime;
            settingsCookingTime.addEventListener("change", (e) => {
                selectedCookingTime = e.target.value;
                localStorage.setItem("nutrisafe_cooking_time", selectedCookingTime);
                generateMenu();
                showToast("Cooking time preference updated!", "⏱️");
            });
        }

        generateMenu();
    }

    // --- TOAST NOTIFICATION SYSTEM ---
    function showToast(message, emoji = "✨") {
        let container = document.getElementById("toast-container");
        if (!container) {
            container = document.createElement("div");
            container.id = "toast-container";
            document.body.appendChild(container);
        }
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.style.color = "#ffffff"; // Fix for white text
        toast.innerHTML = `<span>${emoji}</span> <span>${message}</span>`;
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transition = "opacity 0.3s ease";
            setTimeout(() => toast.remove(), 300);
        }, 2700);
    }

    // --- NAVIGATION LOGIC ---
    function setupNavigation() {
        const navButtons = document.querySelectorAll("nav .nav-btn");
        const tabContents = document.querySelectorAll(".tab-content");

        navButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const targetTabId = btn.getAttribute("onclick") ? null : (btn.dataset.tab || btn.getAttribute("data-tab"));
                
                navButtons.forEach(b => b.classList.remove("active"));
                tabContents.forEach(t => { t.classList.remove("active"); t.style.display = "none"; });

                btn.classList.add("active");
                
                let targetTab = document.getElementById(targetTabId);
                if (!targetTab && btn.getAttribute("onclick")) {
                    const match = btn.getAttribute("onclick").match(/'([^']+)'/);
                    if (match) targetTab = document.getElementById(match[1]);
                }

                if (targetTab) {
                    targetTab.classList.add("active");
                    targetTab.style.display = "block";
                }

                if (currentWeeklyPlan.length === 0) {
                    generateMenu();
                }
            });
        });
    }

    // --- THEME & DARK MODE ---
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

    // --- CHECKBOX GRIDS FOR SETTINGS ---
    function renderCheckboxGrids() {
        const settingsGrid = document.getElementById("settings-checkboxes");
        if (!settingsGrid) return;
        
        settingsGrid.innerHTML = "";
        dietaryOptions.forEach(opt => {
            const isChecked = selectedRestrictions.includes(opt.id) ? "checked" : "";
            const label = document.createElement("label");
            label.style.display = "block";
            label.style.margin = "6px 0";
            label.innerHTML = `<input type="checkbox" value="${opt.id}" ${isChecked}> ${opt.label}`;
            
            label.querySelector("input").addEventListener("change", (e) => {
                handleRestrictionChange(e.target.value, e.target.checked);
            });
            settingsGrid.appendChild(label);
        });
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
        showToast("Dietary preferences updated!", "🥗");
    }

    // --- ONBOARDING FLOW ---
    function setupOnboarding() {
        const onboardingModal = document.getElementById("onboarding-modal");
        const premiumModal = document.getElementById("premium-modal");
        const hasVisited = localStorage.getItem("nutrisafe_visited");

        if (hasVisited && onboardingModal) {
            onboardingModal.style.display = "none";
        }

        window.finishOnboarding = function(target) {
            const timeSelect = document.getElementById("onboarding-time");
            if (timeSelect) {
                selectedCookingTime = timeSelect.value;
                localStorage.setItem("nutrisafe_cooking_time", selectedCookingTime);
                if (settingsCookingTime) settingsCookingTime.value = selectedCookingTime;
            }

            localStorage.setItem("nutrisafe_visited", "true");
            if (onboardingModal) onboardingModal.style.display = "none";

            if (target === 'family') {
                if (premiumModal) premiumModal.style.display = "flex";
                const famTabBtn = document.querySelector('[data-tab="family-tab"]') || document.querySelectorAll('nav button')[2];
                if (famTabBtn) famTabBtn.click();
            } else {
                generateMenu();
                showToast("Welcome to NutriSafe! Meal plan ready.", "🥑");
            }
        };
    }

    // --- RECIPE TIME FILTER ---
    function filterRecipesByTime(list) {
        if (!selectedCookingTime || selectedCookingTime === "any") return list;
        return list.filter(r => {
            const time = r.prepTimeMinutes || 20;
            const targetVal = parseInt(selectedCookingTime);
            if (targetVal === 10) return time <= 10;
            if (targetVal === 30) return time >= 10 && time <= 30;
            if (targetVal === 60) return time >= 30 && time <= 60;
            if (targetVal === 120) return time > 60;
            return true;
        });
    }

    function shuffle(array) { return [...array].sort(() => Math.random() - 0.5); }

    // --- GENERATE INDIVIDUAL MENU ---
    function generateMenu() {
        if (!calendarGrid) return;
        currentWeeklyPlan = [];
        
        let safeRecipes = recipes.filter(r => {
            if (selectedRestrictions.length === 0 || selectedRestrictions.includes("none")) return true;
            return selectedRestrictions.every(req => r.safeFor && r.safeFor.includes(req));
        });

        let timeFiltered = filterRecipesByTime(safeRecipes);
        if (timeFiltered.length < 3) timeFiltered = safeRecipes;

        const getRandomMeal = (type) => {
            let f = timeFiltered.filter(r => r.mealType === type);
            if (f.length === 0) f = safeRecipes.filter(r => r.mealType === type);
            if (f.length === 0) f = recipes.filter(r => r.mealType === type);
            return shuffle(f)[0];
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

    // --- RENDER CALENDAR ---
    function renderIndividualCalendar() {
        if (!calendarGrid) return;
        calendarGrid.innerHTML = "";
        let activeMenuIngredients = [];

        currentWeeklyPlan.forEach((dayData, dayIdx) => {
            const div = document.createElement("div");
            div.className = "card day-card";
            div.style.marginBottom = "15px";

            let totalTime = 0;
            let totalCals = 0;
            Object.values(dayData.meals).forEach(m => {
                totalTime += m.prepTimeMinutes || 15;
                totalCals += m.calories || 400;
            });

            div.innerHTML = `<h3 style="margin-bottom:10px; color:#2e7d32;">${dayData.day} <small style="font-size:0.75em; font-weight:normal; color:#7f8c8d;">⏱️ ~${totalTime} min | 🔥 ~${totalCals} kcal</small></h3>`;
            
            ["Breakfast", "Lunch", "Dinner"].forEach(type => {
                const m = dayData.meals[type];
                const mealDiv = document.createElement("div");
                mealDiv.className = "meal-item";
                mealDiv.style.display = "flex";
                mealDiv.style.justifyContent = "space-between";
                mealDiv.style.alignItems = "center";
                mealDiv.style.padding = "10px";
                mealDiv.style.margin = "6px 0";
                mealDiv.style.background = "rgba(0,0,0,0.03)";
                mealDiv.style.borderRadius = "8px";
                
                mealDiv.innerHTML = `
                    <div class="clickable-meal" style="cursor:pointer; flex-grow:1;">
                        <strong>${m.mealType}: ${m.title}</strong><br>
                        <small style="color:#7f8c8d;">⏱️ ${m.prepTime} | 🔥 ${m.calories} kcal</small>
                    </div>
                    <button class="btn-link btn-swap-meal" title="Swap this meal" style="background:none; border:none; cursor:pointer; font-size:16px;">🔄</button>
                `;

                mealDiv.querySelector(".clickable-meal").addEventListener("click", () => openRecipeModal(m.id));
                mealDiv.querySelector(".btn-swap-meal").addEventListener("click", (e) => {
                    e.stopPropagation();
                    swapSingleMeal(dayIdx, type);
                });

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

        let timeFiltered = filterRecipesByTime(safeRecipes);
        if (timeFiltered.length === 0) timeFiltered = safeRecipes;

        let available = timeFiltered.filter(r => r.mealType === mealType && r.id !== currentWeeklyPlan[dayIndex].meals[mealType].id);
        if (available.length === 0) available = recipes.filter(r => r.mealType === mealType);

        const newMeal = shuffle(available)[0];
        currentWeeklyPlan[dayIndex].meals[mealType] = newMeal;
        
        renderIndividualCalendar();
        showToast(`Swapped ${mealType} for ${newMeal.title}!`, "🔄");
    }

    // --- RECIPE MODAL LOGIC ---
    function setupRecipeModal() {
        window.openRecipeModal = function(recipeId) {
            const recipe = recipes.find(r => r.id === recipeId);
            if (!recipe) return;

            document.getElementById("recipe-title").innerText = recipe.title;
            document.getElementById("recipe-instructions").innerText = recipe.instructions;

            const ingList = document.getElementById("recipe-ingredients");
            if (ingList) {
                ingList.innerHTML = "";
                recipe.ingredients.forEach(ing => {
                    const li = document.createElement("li");
                    li.innerText = ing;
                    ingList.appendChild(li);
                });
            }

            const modal = document.getElementById("recipe-modal");
            if (modal) modal.style.display = "flex";
        };

        window.closeRecipe = function() {
            const modal = document.getElementById("recipe-modal");
            if (modal) modal.style.display = "none";
        };
    }

    // --- SHOPPING LIST AUTOMATIC CATEGORIZATION ---
    function updateShoppingList(ingredientsList) {
        if (!mainGroceryList || !pantryList) return;

        mainGroceryList.innerHTML = "";
        pantryList.innerHTML = "";

        const freshItems = [];
        const pantryItems = [];

        ingredientsList.forEach(ing => {
            const lower = ing.toLowerCase();
            const isPantry = pantryKeywords.some(keyword => lower.includes(keyword));
            if (isPantry) {
                pantryItems.push(ing);
            } else {
                freshItems.push(ing);
            }
        });

        // Consolidate duplicates
        const uniqueFresh = [...new Set(freshItems)];
        const uniquePantry = [...new Set(pantryItems)];

        uniqueFresh.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `<label><input type="checkbox"> ${item}</label>`;
            mainGroceryList.appendChild(li);
        });

        uniquePantry.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `<label><input type="checkbox"> ${item}</label>`;
            pantryList.appendChild(li);
        });
    }

    // --- EXPORT FUNCTIONALITIES ---
    function setupExportButtons() {
        window.copyShoppingList = function() {
            const container = document.getElementById("printable-shopping-list") || document.querySelector(".shopping-container");
            if (!container) return;
            navigator.clipboard.writeText("🛒 NutriSafe Shopping List\n\n" + container.innerText).then(() => {
                showToast("List copied to clipboard!", "📋");
            });
        };

        window.shareWhatsApp = function() {
            const container = document.getElementById("printable-shopping-list") || document.querySelector(".shopping-container");
            if (!container) return;
            const text = encodeURIComponent("🛒 *NutriSafe Shopping List*\n\n" + container.innerText);
            window.open(`https://wa.me/?text=${text}`, "_blank");
        };
    }

    // --- FAMILY UI & PRO MENU LOGIC ---
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
                card.style.padding = "12px";
                card.style.marginBottom = "10px";
                
                let optionsHtml = dietaryOptions.map(opt => {
                    let checked = m.restrictions.includes(opt.id) ? "checked" : "";
                    return `<label style="display:block; font-size: 0.85em; margin: 3px 0;"><input type="checkbox" value="${opt.id}" class="fam-restriction" data-member="${idx}" ${checked}> ${opt.label}</label>`;
                }).join("");

                card.innerHTML = `
                    <div style="margin-bottom: 8px;">
                        <strong>Member #${idx + 1} Name:</strong><br>
                        <input type="text" value="${m.name}" class="fam-name-input" data-member="${idx}" style="width: 100%; padding: 6px; margin-top: 4px; border-radius: 4px; border: 1px solid #ccc;">
                    </div>
                    <strong style="font-size: 0.9em;">Dietary Needs:</strong>
                    <div style="max-height: 120px; overflow-y: auto; margin-top: 5px; padding: 5px; background: rgba(0,0,0,0.02); border-radius: 4px;">
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
                showToast(`Family updated to ${count} members.`);
            });
        }

        const genFamBtn = document.getElementById("generate-family-btn");
        const premModal = document.getElementById("premium-modal");

        if (genFamBtn) {
            genFamBtn.addEventListener("click", () => {
                if (!isProUser && familyUsageCount >= 1) {
                    if (premModal) premModal.style.display = "flex";
                    return;
                }

                familyUsageCount++;
                localStorage.setItem("nutrisafe_family_count", familyUsageCount.toString());

                generateFamilyMenu(familyMembers);
                showToast("Family menu generated successfully!", "👨‍👩‍👧‍👦");
            });
        }

        const trialBtn = document.getElementById("start-free-trial-btn");
        if (trialBtn) {
            trialBtn.addEventListener("click", () => {
                isProUser = true;
                localStorage.setItem("nutrisafe_pro", "true");
                if (premModal) premModal.style.display = "none";
                showToast("🎉 Free Trial Activated! Enjoy family menus.", "👑");
                generateFamilyMenu(familyMembers);
            });
        }

        renderMembers();
    }

    // --- SMART FAMILY MENU GENERATION ALGORITHM ---
    function generateFamilyMenu(members) {
        if (!familyCalendarGrid) return;
        familyCalendarGrid.innerHTML = "";
        let consolidatedIngredients = [];

        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        days.forEach(day => {
            const dayCard = document.createElement("div");
            dayCard.className = "card day-card";
            dayCard.style.marginBottom = "15px";
            dayCard.innerHTML = `<h3 style="color:#2e7d32;">${day} (Family Plan)</h3>`;

            ["Breakfast", "Lunch", "Dinner"].forEach(type => {
                const mealBox = document.createElement("div");
                mealBox.style.margin = "8px 0";
                mealBox.style.padding = "8px";
                mealBox.style.background = "rgba(0,0,0,0.02)";
                mealBox.style.borderRadius = "6px";
                mealBox.innerHTML = `<strong>${type}:</strong>`;

                // Smart grouping: find minimum dishes to satisfy all family members
                const assignments = getFamilyMealAssignments(type, members);
                assignments.forEach(group => {
                    const dish = group.recipe;
                    const peopleNames = group.people.map(p => p.name).join(", ");
                    
                    const dishP = document.createElement("p");
                    dishP.style.margin = "4px 0 2px 10px";
                    dishP.style.fontSize = "14px";
                    dishP.innerHTML = `🍳 <strong>${dish.title}</strong> <small>(${peopleNames})</small>`;
                    mealBox.appendChild(dishP);

                    // Add ingredients scaled by group size
                    dish.ingredients.forEach(ing => consolidatedIngredients.push(ing));
                });

                dayCard.appendChild(mealBox);
            });

            familyCalendarGrid.appendChild(dayCard);
        });

        updateShoppingList(consolidatedIngredients);
    }

    function getFamilyMealAssignments(mealType, members) {
        let unassigned = [...members];
        let assignments = [];

        while (unassigned.length > 0) {
            // Find a recipe that satisfies the maximum remaining members
            let bestRecipe = null;
            let bestCompatibleGroup = [];

            const candidateRecipes = recipes.filter(r => r.mealType === mealType);

            candidateRecipes.forEach(recipe => {
                let compatible = unassigned.filter(person => {
                    if (person.restrictions.includes("none") || person.restrictions.length === 0) return true;
                    return person.restrictions.every(req => recipe.safeFor && recipe.safeFor.includes(req));
                });

                if (compatible.length > bestCompatibleGroup.length) {
                    bestCompatibleGroup = compatible;
                    bestRecipe = recipe;
                }
            });

            // Fallback if no restriction match found
            if (!bestRecipe) {
                bestRecipe = candidateRecipes[0];
                bestCompatibleGroup = [unassigned[0]];
            }

            assignments.push({ recipe: bestRecipe, people: bestCompatibleGroup });
            unassigned = unassigned.filter(p => !bestCompatibleGroup.includes(p));
        }

        return assignments;
    }

    // --- REGENERATE BUTTON HANDLERS ---
    function setupRegenButtons() {
        const regenBtn = document.getElementById("regen-individual-btn");
        if (regenBtn) {
            regenBtn.addEventListener("click", () => {
                generateMenu();
                showToast("Generated new weekly menu!", "🔄");
            });
        }
    }

    window.closeModal = function(id) {
        const modal = document.getElementById(id);
        if (modal) modal.style.display = "none";
    };

    // RUN APP
    init();
});
