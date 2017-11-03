const { getState } = require("../../appState");

/* eslint-disable no-plusplus, no-param-reassign */
function quickSort(
	array,
	left = 0,
	right = array.length - 1
) {
	function partition(i, j) {
		const pivot = array[Math.floor((i + j) / 2)];

		while (i <= j) {
			while (array[i] < pivot) { i++; }
			while (array[j] > pivot) { j--; }

			if (i <= j) {
				[array[i], array[j]] = [array[j], array[i]];
				i++;
				j--;
			}
		}

		return i;
	}

	if (array.length > 1) {
		const i = partition(left, right);

		if (left < i - 1) {
			quickSort(array, left, i - 1);
		}

		if (i < right) {
			quickSort(array, i, right);
		}
	}
}

function mergeSorted(array) {
	function merge(left, right) {
		const result = [];
		let i = 0;
		let j = 0;

		while (i < left.length && j < right.length) {
			const a = left[i];
			const b = right[j];

			result.push(Math.min(a, b));

			if (a < b) {
				i++;
			} else {
				j++;
			}
		}

		return [...result, ...left.slice(i), ...right.slice(j)];
	}

	if (array.length > 1) {
		const pivot = Math.floor(array.length / 2);
		const left = array.slice(0, pivot);
		const right = array.slice(pivot);

		return merge(mergeSorted(left), mergeSorted(right));
	}

	return array;
}
/* eslint-enable no-plusplus, no-param-reassign */

function getRecipesSorted(algorithm) {
	const arrayAverage = array => array
		.reduce((el, acc) => el + acc, 0) / array;

	const getRecipeRatings = recipe => getState()
		.ratings
		.filter(it => it.idRecipe === recipe.idRecipe);

	const recipes = getState()
		.recipes
		.map(it => ({
			recipe: it,
			averageScore: arrayAverage(getRecipeRatings(it).map(r => r.score))
		}));

	const scores = recipes.map(it => it.averageScore);
	let sortedScores = [...scores];

	switch (algorithm.toLowerCase()) {
	case "quicksort":
		quickSort(sortedScores);
		break;
	case "mergesort":
		sortedScores = mergeSorted(sortedScores);
		break;
	default:
		throw new Error("Algoritmo inválido");
	}

	const sortedRecipes = [];

	// eslint-disable-next-line no-restricted-syntax
	for (const score of sortedScores) {
		const index = scores.indexOf(score);
		// Esto es un null pointer. Desisto. Así se queda.
		const { recipe } = recipes[index];

		recipes.splice(index, 1);
		scores.splice(index, 1);
		sortedRecipes.push(recipe);
	}

	return sortedRecipes;
}

module.exports = {
	quickSort,
	getRecipesSorted,
	mergeSorted
};
