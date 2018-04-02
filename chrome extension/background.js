function mycallback(info, tab) {
    chrome.tabs.sendMessage(tab.id, "getClickedEl", function(clickedEl) {
        elt.value = clickedEl.value;
    });
}