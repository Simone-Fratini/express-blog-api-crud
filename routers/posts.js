const express = require('express');
const router = express.Router();

const food = require('../data/food.js');
const { index, show, store, update, destroy, modify } = require('../controllers/postsController.js');

// index
router.get('/bacheca', index)

// store
router.post('/', store)

//show
router.get('/:id', show)

// update
router.put('/:id', update)

// destroy
router.delete('/:id', destroy)

// modify
router.patch('/:id', modify)

router.all('*', (req, res) => {
    res.status(404).send('<div>Pagina non trovata</div>');
})

module.exports = router;