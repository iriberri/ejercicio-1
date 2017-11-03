const loadSearchController = require("./controller/search");
const { loadStateFromStorage } = require("./storage");

window.addEventListener("load", () => {
	loadSearchController();
	loadStateFromStorage();
});
