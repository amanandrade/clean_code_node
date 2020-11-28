module.exports = class IUserRepository {

    create(domainUser){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    update(domainUser){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    delete(userId){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    get(domainUser){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    getByEmail(domainUser){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    findAll(){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
};

// module.exports = class IBookRepository{
//     findAll(){
//         throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
//     }
// }