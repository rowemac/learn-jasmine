class User {
    firstName;
    lastName;
    middleName;

    constructor(data = {}) {
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.middleName = data.middleName || '';
    }

    get fullName() {
        if(this.middleName.length > 0) {
            return `${this.firstName} ${this.middleName}. ${this.lastName}`;
        }

        return `${this.firstName} ${this.lastName}`;
    }
}