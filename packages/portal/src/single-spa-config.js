import * as singleSpa from 'single-spa'
import { loadApp } from './helper'

async function register () {
  const loadList = []
  loadList.push(
    loadApp(
      'single-main',
      '',
      `${_URL_}:7001/app.js`,
      ''
    )
  )
  loadList.push(
    loadApp(
      'single-member',
      '/layout/member',
      `${_URL_}:7002/singleSpaEntry.js`,
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
      '/main/heatmap',
      `${_URL_}:7004/singleSpaEntry.js`,
      ''
    )
  )
  await Promise.all(loadList)
  singleSpa.start()
}

register()
