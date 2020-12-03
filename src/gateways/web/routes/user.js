const express = require('express')
const userUseCase = require('../../../usecases/userUsecase')


const userRoute = () => {
    const router = express.Router()
    const uc = userUseCase()

    router.route('/')
        .post(uc.createNewUser)
        console.log("passei pela rota")

}
module.exports = userRoute;

