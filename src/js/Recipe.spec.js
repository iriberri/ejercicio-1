// Dependencias externas
const { expect } = require("chai");

// Dependencias del proyecto
const sumar = require("./prueba");

describe("El archivo prueba.js", () => {
	it("debería sumar números correctamente", () => {
		expect(sumar(1, 2)).to.equal(3);
	});
});