const userModel = require('../../../models/user')
const userSchema = require('../mongoDB/userSchema')
const IUserRepository = require('../../../interfaces/repository')

module.exports = class extends IUserRepository{
    constructor(){
        super();
    }

    // async
}
