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

//Yelp API call to get restaurant results
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
      } else {
        foundUser.restaurant.push({
          "name": req.body.business.name,
          "url": req.body.business.url,
          "imgurl": req.body.business.image_url,
          "rating": req.body.business.rating,
          "category": req.body.business.categories[0].title
        });
        console.log('#### Found User After Push', foundUser);//this console log works
        foundUser.save(function(err){
          if(err){
            console.log(err);
            return;
          }
          // res.json(foundUser);
        });//this line isnt working
        res.json(foundUser);
      }
  });
});

// GET user profile with saved restaurants
router.get('/profile/:id', function(req, res, callback){
  // console.log('get route reached for saved rests');
  // res.json({});
  User.findById(req.params.id)
  .exec(function(err, user){
    if(err) {return console.log('error', err); }
    // console.log("user", user);
    res.send(user);
  });
});

// POST packing list item to user db
router.post('/profile/list', function(req, res, callback){
  console.log('list post route', req.body);
  var userId = req.body.user.id;
  var items = req.body.list;
  User.findById(userId)
    .exec(function(err, foundUser){
      console.log("my current user", foundUser);
      if(err){
        res.status(500).json({error: err.message});
      } else { //TODO check for duplicates!
        items.forEach(function(item){
          foundUser.list.push(item)
        })
        console.log('Found user after list push', foundUser);
        foundUser.save(function(err){
          if(err){
            console.log(err);
            return;
          }
        });
        res.json(foundUser);
      }
  });
});

// DELETE packing list item from user db
router.delete('/profile/list', function(req, res, callback){
  console.log('list delete route reached', req.body);
  var userId = req.body.user.id;
  var item = req.body.item;
  User.findById(userId)
    .exec(function(err, foundUser){
      if(err) {return console.log('error', err); }
      console.log("my current user", foundUser);
      User.update({
        $pull: {
          'user.list': { item }
        }
      })
      res.json(foundUser);
    })
   
})



module.exports = router;
