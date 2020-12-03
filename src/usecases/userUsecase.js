const { response } = require('express');
const IUserRepository = require('../interfaces/repository');
const createUserService = require('../services/createUser')

module.exports = () => {
    // const { IUserRepository } = dependencies.DatabaseServices
    const createNewUser = (req, res, next) => {
        const createUserCommand = createUserService(IUserRepository)
        const { name, email, address } = req.body;
        createUserCommand.Execute(name, email, address).then((response) => {
            res.json(response)
            console.log("cheguei no caso de uso")
        }, (err) => {
            next(err);
        });

    }
    return {
        createNewUser
    }
}