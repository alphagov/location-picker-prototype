var express = require('express')
var locationServiceV1 = require('./services/location-v1')
var locationServiceV2 = require('./services/location-v2')
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
    graph: locationServiceV1.locationGraph,
    locations: locationServiceV1.canonicalLocationList(locale),
    reverseMap: locationServiceV1.locationReverseMap(locale),
    locale: locale
  })
})

router.get('/country-picker-4.cy', function (req, res) {
  var locale = 'cy'

  res.render('country-picker-4', {
    html_lang: locale,
    graph: locationServiceV1.locationGraph,
    locations: locationServiceV1.canonicalLocationList(locale),
    reverseMap: locationServiceV1.locationReverseMap(locale),
    locale: locale
  })
})

router.get('/location-picker-5', function (req, res) {
  var locale = 'en-GB'

  res.render('location-picker-5', {
    html_lang: 'en',
    graph: locationServiceV2.locationGraph,
    locations: locationServiceV2.canonicalLocationList(locale),
    reverseMap: locationServiceV2.locationReverseMap(locale),
    locale: locale
  })
})

router.get('/location-picker-5.cy', function (req, res) {
  var locale = 'cy'

  res.render('location-picker-5', {
    html_lang: locale,
    graph: locationServiceV2.locationGraph,
    locations: locationServiceV2.canonicalLocationList(locale),
    reverseMap: locationServiceV2.locationReverseMap(locale),
    locale: locale
  })
})

module.exports = router
