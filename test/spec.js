const expect = require('chai').expect;
const rewire = require ('rewire');

const app = rewire('../main.js');

describe('Adopt a Friend', () => {
    describe('catName', () => {
        const catName = app.__get__('catName');
        it('should not be undefined', () => {
           expect(catName).to.not.be.undefined; 
        });

        it('should store a string', () => {
            expect(catName).to.be.a('string');
        });

        it('should be declared as "Zelda"', () => {
            expect(catName).to.equal('Zelda');
        });

        it('should be reassignable', () => {
            expect(function(){app.__get__('catName') = "Tiger Lily"}).to.not.throw(TypeError);
        });
    });

    describe('takeMeHome', () => {
        const takeMeHome = app.__get__('takeMeHome');
        const catLocation = app.__get__('catLocation');

        it('accesses a variable of catLocation', () => {
            takeMeHome();
            expect(catLocation).to.equal("Cornwall");
        });
    })
});