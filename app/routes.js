var express = require('express')
var locationService = require('./services/location-v1')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
router.get('/country-picker-4', function (req, res) {
  var locale = 'en-GB'

  res.render('country-picker-4', {
    html_lang: 'en',
    graph: locationService.locationGraph,
    locations: locationService.canonicalLocationList(locale),
    reverseMap: locationService.locationReverseMap(locale),
    locale: locale
  })
})

router.get('/country-picker-4.cy', function (req, res) {
  var locale = 'cy'

  res.render('country-picker-4', {
    html_lang: locale,
    graph: locationService.locationGraph,
    locations: locationService.canonicalLocationList(locale),
    reverseMap: locationService.locationReverseMap(locale),
    locale: locale
  })
})

module.exports = router
