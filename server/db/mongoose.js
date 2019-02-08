var mongoose = require('mongoose');
// mongoose should be an instance

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
