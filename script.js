
const recipeContainer = document.getElementById('recipe-container')
const recipeText = document.getElementById('recipe')

const newRecipeBtn = document.getElementById('new-recipe')
let apiRecipes = [];

//show new recipe:
function newRecipe(){
    const recipe = apiRecipes[Math.floor(Math.random() * apiRecipes.length)];
    recipeText.textContent = recipe.text;
}

async function getRecipes(){
    const apiUrl = 'https://api.spoonacular.com/recipes/search';
    try{
        const response = await fetch(apiUrl);
        apiRecipes = await response.json();
        console.log(apiRecipes)
    } catch(error) {
        
    }
}

//on load

getRecipes();