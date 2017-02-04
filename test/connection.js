const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;


// Connect to the db before tests run
before(function (done) {
    //connect to mongo database
    mongoose.connect('mongodb://localhost/testaroo');

    mongoose.connection.once('open', function () {
        console.log('Connection has been made');
        done(); //the connection is complete
    }).on('error', function (error) {
        console.log('Connection error: ', error);
    });
});

// Drop the characters collection before each test
beforeEach(function(done){
    //Drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
         done(); //Drop has completed, now mocha can run tests
    });
   
});