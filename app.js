
const express = require('express');
const app = express()
const port = process.env.PORT;

app.use(express.static('public'));

//importiamo il router
const foodRouter = require("./routers/posts.js");

// Middleware per il parsing del body JSON
app.use(express.json());
const notFound = require('./middlewares/notFound.js');

app.use('/posts', foodRouter);

app.use(notFound);

app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
})


