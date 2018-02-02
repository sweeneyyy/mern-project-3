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
    location: req.body.location, //search location from front end
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

// POST - save restaurant to db for user profile
router.post('/results/restaurantsaved', function(req, res, callback){
  console.log('backend', req.body)
  var userId = req.body.user.id;
  User.findById(userId)
    .exec(function(err, foundUser){
      console.log("my current user", foundUser);
      if(err){
        res.status(500).json({error: err.message});
      }else{
        foundUser.restaurant.push({
          "name": req.body.business.name,
          "url": req.body.business.url,
          "imageurl": req.body.business.image_url,
          "rating": req.body.business.rating,
          "category": req.body.business
        });
        console.log('#### Found User After PUsh', foundUser);//this console log works
        foundUser.save(function(err){
          if(err){
            console.log(err);
            return;
          }
          // res.json(foundUser);
        });//this line isnt working
        res.json(foundUser);
      }
  })
})

//POST - save restaurant or event to db


module.exports = router;
