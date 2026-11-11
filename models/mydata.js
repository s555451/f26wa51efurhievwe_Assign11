const mongoose = require('mongoose');

const mydataSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true }
}, { timestamps: true });

module.exports = mongoose.models.Mydata || mongoose.model('Mydata', mydataSchema, 'mydatas');
