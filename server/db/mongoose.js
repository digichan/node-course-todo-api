var mongoose = require('mongoose');
// mongoose should be an instance

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
