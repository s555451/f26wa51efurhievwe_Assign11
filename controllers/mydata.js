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

// Get one Mydata record by ID
exports.mydata_detail = async function(req, res) {
    try {
        const result = await Mydata.findById(req.params.id);

        if (!result) {
            return res.status(404).json({
                error: `Mydata record ${req.params.id} not found`
            });
        }

        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update one Mydata record by ID
exports.mydata_update_put = async function(req, res) {
    try {
        const toUpdate = await Mydata.findById(req.params.id);

        if (!toUpdate) {
            return res.status(404).json({
                error: `Mydata record ${req.params.id} not found`
            });
        }

        if (req.body.name !== undefined) {
            toUpdate.name = req.body.name;
        }
        if (req.body.category !== undefined) {
            toUpdate.category = req.body.category;
        }
        if (req.body.description !== undefined) {
            toUpdate.description = req.body.description;
        }

        const result = await toUpdate.save();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
