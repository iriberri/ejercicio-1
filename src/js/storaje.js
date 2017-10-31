const { getState } = require("./appState");

function saveStateToStorage(){
	const recipeJSON = JSON.stringify(getState().recipes);
	localStorage.setItem("Recetas", recipeJSON);
}
