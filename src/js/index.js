const loadSearchController = require("./controller/search");
const loadEditControler = require("./controller/edit");
const { loadStateFromStorage } = require("./storage");

window.addEventListener("load", () => {
	loadSearchController();
	loadEditControler();
	loadStateFromStorage();
});
