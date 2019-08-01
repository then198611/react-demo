module.exports = function(api) {

  api.cache(true)

  const presets = [
    ["@babel/preset-env", {
      "useBuiltIns": "usage",
      "corejs": 2
    }]
  ]
  const plugins = [
    ["@babel/plugin-transform-runtime", {"corejs": 2}],
    ["@babel/plugin-proposal-decorators", {"legacy": true}]
  ]

  return{
    presets,
    plugins
  }
}
