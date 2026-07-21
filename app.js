document.addEventListener("DOMContentLoaded", () => {
    // 1. LLISTA COMPLETA DE DIETES I AL·LÈRGIES
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

    // 2. BASE DE DADES DE RECEPTES AMB PREPARACIÓ DETALLADA
    const recipes = [
        { id: 1, title: "Gluten-Free Pancakes", mealType: "Breakfast", prepTime: "15 min", safeFor: ["vegetarian", "cows_milk", "peanuts", "fish", "shellfish", "soy", "lactose"], ingredients: ["Gluten-free flour", "Almond milk", "Eggs", "Maple syrup"], instructions: "1. In a large bowl, whisk together the eggs and almond milk until fluffy.\n2. Gradually add the gluten-free flour while stirring constantly to avoid lumps.\n3. Heat a non-stick pan over medium heat with a drop of oil.\n4. Pour small portions of batter and cook for 2-3 minutes on each side until golden.\n5. Serve warm with a generous drizzle of maple syrup." },
        { id: 2, title: "Creamy Oatmeal Bowl", mealType: "Breakfast", prepTime: "10 min", safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["Gluten-free oats", "Oat milk", "Banana", "Chia seeds"], instructions: "1. Combine the gluten-free oats and oat milk in a small saucepan over medium heat.\n2. Stir gently for 5 minutes until the oats absorb the liquid and become creamy.\n3. Slice the fresh banana into thin coins.\n4. Pour the oatmeal into a bowl, top with banana slices, and sprinkle chia seeds on top." },
        { id: 3, title: "Avocado & Egg Toast", mealType: "Breakfast", prepTime: "5 min", safeFor: ["vegetarian", "cows_milk", "peanuts", "tree_nuts", "fish", "shellfish", "soy", "lactose"], ingredients: ["Sourdough bread", "Avocado", "Eggs", "Salt and pepper"], instructions: "1. Toast the sourdough slice until crisp.\n2. Mash half an avocado in a bowl with a pinch of salt and spread it evenly over the toast.\n3. Fry or poach an egg to your preferred doneness in a hot skillet.\n4. Place the cooked egg over the mashed avocado and finish with freshly cracked black pepper." },
        { id: 4, title: "Berry & Spinach Smoothie", mealType: "Breakfast", prepTime: "5 min", safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["Mixed berries", "Spinach", "Water", "Plant protein powder"], instructions: "1. Add the fresh or frozen mixed berries and spinach leaves to a high-speed blender.\n2. Pour in cold water and add one scoop of plant protein powder.\n3. Blend on high for 45 seconds until completely smooth and creamy.\n4. Pour immediately into a tall glass and enjoy fresh." },
        { id: 5, title: "Chia Seed Pudding", mealType: "Breakfast", prepTime: "5 min", safeFor: ["vegan", "vegetarian", "keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["Chia seeds", "Coconut milk", "Vanilla extract", "Strawberries"], instructions: "1. In a jar or bowl, vigorously mix the chia seeds with the coconut milk and a few drops of vanilla extract.\n2. Let it sit for 10 minutes, then stir again to prevent clumping.\n3. Cover and refrigerate for at least 2 hours (or preferably overnight).\n4. Top with fresh strawberry halves right before serving." },
        { id: 6, title: "Scrambled Tofu Toast", mealType: "Breakfast", prepTime: "12 min", safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "lactose"], ingredients: ["Sourdough bread", "Tofu", "Turmeric", "Spinach", "Olive oil"], instructions: "1. Crumble the firm tofu into bite-sized pieces using your hands or a fork.\n2. Heat olive oil in a skillet over medium heat, add the tofu and a pinch of turmeric for a rich yellow color.\n3. Toss in the fresh spinach and sauté for 3-4 minutes until wilted.\n4. Serve hot over freshly toasted sourdough bread." },
        { id: 7, title: "Banana & Almond Butter Toast", mealType: "Breakfast", prepTime: "5 min", safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["Gluten-free bread", "Almond butter", "Banana", "Cinnamon"], instructions: "1. Toast the gluten-free bread to your desired crunchiness.\n2. Spread a thick, even layer of pure almond butter across the warm slice.\n3. Cut the banana into thin rounds and layer them over the almond butter.\n4. Dust lightly with ground cinnamon for extra flavor." },
        { id: 8, title: "Fruit Salad with Mint", mealType: "Breakfast", prepTime: "10 min", safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["Orange", "Apple", "Blueberries", "Fresh mint", "Lime juice"], instructions: "1. Peel and segment the orange, and dice the fresh apple into small cubes.\n2. Combine the orange segments, apple cubes, and blueberries in a serving bowl.\n3. Finely chop the fresh mint leaves and sprinkle over the fruit.\n4. Drizzle with fresh lime juice and gently toss everything together." },
        { id: 9, title: "Classic Shakshuka", mealType: "Breakfast", prepTime: "20 min", safeFor: ["vegetarian", "keto", "cows_milk", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["Eggs", "Canned tomatoes", "Bell peppers", "Onion", "Cumin"], instructions: "1. Sauté diced onions and bell peppers in a skillet with olive oil until soft.\n2. Pour in the canned tomatoes and cumin, simmering for 10 minutes until the sauce thickens.\n3. Make small wells in the tomato sauce using a spoon and crack the eggs directly into them.\n4. Cover the pan with a lid and cook on low for 5-6 minutes until the egg whites are set." },
        { id: 10, title: "Chicken and Rice Stir-fry", mealType: "Lunch", prepTime: "20 min", safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose", "fructose"], ingredients: ["Chicken breast", "Jasmine rice", "Gluten-free soy sauce", "Bell peppers", "Carrots"], instructions: "1. Cook the jasmine rice according to package instructions and set aside.\n2. Cut the chicken breast into small bite-sized strips and slice the bell peppers and carrots thin.\n3. In a hot wok or skillet, stir-fry the chicken until cooked through and golden.\n4. Add the vegetables and gluten-free soy sauce, tossing on high heat for 4 minutes before mixing in the cooked rice." },
        { id: 11, title: "Quinoa Cucumber Salad", mealType: "Lunch", prepTime: "15 min", safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["Quinoa", "Cucumber", "Cherry tomatoes", "Olive oil", "Lemon"], instructions: "1. Rinse the quinoa thoroughly and boil it in water for 12 minutes until fluffy, then let it cool.\n2. Dice the fresh cucumber and slice the cherry tomatoes in half.\n3. Combine the cooled quinoa and chopped vegetables in a large salad bowl.\n4. Dress with generous splashes of extra virgin olive oil, fresh lemon juice, salt, and pepper." },
        { id: 12, title: "Lentil Vegetable Soup", mealType: "Lunch", prepTime: "35 min", safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["Lentils", "Carrots", "Celery", "Tomato paste", "Vegetable broth"], instructions: "1. In a large soup pot, sauté diced carrots and celery with olive oil for 5 minutes.\n2. Stir in the tomato paste and cook for 1 minute to release its rich flavor.\n3. Add the rinsed dry lentils and pour in the warm vegetable broth.\n4. Bring to a boil, then reduce heat, cover, and simmer for 25 minutes until lentils are tender." },
        { id: 13, title: "Beef and Broccoli Bowl", mealType: "Lunch", prepTime: "20 min", safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose", "fructose"], ingredients: ["Beef steak", "Broccoli", "Garlic", "Ginger", "Tamari sauce"], instructions: "1. Slice the beef steak against the grain into thin, tender strips.\n2. Cut the broccoli into small florets and steam them lightly for 3 minutes.\n3. Sear the beef strips in a hot skillet with minced garlic and grated ginger for 3-4 minutes.\n4. Add the steamed broccoli and tamari sauce to the skillet, tossing well to coat everything." },
        { id: 14, title: "Tuna Salad Wrap", mealType: "Lunch", prepTime: "10 min", safeFor: ["cows_milk", "peanuts", "tree_nuts", "shellfish", "wheat", "lactose", "fructose"], ingredients: ["Canned tuna", "Gluten-free tortilla", "Cucumber", "Mayonnaise", "Lettuce"], instructions: "1. Drain the canned tuna thoroughly and place it in a mixing bowl.\n2. Mix the tuna with mayonnaise and finely diced crisp cucumber until well combined.\n3. Lay out the gluten-free tortilla flat and cover the center with fresh lettuce leaves.\n4. Spread the tuna mixture over the lettuce, fold the sides of the tortilla inward, and roll tightly." },
        { id: 15, title: "Greek Chickpea Salad", mealType: "Lunch", prepTime: "12 min", safeFor: ["vegetarian", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "fructose"], ingredients: ["Canned chickpeas", "Feta cheese", "Cucumber", "Onion", "Olive oil"], instructions: "1. Rinse and drain the canned chickpeas under cold water.\n2. Chop the crisp cucumber and red onion into small, uniform cubes.\n3. In a serving bowl, combine the chickpeas, vegetables, and crumbled feta cheese.\n4. Drizzle generously with olive oil and toss lightly before serving." },
        { id: 16, title: "Turkey and Avocado Sandwich", mealType: "Lunch", prepTime: "8 min", safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "lactose"], ingredients: ["Sourdough bread", "Turkey breast", "Avocado", "Tomato", "Mustard"], instructions: "1. Lay out two fresh slices of sourdough bread and spread mustard on one side.\n2. Layer roasted turkey breast slices evenly over the bread.\n3. Slice the fresh tomato and creamy avocado, placing them on top of the turkey.\n4. Close the sandwich, press gently, and slice in half diagonally to serve." },
        { id: 17, title: "Sweet Potato & Black Bean Bowl", mealType: "Lunch", prepTime: "25 min", safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["Sweet potato", "Black beans", "Coriander", "Lime", "Olive oil"], instructions: "1. Peel and cube the sweet potato, toss in olive oil, and roast in the oven at 200°C for 20 minutes until tender.\n2. Rinse and warm the canned black beans in a small saucepan.\n3. Arrange the roasted sweet potatoes and warm black beans side-by-side in a bowl.\n4. Garnish liberally with chopped coriander and a squeeze of fresh lime juice." },
        { id: 18, title: "Egg Fried Rice", mealType: "Lunch", prepTime: "15 min", safeFor: ["cows_milk", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose", "fructose"], ingredients: ["Jasmine rice", "Eggs", "Green peas", "Onion", "Sesame oil"], instructions: "1. Heat sesame oil in a large wok or skillet over high heat.\n2. Sauté finely chopped onion and green peas for 2 minutes until tender.\n3. Push the vegetables to one side of the wok, crack the eggs into the empty space, and scramble quickly.\n4. Add day-old cooked jasmine rice into the wok, mixing everything together vigorously for 3 minutes." },
        { id: 19, title: "Grilled Salmon with Broccoli", mealType: "Dinner", prepTime: "25 min", safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["Salmon fillet", "Broccoli", "Olive oil", "Lemon", "Garlic"], instructions: "1. Preheat your grill or heavy frying pan over medium-high heat.\n2. Rub the salmon fillet and broccoli florets with olive oil, minced garlic, salt, and pepper.\n3. Place the salmon skin-side down on the heat and grill for 4-5 minutes per side until flaky.\n4. Roast or steam the broccoli alongside the fish, serving everything with fresh lemon wedges." },
        { id: 20, title: "Steak with Sweet Potato Fries", mealType: "Dinner", prepTime: "30 min", safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["Beef steak", "Sweet potato", "Olive oil", "Rosemary"], instructions: "1. Cut the sweet potato into thin, even strips to make fries.\n2. Toss the fries with olive oil, chopped rosemary, and salt, then bake at 210°C for 25 minutes until crispy.\n3. Rub the beef steak with a little oil and season generously with salt and pepper.\n4. Sear the steak in a blazing hot cast-iron skillet for 3-4 minutes per side, letting it rest 5 minutes before slicing." },
        { id: 21, title: "Lemon Herb Cod", mealType: "Dinner", prepTime: "20 min", safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["Cod fillet", "Fresh parsley", "Lemon", "Olive oil", "Asparagus"], instructions: "1. Preheat the oven to 200°C and line a baking dish with parchment paper.\n2. Place the cod fillet and trimmed asparagus spears in the dish.\n3. Drizzle everything with olive oil and fresh lemon juice, then top with chopped parsley.\n4. Bake for 12-15 minutes until the fish flakes easily with a fork." },
        { id: 22, title: "Pork Chops with Apples", mealType: "Dinner", prepTime: "25 min", safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["Pork chops", "Apple", "Onion", "Cinnamon", "Olive oil"], instructions: "1. Season the pork chops with salt, pepper, and a light dusting of cinnamon.\n2. Sear the chops in a hot skillet with olive oil for 4 minutes per side until golden, then set aside.\n3. In the same skillet, sauté sliced onions and apple wedges until caramelized and tender.\n4. Return the pork chops to the pan for 2 minutes to warm through and soak up the apple flavors." },
        { id: 23, title: "Baked Chicken Breasts", mealType: "Dinner", prepTime: "30 min", safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["Chicken breast", "Paprika", "Oregano", "Garlic", "Green beans"], instructions: "1. Preheat the oven to 190°C.\n2. Rub the chicken breasts with olive oil, minced garlic, paprika, oregano, salt, and pepper.\n3. Place the chicken and fresh green beans on a baking tray.\n4. Roast in the oven for 22-25 minutes until the chicken is thoroughly cooked and juicy." },
        { id: 24, title: "Shrimp Garlic Pasta", mealType: "Dinner", prepTime: "18 min", safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "soy", "lactose", "fructose"], ingredients: ["Pasta", "Shrimp", "Garlic", "Olive oil", "Red pepper flakes"], instructions: "1. Boil your pasta in salted water according to package instructions until al dente.\n2. Meanwhile, heat olive oil in a skillet and sauté minced garlic and red pepper flakes for 1 minute.\n3. Add the peeled shrimp and cook for 2-3 minutes until they turn pink and opaque.\n4. Toss the drained pasta directly into the skillet with the shrimp and garlic oil, mixing well." },
        { id: 25, title: "Beef Bolognese with Zoodles", mealType: "Dinner", prepTime: "25 min", safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["Beef steak", "Zucchini", "Canned tomatoes", "Italian herbs", "Onion"], instructions: "1. Finely mince the beef steak or use lean ground beef.\n2. Brown the beef with diced onions in a saucepan, then stir in canned tomatoes and Italian herbs.\n3. Simmer the bolognese sauce on medium-low heat for 15 minutes to develop deep flavor.\n4. Use a spiralizer to turn fresh zucchini into noodles (zoodles) and top them with the warm bolognese sauce." },
        { id: 26, title: "Tofu & Vegetable Curry", mealType: "Dinner", prepTime: "25 min", safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"], ingredients: ["Tofu", "Coconut milk", "Yellow curry paste", "Bell peppers", "Spinach"], instructions: "1. Press excess water from the tofu and cut it into bite-sized cubes.\n2. Sauté yellow curry paste in a deep pan with a tablespoon of coconut milk until fragrant.\n3. Pour in the rest of the coconut milk, sliced bell peppers, and tofu cubes, simmering for 12 minutes.\n4. Stir in fresh spinach leaves at the very end until wilted, and serve warm." },
        { id: 27, title: "Turkey Burgers with Salad", mealType: "Dinner", prepTime: "20 min", safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["Turkey breast", "Mixed greens", "Tomato", "Cucumber", "Olive oil"], instructions: "1. Minced turkey breast (or ground turkey) formed into two firm burger patties with salt and pepper.\n2. Cook the patties in a lightly oiled skillet over medium heat for 5-6 minutes per side until fully cooked.\n3. In a bowl, toss mixed greens, sliced cucumber, and tomato with extra virgin olive oil.\n4. Serve the hot turkey burgers over the bed of fresh green salad." }
    ];

    // ELEMENTS DEL DOM
    const calendarGrid = document.getElementById("calendar-grid");
    const mainGroceryList = document.getElementById("main-grocery-list");
    const pantryList = document.getElementById("pantry-list");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    
    let selectedRestrictions = JSON.parse(localStorage.getItem("nutrisafe_restrictions")) || [];

    // 3. INICIALITZACIÓ I TRANSFORMACIÓ DEL DOM
    function init() {
        setupTheme();
        transformDOMForFamily(); // Converteix la pestanya de Receptes en Pla Familiar i amaga botó
        renderCheckboxGrids();
        setupNavigation();
        checkOnboarding();
        setupRecipeModal(); 
        generateMenu(); // Genera menú individual per defecte al carregar
    }

    // TRANSFORMA L'HTML ANTIC AUTOMÀTICAMENT
    function transformDOMForFamily() {
        // Amagar botó de generar nou menú
        const regenBtn = document.getElementById("regenerate-btn");
        if (regenBtn) regenBtn.style.display = "none";

        // Canviar el nom del botó de la pestanya
        const recipeBtn = document.querySelector('button[data-tab="recipes-tab"]');
        if (recipeBtn) {
            recipeBtn.dataset.tab = "family-tab";
            recipeBtn.innerHTML = "👨‍👩‍👧‍👦 Family Planner";
        }

        // Canviar el contingut i ID de la pestanya de receptes
        const recipeTab = document.getElementById("recipes-tab");
        if (recipeTab) {
            recipeTab.id = "family-tab";
            recipeTab.innerHTML = `
                <h2>👨‍👩‍👧‍👦 Smart Family Meal Planner</h2>
                <p style="color: #7f8c8d; margin-bottom: 20px;">Configure your family members and their dietary needs. We automatically merge meals so you cook as few separate dishes as possible!</p>
                <div class="card" style="padding: 15px; margin-bottom: 20px; background: rgba(0,0,0,0.02); border-radius: 8px; display: flex; align-items: center; flex-wrap: wrap; gap: 10px;">
                    <label style="font-weight: bold;">How many people are in your family?</label>
                    <input type="number" id="family-count-input" min="1" max="10" value="2" style="padding: 6px 10px; width: 60px; border-radius: 4px; border: 1px solid #ccc;">
                    <button id="update-family-count-btn" class="btn-primary" style="padding: 6px 15px;">Set Members</button>
                </div>
                <div id="family-members-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin-bottom: 20px;"></div>
                <button id="generate-family-btn" class="btn-primary" style="width: 100%; padding: 12px; font-size: 1.1em; margin-bottom: 25px; background: #2ecc71; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">✨ Generate Family Menu & Update Shopping List</button>
                <div id="family-calendar-grid" class="calendar-grid"></div>
            `;
            setupFamilyUI();
        }
    }

    // 4. NAVEGACIÓ ENTRE PESTANYES
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

                // Si tornes al planner individual, s'actualitza la llista de la compra amb ell
                if (btn.dataset.tab === "planner-tab") {
                    generateMenu();
                }
            });
        });
    }

    // 5. MODE FOSC
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

    // 6. RENDER DE CHECKBOXES D'AL·LÈRGIES (INDIVIDUAL)
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
                input.addEventListener("change", (e) => {
                    handleRestrictionChange(e.target.value, e.target.checked);
                });
            });
        }
    }

    function handleRestrictionChange(value, isChecked) {
        if (value === "none" && isChecked) {
            selectedRestrictions = ["none"];
            document.querySelectorAll("#settings-checkboxes input").forEach(i => {
                if (i.value !== "none") i.checked = false;
            });
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
    }

    function checkOnboarding() {
        const hasVisited = localStorage.getItem("nutrisafe_visited");
        const modal = document.getElementById("onboarding-modal");
        
        if (!hasVisited && modal) {
            modal.style.display = "flex";
            const saveBtn = document.getElementById("save-onboarding-btn");
            if (saveBtn) {
                saveBtn.addEventListener("click", () => {
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
    }

    function shuffle(array) { return array.sort(() => Math.random() - 0.5); }

    // 7. GENERADOR DE MENÚ INDIVIDUAL (1 PERSONA)
    function generateMenu() {
        if (!calendarGrid) return;
        calendarGrid.innerHTML = "";
        let activeMenuIngredients = [];
        
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
            const div = document.createElement("div");
            div.className = "day-card";
            div.innerHTML = `<h3>${dayName}</h3>`;
            
            const dailyMeals = [getRandomMeal("Breakfast"), getRandomMeal("Lunch"), getRandomMeal("Dinner")];

            dailyMeals.forEach(m => {
                const mealDiv = document.createElement("div");
                mealDiv.className = "meal-item clickable-meal";
                mealDiv.style.cursor = "pointer";
                mealDiv.title = "Click to view full recipe details";
                mealDiv.innerHTML = `<strong>${m.mealType}: ${m.title}</strong><br><small>⏱️ ${m.prepTime} | 👁️ Click for details</small>`;
                mealDiv.addEventListener("click", () => openRecipeModal(m.id));
                
                div.appendChild(mealDiv);
                activeMenuIngredients.push(...m.ingredients);
            });
            calendarGrid.appendChild(div);
        });
        
        updateShoppingList(activeMenuIngredients);
    }

    // 8. LLOGICA DE LA FAMILIA SENCERA (FAMILY PLANNER)
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
                card.style.border = "1px solid #e0e0e0";
                card.style.borderRadius = "8px";
                
                let optionsHtml = dietaryOptions.map(opt => {
                    let checked = m.restrictions.includes(opt.id) ? "checked" : "";
                    return `<label style="display:block; font-size: 0.85em; margin: 3px 0;"><input type="checkbox" value="${opt.id}" class="fam-restriction" data-member="${idx}" ${checked}> ${opt.label}</label>`;
                }).join("");

                card.innerHTML = `
                    <div style="margin-bottom: 10px;">
                        <strong>Member #${idx + 1} Name:</strong><br>
                        <input type="text" value="${m.name}" class="fam-name-input" data-member="${idx}" style="width: 100%; padding: 6px; margin-top: 4px; border-radius: 4px; border: 1px solid #ccc;" placeholder="e.g. Mom, Leo...">
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

        const saveFamily = () => {
            localStorage.setItem("nutrisafe_family", JSON.stringify(familyMembers));
        };

        document.getElementById("update-family-count-btn").addEventListener("click", () => {
            let count = parseInt(countInput.value) || 1;
            if (count < 1) count = 1; if (count > 10) count = 10;
            while (familyMembers.length < count) {
                familyMembers.push({ id: familyMembers.length + 1, name: `Person ${familyMembers.length + 1}`, restrictions: ["none"] });
            }
            while (familyMembers.length > count) {
                familyMembers.pop();
            }
            saveFamily();
            renderMembers();
        });

        document.getElementById("generate-family-btn").addEventListener("click", () => {
            generateFamilyMenu(familyMembers);
            alert("👨‍👩‍👧‍👦 Family menu generated! The shopping list has been updated for everyone.");
        });

        renderMembers();
    }

    // ALGORITME DE REPARTIMENT INTEL·LIGENT PER A LA FAMILIA
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

    // GENERADOR DIARI DEL MENÚ FAMILIAR
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

                let headerHtml = `<strong style="color:#2c3e50;">${mealType}:</strong>`;
                mealDiv.innerHTML = headerHtml;

                assignments.forEach(assign => {
                    let namesStr = assign.members.length === members.length ? "👨‍👩‍👧‍👦 <b>Everyone:</b>" : `👤 <b>${assign.members.join(", ")}:</b>`;
                    
                    let itemRow = document.createElement("div");
                    itemRow.style.marginTop = "6px";
                    itemRow.style.cursor = "pointer";
                    itemRow.style.color = "#2ecc71";
                    itemRow.className = "clickable-meal";
                    itemRow.title = "Click to view full recipe details";
                    itemRow.innerHTML = `${namesStr} ${assign.recipe.title} <br><small style="color:#7f8c8d;">(⏱️ ${assign.recipe.prepTime} | 👁️ Click for recipe)</small>`;
                    
                    itemRow.addEventListener("click", () => openRecipeModal(assign.recipe.id));
                    mealDiv.appendChild(itemRow);
                    allFamilyIngredients.push(...assign.recipe.ingredients);
                });

                div.appendChild(mealDiv);
            });

            famGrid.appendChild(div);
        });

        // Actualitza la llista de la compra amb TOTS els ingredients de la família
        updateShoppingList(allFamilyIngredients);
    }

    // 9. LLISTA DE LA COMPRA SEPARADA
    function updateShoppingList(ingredients) {
        if (!mainGroceryList || !pantryList) return;
        mainGroceryList.innerHTML = "";
        pantryList.innerHTML = "";
        
        const pantryStaples = ["olive oil", "salt and pepper", "water", "garlic", "onion", "onions", "black pepper", "salt", "oregano", "paprika", "cumin", "cinnamon", "fresh mint", "fresh parsley", "italian herbs", "lime juice", "lemon juice", "red pepper flakes", "yellow curry paste", "mustard", "vanilla extract", "sesame oil", "ginger"];
        const norm = { "egg":"Eggs", "eggs":"Eggs", "avocado":"Avocado", "apple":"Apple", "apples":"Apple", "bell pepper":"Bell peppers", "bell peppers":"Bell peppers", "sweet potato":"Sweet potato", "tofu":"Tofu", "beef steak":"Beef steak", "chicken breast":"Chicken breast", "sourdough bread":"Sourdough bread", "canned tomatoes":"Canned tomatoes", "cherry tomatoes":"Cherry tomatoes", "tomato":"Tomato", "mayonnaise":"Mayonnaise", "lentils":"Lentils", "jasmine rice":"Jasmine rice", "zucchini":"Zucchini", "lemon":"Lemon" };

        let clean = ingredients.filter(i => i && typeof i === "string").map(i => {
            let l = i.trim().toLowerCase();
            return { original: norm[l] || i.charAt(0).toUpperCase() + i.slice(1).trim(), lower: l };
        });

        const uniqueItems = Array.from(new Set(clean.map(a => a.original)))
            .map(original => clean.find(a => a.original === original));
        
        uniqueItems.sort((a,b) => a.original.localeCompare(b.original)).forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `<label class="shopping-item"><input type="checkbox"> <span>${item.original}</span></label>`;
            
            if (pantryStaples.includes(item.lower)) {
                pantryList.appendChild(li);
            } else {
                mainGroceryList.appendChild(li);
            }
        });
    }

    // 10. GESTIÓ DEL MODAL DE RECEPTES
    function setupRecipeModal() {
        let modal = document.getElementById("recipe-detail-modal");
        if (!modal) {
            modal = document.createElement("div");
            modal.id = "recipe-detail-modal";
            modal.className = "modal";
            modal.style.display = "none";
            modal.style.position = "fixed";
            modal.style.top = "0";
            modal.style.left = "0";
            modal.style.width = "100%";
            modal.style.height = "100%";
            modal.style.backgroundColor = "rgba(0,0,0,0.7)";
            modal.style.zIndex = "1000";
            modal.style.justifyContent = "center";
            modal.style.alignItems = "center";
            
            modal.innerHTML = `
                <div class="modal-content" style="background: var(--card-bg, #fff); padding: 25px; border-radius: 12px; max-width: 500px; width: 90%; max-height: 85vh; overflow-y: auto; position: relative; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
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

            document.getElementById("close-recipe-modal").addEventListener("click", () => {
                modal.style.display = "none";
            });
            
            modal.addEventListener("click", (e) => {
                if (e.target === modal) modal.style.display = "none";
            });
        }
    }

    function openRecipeModal(recipeId) {
        const r = recipes.find(item => item.id === recipeId);
        if (!r) return;

        document.getElementById("modal-recipe-title").innerText = r.title;
        document.getElementById("modal-recipe-meta").innerHTML = `<strong>Type:</strong> ${r.mealType} | <strong>Prep Time:</strong> ⏱️ ${r.prepTime}`;
        
        const ingList = document.getElementById("modal-recipe-ingredients");
        ingList.innerHTML = r.ingredients.map(ing => `<li>${ing}</li>`).join("");
        
        const instBox = document.getElementById("modal-recipe-instructions");
        instBox.innerText = r.instructions || "No detailed instructions available for this recipe yet.";

        document.getElementById("recipe-detail-modal").style.display = "flex";
    }

    init();

    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("./sw.js")
                .catch(err => console.error("Service Worker registration failed:", err));
        });
    }
});
