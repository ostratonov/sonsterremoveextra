'use strict'

const removePremiumModalEl = document.getElementById('remove-modal')
const slowDownPlayerEl = document.getElementById('slow-down-player')

const settingsIdMap = {
  'slow-down-player': 'slowDownPlayer',
  'remove-modal': 'removePremiumModal',
}

const handleSettingValueChange = async (options) => {
  const targetId = options.target.id
  const settingId = settingsIdMap[targetId]

  await chrome.storage.sync.set({[settingId]: options.target.checked})
}


window.addEventListener('load', async () => {
  await chrome.storage.sync.get(null, ({removePremiumModal, slowDownPlayer}) => {
    removePremiumModal && (removePremiumModalEl.checked = true)
    slowDownPlayer && (slowDownPlayerEl.checked = true)
  })
})

removePremiumModalEl.addEventListener('change', handleSettingValueChange)
slowDownPlayerEl.addEventListener('change', handleSettingValueChange)




