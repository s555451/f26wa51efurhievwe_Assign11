const express = require('express');
const router = express.Router();
const Mydata = require('../models/mydata');

// Show all database records.
router.get('/', async function(req, res, next) {
  try {
    const items = await Mydata.find().sort({ createdAt: 1 }).lean();
    res.render('mydata', {
      title: 'My Data Collection',
      items: items,
      message: req.query.created ? 'New record created successfully.' : ''
    });
  } catch (err) {
    next(err);
  }
});

// Display the create form.
router.get('/create', function(req, res) {
  res.render('create', { title: 'Create a New Record' });
});

// Save a new record to MongoDB Atlas, then return to Show All.
router.post('/create', async function(req, res, next) {
  try {
    const item = new Mydata({
      name: req.body.name,
      category: req.body.category,
      description: req.body.description
    });
    await item.save();
    res.redirect('/mydata?created=1');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
