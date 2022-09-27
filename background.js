'use strict'

const defaultPreferences = {
  removePremiumModal: true,
  slowDownPlayer: false,
}

chrome.runtime.onInstalled.addListener(async () => {
  await chrome.storage.sync.clear()
  await chrome.storage.sync.set({...defaultPreferences})
});


chrome.tabs.onUpdated.addListener(async (tabId, tab) => {
    if (tab.url && tab.url.includes('songsterr')) {
      chrome.storage.sync.get(['removePremiumModal'], async ({removePremiumModal}) => {
        if (!removePremiumModal) return

        chrome.tabs.sendMessage(tabId, {type: "removeModal"}, () => chrome.runtime.lastError);
      })
    }
  }
)
