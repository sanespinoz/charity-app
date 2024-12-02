// src/routes/excelImportRoutes.js
const express = require('express');
const multer = require('multer');
const excelImportController = require('../controllers/excelImportController');

const upload = multer({ dest: 'src/uploads/' });  

const router = express.Router();

router.post('/import', upload.single('file'), (req, res, next) => {
    console.log(req.file); 
    next();
  }, excelImportController.importExcel);
  

module.exports = router;

