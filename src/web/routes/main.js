const express = require('express')
const router = express.Router()

router.route('/')
    .get((req,res)=>{
        res.send("<p> Hello readers! My name is Amanda Andrade and this is a initial view of BookAndo")
    })

module.exports = router;
