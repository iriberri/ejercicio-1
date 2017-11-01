function addOrEditStepInRecipe(recipe, newStep, existingStepIndex) {
	const tipoDatoInvalido = "Tipo de dato invalido";
	if (typeof newStep !== typeof "") {
		throw new Error(tipoDatoInvalido);
	}
	if (typeof existingStepIndex !== typeof 1 || existingStepIndex !== undefined) {
		throw new Error(tipoDatoInvalido);
	}
	const newRecipe = recipe;
	if (existingStepIndex === undefined) {
		newRecipe.steps.push(newStep);
	} else {
		newRecipe.steps[existingStepIndex] = newStep;
	}
	return newRecipe;
}

module.exports = addOrEditStepInRecipe;
