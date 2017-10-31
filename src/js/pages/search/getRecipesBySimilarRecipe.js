// Dependencias del proyecto
const { getState } = require("../../appState");

/**
 * Con esta funcion buscamos todas aquellas recetas que sean similar por contener
 * un nombre, ingredientes o tipo de comida similar a la receta introducida.
 * @param similarRecipe String valor a buscar
 */
function getRecipesBySimilarRecipe(similarRecipe) {
	/**
	 * Recogemos las recetas qu tenemos
	 */
	const recetas = getState().recipes;
	/**
	 * Obtenemos cuantos ingredientes tiene la receta
	 */
	const numIngredientes = recetas.ingredient.length;
	/**
	 * Obtenemos cuantos ingredientes tiene la receta introducida para comparar
	 */
	const numIngredientes2 = similarRecipe.ingredient.length;
	/**
	 * Guardaremos en esta variable cuantos ingredientes coinciden entre ambas recetas
	 * @type {number}
	 */
	let numCoincidenciasIngredientes = 0;
	/**
	 * Al ser el nombre de la receta un String, lo convertiremos
	 * a minúscula y lo separaremos
	 */
	recetas.name.toLowerCase().split(" ");
	/**
	 * Al ser el nombre de la receta recibida un String, lo convertiremos
	 * a minúscula y lo separaremos
	 */
	similarRecipe.name.toLowerCase().split(" ");
	/**
	 * Obtenemos cuantos palabras tiene la receta
	 */
	const numPalabras = recetas.name.length;
	/**
	 * Obtenemos cuantos palabras tiene la receta introducida para comparar
	 */
	const numPalabras2 = similarRecipe.name.length;
	/**
	 * Guardaremos en esta variable cuantas palabran coinciden hay entre ambas recetas
	 * @type {number}
	 */
	let numCoincidenciasPalabras = 0;
	/**
	 * Guardaremos aqui la puntuació obtenida en cada campo para saber si una receta es similar a otra
	 * @type {number}
	 */
	let puntuacion = 0;
	/**
	 * Guardaremos aqui la receta que sea similar
	 * @type {Array}
	 */
	const recetaSimilar = [];
	/**
	 * Doble bucle for of donde recorreremos los ingredientes
	 * de ambas recetas y los iremos comparando, si coinciden
	 * los ingreditentes, sumaremos 1 a la variable numCoincidenciasIngreientes
	 */
	/* eslint-disable */
	for (const ingredientes of recetas.ingredient) {
		for (const ingredientes2 of similarRecipe.ingredient) {
			if (ingredientes.ingredient === ingredientes2.ingredient) {
				numCoincidenciasIngredientes++;
			}
		}
	}
	/**
	 * Doble bucle for of donde recorreremos los nombres
	 * de ambas recetas y los iremos comparando, si coinciden
	 * los nombres, sumaremos 1 a la variable numCoincidenciasPalabras
	 */
	for (const palabras of recetas.name) {
		for (const palabras2 of similarRecipe.name) {
			if (palabras === palabras2) {
				numCoincidenciasPalabras++;
			}
		}
	}
	/* eslint-enable */
	/**
	 * Regla de 3 para saber si la coincidencia de los ingredientes es >= 50%, en caso afirmativo,
	 * sumamos 1 a la puntuación.
	 */
	if (((numCoincidenciasIngredientes * 100) / ((numIngredientes + numIngredientes2) / 2)) >= 50) {
		puntuacion += 1;
	}
	/**
	 * Regla de 3 para saber si la coincidencia de los nombres es >= 50%, en caso afirmativo,
	 * sumamos 1 a la puntuación.
	 */
	if (((numCoincidenciasPalabras * 100) / ((numPalabras + numPalabras2) / 2)) >= 50) {
		puntuacion += 1;
	}
	/**
	 * Comprobamos si el tipo de comida son iguales en ambas recetas y en caso afirmativo,
	 * sumamos 1 a la puntuación.
	 */
	if (recetas.typeOfFood === similarRecipe.typeOfFood) {
		puntuacion += 1;
	}
	/**
	 * Es la condición que he establecido para que una receta sea similar a otra, la puntuación deberá
	 * ser >= 2 y al Array recetaSimilar, le añadimos la receta que acabamos de comparar.
	 */
	if (puntuacion >= 2) {
		recetaSimilar.push(recetas);
	}
	/**
	 * Devolvemos la receta
	 */
	return recetaSimilar;
}

module.exports = getRecipesBySimilarRecipe.js;
