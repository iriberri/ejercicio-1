const loadSearchController = require("./controller/search");
const Ingredient = require("./model/Ingredient");
const Recipe = require("./model/Recipe");
const { addRecipeToState } = require("./appState");
const { loadStateFromStorage } = require("./storaje");

window.addEventListener("load", () => {
	loadSearchController();
	loadStateFromStorage();

	const recipe = new Recipe(
		1,
		"Macarrones a la boloñesa",
		[
			{
				ingredient: new Ingredient(1, "Macarrones"),
				quantity: "200 g"
			},
			{
				ingredient: new Ingredient(2, "Boloñesa"),
				quantity: "10 g"
			},
			{
				ingredient: new Ingredient(3, "Mucho amor"),
				quantity: "1000 g"
			},
		],
		[
			"Cogemos los macarrones",
			"Les echamos boloñesa",
			"Sírvase en un plato hondo",
			"Y pongo esto porque...",
			"...Jorge quiere que pongamos 5 pasos",
		],
		"Primer plato",
		"Italia",
		1
	);
	const recipe2 = new Recipe(
		2,
		"Macarrones a la boloñesa",
		[
			{
				ingredient: new Ingredient(1, "Macarrones"),
				quantity: "200 g"
			},
			{
				ingredient: new Ingredient(2, "Boloñesa"),
				quantity: "10 g"
			},
			{
				ingredient: new Ingredient(3, "Mucho amor"),
				quantity: "1000 g"
			},
		],
		[
			"Cogemos los macarrones",
			"Les echamos boloñesa",
			"Sírvase en un plato hondo",
			"Y pongo esto porque...",
			"...Jorge quiere que pongamos 5 pasos",
		],
		"Primer plato",
		"Italia",
		1
	);
	addRecipeToState(recipe);
	addRecipeToState(recipe2);
});
