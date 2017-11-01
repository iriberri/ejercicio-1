/**
 * Created by Fran on 29/10/2017.
 */
const { expect } = require("chai");

// Dependencias del proyecto
const Recipe = require("../../model/Recipe");
const Ingredient = require("../../model/Ingredient");
const { addRecipeToState } = require("../../appState");
const getRecipesByIngredient = require("./getRecipesByIngredient");


let dummyIngredients;
let dummyIngredients2;
let dummyIngredients3;
let dummySteps;
let dummyRecipe4;
let dummyRecipe5;
let dummyRecipe6;
let macarrone;
let nata;
let miel;
let sal;
let pinia;
let jamon;
let manzana;
/**
 * Pruebas de la funcion getRecipesByIngredient
 */
describe("getRecipesByIngredient", () => {
	before(() => {
		macarrone = { ingredient: new Ingredient(1, "macarrone"), quantity: "200 g" };
		nata = { ingredient: new Ingredient(2, "nata"), quantity: "10g" };
		miel = { ingredient: new Ingredient(3, "miel"), quantity: "20g" };
		sal = { ingredient: new Ingredient(4, "sal"), quantity: "30g" };
		pinia = { ingredient: new Ingredient(5, "piña"), quantity: "400g" };
		jamon = { ingredient: new Ingredient(6, "jamon"), quantity: "20 g" };
		manzana = { ingredient: new Ingredient(7, "manzana"), quantity: "300 g" };
		dummyIngredients = [
			macarrone,
			nata,
			miel,
			sal,
			pinia
		];
		dummyIngredients2 = [
			macarrone,
			nata,
			miel,
			sal,
			pinia
		];
		dummyIngredients3 = [
			jamon,
			nata,
			miel,
			sal,
			pinia
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
	describe("getRecipesByIngredient", () => {
		describe("Probamos que la funcion devuelve los valores correctos", () => {
			it("Deberia ser un array", () => {
				expect(getRecipesByIngredient(macarrone)).to.be.an("array");
			});
			it("Deberia devovler dos elementos", () => {
				expect(getRecipesByIngredient(macarrone)).to.have.length(2);
			});
			it("Los elementos del primer array de los dos que recibe son instanceof Recipe", () => {
				expect(getRecipesByIngredient(macarrone)[0]).to.be.instanceof(Recipe);
			});
			it("Los elementos del segundo array de los dos que recibe son instanceof Recipe", () => {
				expect(getRecipesByIngredient(macarrone)[1]).to.be.instanceof(Recipe);
			});
			it("Deberia devovler tres elementos", () => {
				expect(getRecipesByIngredient(nata)).to.have.length(3);
			});
			it("Deberia devovler cero elementos", () => {
				expect(getRecipesByIngredient(manzana)).to.have.length(0);
			});
		});
	});
});

