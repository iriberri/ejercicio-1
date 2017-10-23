/**
 * Created by Vikin on 23/10/2017.
 */
const { expect } = require("chai");

const User = require("./user");

const user = new User(1, "Fran");

// const user2 = new User("asd", 4);
// const user3 = new User(1, "");

describe("user.id", () => {
	it("deberia devolver 1", () => {
		expect(user.id).to.equal(1);
	});
});

describe("user.nombre", () => {
	it("deberia devolver Fran", () => {
		expect(user.nombre).to.equal("Fran");
	});
});

describe("user2", () => {
	it("deberia devolver una excepcion");
});

describe("user3,", () => {
	it("deberia devolver una excepcion");
});
