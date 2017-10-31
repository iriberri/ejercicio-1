/**
Created by Artiaga on 20/10/2017.
 */

// Clase Ingredient con atributos id y nombre

class Ingredient {
	/**
	 * Constructor de la clase Ingredient que recibe id y nombre,
	 *
	 * @param id Integer
	 * @param name String
	 */
	constructor(id, name) {
		const datoInvalido = "El tipo de dato no es valido";
		/*
		Comprobamos que el id sea un numero y no sea menor que 0.
		 */
		if (typeof id !== "number" || id < 0) {
			throw new Error(datoInvalido);
		} else {
			this.id = id;
		}

		/*
		Comprobamos que el name sea una cadena y que no sea una cadena vaica.
		 */
		if (typeof name !== "string" || name.length <= 0) {
			throw new Error(datoInvalido);
		} else {
			// Expresion regular que elimina los espacios en blanco.
			this.name = name.trim().replace(/([ t]+(?=[ t])|^s+|s+$)/g, "");
		}
	}
}

module.exports = Ingredient;
