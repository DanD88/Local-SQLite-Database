const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('ready');
});

app.listen(8080, function() {
    console.log('Server ready');
})