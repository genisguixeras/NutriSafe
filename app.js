/* ==========================================================================
   NutriSafe - Core App Engine (versió consolidada i millorada)
   Aquest és l'únic fitxer JS de l'app. index.html ja NO té script propi.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* --------------------------------------------------------------------
       DADES BASE
       -------------------------------------------------------------------- */

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
        "🍎 Fruits & Vegetables": ["banana", "strawberry", "strawberries", "pepper", "cucumber", "tomato", "tomatoes", "broccoli", "asparagus", "potato", "lemon", "spinach", "avocado", "garlic", "cherry tomatoes", "sweet potato", "carrot", "onion", "zucchini", "mushroom", "kale", "lime", "apple", "blueberr"],
        "🥩 Meat & Fish": ["chicken", "beef", "salmon", "steak", "turkey", "shrimp", "prawn", "tuna", "cod", "pork", "bacon"],
        "🥚 Dairy & Eggs": ["milk", "egg", "eggs", "cheese", "butter", "yogurt", "yoghurt", "feta", "parmesan"],
        "🌾 Grains & Legumes": ["flour", "oats", "rice", "quinoa", "bread", "chia", "tofu", "pasta", "lentil", "chickpea", "beans", "tortilla", "couscous"],
        "🧂 Spices & Pantry": ["syrup", "oil", "salt", "pepper flakes", "paprika", "oregano", "cumin", "cinnamon", "turmeric", "soy sauce", "mustard", "vanilla", "coconut milk", "basil", "thyme", "rosemary", "chili", "ginger", "vinegar", "honey", "stock", "broth", "nutritional yeast", "black pepper"]
    };

    const recipes = [
        {
            id: 1, title: "Fluffy Gluten-Free Pancakes", mealType: "Breakfast", prepTime: "20 min", calories: 380,
            macros: { protein: "14g", carbs: "52g", fat: "10g" },
            safeFor: ["vegetarian", "cows_milk", "peanuts", "fish", "shellfish", "soy", "lactose"],
            ingredients: ["150g Gluten-free flour", "200ml Almond milk", "2 Eggs", "1 tsp Baking powder", "2 tbsp Maple syrup", "1 tbsp Melted butter"],
            instructions: "1. In a bowl, whisk the eggs with the almond milk and melted butter until combined.\n2. In a separate bowl, mix the gluten-free flour with the baking powder, then fold it into the wet mixture until you get a smooth batter (a few small lumps are fine).\n3. Let the batter rest for 5 minutes so the flour hydrates properly.\n4. Heat a non-stick pan over medium heat, pour small ladles of batter and cook 2-3 minutes per side until golden and bubbles form on the surface.\n5. Stack the pancakes and serve warm, drizzled with maple syrup."
        },
        {
            id: 2, title: "Creamy Overnight Oats Bowl", mealType: "Breakfast", prepTime: "10 min", calories: 320,
            macros: { protein: "12g", carbs: "50g", fat: "7g" },
            safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"],
            ingredients: ["80g Oats", "250ml Oat milk", "1 Banana", "1 tbsp Chia seeds", "1 tsp Cinnamon", "1 tsp Honey"],
            instructions: "1. In a jar or bowl, combine the oats, oat milk, chia seeds and cinnamon, stirring well.\n2. Cover and refrigerate for at least 2 hours, or ideally overnight, so the oats soften completely.\n3. In the morning, slice the banana.\n4. Top the oatmeal with the sliced banana and a drizzle of honey before serving cold, or warm it up for 1 minute in the microwave if you prefer it hot."
        },
        {
            id: 3, title: "Avocado & Poached Egg Toast", mealType: "Breakfast", prepTime: "12 min", calories: 340,
            macros: { protein: "15g", carbs: "28g", fat: "18g" },
            safeFor: ["vegetarian", "cows_milk", "peanuts", "tree_nuts", "fish", "shellfish", "soy", "lactose"],
            ingredients: ["2 slices Whole-grain bread", "1 Ripe avocado", "2 Eggs", "1/2 Lemon", "1 pinch Chili flakes", "1 pinch Salt & black pepper"],
            instructions: "1. Bring a small pot of water to a gentle simmer and add a splash of vinegar for poaching.\n2. Toast the bread slices until golden and crisp.\n3. Mash the avocado in a bowl with a squeeze of lemon juice, salt and pepper, then spread it evenly over the toast.\n4. Crack each egg into a cup and slide gently into the simmering water; poach for 3 minutes for a runny yolk.\n5. Lift the eggs out with a slotted spoon, place on top of the avocado toast, and finish with chili flakes."
        },
        {
            id: 4, title: "Vanilla Chia Seed Pudding", mealType: "Breakfast", prepTime: "10 min", calories: 280,
            macros: { protein: "8g", carbs: "22g", fat: "14g" },
            safeFor: ["vegan", "vegetarian", "keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"],
            ingredients: ["40g Chia seeds", "200ml Coconut milk", "1 tsp Vanilla extract", "100g Fresh strawberries", "1 tsp Honey"],
            instructions: "1. In a glass jar, whisk together the chia seeds, coconut milk, vanilla extract and honey until no lumps remain.\n2. Cover and let it rest in the fridge for at least 2 hours, stirring once after 30 minutes to avoid clumping.\n3. Once it has thickened to a pudding-like texture, chop the fresh strawberries.\n4. Garnish with the strawberries just before serving."
        },
        {
            id: 5, title: "Spinach & Feta Egg Muffins", mealType: "Breakfast", prepTime: "25 min", calories: 260,
            macros: { protein: "18g", carbs: "4g", fat: "18g" },
            safeFor: ["vegetarian", "keto", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy"],
            ingredients: ["6 Eggs", "60g Fresh spinach", "50g Feta cheese", "1/4 Onion", "1 pinch Salt & black pepper", "1 tbsp Olive oil"],
            instructions: "1. Preheat the oven to 180°C and grease a muffin tin lightly with olive oil.\n2. Finely chop the onion and sauté it for 2 minutes until soft, then wilt the spinach in the same pan.\n3. Whisk the eggs in a bowl with salt and pepper, then stir in the spinach, onion and crumbled feta.\n4. Divide the mixture evenly among the muffin cups.\n5. Bake for 16-18 minutes until set and lightly golden on top, then let cool for 5 minutes before removing."
        },
        {
            id: 6, title: "Honey Soy Chicken & Rice Stir-fry", mealType: "Lunch", prepTime: "25 min", calories: 520,
            macros: { protein: "42g", carbs: "58g", fat: "12g" },
            safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"],
            ingredients: ["200g Chicken breast", "150g Jasmine rice", "2 tbsp Soy sauce", "1 tbsp Honey", "1 Red bell pepper", "2 cloves Garlic", "1 tbsp Vegetable oil"],
            instructions: "1. Rinse the jasmine rice and cook it according to package instructions.\n2. While the rice cooks, slice the chicken breast and bell pepper into thin strips, and mince the garlic.\n3. Heat the oil in a wok over high heat, add the garlic and stir-fry for 30 seconds until fragrant.\n4. Add the chicken and cook for 4-5 minutes until browned, then add the bell pepper and stir-fry for 2 more minutes.\n5. Pour in the soy sauce and honey, toss everything together for 1 minute, and serve hot over the rice."
        },
        {
            id: 7, title: "Mediterranean Quinoa Salad", mealType: "Lunch", prepTime: "20 min", calories: 410,
            macros: { protein: "12g", carbs: "54g", fat: "16g" },
            safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"],
            ingredients: ["100g Quinoa", "1 Cucumber", "100g Cherry tomatoes", "1/4 Red onion", "2 tbsp Extra virgin olive oil", "1 Lemon", "1 tsp Oregano"],
            instructions: "1. Rinse the quinoa well, then boil in salted water for 12 minutes until the grains turn translucent; drain and let it cool.\n2. Dice the cucumber, halve the cherry tomatoes, and finely chop the red onion.\n3. In a large bowl, whisk together the olive oil, juice of the lemon and oregano to make a dressing.\n4. Combine the cooled quinoa with the chopped vegetables and toss everything with the dressing.\n5. Let it sit for 10 minutes before serving so the flavors meld together."
        },
        {
            id: 8, title: "Garlic Beef & Broccoli Bowl", mealType: "Lunch", prepTime: "22 min", calories: 580,
            macros: { protein: "45g", carbs: "20g", fat: "28g" },
            safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"],
            ingredients: ["200g Beef steak", "150g Broccoli florets", "3 cloves Garlic", "2 tbsp Soy sauce", "1 tbsp Sesame oil", "1 tsp Ginger, grated"],
            instructions: "1. Slice the beef thinly against the grain and mince the garlic and ginger.\n2. Steam the broccoli florets for 4 minutes until just tender, then set aside.\n3. Heat the sesame oil in a hot skillet, sear the beef strips for 2 minutes per side until browned.\n4. Add the garlic and ginger to the pan and cook for 30 seconds until fragrant.\n5. Toss in the steamed broccoli and soy sauce, stir everything together for 1-2 minutes, and serve immediately."
        },
        {
            id: 9, title: "Turkey & Veggie Wrap", mealType: "Lunch", prepTime: "12 min", calories: 450,
            macros: { protein: "35g", carbs: "40g", fat: "14g" },
            safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "lactose"],
            ingredients: ["1 Large tortilla", "120g Turkey slices", "1/2 cup Lettuce", "1 Tomato", "2 tbsp Hummus", "1/4 Avocado"],
            instructions: "1. Lay the tortilla flat and spread the hummus evenly over the surface.\n2. Slice the tomato and avocado, and shred the lettuce.\n3. Layer the turkey slices, lettuce, tomato and avocado down the center of the tortilla.\n4. Fold in the sides and roll the tortilla up tightly into a wrap.\n5. Cut in half diagonally and serve, or wrap in foil to take on the go."
        },
        {
            id: 10, title: "Chickpea & Spinach Curry", mealType: "Lunch", prepTime: "25 min", calories: 430,
            macros: { protein: "16g", carbs: "48g", fat: "16g" },
            safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"],
            ingredients: ["1 can Chickpeas", "200ml Coconut milk", "80g Fresh spinach", "1 Onion", "2 cloves Garlic", "1 tbsp Curry powder", "1 tbsp Olive oil"],
            instructions: "1. Finely chop the onion and mince the garlic.\n2. Heat the olive oil in a pot and sauté the onion for 4 minutes until translucent, then add the garlic and curry powder and cook for 1 minute until fragrant.\n3. Drain the chickpeas and add them to the pot along with the coconut milk.\n4. Simmer gently for 12 minutes, stirring occasionally, until the sauce thickens slightly.\n5. Stir in the fresh spinach and cook for 2 more minutes until wilted, then serve with rice or flatbread."
        },
        {
            id: 11, title: "Grilled Salmon & Asparagus", mealType: "Dinner", prepTime: "25 min", calories: 610,
            macros: { protein: "46g", carbs: "8g", fat: "38g" },
            safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "shellfish", "wheat", "soy", "lactose"],
            ingredients: ["200g Salmon fillet", "150g Asparagus", "2 tbsp Olive oil", "1/2 Fresh lemon", "2 sprigs Fresh thyme", "1 pinch Salt & pepper"],
            instructions: "1. Preheat a grill pan or skillet over medium-high heat with 1 tbsp of olive oil.\n2. Season the salmon fillet with salt, pepper and fresh thyme.\n3. Grill the salmon skin-side down for 4 minutes, then flip and cook for 3 more minutes until it flakes easily.\n4. Meanwhile, toss the asparagus with the remaining olive oil and sauté in a separate pan for 4-5 minutes until tender-crisp.\n5. Plate the salmon with the asparagus and finish with a squeeze of fresh lemon."
        },
        {
            id: 12, title: "Herb-Crusted Steak with Sweet Potato Wedges", mealType: "Dinner", prepTime: "35 min", calories: 680,
            macros: { protein: "50g", carbs: "42g", fat: "24g" },
            safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"],
            ingredients: ["220g Beef steak", "200g Sweet potato", "2 tbsp Olive oil", "1 tsp Rosemary", "1 tsp Paprika", "1 pinch Salt & pepper"],
            instructions: "1. Preheat the oven to 200°C. Cut the sweet potato into wedges and toss with 1 tbsp olive oil, paprika, salt and pepper.\n2. Spread the wedges on a baking tray and roast for 25 minutes, flipping halfway, until golden and tender.\n3. Meanwhile, season the steak with rosemary, salt and pepper.\n4. Heat the remaining oil in a hot pan and sear the steak for 3-4 minutes per side for medium-rare.\n5. Let the steak rest for 5 minutes before slicing, then serve alongside the sweet potato wedges."
        },
        {
            id: 13, title: "Tofu & Vegetable Coconut Curry", mealType: "Dinner", prepTime: "25 min", calories: 430,
            macros: { protein: "18g", carbs: "26g", fat: "22g" },
            safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "lactose"],
            ingredients: ["180g Firm tofu", "200ml Coconut milk", "1 Bell pepper", "50g Fresh spinach", "1 tbsp Curry paste", "1 tbsp Vegetable oil"],
            instructions: "1. Press the tofu to remove excess water, then cube it.\n2. Heat the oil in a pot and sear the tofu cubes for 4-5 minutes until lightly golden on all sides; set aside.\n3. In the same pot, sauté the sliced bell pepper for 2 minutes, then stir in the curry paste and cook for 1 minute until fragrant.\n4. Pour in the coconut milk, return the tofu to the pot, and let it simmer gently for 10 minutes.\n5. Stir in the fresh spinach right before serving until wilted, and serve with rice."
        },
        {
            id: 14, title: "Baked Cod with Roasted Vegetables", mealType: "Dinner", prepTime: "30 min", calories: 470,
            macros: { protein: "38g", carbs: "24g", fat: "20g" },
            safeFor: ["cows_milk", "eggs", "peanuts", "tree_nuts", "shellfish", "wheat", "soy", "lactose"],
            ingredients: ["220g Cod fillet", "1 Zucchini", "1 Red bell pepper", "1 Carrot", "2 tbsp Olive oil", "1 tsp Paprika", "1/2 Lemon"],
            instructions: "1. Preheat the oven to 200°C. Chop the zucchini, bell pepper and carrot into bite-sized pieces.\n2. Toss the vegetables with 1 tbsp olive oil, paprika, salt and pepper, and spread on a baking tray.\n3. Roast the vegetables for 10 minutes, then push them to one side and add the cod fillet, drizzled with the remaining olive oil.\n4. Bake for another 12-15 minutes until the cod flakes easily and the vegetables are tender.\n5. Squeeze fresh lemon juice over everything before serving."
        },
        {
            id: 15, title: "Lentil & Vegetable Stew", mealType: "Dinner", prepTime: "35 min", calories: 400,
            macros: { protein: "20g", carbs: "50g", fat: "10g" },
            safeFor: ["vegan", "vegetarian", "cows_milk", "eggs", "peanuts", "tree_nuts", "fish", "shellfish", "wheat", "soy", "lactose"],
            ingredients: ["150g Red lentils", "1 Carrot", "1 Onion", "2 cloves Garlic", "400ml Vegetable stock", "1 tsp Cumin", "1 tbsp Olive oil"],
            instructions: "1. Finely dice the carrot and onion, and mince the garlic.\n2. Heat the olive oil in a pot and sauté the onion and carrot for 5 minutes until softened.\n3. Add the garlic and cumin, stirring for 1 minute until fragrant.\n4. Rinse the lentils and add them to the pot along with the vegetable stock.\n5. Bring to a boil, then reduce heat and simmer for 20 minutes, stirring occasionally, until the lentils are soft and the stew has thickened."
        },
        {
            id: 16, title: "Shrimp & Zucchini Noodles", mealType: "Dinner", prepTime: "20 min", calories: 380,
            macros: { protein: "32g", carbs: "14g", fat: "22g" },
            safeFor: ["keto", "cows_milk", "eggs", "peanuts", "tree_nuts", "wheat", "lactose"],
            ingredients: ["200g Shrimp, peeled", "2 Zucchini, spiralized", "3 cloves Garlic", "2 tbsp Olive oil", "1 pinch Chili flakes", "1/2 Lemon"],
            instructions: "1. Spiralize the zucchini into noodle shapes, or use a peeler to create thin ribbons.\n2. Pat the shrimp dry and season lightly with salt and pepper.\n3. Heat the olive oil in a large pan over medium-high heat, add the minced garlic and chili flakes and cook for 30 seconds.\n4. Add the shrimp and cook for 2 minutes per side until pink and opaque, then remove and set aside.\n5. Add the zucchini noodles to the same pan, toss for 1-2 minutes until just softened, return the shrimp to the pan, squeeze over the lemon juice, and serve immediately."
        }
    ];

    /* --------------------------------------------------------------------
       ESTAT DE L'APLICACIÓ
       -------------------------------------------------------------------- */

    let selectedRestrictions = JSON.parse(localStorage.getItem("nutrisafe_restrictions")) || [];
    let tempOnboardingRestrictions = [];
    let currentWeekPlan = [];
    let currentFamilyData = [];
    let isFamilyMode = false;
    let currentSelectedMealId = null;
    let pendingSwapIndex = null;
    let pendingSwapRecipe = null;

    function init() {
        applyStoredDarkMode();
        renderSettingsCheckboxes();
        setupFamilyMembersUI(parseInt(document.getElementById("family-count-input")?.value) || 4);
        setupEventListeners();
        generateIndividualMenu();
    }

    function applyStoredDarkMode() {
        const stored = JSON.parse(localStorage.getItem("nutrisafe_darkmode")) || false;
        document.body.classList.toggle("dark-mode", stored);
        const toggle = document.getElementById("dark-mode-toggle");
        if (toggle) toggle.checked = stored;
    }

    /* --------------------------------------------------------------------
       FUNCIONS D'INTERFÍCIE GENERALS (abans vivien a l'HTML, ara centralitzades aquí)
       -------------------------------------------------------------------- */

    window.switchTab = function(tabId) {
        document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
        const target = document.getElementById(tabId);
        if (target) target.classList.add("active");

        document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
        const activeBtn = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
        if (activeBtn) activeBtn.classList.add("active");
    };

    window.openModal = function(id) {
        const modal = document.getElementById(id);
        if (modal) modal.style.display = "flex";
    };

    window.closeModal = function(id) {
        const modal = document.getElementById(id);
        if (modal) modal.style.display = "none";
    };

    window.showToast = function(msg) {
        const container = document.getElementById("toast-container");
        if (!container) return;
        const t = document.createElement("div");
        t.className = "toast";
        t.innerText = msg;
        container.appendChild(t);
        setTimeout(() => t.remove(), 2500);
    };

    window.shareWhatsApp = function() {
        const items = buildShoppingListText();
        const text = encodeURIComponent(items);
        window.open(`https://wa.me/?text=${text}`, "_blank");
    };

    window.copyShoppingList = function() {
        const text = buildShoppingListText();
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                showToast("Shopping list copied to clipboard! 📋");
            }).catch(() => {
                showToast("Could not copy the list. Please try manually.");
            });
        } else {
            showToast("Copy is not supported in this browser.");
        }
    };

    function buildShoppingListText() {
        const listEl = document.getElementById("main-grocery-list");
        if (!listEl) return "🛒 NutriSafe Shopping List";
        let text = "🛒 *NutriSafe Shopping List*\n";
        listEl.querySelectorAll("li").forEach(li => {
            if (li.classList.contains("shopping-list-item")) {
                const span = li.querySelector("span");
                text += `- ${span ? span.innerText : li.innerText}\n`;
            } else {
                text += `\n${li.innerText}\n`;
            }
        });
        return text.trim();
    }

    /* --------------------------------------------------------------------
       CHECKBOXES DE DIETES/AL·LÈRGIES (reutilitzable per settings i onboarding)
       -------------------------------------------------------------------- */

    function renderDietCheckboxList(containerId, selectedList, onToggle) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = "";

        dietaryOptions.forEach(opt => {
            const label = document.createElement("label");
            label.className = "checkbox-item";

            const isChecked = selectedList.includes(opt.id) ? "checked" : "";
            label.innerHTML = `<input type="checkbox" value="${opt.id}" ${isChecked}> ${opt.label}`;

            const checkbox = label.querySelector("input");
            checkbox.addEventListener("change", () => onToggle(opt.id, checkbox.checked));

            container.appendChild(label);
        });
    }

    function renderSettingsCheckboxes() {
        renderDietCheckboxList("settings-checkboxes", selectedRestrictions, (id, checked) => {
            if (checked) {
                if (id === "none") {
                    selectedRestrictions = ["none"];
                } else {
                    selectedRestrictions = selectedRestrictions.filter(r => r !== "none");
                    selectedRestrictions.push(id);
                }
            } else {
                selectedRestrictions = selectedRestrictions.filter(r => r !== id);
            }
            localStorage.setItem("nutrisafe_restrictions", JSON.stringify(selectedRestrictions));
            renderSettingsCheckboxes();
            generateIndividualMenu();
            showToast("Preferences updated & menu regenerated! 🥗");
        });
    }

    function renderOnboardingDietCheckboxes() {
        tempOnboardingRestrictions = [...selectedRestrictions];
        renderDietCheckboxList("onboarding-diet-checkboxes", tempOnboardingRestrictions, (id, checked) => {
            if (checked) {
                if (id === "none") {
                    tempOnboardingRestrictions = ["none"];
                } else {
                    tempOnboardingRestrictions = tempOnboardingRestrictions.filter(r => r !== "none");
                    tempOnboardingRestrictions.push(id);
                }
            } else {
                tempOnboardingRestrictions = tempOnboardingRestrictions.filter(r => r !== id);
            }
        });
    }

    function setupFamilyMembersUI(count) {
        const grid = document.getElementById("family-members-grid");
        if (!grid) return;
        grid.innerHTML = "";

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
            grid.appendChild(card);
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

    /* --------------------------------------------------------------------
       FILTRATGE DE RESTRICCIONS
       -------------------------------------------------------------------- */

    function isRecipeSafeForRestrictions(recipe, restrictions) {
        if (!restrictions || restrictions.length === 0 || restrictions.includes("none")) return true;

        const ingText = recipe.ingredients.join(" ").toLowerCase();
        const titleText = recipe.title.toLowerCase();
        const safeList = recipe.safeFor || [];

        for (const rest of restrictions) {
            if (rest === "vegan") {
                const hasMeat = /chicken|beef|salmon|steak|turkey|shrimp|cod|prawn/.test(ingText) || /chicken|beef|salmon|steak|turkey|shrimp|cod|prawn/.test(titleText);
                const hasAnimalByproducts = /egg|eggs|milk|cheese|butter|honey|feta/.test(ingText);
                if (hasMeat || hasAnimalByproducts || !safeList.includes("vegan")) return false;
            } else if (rest === "vegetarian") {
                const hasMeat = /chicken|beef|salmon|steak|turkey|shrimp|cod|prawn/.test(ingText) || /chicken|beef|salmon|steak|turkey|shrimp|cod|prawn/.test(titleText);
                if (hasMeat || !safeList.includes("vegetarian")) return false;
            } else {
                if (!safeList.includes(rest)) return false;
            }
        }
        return true;
    }

    function isRecipeSafeForFamily(recipe, familyData) {
        if (!familyData || familyData.length === 0) return true;
        for (const member of familyData) {
            if (!isRecipeSafeForRestrictions(recipe, member.restrictions)) return false;
        }
        return true;
    }

    /* --------------------------------------------------------------------
       ONBOARDING
       -------------------------------------------------------------------- */

    window.finishOnboarding = function(target) {
        const onboardingModal = document.getElementById("onboarding-modal");

        const onboardingTime = document.getElementById("onboarding-time");
        const settingsTime = document.getElementById("settings-cooking-time");
        if (onboardingTime && settingsTime) {
            settingsTime.value = onboardingTime.value;
        }

        if (target === "family") {
            if (onboardingModal) onboardingModal.style.display = "none";
            document.getElementById("nav-text-individual").innerText = "Recipes";
            document.getElementById("planner-tab-title").innerText = "Family Recipes";
            const restrCard = document.getElementById("settings-restrictions-card");
            if (restrCard) restrCard.style.display = "none";
            openModal("premium-modal");
            switchTab("family-tab");
        } else {
            // En lloc de tancar l'onboarding directament, preguntem primer per al·lèrgies/dietes
            if (onboardingModal) onboardingModal.style.display = "none";
            renderOnboardingDietCheckboxes();
            openModal("onboarding-diet-modal");
        }
    };

    window.confirmOnboardingDiet = function() {
        selectedRestrictions = [...tempOnboardingRestrictions];
        localStorage.setItem("nutrisafe_restrictions", JSON.stringify(selectedRestrictions));

        closeModal("onboarding-diet-modal");
        renderSettingsCheckboxes();

        document.getElementById("nav-text-individual").innerText = "Individual Plan";
        document.getElementById("planner-tab-title").innerText = "Your Weekly Plan";
        const restrCard = document.getElementById("settings-restrictions-card");
        if (restrCard) restrCard.style.display = "block";

        generateIndividualMenu();
        switchTab("planner-tab");
        showToast("Menu generated based on your preferences! 🥗");
    };

    /* --------------------------------------------------------------------
       ACCIONS DE LLISTA DE LA COMPRA
       -------------------------------------------------------------------- */

    window.clearCheckedShoppingItems = function() {
        const checkboxes = document.querySelectorAll("#main-grocery-list input[type='checkbox']");
        checkboxes.forEach(cb => cb.checked = false);
        document.querySelectorAll("#main-grocery-list .shopping-list-item").forEach(li => li.classList.remove("checked"));
        showToast("Checked items cleared! 🛒");
    };

    window.toggleShoppingItem = function(checkbox) {
        const li = checkbox.closest("li");
        if (li) {
            if (checkbox.checked) li.classList.add("checked");
            else li.classList.remove("checked");
        }
    };

    window.regenerateWeekWithRotation = function() {
        if (isFamilyMode) generateFamilyMenu();
        else generateIndividualMenu(true);
        showToast("New weekly plan generated! 🔄");
    };

    /* --------------------------------------------------------------------
       GENERACIÓ DE MENÚS
       -------------------------------------------------------------------- */

    function generateIndividualMenu(isRotation = false) {
        isFamilyMode = false;
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const mealTypes = ["Breakfast", "Lunch", "Dinner"];
        const maxTimePerMeal = getMaxTimePerMeal();

        const oldTitles = currentWeekPlan.map(item => item.recipe.title);
        currentWeekPlan = [];

        days.forEach(day => {
            mealTypes.forEach(type => {
                // Cascada: intentem sempre trobar una recepta segura per a les teves restriccions,
                // relaxant primer el temps de cocció i, com a últim recurs, el tipus d'àpat.
                let available = recipes.filter(r =>
                    r.mealType === type &&
                    getPrepTimeInt(r.prepTime) <= maxTimePerMeal &&
                    isRecipeSafeForRestrictions(r, selectedRestrictions)
                );
                if (available.length === 0) available = recipes.filter(r => r.mealType === type && isRecipeSafeForRestrictions(r, selectedRestrictions));
                if (available.length === 0) available = recipes.filter(r => isRecipeSafeForRestrictions(r, selectedRestrictions));
                if (available.length === 0) available = recipes.filter(r => r.mealType === type);

                if (isRotation && available.length > 1) {
                    const filtered = available.filter(r => !oldTitles.includes(r.title));
                    if (filtered.length > 0) available = filtered;
                }

                const recipe = available[Math.floor(Math.random() * available.length)];
                currentWeekPlan.push({
                    day, type, recipe,
                    familyTag: selectedRestrictions.length && !selectedRestrictions.includes("none") ? `Personal (Adapted)` : "Personal Plan"
                });
            });
        });

        renderCalendarFromPlan();
        updateShoppingList();
    }

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
            const name = nameInput?.value.trim() || `Person ${idx + 1}`;
            const restrictions = Array.from(card.querySelectorAll("input.member-restriction:checked")).map(cb => cb.value);
            familyData.push({ name, restrictions });
        });

        currentFamilyData = familyData;

        // Només diem "Adapted" si algú de la família té una restricció de veritat.
        const anyRealRestrictions = familyData.some(m => m.restrictions && m.restrictions.length > 0 && !m.restrictions.includes("none"));
        const familyTagText = anyRealRestrictions
            ? `Adapted for ${familyData.length} members`
            : `Family Plan (${familyData.length} members)`;

        days.forEach(day => {
            mealTypes.forEach(type => {
                // Cascada: si no trobem cap recepta segura per a tothom dins del tipus d'àpat
                // i el temps disponible, anem relaxant les condicions però MAI la seguretat,
                // fins trobar una recepta que sigui apta per a tots els membres de la família.
                let valid = recipes.filter(r =>
                    r.mealType === type &&
                    getPrepTimeInt(r.prepTime) <= maxTimePerMeal &&
                    isRecipeSafeForFamily(r, familyData)
                );
                if (valid.length === 0) valid = recipes.filter(r => r.mealType === type && isRecipeSafeForFamily(r, familyData));
                if (valid.length === 0) valid = recipes.filter(r => isRecipeSafeForFamily(r, familyData));
                if (valid.length === 0) valid = recipes.filter(r => r.mealType === type);

                const recipe = valid[Math.floor(Math.random() * valid.length)];

                currentWeekPlan.push({
                    day, type, recipe,
                    familyTag: familyTagText
                });
            });
        });

        renderCalendarFromPlan();
        updateShoppingList();
        showToast("Smart Family Plan generated successfully! 👨‍👩‍👧‍👦");
    }

    /* --------------------------------------------------------------------
       RENDERITZAT DEL CALENDARI
       -------------------------------------------------------------------- */

    function renderCalendarFromPlan() {
        const grid = document.getElementById("calendar-grid");
        if (!grid) return;
        grid.innerHTML = "";

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
            card.addEventListener("click", () => openRecipeModal(index));
            grid.appendChild(card);
        });
    }

    /* --------------------------------------------------------------------
       MODAL DE RECEPTA (normal + previsualització d'alternatives)
       -------------------------------------------------------------------- */

    function populateRecipeModal(recipe, tagText) {
        document.getElementById("recipe-title").innerText = recipe.title;
        document.getElementById("recipe-family-info").innerText = tagText;
        document.getElementById("macro-calories").innerText = recipe.calories + " kcal";
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
    }

    function openRecipeModal(index) {
        currentSelectedMealId = index;
        const meal = currentWeekPlan[index];
        if (!meal) return;

        populateRecipeModal(meal.recipe, meal.familyTag);

        const useBtn = document.getElementById("recipe-use-btn");
        if (useBtn) useBtn.style.display = "none";
        pendingSwapIndex = null;
        pendingSwapRecipe = null;

        openModal("recipe-modal");
    }

    function previewAlternativeRecipe(mealIndex, altRecipe, tagText) {
        pendingSwapIndex = mealIndex;
        pendingSwapRecipe = altRecipe;

        populateRecipeModal(altRecipe, tagText || "Alternative option");

        const useBtn = document.getElementById("recipe-use-btn");
        if (useBtn) useBtn.style.display = "block";

        openModal("recipe-modal");
    }

    window.openSwapFromModal = function() {
        if (currentSelectedMealId === null || currentSelectedMealId === undefined) return;
        closeModal("recipe-modal");
        window.openSwapModal(currentSelectedMealId);
    };

    window.confirmUseAlternative = function() {
        if (pendingSwapIndex === null || !pendingSwapRecipe) return;

        currentWeekPlan[pendingSwapIndex].recipe = pendingSwapRecipe;

        renderCalendarFromPlan();
        updateShoppingList();

        pendingSwapIndex = null;
        pendingSwapRecipe = null;

        closeModal("recipe-modal");
        closeModal("swap-modal");
        showToast("Meal updated successfully! 🔄");
    };

    /* --------------------------------------------------------------------
       MODAL DE CANVI DE PLAT (SWAP) - amb previsualització completa
       -------------------------------------------------------------------- */

    window.openSwapModal = function(index) {
        currentSelectedMealId = index;
        const meal = currentWeekPlan[index];
        const modalList = document.getElementById("swap-alternatives-list");
        if (!meal || !modalList) return;
        modalList.innerHTML = "";

        const maxTime = getMaxTimePerMeal();
        const candidates = recipes.filter(r => r.mealType === meal.type && r.title !== meal.recipe.title);

        const safeCandidates = isFamilyMode
            ? candidates.filter(r => isRecipeSafeForFamily(r, currentFamilyData))
            : candidates.filter(r => isRecipeSafeForRestrictions(r, selectedRestrictions));

        const timeFiltered = safeCandidates.filter(r => getPrepTimeInt(r.prepTime) <= maxTime);
        const finalList = timeFiltered.length > 0 ? timeFiltered : (safeCandidates.length > 0 ? safeCandidates : candidates);

        if (finalList.length === 0) {
            modalList.innerHTML = "<p style='font-size:12px; color:#666;'>No alternatives available.</p>";
        } else {
            finalList.forEach(alt => {
                const isSafe = isFamilyMode
                    ? isRecipeSafeForFamily(alt, currentFamilyData)
                    : isRecipeSafeForRestrictions(alt, selectedRestrictions);

                const div = document.createElement("div");
                div.style.cssText = "display: flex; justify-content: space-between; align-items: center; background: #f8f9fa; padding: 10px; border-radius: 8px; border: 1px solid #e9ecef; gap: 8px;";
                div.innerHTML = `
                    <div>
                        <strong>${alt.title}</strong> ${isSafe ? '<span style="color:#2e7d32;font-size:10px;">✅ Safe for everyone</span>' : '<span style="color:#e67e22;font-size:10px;">⚠️ Check restrictions</span>'}
                        <p style="font-size: 11px; color: #666; margin: 2px 0 0 0;">⏱️ ${alt.prepTime} | 🔥 ${alt.calories} kcal</p>
                    </div>
                    <div style="display:flex; gap:6px; flex-shrink:0;">
                        <button class="btn-secondary view-alt-btn" style="padding: 5px 8px; font-size: 12px; width:auto;" title="View full recipe">👁️</button>
                        <button class="btn-primary select-alt-btn" style="padding: 5px 10px; font-size: 12px; width:auto;">Select</button>
                    </div>
                `;

                div.querySelector(".view-alt-btn").addEventListener("click", () => {
                    previewAlternativeRecipe(index, alt, isFamilyMode ? `Adapted for ${currentFamilyData.length} members` : "Personal (Adapted)");
                });

                div.querySelector(".select-alt-btn").addEventListener("click", () => {
                    currentWeekPlan[index].recipe = alt;
                    renderCalendarFromPlan();
                    updateShoppingList();
                    closeModal("swap-modal");
                    showToast(`Meal updated to ${alt.title}! ✨`);
                });

                modalList.appendChild(div);
            });
        }

        openModal("swap-modal");
    };

    /* --------------------------------------------------------------------
       LLISTA DE LA COMPRA (per categories, es refà a cada canvi de menú)
       -------------------------------------------------------------------- */

    function updateShoppingList() {
        const groceryList = document.getElementById("main-grocery-list");
        if (!groceryList) return;
        groceryList.innerHTML = "";

        const aggregated = {};
        currentWeekPlan.forEach(item => {
            item.recipe.ingredients.forEach(ing => {
                aggregated[ing] = (aggregated[ing] || 0) + 1;
            });
        });

        const grouped = {};
        Object.keys(supermarketSections).forEach(sec => grouped[sec] = []);
        grouped["📦 Other Ingredients"] = [];

        Object.keys(aggregated).forEach(ing => {
            let placed = false;
            const lower = ing.toLowerCase();
            for (const [sec, keywords] of Object.entries(supermarketSections)) {
                if (keywords.some(kw => lower.includes(kw))) {
                    grouped[sec].push(ing);
                    placed = true;
                    break;
                }
            }
            if (!placed) grouped["📦 Other Ingredients"].push(ing);
        });

        Object.keys(grouped).forEach(sectionName => {
            const list = grouped[sectionName];
            if (list.length === 0) return;

            const secTitle = document.createElement("li");
            secTitle.style.cssText = "font-weight: bold; color: #2e7d32; margin-top: 12px; margin-bottom: 4px; font-size: 14px; list-style: none;";
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
    }

    /* --------------------------------------------------------------------
       EVENT LISTENERS ESTÀTICS
       -------------------------------------------------------------------- */

    function setupEventListeners() {
        const updateFamilyBtn = document.getElementById("update-family-count-btn");
        if (updateFamilyBtn) {
            updateFamilyBtn.addEventListener("click", () => {
                const count = parseInt(document.getElementById("family-count-input").value) || 4;
                setupFamilyMembersUI(count);
                showToast(`Family updated to ${count} members! 👥`);
            });
        }

        const generateFamilyBtn = document.getElementById("generate-family-btn");
        if (generateFamilyBtn) {
            generateFamilyBtn.addEventListener("click", () => {
                closeModal("premium-modal");
                switchTab("planner-tab");
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

        const darkModeToggle = document.getElementById("dark-mode-toggle");
        if (darkModeToggle) {
            darkModeToggle.addEventListener("change", () => {
                const enabled = darkModeToggle.checked;
                document.body.classList.toggle("dark-mode", enabled);
                localStorage.setItem("nutrisafe_darkmode", JSON.stringify(enabled));
                showToast(enabled ? "Dark mode enabled 🌙" : "Dark mode disabled ☀️");
            });
        }
    }

    init();
});
