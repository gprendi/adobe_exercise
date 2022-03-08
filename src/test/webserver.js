/**
 * @namespace HttpServerTesting
 * @description Testing for http server's routes
 */

const { assert, expect } = require('chai');
const should = require('chai').should();
require('dotenv').config();
const server_uri = `http://localhost:${process.env.PORT || '8080'}`;
console.log(server_uri)
const request = require('supertest').agent(server_uri);

/**
 * @function testHttpServerRomanNumeral
 * @description Tests suite for http server's GET /romannumeral
 * @memberof HttpServerTesting
 */
describe('GET /romannumeral', () => {
   
   it("calling without a 'query' should return a client error should return 400", (done) => {
        request
        .get(`/romannumeral`)
        .expect(400, done)
   });
   
   it('calling query with the number 0 should return 400', (done) => {
         request
         .get(`/romannumeral?query=0`)
         .expect(400)
         .end(
            (err, res) => {
               if (err) return done(err);
               res.body.should.have.property('error');
               expect(res.body.error).to.equal('Cannot convert number out of range 1-3999');
               done();
            }
         )
   });

   it('calling query outside of the range (greater than) should return 400', (done) => {
      request
         .get(`/romannumeral?query=0`)
         .expect(400)
         .end(
            (err, res) => {
               if (err) return done(err);
               res.body.should.have.property('error');
               expect(res.body.error).to.equal('Cannot convert number out of range 1-3999');
               done();
            }
         )
   });

   it('calling query outside of the range (smaller than) should return 400', (done) => {
      request
         .get(`/romannumeral?query=0`)
         .expect(400)
         .end(
            (err, res) => {
               if (err) return done(err);
               res.body.should.have.property('error');
               expect(res.body.error).to.equal('Cannot convert number out of range 1-3999');
               done();
            }
         )
   });

   it('calling query a float number should return 400', (done) => {
      request
         .get(`/romannumeral?query=0.5`)
         .expect(400)
         .end(
            (err, res) => {
               if (err) return done(err);
               res.body.should.have.property('error');
               expect(res.body.error).to.equal('Only integers can be converted to roman numerals');
               done();
            }
         )
   })

   it('calling query with a number in the range should return 200', (done) => {
      request
      .get(`/romannumeral?query=10`)
      .expect(200)
      .end(
         (err, res) => {
            if (err) return done(err);
            res.body.should.have.property('input');
            res.body.should.have.property('output');
            expect(res.body.input).to.equal(10);
            expect(res.body.output).to.equal('X');

            done();
         }
      )
   });


});

/**
 * @function testHttpServerWrong
 * @description Tests suite for http server's GET /wrong
 * @memberof HttpServerTesting
 */
describe('GET a route that does not exist', () => {
   it('GET /wrong should return 404', (done) => {
      request
      .get('/wrong')
      .expect(404)
      .end(
         (err, res) => {
            if (err) return done(err);
            res.body.should.have.property('message');
            expect(res.body.message).to.equal('Not Found');
            done();
         }
      )
   });

   it('GET /wrong?query=100 should return 404', (done) => {
      request
      .get('/wrong')
      .expect(404)
      .end(
         (err, res) => {
            if (err) return done(err);
            res.body.should.have.property('message');
            expect(res.body.message).to.equal('Not Found');
            done();
         }
      )
   });
});