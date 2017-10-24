/**
 * Clase Rating que se compone de idRating, name, score, idAuthor y idRecipe
 */
class Rating {
	constructor(idRating, name, score, idAuthor, idRecipe) {
		const tipoDatoInvalido = "El tipo de datos es inválido";
		if (typeof idRating !== "number" || idRating < 0) {
			throw tipoDatoInvalido;
		} else {
			this.idRating = idRating;
		}
		if (typeof name !== "string" || name.length <= 0) {
			throw tipoDatoInvalido;
		} else {
			this.name = name;
		}
		if (typeof score !== "number" || score < 0) {
			throw tipoDatoInvalido;
		} else {
			this.score = score;
		}
		if (typeof idAuthor !== "number" || idAuthor < 0) {
			throw tipoDatoInvalido;
		} else {
			this.idAuthor = idAuthor;
		}
		if (typeof idRecipe !== "number" || idRecipe < 0) {
			throw tipoDatoInvalido;
		} else {
			this.idRecipe = idRecipe;
		}
	}
}
module.exports = Rating;
