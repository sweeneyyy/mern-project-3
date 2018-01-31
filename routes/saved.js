require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

// const yelp = require('yelp-fusion');
// const client = yelp.client(process.env.CLIENT_KEY);
const API_URL = 'https://api.yelp.com/v3/events';

//Yelp API call
function yelpSearch(location, callback){
  client.search({
    location: this.state.query
  }).then(response => {
    response.jsonBody.events.forEach(function(item){
      console.log('res item', item);
    });
    callback(response.jsonBody.events);
  }).catch(e => {
    console.log(e);
  });
}

//POST - save restaurant or event to db