const express = require('express');
const router = express.Router();

const aiPostsController = require('../controllers/aiPostsController.js')


router.post('/', aiPostsController.generatePost);

module.exports = router;