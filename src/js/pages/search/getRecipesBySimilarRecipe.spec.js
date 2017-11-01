/* eslint-disable no-unused-vars */
const { expect } = require("chai");


// Dependencias externas
const Recipe = require("../../model/Recipe");
const Ingredient = require("../../model/Ingredient");
const gestRecipesBySimilarRecipe = require("./getRecipesBySimilarRecipe");
const { addRecipeToState } = require("../../appState");


let ingredients;
let steps;


describe("getRecipesBySimilarRecipe", () => {
	/**
	 * Test Atributos
	 */
	before(() => {
		ingredients = [
			{ ingredient: new Ingredient(1, "pan") },
			{ ingredient: new Ingredient(2, "ajo") },
			{ ingredient: new Ingredient(3, "cebolla") }

		];

		steps = ["ajo", "2", "3", "4", "5"];

		const recipe1 = new Recipe(1, "panConAjo", ingredients, steps, "mexicana", "Mexico", 1);
		const recipe2 = new Recipe(2, "panConCebolla", ingredients, steps, "china", "China", 2);
		const recipe3 = new Recipe(2, "panconCebolla", ingredients, steps, "china", "China", 2)
		addRecipeToState(recipe1);
		addRecipeToState(recipe2);
		addRecipeToState(recipe3);
	});
});

describe("Exceptions", () =>{
	/**
	 * Test Excepciones
	 */
	it
};

