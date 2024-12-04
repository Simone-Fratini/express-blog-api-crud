
const express = require('express');
const app = express()
const port = process.env.PORT;

app.use(express.static('public'));

//importiamo il router
const foodRouter = require("./routers/posts.js");

app.use('/posts', foodRouter);

router.all('*', (req, res) => {
    res.status(404).send('<div>Pagina non trovata</div>');
})

app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
})
