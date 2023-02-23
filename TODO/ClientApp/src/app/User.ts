export class User {
    Id: number;
    Username: string = '';
    Password: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
