
const express = require('express');
const router = express.Router();
const Mydata = require('../models/mydata');

// GET /resource - API specification
router.get('/', (req, res) => {
  res.json({
    title: 'Assignment 11 Mydata API',
    version: '1.0.0',
    description: 'API for reading and creating Mydata documents',
    endpoints: {
      specification: {
        method: 'GET',
        path: '/resource',
        response: 'API specification in JSON'
      },
      collection: {
        methods: ['GET', 'POST'],
        path: '/resource/mydatas',
        getResponse: 'Array of documents from the mydatas collection',
        postBody: {
          name: 'string',
          category: 'string',
          description: 'string'
        },
        postResponse: 'Newly created document as JSON'
      }
    }
  });
});

// GET /resource/mydatas - return all documents
router.get('/:collection', async (req, res) => {
  try {
    if (req.params.collection !== 'mydatas') {
      return res.status(404).json({ error: 'Collection not found' });
    }

    const documents = await Mydata.find();
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /resource/mydatas - create a document
router.post('/:collection', async (req, res) => {
  try {
    if (req.params.collection !== 'mydatas') {
      return res.status(404).json({ error: 'Collection not found' });
    }

    const newDocument = await Mydata.create({
      name: req.body.name,
      category: req.body.category,
      description: req.body.description
    });

    res.status(201).json(newDocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
