var express = require('express')
var locationService = require('./services/location-v1')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
router.get('/country-picker-4', function (req, res) {
  res.render('country-picker-4', { locations: locationService.canonicalLocationList })
})

module.exports = router
