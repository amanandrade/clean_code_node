module.exports = class User { 
    constructor(id = null, name, email, address) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
    }
}
