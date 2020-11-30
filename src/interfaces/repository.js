module.exports = class IUserRepository {

    create(modelUser){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    update(modelUser){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    delete(userId){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    get(modelUser){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    getByEmail(modelUser){
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