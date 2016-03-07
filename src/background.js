chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.executeScript(tab.id, {
    'file': 'content.js'
  }, function () {
    console.log('Script Executed...');
  });
});
