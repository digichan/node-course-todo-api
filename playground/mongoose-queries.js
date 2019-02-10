const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

User.findById('5c5de372bc3176b081143f67').then((user) => {
  if(!user)
    return console.log('Unable to find user');

  console.log(JSON.stringify(user, undefined, 2));
  //console.log(result);
}, (e) => {
  console.log(e);
});


// var id = 'A5c5f5399cd50488c4417e208';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos - ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo - ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By ID: ', todo);
// }).catch((e) => console.log(e));
