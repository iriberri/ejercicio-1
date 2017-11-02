const Ingredient = require("../../model/Ingredient");

function addOrEditIngredientInRecipe(recipe, newIngredient, existingIngredientIndex) {
	const tipoDatoInvalido = "Tipo de dato invalido";
	if (!(newIngredient.ingredient instanceof Ingredient) || typeof newIngredient.quantity !== typeof "") {
		throw new Error(tipoDatoInvalido);
	}
	if (typeof existingIngredientIndex !== typeof 1 || existingIngredientIndex !== undefined) {
		throw new Error(tipoDatoInvalido);
	}
	const newRecipe = recipe;
	if (existingIngredientIndex === undefined) {
		newRecipe.ingredients.push(newIngredient);
	} else {
		newRecipe.ingredients[existingIngredientIndex] = newIngredient;
	}
	return newRecipe;
}

module.exports = addOrEditIngredientInRecipe;
