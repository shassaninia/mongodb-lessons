const mongoose = require('mongoose');

//connect to mongo database
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open',function(){
    console.log('Connection has been made');
}).on('error',function(error){
    console.log('Connection error: ',error);
});