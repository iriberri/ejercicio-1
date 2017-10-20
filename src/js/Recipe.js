
class Recipe {
	constructor(idRecipe, ingredients, steps, typeOfFood, origin, idAuthor) {
		let tipoDatoInvalido = "El tipo de datos es inválido";
		try{
			if (typeof idRecipe != "number"){
				throw tipoDatoInvalido;
			}else {
				this.idRecipe = idRecipe;
			}
			//@TODO controlar valor dentro de los arrays
			if (ingredients instanceof Array){
				throw tipoDatoInvalido;
			}else {
				this.idRecipe = idRecipe;
			}
			if (steps instanceof Array){
				throw tipoDatoInvalido;
			}else {
				this.steps = steps;
			}
			if (typeof typeOfFood != String){
				throw tipoDatoInvalido;
			}else {
				this.typeOfFood = typeOfFood;
			}
			if (typeof origin != String){
				throw tipoDatoInvalido;
			}else {
				this.origin = origin;
			}
			if (typeof idAuthor != "number"){
				throw tipoDatoInvalido;
			}else {
				this.idAuthor = idAuthor;
			}
		}catch {

		}
		this.ingredients = ingredients;
	}
}