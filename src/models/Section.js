const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({ 
        name: {type:String, required: true}, //1a, 1b
        coordinator: { type: mongoose.Schema.Types.ObjectId, ref: 'Coordinator'},
    });

module.exports = mongoose.model('Section', sectionSchema);
