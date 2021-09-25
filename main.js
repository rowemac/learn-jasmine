/* Unit Testing: Setting Up Data with beforeEach Challenge
*   
* 1. Add a new describe for the fullName
* 2. Fully test the fullName get
* 3. Use a nested beforeEach
*/ 

// Test Suite 
describe(`${User.name} Class`, () => {
    let model;
    let mockUserService;
    
    beforeEach(() => {
        mock = {
            lastId: null,
            user: {},
            getUserById: async (id) => {
                this.lastId = id;

                return this.user;
            }
        };
        const data = { firstName: 'Mac', middleName: 'Thomas', lastName: 'Rowe', id: 1 };
        model = new User(data, mockUserService);
    });
    
    describe('default values', () => {
        it('first name defaults to empty', () => {
            // assert
            expect(model.firstName).toBe('');
        });
    
        it('last name defaults to empty', () => {
            // assert
            expect(model.lastName).toBe('');
        });
    
        it('middle name defaults to empty', () => {
            // assert
            expect(model.middleName).toBe('');
        }); 
    });
    
    describe('full name', () => {
        beforeEach(() => {
           model = new User({ firstName: 'Mac', lastName: 'Rowe' }); 
        });
        
        it('middle initial when middleName is defined with first and last', () => {
            // arrange
            model.middleName = 'Thomas';
            
            // act
            const result = model.fullName;
            
            // assert
            expect(result).toBe(`${model.firstName} ${model.middleName[0]}. ${model.lastName}`);
        });
       
        it('when no middle name return just first and last', () => {
           // arrange
           model.middleName = '';
           
           // act
           const result = model.fullName;
           
           // assert
           expect(result).toBe(`${model.firstName} ${model.lastName}`);
        });
    });

    describe('get code name', () => {
        it('is a testing god when confirmed', () => {
            // arrange
            spyOn(window, 'confirm').and.returnValue(true);
            // act 
            const result = model.getCodeName();
            // assert
            expect(result).toBe('TESTING GOD!');
        });

        it('is a scrub when not doing testing', () => {
            // arrange
            spyOn(window, 'confirm').and.returnValue(false);
            // act 
            const result = model.getCodeName();
            // assert
            expect(result).toBe("Not worthy. Sorry.");
        });

        it('asks a user if they are a testing god', () => {
            // arrange
            spyOn(window, 'confirm').and.returnValue(true);
            // act 
            const result = model.getCodeName();
            // assert
            expect(window.confirm).toHaveBeenCalledWith("Are you a testing god?");
        });
    });

    describe('getMyFullUserData', () => {
        it('gets user data by id', () => {
            // arrange

            // act

            // assert
        });
    });
});