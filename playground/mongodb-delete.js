// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').deleteMany({text: 'Tonight'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    console.log(res);
  })

  // db.collection('User').findOneAndDelete({
  //   _id: new ObjectID('5c57bd51e9684ea79d550a71')
  // }).then((results) => {
  //   console.log(JSON.stringify(results, undefined, 2));
  // })

  //db.close();
});
