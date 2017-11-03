const getRecipesByNameOrSteps = require("../pages/search/getRecipesByNameOrSteps");
const getRecipesByIngredient = require("../pages/search/getRecipesByIngredient");
const recipeToDiv = require("../support/recipeToDiv");

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

function loadSearchByIngredient() {
	const button = qs("#search-by-ingredient-button");
	const input = qs("#search-by-ingredient-input");
	button.addEventListener("click", () => {
		const searchText = input.value;
		const results = getRecipesByIngredient(searchText);
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
		resultsDiv.style.display = "block";
	});
}

function loadSearchController() {
	loadSearchByNameOrSteps();
	loadSearchByIngredient();
}

module.exports = loadSearchController;
