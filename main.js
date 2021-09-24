/* Unit Testing: It Test Challenge
*
*   1. Write a unit test for lastName and middleName to test its default values.
*   2. Group all 3 unit tests with an appropriate describe.
*/

// Test Suite

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