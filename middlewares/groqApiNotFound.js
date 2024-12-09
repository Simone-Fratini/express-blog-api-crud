
function apiNotFound(req, res, next) {
    if (!process.env.GROQ_API_KEY){
        res.status(404).send('Groq API Not Found! insert it in the env file GROQ_API_KEY');
        console.log('passaggio da middleware Api not Found');
    }else{
        next();
    }
  

}

module.exports = apiNotFound;