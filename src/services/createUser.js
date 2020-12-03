const userModel = require('../models/user')

module.exports = (IUserRepository) => {
    console.log("cheguei no user services")
    async function Execute(name, email, address){
        let newUser = new userModel(name, email, address);
        newUser = IUserRepository.create(newUser);
        return 'student added successfully';
    }
    return {
        Execute
    };
    
};


// module.exports = (name="amanda", email="amanda@email.com", address="10, my street - ON/CA", { IUserRepository }) => {
//     const user = new userModel(null, name, email, address);
//     return IUserRepository.create(user);
// };

// module.exports = ( { IUserRepository }) => {
//     const user = new userModel(null, name, email, address);
//     return IUserRepository.create(user);
// };