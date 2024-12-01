const mongoose = require('mongoose');

const coordinatorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: {type: Number, required: true},
});

module.exports = mongoose.model('Coordinator', coordinatorSchema);
