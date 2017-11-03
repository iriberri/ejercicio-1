const {getState} = require("../../appState");


/**
 * Creamos la función que nos devolverá las recetas con mejor puntuación de cada tipo de comida.
 * @returns {Array} de recetas mejor valoradas por tipo de comida.
 */
function getHighestRatedRecipes() {
	const COMPARADOR = (a, b) => a.idRecipe - b.idRecipe;
	// El array donde tenemos las recetas mejor valoradas
	const highestRatedRecipesForTypeOfFood = [];
	let encontrado;
	// Todas las recetas que tenemos en el estado
	const RECETAS = getState.recipes();
	const RATINGS = getState.ratings();
}

module.exports = getHighestRatedRecipes;
