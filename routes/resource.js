
const express = require('express');

const router = express.Router();

// Require controllers
const api_controller = require('../controllers/api');
const mydata_controller = require('../controllers/mydata');

// API specification
router.get('/', api_controller.api);

// Get all Mydata records
router.get('/mydatas', mydata_controller.mydata_list);

// Create a Mydata record
router.post('/mydatas', mydata_controller.mydata_create_post);

module.exports = router;
