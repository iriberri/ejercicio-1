
class Recipe {
	constructor(idRecipe, ingredients, steps, typeOfFood, origin, idAuthor) {
		const tipoDatoInvalido = "El tipo de datos es inválido";
		try {
			if (typeof idRecipe !== typeof 1) {
				throw tipoDatoInvalido;
			}else {
				this.idRecipe = idRecipe;
			}
			// @TODO controlar valor dentro de los arrays
			if (ingredients instanceof Array) {
				throw tipoDatoInvalido;
			}else {
				this.ingredients = ingredients;
			}
			if (steps instanceof Array) {
				throw tipoDatoInvalido;
			}else {
				this.steps = steps;
			}
			if (typeof typeOfFood !== typeof "") {
				throw tipoDatoInvalido;
			}else {
				this.typeOfFood = typeOfFood;
			}
			if (typeof origin !== typeof "") {
				throw tipoDatoInvalido;
			}else {
				this.origin = origin;
			}
			if (typeof idAuthor !== typeof "") {
				throw tipoDatoInvalido;
			}else {
				this.idAuthor = idAuthor;
			}
		} catch (err) {
			alert(err);
		}
	}
}

module.exports = Recipe;
