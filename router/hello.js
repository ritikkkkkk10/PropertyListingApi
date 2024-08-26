const express = require('express');
const helloRoute = express.Router();
helloRoute.get('/hello', (req, res)=>{
    res.send('hhheellooo worlds');
});
module.exports = helloRoute;