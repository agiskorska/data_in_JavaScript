const { catName, catLocation, takeMeHome, rename} = require('../main');

describe('Adopt a Friend', () => {
    describe('catName', () => {

        it('should not be undefined', () => {
           expect(catName).toBeDefined(); 
        });

        it('should store a string', () => {
            expect(catName).toEqual(expect.any(String));
        });

        it('should be declared as "Zelda"', () => {
            expect(catName).toEqual('Zelda');
        });

        it('should not be able to be updated', () => {
            expect(() => rename("Bob")).toThrow(TypeError)
        });
    });

    describe('takeMeHome', () => {        
        it('updates the cat location', () => {
            expect(() => takeMeHome()).not.toThrow(TypeError)
        })

        it('returns the cat\'s new location', () => {
            expect(takeMeHome()).toEqual("Cornwall")
        });
    })
});