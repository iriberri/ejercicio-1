const { getState, replaceWholeState } = require("./appState");
const Recipe = require("./model/Recipe");
const Ingredient = require("./model/Ingredient");
const Rating = require("./model/Rating");
const User = require("./model/User");

function saveStateToStorage() {
	const RECIPES_JSON = JSON.stringify(getState().recipes);
	const RATINGS_JSON = JSON.stringify(getState().ratings);
	const USERS_JSON = JSON.stringify(getState().users);
	localStorage.setItem("recipes", RECIPES_JSON);
	localStorage.setItem("ratings", RATINGS_JSON);
	localStorage.setItem("users", USERS_JSON);
}

function saveInitialStateToStorage() {
	const ingredients1 = [
		{ ingredient: new Ingredient(1, "macarrones"), quantity: "500g" },
		{ ingredient: new Ingredient(2, "carne picada"), quantity: "500g" },
		{ ingredient: new Ingredient(3, "tomate frito"), quantity: "500g" },
		{ ingredient: new Ingredient(4, "cebolla"), quantity: "1" },
		{ ingredient: new Ingredient(5, "ajo"), quantity: "4 dientes" }];
	const steps1 = [
		"Cocemos los macarrones. Para ello, los introducimos en una cazuela con abundante agua hirviendo. Añadimos un buen puñadito de sal y los cocemos durante unos 12-15 minutos. Hasta que estén al dente. Removemos de vez en cuando, sobre todo al principio, para que no se peguen al fondo de la olla",
		"Mientras se cocinan, podemos ir preparando la salsa. En una sartén amplia, ponemos a calentar un chorrito de aceite a fuego medio. Después añadimos la cebolla y los ajos picados muy finos. Salpimentamos y removemos con una cuchara de palo mientras cocinamos durante 5 minutos",
		"Pasado el tiempo, añadimos la carne picada. la salpimentamos y la desmenuzamos con la cuchara de palo para que no queden mazacotes grandes y quede bien suelta. Subimos la fuerza del fuego y la dejamos cocinar hasta que coja algo de color",
		"Una vez hecho esto, añadimos el tomate frito y espolvoreamos con orégano seco. Mezclamos todos los ingredientes y dejamos cocinar 10 minutos más.",
		"Cuando los macarrones estén al dente, reservamos uno 150ml del caldo de la cocción en un vaso y los escurrimos del resto del agua",
		"g Cuando tanto los macarrones como la salsa estén cocinados, añadimos los macarrones a la cazuela donde esté la salsa. Añadimos el caldo de la cocción (que potenciará todos los sabores) y lo mezclamos todo bien, mientras cocinamos todo durante un par de minutos"];
	const recipe1 = new Recipe(
		1,
		"poderosa",
		ingredients1,
		steps1,
		"mexicana",
		"china",
		1
	);
	const user1 = new User(1, "Pablo");
	const rating1 = new Rating(
		1,
		"Me encanta",
		10,
		1,
		1
	);
	const RECIPE = JSON.stringify(recipe1);
	const USER = JSON.stringify(user1);
	const RATING = JSON.stringify(rating1);
	localStorage.setItem("recipes", RECIPE);
	localStorage.setItem("users", USER);
	localStorage.setItem("ratings", RATING);
}

function loadStateFromStorage() {
	if (localStorage.length > 0) {
		const RECIPES = JSON.parse(localStorage.getItem("recipes"));
		const RATINGS = JSON.parse(localStorage.getItem("ratings"));
		const USERS = JSON.parse(localStorage.getItem("users"));
		const STATE = Object({
			recipes: RECIPES,
			ratings: RATINGS,
			users: USERS
		});
		replaceWholeState(STATE);
	} else {
		saveInitialStateToStorage();
	}
}
