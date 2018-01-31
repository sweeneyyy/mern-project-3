require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const yelp = require('yelp-fusion');
const apikey = process.env.API_KEY;
const client = yelp.client(apikey);
// const API_URL = 'https://api.yelp.com/v3/events';


// function yelpSearch(searchTerm, location, callback){
//   client.search({
//     term: searchTerm,
//     location: location
//   }).then(response => {
//     response.jsonBody.businesses.forEach(function(item){
//     });
//     callback(response.jsonBody.businesses);
//   }).catch(e => {
//     console.log(e);
//   });
// }

//yelp post route
// router.post('/results', function(req, res) {
//   console.log(req.body);
//   yelpSearch(req.body.location, 'Seattle', function(businesses){
//     res.render('/results', {businesses: businesses});
//   });
// });

router.post('/results', function(req, res, callback){
  console.log(req.body);
  const searchRequest = {
    location: "Seattle, wa" //search location from front end
  }
  client.search(searchRequest).then(response => {
    const result = response.jsonBody;
    const prettyJson = JSON.stringify(result, null, 4);
    console.log(prettyJson);
  }).catch(err => {
    console.log(err);
  });
});
// router.get('/results', function(req, res, callback){
//   const searchRequest = {
//     location: req.body.location //search location from front end
//   }
//   client.search(searchRequest).then(response => {
//     const result = response.jsonBody;
//     const prettyJson = JSON.stringify(result, null, 4);
//     console.log(prettyJson);
//   }).catch(err => {
//     console.log(err);
//   });
// });

//POST - save restaurant or event to db

module.exports = router;