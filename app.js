
const express = require('express');
const app = express()
const port = 3000;

app.use(express.static('public'));

//importiamo il router
const foodRouter = require("./routers/posts.js");

app.use('/posts', foodRouter);

app.listen(port, () =>{
    console.log('server is running');
})
