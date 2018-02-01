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


router.post('/results', function(req, res, callback){
  console.log("req.body is", req.body);
  const searchRequest = {
    location: req.body.location,  //search location from front end
    limit: 10
  }
  client.search(searchRequest).then(response => {
    const result = response.jsonBody;
    const prettyJson = JSON.stringify(result, null, 4);
    console.log("this is prettyJson", prettyJson);
    res.send(prettyJson);
  }).catch((err) => {
    console.log("error:", err);
  });
});


//POST - save restaurant or event to db






module.exports = router;