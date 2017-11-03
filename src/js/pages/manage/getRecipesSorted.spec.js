const { expect } = require("chai");
const {
	quickSort,
	mergeSorted,
	getRecipesSorted
} = require("./getRecipesSorted");
const {
	replaceWholeState,
	addRecipeToState,
	addRatingToState
} = require("../../appState");
const Recipe = require("../../model/Recipe");
const Rating = require("../../model/Rating");
const Ingredient = require("../../model/Ingredient");

describe("getRecipesSorted", () => {
	let recipeA;
	let recipeB;
	let ratingA;
	let ratingB;
	let ratingC;

	before(() => {
		replaceWholeState();

		const dummyIngredients = [
			{ ingredient: new Ingredient(1, "leche"), quantity: "200 g" },
			{ ingredient: new Ingredient(2, "yogu"), quantity: "10g" },
			{ ingredient: new Ingredient(3, "porvo"), quantity: "20g" },
			{ ingredient: new Ingredient(4, "asuca"), quantity: "30g" },
			{ ingredient: new Ingredient(5, "sumo naranja"), quantity: "400g" }
		];
		const dummySteps = ["a", "b", "c", "d", "f", "g"];

		recipeA = new Recipe(
			1,
			"Recipe A",
			dummyIngredients,
			dummySteps,
			"Postre",
			"España",
			1
		);

		recipeB = new Recipe(
			2,
			"Recipe B",
			dummyIngredients,
			dummySteps,
			"Postre",
			"España",
			1
		);

		ratingA = new Rating(
			1,
			"Rating A",
			10,
			1,
			1
		);

		ratingB = new Rating(
			2,
			"Rating B",
			9,
			1,
			2
		);

		ratingC = new Rating(
			2,
			"Rating C",
			6,
			2,
			1
		);

		addRecipeToState(recipeA);
		addRecipeToState(recipeB);

		addRatingToState(ratingA);
		addRatingToState(ratingB);
		addRatingToState(ratingC);
	});

	describe("función", () => {
		it("debería ordenar correctamente según la puntuación", () => {
			const test = (algo) => {
				const recipes = getRecipesSorted(algo);

				expect(recipes).to.be.an("Array");
				expect(recipes.length).to.equal(2);
				expect(recipes[0].name).to.equal("Recipe B");
				expect(recipes[1].name).to.equal("Recipe A");
			};

			test("quicksort");
			test("mergesort");
		});
	});

	describe("algoritmos", () => {
		const array = () => [1, 6, 98, 3, 7, 1, 2];
		const expected = [1, 1, 2, 3, 6, 7, 98];

		describe("quicksort", () => {
			it("debería ordenar un array correctamente", () => {
				const arr = array();
				quickSort(arr);
				expect(arr).to.deep.equal(expected);
			});
		});

		describe("mergrsort", () => {
			it("debería ordenar un array correctamente", () => {
				expect(mergeSorted(array())).to.deep.equal(expected);
			});
		});
	});

	after(() => {
		// Dejamos el estado como estaba por si lo necesita otro test
		replaceWholeState();
	});
});
