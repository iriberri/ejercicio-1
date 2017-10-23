/**
 * Created by Fran on 23/10/2017.
 */

// Clase usuario con atributos id y nombre.
class User {
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
			this.nombre = nombre;
		}
	}
}

module.exports = User;
