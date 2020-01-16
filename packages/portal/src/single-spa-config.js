import * as singleSpa from 'single-spa'
import { loadApp } from './helper'

async function register () {
  const loadList = []
  loadList.push(
    loadApp(
      'single-layout',
      '/layout',
      `${_URL_}:7001/singleSpaEntry.js`,
      ''
    )
  )
  loadList.push(
    loadApp(
      'single-system',
      '/layout/system',
      `${_URL_}:7003/singleSpaEntry.js`,
      ''
    )
  )
  loadList.push(
    loadApp(
      'single-heatmap',
      '/heatmap',
      `${_URL_}:7004/singleSpaEntry.js`,
      ''
    )
  )
  await Promise.all(loadList)
  singleSpa.start()
}

register()
