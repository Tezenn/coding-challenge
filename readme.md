# Backend Challenge

The way i decided to go is to write all the users and policies to a mongoDb. If a local mongoDb is available and the service is on run </br>
`npm install`</br>
to install Mongoose and the npm module 'node-fetch', then </br>
`node scriptToPopulateDb.js`</br>

Now to run the server `node index.js`.</br>
To test the app is possible to use the postman collection `https://www.getpostman.com/collections/eae8fcd35768cfadfe5e`

## Authorization

To simulate the requested authorization I prepared a middleware that check that in the headers of the http request there is a Authorization bearer and expects the user id as a token. If the id is associated to a user of type admin than the permission is granted.

## Endpoints

- POST http://localhost:3001/user to add a user to the database.
- GET http://localhost:3001/user/id/:id to get user data filtered by user id. No Authorization required
- GET http://localhost:3001/user/username/:username to get user data filtered by username. No Authorization required
- POST http://localhost:3001/policy to post a policy to the database.
- GET http://localhost:3001/policy/:username/:username to get a list of policies linked to a username.
  Require Authorization
- GET http://localhost:3001/policy/id/:policy_id to get user data linked to a policy id
  Require Authorization
