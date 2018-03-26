# Summary
A full-stack MERN app created by Winston Summers, Tony Phan and Sweeney Arnett

## Technologies Used
* MongoDB
* Express
* React
* Node.js
* HTML, CSS, Javascript
* Materialize
* Live site on [Heroku](https://venture-js.herokuapp.com/)
***
![alt text](https://i.imgur.com/h0e0LaAl.png)

## Backend Routes
METHOD | URL | Purpose
--- | --- | ---
POST | /auth/signup | Adds new user to user database
POST | /auth/login | Authenticates login details
POST | /auth/me/from/token | Checks if token is present on browser refresh
POST | /results | Returns restaurant results from Yelp API call
POST | /results/restaurantsSaved | Adds a user's saved restaurant to the database
GET | /profile/:id | Returns user profile page
POST | /profile/list/:userId | Adds a user's packing list item to the database
DELETE | /profile/list/:userId | Removes a user's packing list item from the database

## Process
#### Planned Sprints in Trello:
![alt text](https://i.imgur.com/xOBzW99l.png)
#### Wireframes:
![alt text](https://i.imgur.com/VM5v76jl.png)
![alt text](https://i.imgur.com/zLla9Tal.png)

#### Next Steps:
* Additional styling
* Add delete route to saved restaurants
* Incorporate weather API or add events from Yelp for additional info on user destination
* Enable autocomplete when user typing in search destination
* Additional clean up and refactoring of code

## Resources Used
* Yelp API
* Trello
* Draw.io
* Google Fonts
