# Hello World

This is the most basic application that one can create. It requires the experimental permissions because it makes use of the `chrome.experimental.app.onLaunched` event to create the application's window:

```javascript
// Main.js
chrome.experimental.app.onLaunched.addListener(function() {
  	chrome.app.window.create('index.html',
    	{width: 500, height: 309});
});
```

## Permissions

* Experimental

## APIs

* [Experimental App](http://developer.chrome.com/trunk/apps/experimental.app.html)
* [Window](http://developer.chrome.com/trunk/apps/app.window.html)

---
Last updated: 2012-07-31 by paullewis
