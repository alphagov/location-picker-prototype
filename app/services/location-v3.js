var locationGraph = require('../assets/data/picker-data-4.json')

function isCanonicalNode (node) {
  return node.meta.canonical
}

function presentableName (node, locale) {
  var requestedName = node['names'][locale]
  var fallback = Object.keys(node['names']).map(k => node['names'][k])[0]
  return requestedName || fallback
}

var locationReverseMap = (preferredLocale) => Object.keys(locationGraph)
  .reduce((revMap, curie) => {
    var node = locationGraph[curie]
    Object.keys(node.names).forEach(locale => {
      var name = node.names[locale]
      var isntDefinedAndLocaleIsEnGb = !revMap[name] && locale === preferredLocale
      if (isntDefinedAndLocaleIsEnGb) {
        revMap[name] = { node, locale }
      }
    })
    return revMap
  }, {})

var canonicalLocationList = (preferredLocale) => Object.keys(locationGraph)
  .reduce((list, curie) => {
    var node = locationGraph[curie]
    return isCanonicalNode(node)
      ? list.concat([presentableName(node, preferredLocale)])
      : list
  }, [])
  .sort()

module.exports = {
  canonicalLocationList: canonicalLocationList,
  locationGraph: locationGraph,
  locationReverseMap: locationReverseMap
}
