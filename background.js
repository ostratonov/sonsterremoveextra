'use strict'

const defaultPreferences = {
  removePremiumModal: true,
  slowDownPlayer: false,
}

chrome.runtime.onInstalled.addListener(async () => {
  await chrome.storage.sync.clear()
  await chrome.storage.sync.set({...defaultPreferences})
});
