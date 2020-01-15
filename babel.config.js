module.exports = function (api) {
  api.cache(true)
  const presets = [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3,
        modules: false
      }
    ]
  ]
  const plugins = [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
  return {
    presets,
    plugins
  }
}
