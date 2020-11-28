const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

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