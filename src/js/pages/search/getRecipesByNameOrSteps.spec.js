const { expect } = require("chai");

// Dependencias del proyecto
const Recipe = require("../../recipe");
const Ingredient = require("../../ingredient");
const { addRecipeToState } = require("../../appState");
const getRecipesByNameOrSteps = require("./getRecipesByNameOrSteps");


let dummyIngredients;
let dummySteps;
let dummySteps2;
let dummyRecipe1;
let dummyRecipe2;

describe("getRecipesByNameOrSteps: ", () => {
	before(() => {
		dummyIngredients = [
			{ ingredient: new Ingredient(1, "leche"), quantity: "200 g" },
			{ ingredient: new Ingredient(2, "yogu"), quantity: "10g" },
			{ ingredient: new Ingredient(3, "porvo"), quantity: "20g" },
			{ ingredient: new Ingredient(4, "asuca"), quantity: "30g" },
			{ ingredient: new Ingredient(5, "sumo naranja"), quantity: "400g" }];
		dummySteps = ["a", "b", "c", "d", "f", "g"];
		dummySteps2 = ["yogu", "b", "c", "d", "f", "g"];
		dummyRecipe1 = new Recipe(
			1,
			"yogu",
			dummyIngredients,
			dummySteps,
			"mexicana",
			"china",
			1
		);
		dummyRecipe2 = new Recipe(
			1,
			"poderosa",
			dummyIngredients,
			dummySteps2,
			"mexicana",
			"china",
			1
		);
		addRecipeToState(dummyRecipe1);
		addRecipeToState(dummyRecipe2);
	});
	describe("Probamos que nos devuelven los valores correctos", () => {
		it("Debería devolvernos dos elementos", () => {
			expect(getRecipesByNameOrSteps("yogu")).to.have.length(2);
		});
	});
});
