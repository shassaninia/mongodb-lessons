const mocha = require('mocha');

const assert = require('assert');

const MarioChar = require('../models/mariochar');

//Describe tests
describe("Saving records", function(){

    //Create tests
    it("Saves a record to the database", function(done){
        
        var char = new MarioChar({
            name:"Mario"
        });

        char.save().then(function(){
            //isNew is true when we saved the object locally, but not
            //saved to the database. isNew becomes false once saved to the database
            assert(char.isNew === false);
            done(); //Tell mocha our test is done and move onto the next test
        });


    });
});