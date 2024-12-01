const mongoose = require('mongoose');

const childSchema = new mongoose.Schema({
        name: {type: String, required: true},
        age: {type: Number, required: true},
        sex: { type: String, enum: ['Girl', 'Boy'], required: true },
        hasGift: { type: Boolean, default: false },
        tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' },
        section: { type: mongoose.Schema.Types.ObjectId, ref: 'Section', required: true },
    });

module.exports = mongoose.model('Child', childSchema);