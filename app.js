const express = require('express');
const app = express();

// output response to localhost page
app.get('/', function(req,res){
    res.send('Ready');
});

app.listen(8080, function() {
    console.log('Server ready');
})