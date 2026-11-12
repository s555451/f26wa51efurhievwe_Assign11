const Mydata = require('../models/mydata');

// List all Mydata records
exports.mydata_list = async function(req, res) {
    try {
        const documents = await Mydata.find();
        res.json(documents);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new Mydata record
exports.mydata_create_post = async function(req, res) {
    try {
        const newDocument = await Mydata.create({
            name: req.body.name,
            category: req.body.category,
            description: req.body.description
        });

        res.status(201).json(newDocument);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};