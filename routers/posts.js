const express = require('express');
const router = express.Router();

const food = require('../data/food.js');
const foodController = require('../controllers/postsController.js')

// index
router.get('/bacheca', foodController.index)

// store
router.post('/', foodController.store)

//show
router.get('/:id', foodController.show)

// update
router.put('/:id', foodController.update)

// destroy
router.delete('/:id', foodController.destroy)

// modify
router.patch('/:id', foodController.modify)



module.exports = router;