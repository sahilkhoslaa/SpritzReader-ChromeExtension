var contextMenuItem = {
	"id" : "Spritz",
	"title" : "Spritz Clone",
	"contexts" : ["all"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(){
	alert("Please click on Spritz clone Extension on top right corner");
});