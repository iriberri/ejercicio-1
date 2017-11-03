const { getState } = require("../../appState");

/**
 * Creamos la función que nos devolverá las recetas con mejor puntuación de cada tipo de comida.
 * @returns {Array} de recetas mejor valoradas por tipo de comida.
 */
function getHighestRatedRecipes() {
	// El array donde tenemos las recetas mejor valoradas
	const highestRatedRecipesForTypeOfFood = [];
	// Todas las recetas que tenemos en el estado
	const RECETAS = getState.recipes();
	let encontrado;
	// Recorremos las recetas que tenemos en el estado
	for (let i = 0; i < RECETAS.length; i += 1) {
		// Guardamos en una variable la posición de la receta del array de recetas que tenga
		// el mismo tipo de comida que la receta que estamos inspecionando.
		// Si hay alguna con el mismo tipo de comida guardamos su posición en una variable 'encontrado',
		// si no hay,su valor será -1
		encontrado = highestRatedRecipesForTypeOfFood
			.findIndex(x => x.typeOfFood === RECETAS[i].typeOfFood);
		if (encontrado !== -1) {
			// Evaluamos si la receta que hemos encontrado tiene un mejor rating que la actual guardada.
			// Si lo tiene, sustituye su posición.
			if (highestRatedRecipesForTypeOfFood[encontrado].rating > RECETAS[i].rating) {
				highestRatedRecipesForTypeOfFood[encontrado] = RECETAS[i];
			}
		} else {
			// Si no se ha encontrado receta con el mismo tipo de comida, la receta es automaticamente
			// añadido al array de recetas con mejor posición
			highestRatedRecipesForTypeOfFood.push(RECETAS[i]);
		}
	}
	// Devolvemos las mejores recetas por cada tipo de comida.
	return highestRatedRecipesForTypeOfFood;
}

module.exports = getHighestRatedRecipes;
