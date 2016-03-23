let isRunning = false;

chrome.browserAction.onClicked.addListener(tab => {
  if (isRunning) return;

  chrome.tabs.executeScript(tab.id, {
    'file': 'content.js'
  }, () => {
    isRunning = true;
  });
});
