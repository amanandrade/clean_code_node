module.exports = class User { 
    constructor(id = null, name, email, address, date) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.date = date;
    }
}
