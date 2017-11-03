// Chai usa accesores para invocar funciones (...that.is.empty), por lo tanto
// esto no es compatible con la regla no-unused-expressions
/* eslint-disable no-unused-expressions */

const { expect } = require("chai");
const Ingredient = require("../../model/Ingredient");
const Recipe = require("../../model/Recipe");
const createRecipe = require("./createRecipe");
const { replaceWholeState } = require("../../appState");

describe("createRecipe", () => {
	let dummyIngredients;
	let dummySteps;

	before(() => {
		// Reseteamos el estado por si lo ha modificado algún test
		replaceWholeState();

		dummyIngredients = [
			{ ingredient: new Ingredient(1, "leche"), quantity: "200 g" },
			{ ingredient: new Ingredient(2, "yogu"), quantity: "10g" },
			{ ingredient: new Ingredient(3, "porvo"), quantity: "20g" },
			{ ingredient: new Ingredient(4, "asuca"), quantity: "30g" },
			{ ingredient: new Ingredient(5, "sumo naranja"), quantity: "400g" }];
		dummySteps = ["a", "b", "c", "d", "f", "g"];
	});

	it("debería crear una receta correctamente", () => {
		const result = createRecipe(
			"Mi receta",
			dummyIngredients,
			dummySteps,
			"Postre",
			"España",
			1
		);

		expect(result).to.be.an("object");
		// noinspection BadExpressionStatementJS
		expect(result.success).to.be.true;
		expect(result.recipe).to.be.instanceof(Recipe);
		expect(result.recipe.idRecipe).to.equal(1);
	});

	it("debería asignar IDs correctamente", () => {
		const result = createRecipe(
			"Mi receta",
			dummyIngredients,
			dummySteps,
			"Postre",
			"España",
			1
		);

		expect(result).to.be.an("object");
		// noinspection BadExpressionStatementJS
		expect(result.success).to.be.true;
		expect(result.recipe.idRecipe).to.equal(2);
	});

	it("debería devolver un error cuando los datos son inválidos", () => {
		const result = createRecipe(
			"Mi receta",
			[],
			[],
			"Postre",
			"España",
			1
		);

		expect(result).to.be.an("object");
		// noinspection BadExpressionStatementJS
		expect(result.success).to.be.false;
		expect(result.error.message).to.equal("Datos insuficientes");
	});

	after(() => {
		// Dejamos el estado como estaba por si lo necesita otro test
		replaceWholeState();
	});
});
