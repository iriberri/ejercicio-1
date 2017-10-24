const { expect } = require("chai");

const Rating = require("./rating");
// Parámetros que debe recibir: idRating, name, score, idAuthor, idRecipe
const rating = new Rating(1, "Marco", 7, 4, 3);
// const rating2 = new Rating(null, "Marco", 7, 4, 3);
// const rating3 = new Rating(1, 8, 7, 4, 3);


describe("rating.idRating", () => {
	it("deberia devolver 1", () => {
		expect(rating.idRating).to.equal(1);
	});
});

describe("rating.name", () => {
	it("deberia devolver Marco", () => {
		expect(rating.name).to.equal("Marco");
	});
});

describe("rating.score", () => {
	it("deberia devolver 7", () => {
		expect(rating.score).to.equal(7);
	});
});

describe("rating.idAuthor", () => {
	it("deberia devolver 4", () => {
		expect(rating.idAuthor).to.equal(4);
	});
});

describe("rating.idRecipe", () => {
	it("deberia devolver 3", () => {
		expect(rating.idRecipe).to.equal(3);
	});
});
/*
describe("rating2.idRating", () => {
	it("deberia lanzar una excepción por ser de un tipo distinto", () => {
		expect(rating2.idRating).to.equal(1);
	});
});

describe("rating3.name", () => {
	it("deberia lanzar una excepción por ser de un tipo distinto", () => {
		expect(rating3.name).to.equal("Marco");
	});
});
*/

describe("rating2", () => {
	it("deberia devolver una excepcion");
});
