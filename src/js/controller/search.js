const getRecipesByNameOrSteps = require("../pages/search/getRecipesByNameOrSteps");
const getRecipesBySimilarRecipe = require("../pages/search/getRecipesBySimilarRecipe");
const recipeToDiv = require("../support/recipeToDiv");
const { getState } = require("../appState");

const qs = document.querySelector.bind(document);

const resultsDiv = qs("#search-result");
const resultsOutput = qs("#search-result > #output");

function loadSearchByNameOrSteps() {
	const button = qs("#search-by-name-or-steps-button");
	const input = qs("#search-by-name-or-steps-input");

	button.addEventListener("click", () => {
		const searchText = input.value;
		const results = getRecipesByNameOrSteps(searchText);

		// Borrar los resultados de una búsqueda anterior
		while (resultsOutput.firstChild) {
			resultsOutput.removeChild(resultsOutput.firstChild);
		}

		if (results.length === 0) {
			const p = document.createElement("p");
			p.textContent = "No se han encontrado recetas";

			resultsOutput.appendChild(p);
		} else {
			results
				.map(recipeToDiv)
				.forEach(it => resultsOutput.appendChild(it));
		}

		// Mostrar los resultados
		resultsDiv.style.display = "block";
	});
}
function loadSearchBySimilarRecipe() {
	const button = qs("#search-by-similar-recipe-button");
	const input = qs("#search-by-similar-recipe-id-input");
	button.addEventListener("click", () => {
		const searchText = input.value;
		const recetas = getState().recipes;
		const recipe = [];
		for (let i = 0; i < recetas.length; i += 1) {
			for (let j = 0; j < recetas[i].idRecipe; j += 1) {
				if (recetas[i].idRecipe === searchText) {
					recipe.push(recetas[i]);
				}
			}
		}
		const results = getRecipesBySimilarRecipe(recipe);

		// Borrar los resultados de una búsqueda anterior
		while (resultsOutput.firstChild) {
			resultsOutput.removeChild(resultsOutput.firstChild);
		}

		if (results.length === 0) {
			const p = document.createElement("p");
			p.textContent = "No se han encontrado recetas";

			resultsOutput.appendChild(p);
		} else {
			results
				.map(recipeToDiv)
				.forEach(it => resultsOutput.appendChild(it));
		}

		// Mostrar los resultados
		resultsDiv.style.display = "block";
	});
}

function loadSearchController() {
	loadSearchByNameOrSteps();
	loadSearchBySimilarRecipe();
}

module.exports = loadSearchController;
