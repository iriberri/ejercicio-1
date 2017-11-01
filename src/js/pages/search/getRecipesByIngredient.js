/**
 * Created by Fran on 29/10/2017.
 */

// Dependencias del proyecto
const { getState } = require("../../appState");
/**
 * Funcio que recibe un ingrediente por parametro y devuelve todas las recetas que lo
 * contienen.
 * @param ingredient
 * @returns {Array}
 */
function getRecipesByIngredients(ingredient) {
	const recetas = getState().recipes;

	const result = [];
	for (let i = 0; i < recetas.length; i += 1) {
		for (let j = 0; j < recetas[i].ingredients.length; j += 1) {
			if (recetas[i].ingredients[j].ingredient.name === ingredient) {
				result.push(recetas[i]);
			}
		}
	}
	return result;
}


module.exports = getRecipesByIngredients;
