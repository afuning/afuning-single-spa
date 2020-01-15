import * as singleSpa from 'single-spa'
const System = window.System
export function hashPrefix (prefix) {
  if (!prefix) {
    return () => {
      console.log('载入主站框架')
      return true
    }
  }
  return function (location) {
    return location.pathname.startsWith(`${prefix}`)
  }
}

export async function loadApp (name, hash, appURL, storeURL) {
  let storeModule = {}

  try {
    storeModule = storeURL ? await System.import(storeURL) : null
    storeModule = storeModule ? storeModule.default : null
  } catch (e) {
    console.log('无法加载mainStore.', e)
  }

  singleSpa.registerApplication(
    name,
    () => System.import(appURL),
    hashPrefix(hash),
    {
      mainStore: storeModule
    }
  )
}
