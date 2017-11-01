/**
 * Created by Fran on 29/10/2017.
 */
const { expect } = require("chai");

// Dependencias del proyecto
const Recipe = require("../../model/Recipe");
const Ingredient = require("../../model/Ingredient");
const { addRecipeToState } = require("../../appState");
const getRecipesByIngredients = require("./getRecipesByIngredient");


let dummyIngredients;
let dummyIngredients2;
let dummyIngredients3;
let dummySteps;
let dummyRecipe4;
let dummyRecipe5;
let dummyRecipe6;
/**
 * Pruebas de la funcion getRecipesByIngredients
 */
describe("getRecipesByIngredients", () => {
	before(() => {
		dummyIngredients = [
			{ ingredient: new Ingredient(1, "macarrone"), quantity: "20 g" },
			{ ingredient: new Ingredient(2, "nata"), quantity: "10g" },
			{ ingredient: new Ingredient(3, "miel"), quantity: "20g" },
			{ ingredient: new Ingredient(4, "sal"), quantity: "30g" },
			{ ingredient: new Ingredient(5, "piña"), quantity: "400g" }
		];
		dummyIngredients2 = [
			{ ingredient: new Ingredient(1, "macarrone"), quantity: "200 g" },
			{ ingredient: new Ingredient(2, "nata"), quantity: "10g" },
			{ ingredient: new Ingredient(3, "miel"), quantity: "20g" },
			{ ingredient: new Ingredient(4, "sal"), quantity: "30g" },
			{ ingredient: new Ingredient(5, "piña"), quantity: "400g" }
		];
		dummyIngredients3 = [
			{ ingredient: new Ingredient(1, "jamon"), quantity: "20 g" },
			{ ingredient: new Ingredient(2, "nata"), quantity: "10g" },
			{ ingredient: new Ingredient(3, "miel"), quantity: "20g" },
			{ ingredient: new Ingredient(4, "sal"), quantity: "30g" },
			{ ingredient: new Ingredient(5, "piña"), quantity: "400g" }
		];
		dummySteps = ["step", "b", "c", "d", "f", "g"];
		dummyRecipe4 = new Recipe(
			1,
			"Recipe1",
			dummyIngredients,
			dummySteps,
			"mexicana",
			"china",
			1
		);
		dummyRecipe5 = new Recipe(
			2,
			"Recipe2",
			dummyIngredients2,
			dummySteps,
			"mexicana",
			"china",
			2
		);
		dummyRecipe6 = new Recipe(
			1,
			"Recipe3",
			dummyIngredients3,
			dummySteps,
			"mexicana",
			"china",
			3
		);
		addRecipeToState(dummyRecipe4);
		addRecipeToState(dummyRecipe5);
		addRecipeToState(dummyRecipe6);
	});
	/**
	 * Probamos que los valores sean correctos.
	 */
	describe("getRecipesByIngredients", () => {
		describe("Probamos que la funcion devuelve los valores correctos", () => {
			it("Deberia ser un array", () => {
				expect(getRecipesByIngredients("macarrone")).to.be.an("array");
			});
			it("Deberia devovler dos elementos", () => {
				expect(getRecipesByIngredients("macarrone")).to.have.length(2);
			});
			it("Deberia devovler tres elementos", () => {
				expect(getRecipesByIngredients("nata")).to.have.length(3);
			});
			it("Deberia devovler cero elementos", () => {
				expect(getRecipesByIngredients("coche")).to.have.length(0);
			});
			it("No debe tener valores nulos", () => {
				expect(getRecipesByIngredients("macarrone")).to.not.include(null);
			});
		});
	});
});

