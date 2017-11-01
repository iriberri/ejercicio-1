// Dependencias del proyecto
const { getState } = require("../../appState");

/**
 * Función que devolverá true o false dependiendo de si las recetas comparadas son similares o no
 * @param receta
 * @param similarRecipe
 * @returns {boolean}
 */
function isSimilar(receta, similarRecipe) {
	/**
	 * Obtenemos cuantos ingredientes tiene la receta
	 */
	const numIngredientes = receta.ingredient.length;
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
	receta.name.toLowerCase().split(" ");
	/**
	 * Al ser el nombre de la receta recibida un String, lo convertiremos
	 * a minúscula y lo separaremos
	 */
	similarRecipe.name.toLowerCase().split(" ");
	/**
	 * Obtenemos cuantos palabras tiene la receta
	 */
	const numPalabras = receta.name.length;
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
	 * Guardaremos aqui la puntuación obtenida en cada campo para saber si una receta
	 * es similar a otra
	 * @type {number}
	 */
	let puntuacion = 0;
	/**
	 * Doble bucle for of donde recorreremos los ingredientes
	 * de ambas recetas y los iremos comparando, si coinciden
	 * los ingreditentes, sumaremos 1 a la variable numCoincidenciasIngreientes
	 */
	/* eslint-disable */
	for (const ingredientes of receta.ingredient) {
		for (const ingredientes2 of similarRecipe.ingredient) {
			if (ingredientes.ingredient.id === ingredientes2.ingredient.id) {
				numCoincidenciasIngredientes++;
			}
		}
	}
	/**
	 * Doble bucle for of donde recorreremos los nombres
	 * de ambas recetas y los iremos comparando, si coinciden
	 * los nombres, sumaremos 1 a la variable numCoincidenciasPalabras
	 */
	for (const palabras of receta.name) {
		for (const palabras2 of similarRecipe.name) {
			if (palabras === palabras2) {
				numCoincidenciasPalabras++;
			}
		}
	}
	/* eslint-enable */
	/**
	 * Definimos una constatne que será una regla de 3 que nos peritirá saber el % de similitud entre
	 * dos recetas en cuanto a la comparación de sus ingredientes
	 * @type {number}
	 */
	const operacionIngredientes = (numCoincidenciasIngredientes * 100) /
		((numIngredientes + numIngredientes2) / 2);
	/**
	 * Dependiendo del resultado obtenido, la puntuación será mayor o menor
	 */
	if (operacionIngredientes >= 50 && operacionIngredientes < 75) {
		puntuacion += 0.5;
	} else if (operacionIngredientes >= 75 && operacionIngredientes < 100) {
		puntuacion += 0.75;
	} else if (operacionIngredientes === 100) {
		puntuacion += 1;
	}
	/**
	 * Definimos una constatne que será una regla de 3 que nos peritirá saber el % de similitud entre
	 * dos recetas en cuanto a la comparación de su nombre
	 * @type {number}
	 */
	const operacionPalabras = (numCoincidenciasPalabras * 100) /
		((numPalabras + numPalabras2) / 2);
	/**
	 * Dependiendo del resultado obtenido, la puntuación será mayor o menor
	 */
	if (operacionPalabras >= 50 && operacionPalabras < 75) {
		puntuacion += 0.5;
	} else if (operacionPalabras >= 75 && operacionPalabras < 100) {
		puntuacion += 0.75;
	} else if (operacionPalabras === 100) {
		puntuacion += 1;
	}
	/**
	 * Comprobamos si el tipo de comida son iguales en ambas recetas y en caso afirmativo,
	 * sumamos 1 a la puntuación.
	 */
	if (receta.typeOfFood === similarRecipe.typeOfFood) {
		puntuacion += 1;
	}
	/**
	 * La condición que he establecido para que dos recetas sean parecidas, es que el mínimo de
	 * puntuación sea de 1.5, donde el máximo es 3, lo cual significaría que dos recetas
	 * son iguales. Devolveremos las recetas cuya puntuación sea >= a 1.5
	 */
	return puntuacion >= 1.5;
}

/**
 * Con esta funcion buscaremos en el array de recetas, aquellas que sean similares
 * @param similarRecipe String valor a buscar
 */
function getRecipesBySimilarRecipe(similarRecipe) {
	/**
	 * Recogemos las recetas qu tenemos
	 */
	const recetas = getState().recipes;
	/**
	 * Creamos el array que contendrá las recetas similares
	 * @type {Array}
	 */
	const arraySimilarRecipes = [];
	/* eslint-disable */
	/**
	 * Bucle for in que recorrerá el array de recetas e iremos aplicando la función isSimilar para saber si hay recetas
	 * parecidas, en caso afirmativo, añadimos esa receta a arraySimilarRecipes
	 */
	for (const receta in recetas) {
		if (isSimilar(receta, similarRecipe)) {
			arraySimilarRecipes.push(receta);
		}
	}
	/* eslint-enable */
}

module.exports = getRecipesBySimilarRecipe.js;
