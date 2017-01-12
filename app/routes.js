var express = require('express')
var locationService = require('./services/location-v1')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
router.get('/demo-picker', function (req, res) {
  var locale = 'en-GB'

  res.render('demo-picker', {
    html_lang: 'en',
    graph: locationService.locationGraph,
    locations: locationService.canonicalLocationList(locale),
    reverseMap: locationService.locationReverseMap(locale),
    locale: locale
  })
})

router.get('/demo-picker.cy', function (req, res) {
  var locale = 'cy'

  res.render('demo-picker', {
    html_lang: locale,
    graph: locationService.locationGraph,
    locations: locationService.canonicalLocationList(locale),
    reverseMap: locationService.locationReverseMap(locale),
    locale: locale
  })
})

module.exports = router
