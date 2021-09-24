// Unit Testing: Setting up data with beforeEach

// Test Suite 
describe(`${User.name} Class`, () => {
    let model;
    
    beforeEach(() => {
        model = new User();
        console.log('Mac');
    });
    
    describe('default values', () => {
        it('first name defaults to empty', () => {
            // assert
            console.log(1)
            expect(model.firstName).toBe('');
        });
    
        it('last name defaults to empty', () => {
            // assert
            console.log(2)            
            expect(model.lastName).toBe('');
        });
    
        it('middle name defaults to empty', () => {
            // assert
            console.log(3)
            expect(model.middleName).toBe('');
        }); 
    });
});