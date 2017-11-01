function addOrEditStepInRecipe(recipe, newStep, existingStepIndex) {
	const newRecipe = recipe;
	if (existingStepIndex === undefined) {
		newRecipe.steps.push(newStep);
	} else {
		newRecipe.steps[existingStepIndex] = newStep;
	}
	return newRecipe;
}

module.exports = addOrEditStepInRecipe;
