let mongoose = require("mongoose");

// Use ES6 Promises for mongoose
// mongoose.Promise = global.Promise;
// mongoose.set('useNewUrlParser', true);

mongoose.connect('mongodb://localhost:5000'), {
    useMongoClient: true,
}

mongoose.connection.once('open', function () {
    console.log('Connection has been made')
}).on('error', function (error) {
    console.log('Connection error', error);
}).on('disconnected', function (){
    console.log('Connnection disconnected');
})

module.exports = mongoose;

// https://mannhowie.com/clean-architecture-node
// https://medium.com/better-programming/node-clean-architecture-deep-dive-ab68e523554b