require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const yelp = require('yelp-fusion');
const apikey = process.env.CLIENT_KEY;
const client = yelp.client(apikey);
// const API_URL = 'https://api.yelp.com/v3/events';

//Yelp API call
// function yelpSearch(location, callback){
//   client.search({
//     location: this.state.query
//   }).then(response => {
//     response.jsonBody.events.forEach(function(item){
//       console.log('res item', item);
//     });
//     callback(response.jsonBody.events);
//   }).catch(e => {
//     console.log(e);
//   });
// }

const searchRequest = {
  location: //search location from front end
}

router.get('/results/:location', function(req, res, callback){
  client.search({location: this.state.query}).then(response => {
    const result = response.jsonBody;
    const prettyJson = JSON.stringify(result, null, 4);
    console.log(prettyJson);
  }).catch(err => {
    console.log(err);
  });
});

//POST - save restaurant or event to db

module.exports = router;