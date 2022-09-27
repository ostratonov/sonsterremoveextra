'use strict'

const removePremiumModal = document.getElementById('remove-modal')
const slowDownPlayer = document.getElementById('slow-down-player')

const settingsIdMap = {
  'slow-down-player': 'slowDownPlayer',
  'remove-modal': 'removePremiumModal',
}

const handleSettingValueChange = async (options) => {
  const targetId = options.target.id
  const settingId = settingsIdMap[targetId]

  await chrome.storage.sync.set({[settingId]: Boolean(options.target.value)})
}

removePremiumModal.addEventListener('change', handleSettingValueChange)
slowDownPlayer.addEventListener('change', handleSettingValueChange)




