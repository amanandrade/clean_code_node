const userModel = require('../../../models/user')
const userSchema = require('../mongoDB/userSchema')
const IUserRepository = require('../../../interfaces/repository');

module.exports = class extends IUserRepository{
    constructor(){
        super();
    }

    async create(userEntity){
        const { name, email, address } = userEntity;
        const userDatabase = new userSchema({ name, email, address });
        await userSchema.save();
        return new userModel(userDatabase.id, userDatabase.name, userDatabase.email, userDatabase.address)
    }
};
