const express = require('express');
const router = express.Router();

const foodController = require('../controllers/postsController.js')

// index
router.get('/', foodController.index)

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