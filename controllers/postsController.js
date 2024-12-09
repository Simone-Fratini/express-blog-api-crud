
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
    console.log(req.body);

    let id = 0;
    for(let item of food){
        if(item.id > id){
            id = item.id;
        }
    }

    const newFood = {
        id: id + 1,
        name: req.body.name,
        img: req.body.img,
        content: req.body.content,
        price: req.body.price,
        tag: req.body.tag
    }

    food.push(newFood);
    res.status(201).json(newFood);
}

function update(req, res){
    
    let id = food.findIndex((item) => {
        return item.id == req.params.id;
    })
    if(id != -1){
        food[id].name = req.body.name;
        food[id].img = req.body.img;
        food[id].content = req.body.content;
        food[id].price = req.body.price;
        food[id].tag = req.body.tag;
        res.json(food);
    }else{
        res.status(404).send({
            error: "Elemento non trovato"
        });
    }
}

function destroy(req, res){
    let id = food.findIndex((item) => {
        return item.id == parseInt(req.params.id);
    })
    if(id != -1){
        food.splice(id, 1);
        res.json(food);
    }else{
        res.status(404).send({
            error: "Elemento non trovato"
        });
    }
    
}

function modify(req, res){
    let id = food.findIndex((item) => {
        return item.id == parseInt(req.params.id);
    })
    if(id != -1){
        for(let key in req.body){
            food[id][key] = req.body[key];
        }
        res.json(food);
    }else{
        res.status(404).send({
            error: "Elemento non trovato"
        });
    }
    
}

module.exports = {index, show, store, update, destroy, modify};