const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const MONGO_USERNAME = 'root';
const MONGO_PASSWORD = '123ABC';
const MONGO_HOSTNAME = 'localhost';
const MONGO_PORT = '27017';
const MONGO_DB = 'dbooks';

const config = {
    uri: "mongodb://localhost:27017/node-mongoose",
    options: {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    },
}

mongoose.connect(config.uri, config.options)

mongoose.connection
    .on('open', () => {
    console.log('Connection to database has been made.')
})
    .on('error', () => {
        throw new Error(err, 'Failed to connect to database.');
})
    .on('disconnected', () => {
    console.log('Database disconnected');
})

module.exports = mongoose;