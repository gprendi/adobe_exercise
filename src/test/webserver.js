const { assert, expect } = require('chai');

const server_uri = 'http://localhost:3000'
const request = require('supertest').agent(server_uri);

describe('GET /romannumerals', () => {
   
   it('calling without a query should return a client error', (done) => {
      
   });
   
   it('calling query with the number 0', (done) => {
    
   });

   it('calling query outside of the range (greater than) ', (done) => {
   
   });

   it('calling query outside of the range (greater than) ', (done) => {
   
   });

   it('calling query with a number in the range should return OK', (done) => {
   
   });


});