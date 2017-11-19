const Recipe = require("../../model/Recipe");

/**
 *  La funcion debe de devolvernos una receta con un ingrediente más o
    con un ingrediente actualizado en el caso de que el index pasado por parámetro exista.
 * @param recipe
 * @param newIngredient
 * @param existingIngredientIndex
 * @returns {Recipe}
 */
function addOrEditIngredientInRecipe(recipe, newIngredient, existingIngredientIndex) {
	const tipoDatoInvalido = "Tipo de dato invalido";
	const newRecipe = new Recipe(
		recipe.idRecipe,
		recipe.name,
		[...recipe.ingredients],
		[...recipe.steps],
		recipe.typeOfFood,
		recipe.origin,
		recipe.idAuthor
	);
	/**
	 * Comprobamos que lo que pasamos por parámetro sea un String
	 */
	if (typeof newIngredient !== typeof "") {
		throw new Error(tipoDatoInvalido);
	}
	/**
	 * Comprobamos que el index pasado por parámetro sea un número o indefinido
	 */
	if (typeof existingIngredientIndex !== typeof 1 && existingIngredientIndex !== undefined) {
		throw new Error(tipoDatoInvalido);
	}
	/**
	 * Si el index es indefinido o es mayor o igual que el numero de ingredientes,
	   lo añadimos a la receta como un ingrediente más.
	 */
	if (existingIngredientIndex === undefined || existingIngredientIndex >
		newRecipe.ingredients.length) {
		newRecipe.ingredients.push(newIngredient);
	} else {
		/**
		 * Si el index existe, actualizamos el ingrediente que corresponda a la posición indicada
		 */
		newRecipe.ingredients[existingIngredientIndex] = newIngredient;
	}
	/**
	 * Devolvemos la receta actualizada.
	 */
	return newRecipe;
}
module.exports = addOrEditIngredientInRecipe;
