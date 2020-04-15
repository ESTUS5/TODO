export class User {
    UserID: number;
    Username: string = '';
    Password: string = '';
    Email: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
