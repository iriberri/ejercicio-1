/**
 * Created by Fran on 23/10/2017.
 */

// Clase User con atributos id y nombre.
class User {
	/**
	 * Constructor de la clase User que recibe un id y un nombre
	 * comprobando que no reciban un tipo incorrecto, en cuyo caso
	 * lanzara una excepcion.
	 * @param id Integer
	 * @param nombre String
	 */
	constructor(id, nombre) {
		const datoInvalido = "El tipo de dato es invalido";
		if (typeof id !== "number" || id < 0) {
			throw datoInvalido;
		} else {
			this.id = id;
		}

		if (typeof nombre !== "string" || nombre.length === 0) {
			throw datoInvalido;
		} else {
			this.nombre = nombre.trim().replace(/([ t]+(?=[ t])|^s+|s+$)/g, "");
		}
	}
}

module.exports = User;
