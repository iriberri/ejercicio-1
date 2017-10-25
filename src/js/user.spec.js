/**
 * Created by Vikin on 23/10/2017.
 */
const { expect } = require("chai");

const User = require("./user");

const user = new User(1, "   Fran    Molina    ");
const createInvalidUserId = () => new User("asd", "Fran");
const createInvalidUserId2 = () => new User(-1, "Fran");
const createInvalidUserName = () => new User(1, "");
const createInvalidUserName2 = () => new User(1, 2);
const createUndefinedUser = () => new User(undefined, undefined);
const createNullUser = () => new User(null, null);

/**
 * Test de la clase User.
 */
describe("User", () => {
	/**
	 * Test de atributos.
	 */
	describe("Atributos", () => {
		it("user.id deberia devolver 1", () => {
			expect(user.id).to.equal(1);
		});
		/**
		 * Comprueba que al recibir una cadena con espacios de sobra los elimina
		 */
		it("user.nombre deberia devolver Fran Molina", () => {
			expect(user.nombre).to.equal("Fran Molina");
		});
	});
	/**
	 * Test de excepciones.
	 */
	describe("Excepciones", () => {
		it("createInvalidUserId deberia devolver una excepcion", () => {
			expect(createInvalidUserId).to.throw();
		});
		it("createInvalidUserId2 deberia devolver una excepcion", () => {
			expect(createInvalidUserId2).to.throw();
		});
		it("createInvalidUserName deberia devolver una excepcion", () => {
			expect(createInvalidUserName).to.throw();
		});
		it("createInvalidUserName2 deberia devolver una excepcion", () => {
			expect(createInvalidUserName2).to.throw();
		});
		it("createUndefinedUser deberia devolver una excepcion", () => {
			expect(createUndefinedUser).to.throw();
		});
		it("createNullUser deberia devolver una excepcion", () => {
			expect(createNullUser).to.throw();
		});
	});
});

