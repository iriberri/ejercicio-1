const ingredient = require("./ingredient");

/**
 * Creamos la clase receta.
 */
class Recipe {
	/**
	 * Recibe todos los parametros en el constructor.
	 * Controlamos el tipo de los parametros que pasamos al constructor,
	 * y si es de un tipo incorrecto al que queremos lanzamos una excepcion.
	 * Si es correcto, se setea el parámetro.
	 * @param idRecipe Integer
	 * @param ingredients Array[Ingredients]
	 * @param steps Array[Strings]
	 * @param typeOfFood String
	 * @param origin String
	 * @param idAuthor Integer
	 */
	constructor(idRecipe, ingredients, steps, typeOfFood, origin, idAuthor) {
		const tipoDatoInvalido = "El tipo de datos es inválido";
		const datosInsuficinetes = "Datos insuficientes";
		// Controlamos dato idRecipe
		if (typeof idRecipe === typeof 1 && idRecipe > 0) {
			this.idRecipe = idRecipe;
		} else {
			throw tipoDatoInvalido;
		}
		// Controlamos dato ingredients
		if (ingredients instanceof Array) {
			if (ingredients.length < 3) {
				throw datosInsuficinetes;
			}
			for (let i = 0; i < ingredients.length; i += i) {
				if (!(ingredients[i] instanceof ingredient)) {
					throw tipoDatoInvalido;
				}
			}
			this.ingredients = ingredients;
		} else {
			throw tipoDatoInvalido;
		}
		// Controlamos dato steps
		if (steps instanceof Array) {
			if (steps.length > 4) {
				for (let i = 0; i < steps.length; i += i) {
					if (typeof steps[i] !== typeof "") {
						throw tipoDatoInvalido;
					}
				}
			} else {
				throw datosInsuficinetes;
			}
			this.steps = steps;
		} else {
			throw tipoDatoInvalido;
		}
		// Controlamos dato typeOfFood
		if (typeof typeOfFood === typeof "") {
			this.typeOfFood = typeOfFood;
		} else {
			throw tipoDatoInvalido;
		}
		// Controlamos dato origin
		if (typeof origin === typeof "") {
			this.origin = origin;
		} else {
			throw tipoDatoInvalido;
		}
		// Controlamos dato idAuthor
		if (typeof idAuthor === typeof 1 && idAuthor > 0) {
			this.idAuthor = idAuthor;
		} else {
			throw tipoDatoInvalido;
		}
	}
}

module.exports = Recipe;
