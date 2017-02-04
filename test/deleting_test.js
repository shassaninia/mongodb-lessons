const assert = require('assert');

const MarioChar = require('../models/mariochar');

//Describe tests
describe("Deleting records", function(){

    var char;
    //Run this before each test in this block
    beforeEach(function(done){
          char = new MarioChar({
            name:"Mario"
        });

        char.save().then(function(){
            done(); //Tell mocha our test is done and move onto the next test
        });
    });

    //Create tests
    it("Delete one record from the database", function(done){
        
       MarioChar.findOneAndRemove({name:'Mario'}).then(function(result){
          
           MarioChar.findOne({name:'Mario'}).then(function(result){
                assert(result === null);
                  done();
           });
         
       });


    });
    
});