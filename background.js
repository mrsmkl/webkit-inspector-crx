
chrome.browserAction.onClicked.addListener(function() {
    chrome.windows.getCurrent(function(win) {
        chrome.tabs.getSelected(win.id, actionClicked);
    });
});

function actionClicked(tab) {
    var id = tab.id;
    // Create new window with tab
    chrome.tabs.create({ 'url' : 'inspector.html?experiments=true&tab=' + id});
}

