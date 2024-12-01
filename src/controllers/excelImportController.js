// src/controllers/excelImportController.js
const xlsx = require('xlsx');
const Institution = require('../models/Institution');
const Section = require('../models/Section');

exports.importExcel = (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ message: 'Please upload an Excel file.' });
  }

  // Read the uploaded Excel file
  const workbook = xlsx.readFile(file.path);
  const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
  const worksheet = workbook.Sheets[sheetName];

  // Convert the worksheet into JSON format
  const data = xlsx.utils.sheet_to_json(worksheet);

  // Process the data and save it into the database
  data.forEach(async (row) => {
    try {
      const institution = new Institution({
        name: row.name,
        address: row.address,
        referent: row.referent,
        phone: row.phone,
        email: row.email,
        sections: row.sections // Assuming sections are passed as IDs
      });

      await institution.save();
    } catch (error) {
      console.error('Error saving institution:', error);
    }
  });

  // Clean up uploaded file
  // fs.unlinkSync(file.path);  // Optionally remove the file after processing

  res.status(200).json({ message: 'Excel file processed successfully.' });
};
