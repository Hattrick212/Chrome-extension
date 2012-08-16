/**
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 **/

chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('main.html', {
    width: 1270,
    height: 800
  });
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.set({});
});
