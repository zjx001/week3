var express = require('express');
var router = express.Router();
const mongo = require('mongodb-curd')
const Bname = 'week3'
    /* GET home page. */
router.get('/getfind1', function(req, res, next) {
    mongo.find(Bname, 'shuju', function(re) {
        if (re) {
            console.log(re)
            res.send({
                code: 1,
                data: re
            })
        } else {
            res.send({
                code: 1,
                mag: 'error'
            })
        }
    })
});

module.exports = router;