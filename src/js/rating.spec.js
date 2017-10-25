// Dependencias externas
const { expect } = require("chai");

// Dependencias del proyecto
const Rating = require("./rating");

let rating;
/**
 * Test de la clase Rating
 */
describe("Rating", () => {
	/**
	 * Test de los atributos de la clase Rating
	 */
	describe("idRating, name, score, idAuthor, idRecipe", () => {
		before(() => { rating = new Rating(1, "Marco", 5, 3, 75); });
		it("idRating debería funcionar correctamente", () => {
			expect(rating.idRating).to.equal(1);
		});
		it("name debería funcionar correctamente", () => {
			expect(rating.name).to.equal("Marco");
		});
		it("score debería funcionar correctamente", () => {
			expect(rating.score).to.equal(5);
		});
		it("idAuthor debería funcionar correctamente", () => {
			expect(rating.idAuthor).to.equal(3);
		});
		it("idRecipe debería funcionar correctamente", () => {
			expect(rating.idRecipe).to.equal(75);
		});
	});
	/**
	 * Test con las excepciones
	 */
	describe("Excepciones", () => {
		it("Debería lanzar una excepción si se le pasa un idRating erróneo", () => {
			const idRatingError = () => new Rating("1", "Marco", 5, 3, 75);
			expect(idRatingError).to.throw();
		});
		it("Debería lanzar una excepción si se le pasa un idRating erróneo", () => {
			const idRating2Error = () => new Rating(-1, "Marco", 5, 3, 75);
			expect(idRating2Error).to.throw();
		});
		it("Debería lanzar una excepción si se le pasa un name erróneo", () => {
			const idNameError = () => new Rating(1, 50, 5, 3, 75);
			expect(idNameError).to.throw();
		});
		it("Debería lanzar una excepción si se le pasa un name erróneo", () => {
			const idName2Error = () => new Rating(1, "", 5, 3, 75);
			expect(idName2Error).to.throw();
		});
		it("Debería lanzar una excepción si se le pasa un score erróneo", () => {
			const scoreError = () => new Rating(10, "Marco", -5, 3, 75);
			expect(scoreError).to.throw();
		});
		it("Debería lanzar una excepción si se le pasa un score erróneo", () => {
			const score2Error = () => new Rating(10, "Marco", "Hola", 3, 75);
			expect(score2Error).to.throw();
		});
		it("Debería lanzar una excepción si se le pasa un idAuthor erróneo", () => {
			const idAuthorError = () => new Rating(1, "Marco", 5, "Hola", 75);
			expect(idAuthorError).to.throw();
		});
		it("Debería lanzar una excepción si se le pasa un idAuthor erróneo", () => {
			const idAuthor2Error = () => new Rating(1, "Marco", 5, -3, 75);
			expect(idAuthor2Error).to.throw();
		});
		it("Debería lanzar una excepción si se le pasa un idRecipe erróneo", () => {
			const idRecipeError = () => new Rating(1, "Marco", 5, 3, -75);
			expect(idRecipeError).to.throw();
		});
		it("Debería lanzar una excepción si se le pasa un idRecipe erróneo", () => {
			const idRecipe2Error = () => new Rating(1, "Marco", 5, 3, "Hola");
			expect(idRecipe2Error).to.throw();
		});
		it("Debería lanzar una excepción si se le pasa un atributo undefined", () => {
			const undefinedError = () => new Rating(
				undefined, undefined, undefined,
				undefined, undefined
			);
			expect(undefinedError).to.throw();
		});
		it("Debería lanzar una excepción si se le pasa un atributo null", () => {
			const nullError = () => new Rating(null, null, null, null, null);
			expect(nullError).to.throw();
		});
	});
});
