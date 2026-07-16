document.addEventListener("DOMContentLoaded", () => {
    // 1. LLISTA COMPLETA DE DIETES I AL·LÈRGIES (EN ANGLÈS)
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

    // 2. BASE DE DADES DE RECEPTES AMB LES PROPIETATS EXTENDED
    const recipes = [
        { id: 1, title: "Gluten-Free Pancakes", mealType: "Breakfast", prepTime: "15 min", safeFor: ["vegetarian", "cows_milk", "peanuts", "fish", "shellfish", "soy", "lactose"], ingredients: ["Gluten-free flour", "Almond milk", "Eggs", "Maple syrup"] },
        { id: 2, title: "Creamy Oatmeal Bowl", mealType: "Breakfast", prepTime: "10 min", safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["Gluten-free oats", "Oat milk", "Banana", "Chia seeds"] },
        { id: 3, title: "Avocado & Egg Toast", mealType: "Breakfast", prepTime: "5 min", safeFor: ["vegetarian", "cows_milk", "peanuts", "tree_nuts", "fish", "shellfish", "soy", "lactose"], ingredients: ["Sourdough bread", "Avocado", "Eggs", "Salt and pepper"] },
        { id: 4, title: "Berry & Spinach Smoothie", mealType: "Breakfast", prepTime: "5 min", safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["Mixed berries", "Spinach", "Water", "Plant protein powder"] },
        { id: 5, title: "Chia Seed Pudding", mealType: "Breakfast", prepTime: "5 min", safeFor: ["vegan", "vegetarian", "keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["Chia seeds", "Coconut milk", "Vanilla extract", "Strawberries"] },
        { id: 6, title: "Scrambled Tofu Toast", mealType: "Breakfast", prepTime: "12 min", safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "lactose"], ingredients: ["Sourdough bread", "Tofu", "Turmeric", "Spinach", "Olive oil"] },
        { id: 7, title: "Banana & Almond Butter Toast", mealType: "Breakfast", prepTime: "5 min", safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["Gluten-free bread", "Almond butter", "Banana", "Cinnamon"] },
        { id: 8, title: "Fruit Salad with Mint", mealType: "Breakfast", prepTime: "10 min", safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["Orange", "Apple", "Blueberries", "Fresh mint", "Lime juice"] },
        { id: 9, title: "Classic Shakshuka", mealType: "Breakfast", prepTime: "20 min", safeFor: ["vegetarian", "keto", "cows_milk", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["Eggs", "Canned tomatoes", "Bell peppers", "Onion", "Cumin"] },
        { id: 10, title: "Chicken and Rice Stir-fry", mealType: "Lunch", prepTime: "20 min", safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose", "fructose"], ingredients: ["Chicken breast", "Jasmine rice", "Gluten-free soy sauce", "Bell peppers", "Carrots"] },
        { id: 11, title: "Quinoa Cucumber Salad", mealType: "Lunch", prepTime: "15 min", safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["Quinoa", "Cucumber", "Cherry tomatoes", "Olive oil", "Lemon"] },
        { id: 12, title: "Lentil Vegetable Soup", mealType: "Lunch", prepTime: "35 min", safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["Lentils", "Carrots", "Celery", "Tomato paste", "Vegetable broth"] },
        { id: 13, title: "Beef and Broccoli Bowl", mealType: "Lunch", prepTime: "20 min", safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose", "fructose"], ingredients: ["Beef steak", "Broccoli", "Garlic", "Ginger", "Tamari sauce"] },
        { id: 14, title: "Tuna Salad Wrap", mealType: "Lunch", prepTime: "10 min", safeFor: ["cows_milk", "peanuts", "tree_nuts", "shellfish", "wheat", "lactose", "fructose"], ingredients: ["Canned tuna", "Gluten-free tortilla", "Cucumber", "Mayonnaise", "Lettuce"] },
        { id: 15, title: "Greek Chickpea Salad", mealType: "Lunch", prepTime: "12 min", safeFor: ["vegetarian", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "fructose"], ingredients: ["Canned chickpeas", "Feta cheese", "Cucumber", "Onion", "Olive oil"] },
        { id: 16, title: "Turkey and Avocado Sandwich", mealType: "Lunch", prepTime: "8 min", safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "lactose"], ingredients: ["Sourdough bread", "Turkey breast", "Avocado", "Tomato", "Mustard"] },
        { id: 17, title: "Sweet Potato & Black Bean Bowl", mealType: "Lunch", prepTime: "25 min", safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["Sweet potato", "Black beans", "Coriander", "Lime", "Olive oil"] },
        { id: 18, title: "Egg Fried Rice", mealType: "Lunch", prepTime: "15 min", safeFor: ["cows_milk", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose", "fructose"], ingredients: ["Jasmine rice", "Eggs", "Green peas", "Onion", "Sesame oil"] },
        { id: 19, title: "Grilled Salmon with Broccoli", mealType: "Dinner", prepTime: "25 min", safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["Salmon fillet", "Broccoli", "Olive oil", "Lemon", "Garlic"] },
        { id: 20, title: "Steak with Sweet Potato Fries", mealType: "Dinner", prepTime: "30 min", safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["Beef steak", "Sweet potato", "Olive oil", "Rosemary"] },
        { id: 21, title: "Lemon Herb Cod", mealType: "Dinner", prepTime: "20 min", safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["Cod fillet", "Fresh parsley", "Lemon", "Olive oil", "Asparagus"] },
        { id: 22, title: "Pork Chops with Apples", mealType: "Dinner", prepTime: "25 min", safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"], ingredients: ["Pork chops", "Apple", "Onion", "Cinnamon", "Olive oil"] },
        { id: 23, title: "Baked Chicken Breasts", mealType: "Dinner", prepTime: "30 min", safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["Chicken breast", "Paprika", "Oregano", "Garlic", "Green beans"] },
        { id: 24, title: "Shrimp Garlic Pasta", mealType: "Dinner", prepTime: "18 min", safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "soy", "lactose", "fructose"], ingredients: ["Pasta", "Shrimp", "Garlic", "Olive oil", "Red pepper flakes"] },
        { id: 25, title: "Beef Bolognese with Zoodles", mealType: "Dinner", prepTime: "25 min", safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["Beef steak", "Zucchini", "Canned tomatoes", "Italian herbs", "Onion"] },
        { id: 26, title: "Tofu & Vegetable Curry", mealType: "Dinner", prepTime: "25 min", safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"], ingredients: ["Tofu", "Coconut milk", "Yellow curry paste", "Bell peppers", "Spinach"] },
        { id: 27, title: "Turkey Burgers with Salad", mealType: "Dinner", prepTime: "20 min", safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose", "fructose"], ingredients: ["Turkey breast", "Mixed greens", "Tomato", "Cucumber", "Olive oil"] }
    ];

    // ELEMENTS DEL DOM
    const calendarGrid = document.getElementById("calendar-grid");
    const mainGroceryList = document.getElementById("main-grocery-list");
    const pantryList = document.getElementById("pantry-list");
    const recipesGrid = document.getElementById("recipes-grid");
    const navButtons = document.querySelectorAll(".nav-btn");
    const tabContents = document.querySelectorAll(".tab-content");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const regenerateBtn = document.getElementById("regenerate-btn");
    
    let selectedRestrictions = JSON.parse(localStorage.getItem("nutrisafe_restrictions")) || [];

    // 3. INICIALITZACIÓ
    function init() {
        setupTheme();
        renderCheckboxGrids();
        setupNavigation();
        checkOnboarding();
        generateMenu();
        renderRecipes();
    }

    // 4. CONFIGURACIÓ DE TABS DE NAVEGACIÓ
    function setupNavigation() {
        navButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                navButtons.forEach(b => b.classList.remove("active"));
                tabContents.forEach(t => t.classList.remove("active"));
                
                btn.classList.add("active");
                document.getElementById(btn.dataset.tab).classList.add("active");
            });
        });

        regenerateBtn.addEventListener("click", () => {
            generateMenu();
            alert("New weekly menu generated!");
        });
    }

    // 5. GESTIÓ DEL MODE FOSC
    function setupTheme() {
        const isDark = localStorage.getItem("nutrisafe_dark_mode") === "true";
        if (isDark) {
            document.body.classList.add("dark-mode");
            darkModeToggle.checked = true;
        }
        darkModeToggle.addEventListener("change", () => {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("nutrisafe_dark_mode", darkModeToggle.checked);
        });
    }

    // 6. GENERACIÓ DINÀMICA DELS CHECKBOXES (ONBOARDING I SETTINGS)
    function renderCheckboxGrids() {
        const onboardingGrid = document.getElementById("onboarding-checkboxes");
        const settingsGrid = document.getElementById("settings-checkboxes");
        onboardingGrid.innerHTML = "";
        settingsGrid.innerHTML = "";

        dietaryOptions.forEach(opt => {
            const isChecked = selectedRestrictions.includes(opt.id) ? "checked" : "";
            const html = `<label><input type="checkbox" value="${opt.id}" ${isChecked}> ${opt.label}</label>`;
            onboardingGrid.innerHTML += html;
            settingsGrid.innerHTML += html;
        });

        // Event listeners per Settings
        settingsGrid.querySelectorAll("input").forEach(input => {
            input.addEventListener("change", (e) => {
                handleRestrictionChange(e.target.value, e.target.checked);
            });
        });
    }

    // 7. GESTIÓ DE CANVIS EN LES DIETES
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
        renderRecipes();
    }

    // 8. PANTALLA DE BENVINGUDA (ONBOARDING)
    function checkOnboarding() {
        const hasVisited = localStorage.getItem("nutrisafe_visited");
        const modal = document.getElementById("onboarding-modal");
        
        if (!hasVisited) {
            modal.style.display = "flex";
            document.getElementById("save-onboarding-btn").addEventListener("click", () => {
                const checked = Array.from(document.querySelectorAll("#onboarding-checkboxes input:checked")).map(i => i.value);
                selectedRestrictions = checked.length ? checked : ["none"];
                localStorage.setItem("nutrisafe_restrictions", JSON.stringify(selectedRestrictions));
                localStorage.setItem("nutrisafe_visited", "true");
                modal.style.display = "none";
                renderCheckboxGrids();
                generateMenu();
                renderRecipes();
            });
        }
    }

    function shuffle(array) { return array.sort(() => Math.random() - 0.5); }

    // 9. GENERADOR DE MENÚS (NOMÉS ORGANITZACIÓ, SENSE RECEPTES)
    function generateMenu() {
        calendarGrid.innerHTML = "";
        let activeMenuIngredients = [];
        
        // Filtrar receptes segons restriccions (si té "none" o cap, les agafa totes)
        const safeRecipes = recipes.filter(r => {
            if (selectedRestrictions.length === 0 || selectedRestrictions.includes("none")) return true;
            return selectedRestrictions.every(req => r.safeFor && r.safeFor.includes(req));
        });

        const getChoices = (type) => {
            let f = safeRecipes.filter(r => r.mealType === type);
            if (f.length === 0) f = recipes.filter(r => r.mealType === type); // Fallback de seguretat
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
                // S'ha eliminat la llista d'ingredients d'aquí com demanaves!
                div.innerHTML += `<div class="meal-item"><strong>${m.mealType}: ${m.title}</strong><br><small>⏱️ ${m.prepTime}</small></div>`;
                activeMenuIngredients.push(...m.ingredients);
            });
            calendarGrid.appendChild(div);
        });
        
        updateShoppingList(activeMenuIngredients);
    }

    // 10. LLISTA DE LA COMPRA SEPARADA (MAIN vs PANTRY)
    function updateShoppingList(ingredients) {
        mainGroceryList.innerHTML = "";
        pantryList.innerHTML = "";
        
        const pantryStaples = ["olive oil", "salt and pepper", "water", "garlic", "onion", "onions", "black pepper", "salt", "oregano", "paprika", "cumin", "cinnamon", "fresh mint", "fresh parsley", "italian herbs", "lime juice", "lemon juice", "red pepper flakes", "yellow curry paste", "mustard", "vanilla extract", "sesame oil", "ginger"];
        const norm = { "egg":"Eggs", "eggs":"Eggs", "avocado":"Avocado", "apple":"Apple", "apples":"Apple", "bell pepper":"Bell peppers", "bell peppers":"Bell peppers", "sweet potato":"Sweet potato", "tofu":"Tofu", "beef steak":"Beef steak", "chicken breast":"Chicken breast", "sourdough bread":"Sourdough bread", "canned tomatoes":"Canned tomatoes", "cherry tomatoes":"Cherry tomatoes", "tomato":"Tomato", "mayonnaise":"Mayonnaise", "lentils":"Lentils", "jasmine rice":"Jasmine rice", "zucchini":"Zucchini", "lemon":"Lemon" };

        let clean = ingredients.filter(i => i && typeof i === "string").map(i => {
            let l = i.trim().toLowerCase();
            return { original: norm[l] || i.charAt(0).toUpperCase() + i.slice(1).trim(), lower: l };
        });

        // Eliminar duplicats
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

    // 11. MENÚ DE RECEPTES (RECIPE VAULT)
    function renderRecipes() {
        recipesGrid.innerHTML = "";
        const safeRecipes = recipes.filter(r => {
            if (selectedRestrictions.length === 0 || selectedRestrictions.includes("none")) return true;
            return selectedRestrictions.every(req => r.safeFor && r.safeFor.includes(req));
        });

        safeRecipes.forEach(r => {
            const card = document.createElement("div");
            card.className = "recipe-card";
            card.innerHTML = `
                <h3>${r.title}</h3>
                <p><strong>Type:</strong> ${r.mealType} | <strong>Prep:</strong> ${r.prepTime}</p>
                <div class="meal-item">
                    <strong>Ingredients:</strong>
                    <ul style="margin: 5px 0; padding-left: 20px;">
                        ${r.ingredients.map(ing => `<li>${ing}</li>`).join("")}
                    </ul>
                </div>
            `;
            recipesGrid.appendChild(card);
        });
    }

    // Executar tot en iniciar
    init();

    // --- PWA Service Worker Registration ---
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("./sw.js")
                .then(reg => console.log("Service Worker registered successfully:", reg.scope))
                .catch(err => console.error("Service Worker registration failed:", err));
        });
    }
});
