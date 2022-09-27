(() => {
  const currentType = "removeModal"

  const tryRemoveModal = () => {
    return false
  }

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const { type } = message
    if (type === currentType) {
      const success = tryRemoveModal()
      sendResponse(success)
    }
  })
})();