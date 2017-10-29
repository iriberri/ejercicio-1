// Dependencias del proyecto
const { getState } = require("../../appState");


function getRecipesByNameOrSteps(nameOrStep) {
	const recetas = getState().recipes;
	return recetas.filter(x => x.name.includes(nameOrStep) || // Sigue en la siguiente línea
		x.steps.some(i => i.includes(nameOrStep)));
}

module.export = getRecipesByNameOrSteps;
