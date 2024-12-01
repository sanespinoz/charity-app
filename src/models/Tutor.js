const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
    type: { type: String, enum: ['Individual', 'Company'], required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
});

module.exports = mongoose.model('Tutor', tutorSchema);