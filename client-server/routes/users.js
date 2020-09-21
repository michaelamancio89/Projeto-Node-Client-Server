var express = require('express');
var restify = require('restify-clients');
var assert = require('assert');
var router = express.Router();


//Creates  a JSON Client
var client = restify.createJSONClient({

    url:'http://localhost:4000'
});


/* GET users listing. */
router.get('/', function(req, res, next) {

  
  client.get('/users', function(err, request, response, obj) {//rota do restful a ser chamado
    assert.ifError(err);

    //console.log(JSON.stringify(obj, null, 2));
    res.end(JSON.stringify(obj, null, 2));
  });
  

});

module.exports = router;
