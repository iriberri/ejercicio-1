// Dependencias del proyecto
const { getState } = require("../../appState");

/**
 * Con esta funcion buscamos todas aquellas recetas que contengan
 * en su nombre o en sus pasos el valor que le pasemos por parámetro.
 * @param nameOrStep String valor a buscar
 * @return {Recipe[]} Las recetas que coinciden con el criterio de búsqueda.
 */
function getRecipesByNameOrSteps(nameOrStep) {
	/**
	 * Primeramente, recogemos las recetas que tenemos en nuestra aplicación.
	 */
	const recetas = getState().recipes;
	/**
	 * Posteriormente, recogemos esas recetas y
	 * las fistramos si en su nombre aparece el valor que deseamos buscar así como
	 * en cada paso de cada receta.
	 */
	return recetas.filter(x => x
		.name
		.toLowerCase()
		.includes(nameOrStep.toLowerCase()) || x
			.steps
			.some(i => i.toLowerCase().includes(nameOrStep.toLowerCase())));
}

module.exports = getRecipesByNameOrSteps;
