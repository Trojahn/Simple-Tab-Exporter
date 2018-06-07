browser.browserAction.onClicked.addListener(() => {
	browser.tabs.create({url: "/resultado.html"});
	browser.tabs.executeScript({file: "/resultado.js"});
});
