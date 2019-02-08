// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  db.collection('Users').findOneAndUpdate(
    {name : 'Chan'},
  {$inc: {age: 2}, $set: {location: 'Tokyo'} }, {returnOriginal: false})
    .then((result) => {console.log(result);});


});
