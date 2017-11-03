/* eslint-disable linebreak-style */
const { expect } = require("chai");

// Dependencias del proyecto
const Recipe = require("../../model/Recipe");
const Ingredient = require("../../model/Ingredient");
const { addRecipeToState } = require("../../appState");
const getRecipesByNameOrSteps = require("./getRecipesByNameOrSteps");


let dummyIngredients;
let dummySteps;
let dummySteps2;
let dummyRecipe1;
let dummyRecipe2;


/**
 * Pruebas de la funcion getRecipesByNameOrSteps.
 */
describe("getRecipesByNameOrSteps: ", () => {
	before(() => {
		dummyIngredients = [
			{ ingredient: new Ingredient(1, "leche"), quantity: "200 g" },
			{ ingredient: new Ingredient(2, "yogu"), quantity: "10g" },
			{ ingredient: new Ingredient(3, "porvo"), quantity: "20g" },
			{ ingredient: new Ingredient(4, "asuca"), quantity: "30g" },
			{ ingredient: new Ingredient(5, "sumo naranja"), quantity: "400g" }];
		dummySteps = ["foo", "b", "c", "d", "f", "g"];
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
			"yogu",
			dummyIngredients,
			dummySteps2,
			"mexicana",
			"china",
			1
		);
		addRecipeToState(dummyRecipe1);
		addRecipeToState(dummyRecipe2);
	});
	/**
	 * Probamos que los valores sean correctos.
	 */
	describe("Probamos que nos devuelven los valores correctos", () => {
		it("Debería devolvernos dos elementos", () => {
			expect(getRecipesByNameOrSteps("yogu")).to.have.length(2);
		});
		it("Debería devolvernos 1 elemento", () => {
			expect(getRecipesByNameOrSteps("foo")).to.have.length(1);
		});
		it("No debería de devolvernos nada", () => {
			expect(getRecipesByNameOrSteps("asdasd")).to.have.length(0);
		});
		it("Debería ser un array", () => {
			expect(getRecipesByNameOrSteps("yogu")).to.be.an("array");
		});
		it("No tiene valores nulos", () => {
			expect(getRecipesByNameOrSteps("yogu")).to.not.include(null);
		});
	});
});
