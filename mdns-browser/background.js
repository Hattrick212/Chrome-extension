chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('main.html', {
    id: 'mainWindow',
    frame: 'none',
    bounds: {
      width: 440,
      height: 440,
    },
    minWidth: 440,
    minHeight: 200,
  });
});
