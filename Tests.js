'use strict';
const expect = require('chai').expect;
const request = require('request')
const server = require('./ciborg-server')



describe('get games by name', () => { 
    describe('name that doesnt exist', () => { 
        it('should get an empty array', (done) => {
            request.get(`http://localhost:8000/game/${'ekdhujkvkm'}`,
            (error, response, body)=>{
                expect(JSON.parse(body)).to.deep.equal([]);
                done()
            });
        });
    });
});

