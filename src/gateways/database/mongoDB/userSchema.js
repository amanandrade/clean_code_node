const mongoose = require('mongoose')

const validateEmail = (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address']
    },
    address: String,
}, {    
    timestemp: {
        createdAt: true,
        updatedAt: true
    },
    toJSON: {
        virtuals: true,
        transform(doc, ret){
            ret.id = ret._id
            delete ret._id
        }
    },
    versionKey: false,
})

module.exports = mongoose.model('User', userSchema);