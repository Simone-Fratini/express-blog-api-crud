

const food = require('../data/food.js');


function index(req, res){

    let response = {
        totalCount: food.length,
        data: [...food]
    }
    
    let name = req.query.name;

    if(name){
        let filteredFood = food.filter((item) => {
            return item.name.toLowerCase().includes(name.toLowerCase());
        })
        let filteredResponse = {
            totalCount: filteredFood.length,
            data: [...filteredFood]
        }
        res.json(filteredResponse);
    }else{
        res.json(response);
    }
}

function show(req, res){
    let id = req.params.id;
    let item = food.find((item) => {
        return item.id == id;
    })
    if(item){
        res.json(item);
    }else{
        res.status(404).send('<div>Elemento non trovato</div>');
    }
}

function store(req, res){
    res.send("creazione");
}

function update(req, res){
    res.send("modifica");
}

function destroy(req, res){
    res.send("eliminazione");
}

function modify(req, res){
    res.send("modifica parziale");
}

module.exports = {index, show, store, update, destroy, modify};