const mocha = require('mocha');

const assert = require('assert');

//describe tests
describe("some demo tests", function(){

    //Create tests
    it("adds two numbers together",function(){
        assert(2 + 3 === 5); //assert 2 + 3 = 5
    });
});