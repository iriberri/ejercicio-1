const { getState } = require("../../appState");

function getRecipesRatedByUser(idAuthor) {
	const RATINGS = getState().ratings;
	const RATINGS_BY_AUTHOR = RATINGS.filter(x => x.idAuthor === idAuthor);
	const RECIPES = getState().recipes;
	const ratedRecipes = [];
	let receta;
	for (let i = 0; i < RATINGS_BY_AUTHOR.length; i += 1) {
		receta = RECIPES.find(x => RATINGS_BY_AUTHOR[i].idRecipe === x.idRecipe);
		if (receta !== undefined) {
			ratedRecipes.push(receta);
		}
	}
	return ratedRecipes;
}

module.exports = getRecipesRatedByUser;
