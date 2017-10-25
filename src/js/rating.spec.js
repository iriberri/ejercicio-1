// Dependencias externas
const { expect } = require("chai");

// Dependencias del proyecto
const Rating = require("./rating");

let rating;
let ratingError;

describe("Rating", () => {
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
	describe("Excepciones", () => {
		ratingError = () => new Rating("Marco", 2, -5, null, undefined);
		it("Debería lanzar una excepción si se le pasa un atributo erróneo", () => {
			expect(ratingError).to.throw();
		});
	});
});
