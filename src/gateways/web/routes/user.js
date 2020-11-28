const express = require('express')
const router = express.Router()


//expecting a json file to simulate a database interaction (this could be in another file, only for methods)
//this could be the database
const fs = require('fs')
const { join } = require('path')
const { use } = require('./main')

const filePath = join(__dirname, 'users.json')

//this could be the method
const getUsers = () => {
    const data = fs.existsSync(filePath)
        ? fs.readFileSync(filePath) //if file exists
        : []                        //if file not exits

    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

//this method expects a user, write on database (file) in json format and tabs data
const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users,null,'\t'))

router.route('/:id?')
    .get((req,res) => {
        const users = getUsers()
        res.send({users})
    })
    .post((req,res) => {
        const users = getUsers()

        users.push(req.body)
        saveUser(users)

        res.status(201).send('ok')
    })
    .put((req,res) => {
        const users = getUsers()

        saveUser(users.map(user => {
            if (user.id === req.params.id){
                return {
                    ...user,
                    ...req.body
                }
            }
            return user
        }))
        res.status(200).send('ok')
    })
    .delete((req,res) => {
        const users = getUsers()
        
        saveUser(users.filter(user => user.id !== req.params.id))
        res.status(200).send("Ok")
        
        // const id = users.filter(users.id === req.params.id)
        // users.remove(id)
        // res.status(200).send("Ok")

        // res.status(200).send(`User deleted.`)

        // users.filter(user => user.id === req.params.id) 
        // users.remove({'id': req.params.id})

        // deleteUser(users.filter(user => user.id === req.params.id))
        // res.status(200).send("Ok")
        // if (users === -1) return res.status(404)
        // users.splice(users, 1)

    })


module.exports = router;

