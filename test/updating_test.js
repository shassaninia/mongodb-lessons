const assert = require('assert');

const MarioChar = require('../models/mariochar');

//Describe tests
describe("Updating records", function(){

    var char;
    //Run this before each test in this block
    beforeEach(function(done){
          char = new MarioChar({
            name:"Mario",
            weight: 50
        });

        char.save().then(function(){
         
            done(); //Tell mocha our test is done and move onto the next test
        });
    });

    //Create tests
    it("Update one record in the database", function(done){

     //{name:'Mario'} is the record we want to find
     //{name:'Luigi'} is what we want to update        
      MarioChar.findOneAndUpdate({name:'Mario'},{name:'Luigi'}).then(function(){
        MarioChar.findOne({_id:char._id}).then(function(result){
            assert(result.name === 'Luigi');
            done();
        });
      });


    });

    it("Increments the weight by 1", function(done){

        //Increment the weight of all records ({}) by 1 {$inc:{weight:1}}
        MarioChar.update({},{$inc:{weight:1}}).then(function(){
            MarioChar.findOne({name:'Mario'}).then(function(result){
                assert(result.weight === 51);
                done();
            });
        });
    });
    
});