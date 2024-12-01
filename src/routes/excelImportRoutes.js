// src/routes/excelImportRoutes.js
const express = require('express');
const multer = require('multer');
const excelImportController = require('../controllers/excelImportController');
const upload = multer({ dest: 'src/uploads/' });  // Save file in src/uploads temporarily
const router = express.Router();

// Define the route to import Excel files
router.post('/import', upload.single('file'), excelImportController.importExcel);

module.exports = router;
