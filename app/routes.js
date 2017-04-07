var express = require('express')
var locationServiceV1 = require('./services/location-v1')
var locationServiceV2 = require('./services/location-v2')
var locationServiceV3 = require('./services/location-v3')
var demoLocationService = require('./services/demo-location-v1')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('introduction')
})

router.get('/country-of-birth', function (req, res) {
  var locale = 'en-GB'
  res.render('country-of-birth', {
    html_lang: 'en',
    graph: locationServiceV3.locationGraph,
    locations: locationServiceV3.canonicalLocationList(locale),
    reverseMap: locationServiceV3.locationReverseMap(locale),
    locale: locale
  })
})

router.post('/country-of-birth', function (req, res) {
  res.redirect('/country-of-birth')
})


module.exports = router
