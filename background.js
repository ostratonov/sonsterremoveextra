'use strict'

const defaultPreferences = {
  removePremiumModal: true,
}

chrome.runtime.onInstalled.addListener(async () => {
  await chrome.storage.sync.clear()
  await chrome.storage.sync.set({defaultPreferences})
});