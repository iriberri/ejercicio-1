const Rating = require("./rating");
const Recipe = require("./recipe");
const User = require("./user");

/**
 * @typedef {object} State
 * @property {Recipe[]} recipes
 * @property {Rating[]} ratings
 * @property {User[]} users
 */

/** @type State */
let state = {
	recipes: [],
	ratings: [],
	users: [],
};

/**
 * @returns State Una copia del estado de la aplicación. El estado de la
 * aplicación es inmutable, es decir, cualquier cambio realizado en getState()
 * no se verá reflejado en el estado. Para modificarlo, hay que usar las
 * funciones proporcionadas en appState.js
 */
function getState() {
	return Object.assign({}, state);
}

/**
 * Añade una receta al estado de la aplicación.
 * @param recipe {Recipe} La receta a añadir.
 */
function addRecipeToState(recipe) {
	if (!(recipe instanceof Recipe)) {
		throw new Error("El objeto pasado a addRecipeToState no es una Recipe");
	}

	const newState = getState();
	newState.recipes = [...state.recipes, recipe];
	state = newState;
}

/**
 * Añade una valoración al estado de la aplicación.
 * @param rating {Rating} La valoración a añadir.
 */
function addRatingToState(rating) {
	if (!(rating instanceof Rating)) {
		throw new Error("El objeto pasado a addRatingToState no es un Rating");
	}

	const newState = getState();
	newState.ratings = [...state.ratings, rating];
	state = newState;
}

/**
 * Añade un usuario al estado de la aplicación.
 * @param user {User} El usuario a añadir.
 */
function addUserToState(user) {
	if (!(user instanceof User)) {
		throw new Error("El objeto pasado a addUserToState no es un User");
	}

	const newState = getState();
	newState.users = [...state.ratings, user];
	state = newState;
}

/**
 * Reemplaza el estado actual por un nuevo estado.
 *
 * ¡ATENCIÓN!
 * Esta función solo debe usarse al cargar el estado de la apliación desde el
 * localStorage. No se debe usar en otro caso bajo ningún concepto.
 *
 * @param nextState {State} El próximo estado
 */
function replaceWholeState(nextState) {
	state = nextState;
}

// TODO crear funciones para modificar y borrar

module.exports = {
	getState,
	addRecipeToState,
	addRatingToState,
	addUserToState,
	replaceWholeState
};
