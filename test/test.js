
'use strict';

const expect = require('chai').expect
 , handler = require('../handler');

// describe('Some Lambda Func', function() {
//   let ctx;
  
//   before(function() {
//     ctx = new MockContext();
//   });
  
//   describe('When Some param is greater than zero', function() {
//     before(function(done) {
//       SomeLambda.hello({someParam: 10}, ctx, done)
//     });
    
//     it('should succeed with Yay', function() {
//       expect(done.response.statusCode).to.equal(200)
//     });
    
//     after(function() {
//       //reset counters
//       ctx.reset();
//     })
    
//   })
// });
describe('createResponse', function() {
        let response;
        before(function(){
                response = handler.createResponse();
        });
        it("testResponseCode",function(){
                
                expect(response.statusCode).to.equal(2000);
        });
        
});

// function add(a,b){
//         return a+b;
// };

// describe('Add', function() {
//         it("Addtest",function(){
//                 let response = add(4,3);
//                 expect(response).to.equal(7);
//         });
// });

