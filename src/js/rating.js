/**
 * Clase Rating que se compone de idRating, name, score, idAuthor y idRecipe
 */
class Rating {
	/**
	 * Constructor que recibe todos los parámetros. En él controlamos el tipo de parámetro,
	 * por si recibe uno incorrecto, poder lanzar una excepción.
	 * @param idRating Integer
	 * @param name String
	 * @param score Integer
	 * @param idAuthor Integer
	 * @param idRecipe Integer
	 */
	constructor(idRating, name, score, idAuthor, idRecipe) {
		const tipoDatoInvalido = "El tipo de datos es no es válido";
		// Controlamos que el número introducido sea un número y que este no sea menor que 0.
		if (typeof idRating !== "number" || idRating < 0) {
			throw tipoDatoInvalido;
		} else {
			this.idRating = idRating;
		}
		// Controlamos que el nombre introducido sea un stringy que este no sea una cadena vacía.
		if (typeof name !== "string" || name.length <= 0) {
			throw tipoDatoInvalido;
		} else {
			this.name = name;
		}
		// Controlamos que el score introducido sea un número y que este no sea menor que 0.
		if (typeof score !== "number" || score < 0) {
			throw tipoDatoInvalido;
		} else {
			this.score = score;
		}
		// Controlamos que el idAuthor introducido sea un número y que este no sea menor que 0.
		if (typeof idAuthor !== "number" || idAuthor < 0) {
			throw tipoDatoInvalido;
		} else {
			this.idAuthor = idAuthor;
		}
		// Controlamos que el idRecipe introducido sea un número y que este no sea menor que 0.
		if (typeof idRecipe !== "number" || idRecipe < 0) {
			throw tipoDatoInvalido;
		} else {
			this.idRecipe = idRecipe;
		}
	}
}
module.exports = Rating;
