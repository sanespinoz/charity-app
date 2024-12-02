// routes/index.js
const express = require('express');
const router = express.Router();

// Import individual route modules
const institutionRoutes = require('./institutionRoutes');
//const sectionRoutes = require('./sectionRoutes');
//const childRoutes = require('./childRoutes');
//const tutorRoutes = require('./tutorRoutes');
//const coordinatorRoutes = require('./coordinatorRoutes');
const excelImportRoutes = require('./excelImportRoutes');

// Register routes with prefixes
router.use('/institutions', institutionRoutes);
//router.use('/sections', sectionRoutes);
//router.use('/children', childRoutes);
//router.use('/tutors', tutorRoutes);
//router.use('/coordinators', coordinatorRoutes);
router.use('/excel', excelImportRoutes);

module.exports = router;

