const mongoose = require('mongoose');

const institutionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  referent: { type: String, required: true },
  phone: { type: String, required: true }, 
  email: { type: String, required: true },
  sections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Section' }]
});

module.exports = mongoose.model('Institution', institutionSchema);
