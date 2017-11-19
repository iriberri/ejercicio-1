const { expect } = require("chai");
const Ingredient = require("../../model/Ingredient");
const Recipe = require("../../model/Recipe");
const addOrEditIngredientInRecipe = require("./addOrEdditIngredientInRecipe");

let ingredients;
let steps;
let recipe;
describe("addOrEditIngredientInRecipe", () => {
	before(() => {
		ingredients = [
			{ ingredient: new Ingredient(1, "leche"), quantity: "200 g" },
			{ ingredient: new Ingredient(2, "yogu"), quantity: "10g" },
			{ ingredient: new Ingredient(3, "porvo"), quantity: "20g" },
			{ ingredient: new Ingredient(4, "asuca"), quantity: "30g" },
			{ ingredient: new Ingredient(5, "sumo naranja"), quantity: "400g" }];
		steps = ["a", "b", "c", "d", "f", "g"];
		recipe = new Recipe(
			1,
			"poderosa",
			ingredients,
			steps,
			"mexicana",
			"china",
			1
		);
	});
	it("Debería devolvernos una receta", () => {
		expect(addOrEditIngredientInRecipe(recipe, "hola")).to.be.an.instanceof(Recipe);
	});
	it("Debería devolvernos una receta con 6 ingredientes", () => {
		expect(addOrEditIngredientInRecipe(recipe, "hola").ingredients).that.have.length(6);
	});
	it("Debería devolvernos una receta con 5 ingredientes en la cual el 4 sea \"asuca\"", () => {
		expect(addOrEditIngredientInRecipe(recipe, "asuca", 3).ingredients[3]).to.equal("asuca");
	});
});
