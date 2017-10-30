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
		// Comprobamos que el id introducido sea un numero y que no sea menor que 0.
		if (typeof id !== "number" || id < 0) {
			throw new Error(datoInvalido);
		} else {
			this.id = id;
		}

		// Comprobamos que el nombre introducido sea una cadena y que no sea una cadena vacia.
		if (typeof nombre !== "string" || nombre.length === 0) {
			throw new Error(datoInvalido);
		} else {
			// Se eliminan todos los espacios en blanco del nombre.
			this.nombre = nombre.trim().replace(/([ t]+(?=[ t])|^s+|s+$)/g, "");
		}
	}
}

module.exports = User;
