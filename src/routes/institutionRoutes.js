const express = require('express');
const router = express.Router();
const Institution = require('../models/Institution');

// CREATE: Add a new institution
router.post('/', async (req, res) => {
  try {
    const institution = new Institution(req.body);
    const savedInstitution = await institution.save();
    res.status(201).json(savedInstitution);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ: Get all institutions
router.get('/', async (req, res) => {
  try {
    const institutions = await Institution.find().populate('sections');
    res.json(institutions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ: Get a single institution by ID
router.get('/:id', async (req, res) => {
  try {
    const institution = await Institution.findById(req.params.id).populate('sections');
    if (!institution) return res.status(404).json({ message: 'Institution not found' });
    res.json(institution);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE: Update an institution by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedInstitution = await Institution.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedInstitution);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE: Delete an institution by ID
router.delete('/:id', async (req, res) => {
  try {
    await Institution.findByIdAndDelete(req.params.id);
    res.json({ message: 'Institution deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
