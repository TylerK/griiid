let isRunning = false;

if (!isRunning) {
  chrome.browserAction.onClicked.addListener(tab => {
    chrome.tabs.executeScript(tab.id, {
      'file': 'content.js'
    }, () => {
      alert('wtf');
      isRunning = true;
    });
  });
}
