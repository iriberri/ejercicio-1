function addOrEditStepInRecipe(recipe, newStep, existingStepIndex) {
	let recipeModify;
	if (existingStepIndex === undefined) {
		recipeModify = recipe.steps.push(newStep.trim());
	} else {
		recipeModify = recipe;
		recipeModify.steps[existingStepIndex] = newStep.trim();
	}
	return recipeModify;
}
