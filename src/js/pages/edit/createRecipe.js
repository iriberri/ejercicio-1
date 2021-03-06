/**
 * Created by Fran on 02/11/2017.
 */
const { addRecipeToState, getState } = require("../../appState");
const Recipe = require("../../model/Recipe");

/**
 * Funcion que valida todos los campos de una receta para crearla, si recibe un campo de
 * tipo diferente, null o undefined, una receta con menos de 3 pasos o ingredientes repetidos
 * o una receta con menos de 5 pasos o pasos repetidos devolvera success = false y el tipo de error
 * @param name String
 * @param ingredients Array[Ingredient]
 * @param steps Array[String]
 * @param typeOfFood String
 * @param origin String
 * @param authorId String
 * @returns {{success: *, error: *, recipe: Recipe}} boolean and Error
 */
function createRecipe(name, ingredients, steps, typeOfFood, origin, authorId) {
	const repeatedIngredient = "La receta tiene algun ingrediente repetido";
	let recipe;
	let error;
	let success;
	// Se pasa el id de los ingredientes a un array result.
	const resultado = [];
	for (let i = 0; i < ingredients.length; i += 1) {
		resultado.push(ingredients[i].ingredient.id);
	}

	// Funcion que comprueba si result tiene ids repetidos
	function checkIfArrayIsUnique(myArray) {
		return myArray.length === new Set(myArray).size;
	}

	// Si no hay ids repetidos en los ingredientes, intenta crear la receta
	if (checkIfArrayIsUnique(resultado)) {
		/* Si la receta recibe valores definira el tipo de error, sino la añade
		 a las recetas de state */
		try {
			// Asignamos un ID a la receta
			const recipeId = getState().recipes
				.map(it => it.idRecipe)
				.reduce((el, acc) => (el > acc ? el : acc), 0) + 1;
			recipe = new Recipe(recipeId, name, ingredients, steps, typeOfFood, origin, authorId);
			success = true;
			addRecipeToState(recipe);
		} catch (e) {
			success = false;
			error = e;
		}
	// Si ha ids repetidos en los ingredientes, definira el tipo de error como ingredientes repetidos
	} else {
		success = false;
		error = new Error(repeatedIngredient);
	}
	return { success, recipe, error };
}

module.exports = createRecipe;
