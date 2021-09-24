class User {
    firstName;
    lastName;
    middleName;

    constructor(data = {}) {
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.middleName = data.middleName;
    }
}

// Test suite
// Change this for a safer call
// describe('User', () =>{

// });

// Goal is to write from a user-focus

describe(`${User.name} Class`, () => {
    it('first name defaults to empty', () => {
        // arrange
        const data = { firstName: null };

        // act
        const model = new User(data); // standardize testing (use model instead of user)

        // assert
        expect(model.firstName).toBe('');

    });
});