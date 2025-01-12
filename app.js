
const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT;

app.use(express.static('public'));

//importiamo il router
const foodRouter = require("./routers/posts.js");
const aiPostsRouter = require("./routers/aiPostsRouter.js");

// Abilita CORS
app.use(cors());

// Middleware per il parsing del body JSON
app.use(express.json());
const notFound = require('./middlewares/notFound.js');
const apiNotFound = require('./middlewares/groqApiNotFound.js');

app.use('/posts', foodRouter);
app.use('/aiposts', apiNotFound, aiPostsRouter);

app.use(notFound);

app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
})


