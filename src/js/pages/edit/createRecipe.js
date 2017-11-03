/**
 * Created by Fran on 02/11/2017.
 */
const { addRecipeToState } = require("../../appState");
const Recipe = require("../../model/Recipe");

/**
 * Funcion que valida todos los campos de una receta para crearla, si recibe un campo de
 * tipo diferente, null o undefined, una receta con menos de 3 pasos o ingredientes repetidos
 * o una receta con menos de 5 pasos o pasos repetidos lanzara una excepcion.
 * @param recipeId Integer
 * @param name String
 * @param ingredients Array[Ingredient]
 * @param steps Array[String]
 * @param typeOfFood String
 * @param origin String
 * @param authorId String
 * @returns {{success: *, error: *}} boolean and Error
 */
function createRecipe(recipeId, name, ingredients, steps, typeOfFood, origin, authorId) {
	const invalidRecipe = "Receta no valida";
	const repeatedIngredient = "La receta tiene algun ingrediente repetido";
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
		/* Si la receta recibe valores invalidos lanzara un error, sino la añade
		 a las recetas de state */
		try {
			const recipe = new Recipe(recipeId, name, ingredients, steps, typeOfFood, origin, authorId);
			success = true;
			addRecipeToState(recipe);
		} catch (err) {
			success = false;
			throw error = new Error(invalidRecipe);
		}
	// Si ha ids repetidos en los ingredientes, lanza un error
	} else {
		success = false;
		throw error = new Error(repeatedIngredient);
	}
	return { success, error };
}

module.exports = createRecipe;
