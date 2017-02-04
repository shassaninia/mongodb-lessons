const assert = require('assert');

const MarioChar = require('../models/mariochar');

//Describe tests
describe("Finding records", function(){

    //Run this before each test in this block
    beforeEach(function(done){
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

    //Create tests
    it("Finds one record from the database", function(done){
        
      //Passing in {} will return all records in collection
      //{name: 'Mario'} will return records with the name 'Mario'
       MarioChar.findOne({name:'Mario'}).then(function(result){
           //result will have the record returned
           assert(result.name === 'Mario');
           done();
       });


    });
});