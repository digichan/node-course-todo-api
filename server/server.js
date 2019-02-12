var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
// This mongoose is not a normal one, but modified one.
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  }, (e)=>{
    res.status(400).send(e);
  })
})

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
})

// GET /todos/1234324
app.get('/todos/:id', (req, res) => {
  //res.send(req.params);
  var id = req.params.id;
  // Valid id using isValid
  if(!ObjectID.isValid(id)) {
    // 404 - send back empty send
    return res.status(404).send("id not valid"); // send(): empty body
  }

  // findById
  Todo.findById(id).then((todo) => {
  //succss
    // if no todo - send back 404 with empty body
    if(!todo) {
      return res.status(404).send('todo not found');
    }
    // if todo - send it back
    res.send({todo}); // res.send({todo1: todo});
    //res.send(todo);

  }).catch((e) => {
  //error
    // 400 - send empty body back
    res.status(400).send();
  })

})

app.listen(3000, () => {
  console.log('Started on port 3000');
})

module.exports = {app};

// "echo \"Error: no test specified\" && exit 1"
