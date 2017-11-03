const createRecipe = require;
// (../pages/edit/createRecipe.js);

const qs = document.querySelector.bind(document);

const resultsDiv = qs("#create-result");
// const resultOutpout = qs("#create-result >#salida");

function loadCreateRecipe() {
	// const addIngredient = qs("add-ingredient-button");
	const submit = qs("#create-recipe-button");
	const inputId = qs("#create-recipe-inputId");
	const inputName = qs("#create-recipe-inputName");
	const inputIngredients = qs("#create-recipe-inputIngredients");
	const inputSteps = qs("#create-recipe-inputSteps");
	const inputTypeOfFood = qs("#create-recipe-inputTypeOfFood");
	const inputOrigin = qs("#create-recipe-inputOrigin");
	const inputAuthorId = qs("#create-recipe-inputAuthorId");


	// addIngredient.addEventListener("click", () =>{
	// 	const igredientsAdd =
	// });


	submit.addEventListener("click", () => {
		const recipeId = inputId.value;
		const name = inputName.value;
		const ingredients = inputIngredients.value;
		const steeps = inputSteps.value;
		const typeOfFood = inputTypeOfFood.value;
		const origin = inputOrigin.value;
		const authorId = inputAuthorId.value;
		const results = createRecipe(recipeId, name, ingredients, steeps, typeOfFood, origin, authorId);

		return results;
	});

	// Mostrar los resultados
	resultsDiv.style.display = "block";
}

function loadCreateRecipeController() {
	loadCreateRecipe();
}

module.exports = loadCreateRecipeController();
