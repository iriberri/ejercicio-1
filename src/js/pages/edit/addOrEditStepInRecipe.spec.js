const { expect } = require("chai");
const Ingredient = require("../../model/Ingredient");
const Recipe = require("../../model/Recipe");
const addOrEditStepInRecipe = require("./addOrEditStepInRecipe");
let dummyIngredients;
let dummySteps;
let dummyRecipe;
describe("addOrEditStepInRecipe", () => {
	before(() => {
		dummyIngredients = [
			{ ingredient: new Ingredient(1, "leche"), quantity: "200 g" },
			{ ingredient: new Ingredient(2, "yogu"), quantity: "10g" },
			{ ingredient: new Ingredient(3, "porvo"), quantity: "20g" },
			{ ingredient: new Ingredient(4, "asuca"), quantity: "30g" },
			{ ingredient: new Ingredient(5, "sumo naranja"), quantity: "400g" }];
		dummySteps = ["a", "b", "c", "d", "f", "g"];
		dummyRecipe = new Recipe(
			1,
			"poderosa",
			dummyIngredients,
			dummySteps,
			"mexicana",
			"china",
			1
		);
		it("Debeía devolvernos una receta", () => {
			expect(addOrEditStepInRecipe(dummyRecipe, "hola").to.be.an(Recipe));
		});
		it("Debeía devolvernos una receta con 7 pasos", () => {
			expect(addOrEditStepInRecipe(dummyRecipe, "hola").to.includes("steps").that.have.length(7));
		});
		it("Debeía devolvernos una receta con 6 pasos en la cual el 3 sea \"hola\"", () => {
			expect(addOrEditStepInRecipe(dummyRecipe, "hola", 3).to.includes("steps").that.dummyRecipe.steps[3].to.be.equals("hola"));
		});
	});
});
