// src/services/excelImportService.js
const xlsx = require('xlsx');

// Helper function to read the Excel file and return parsed data
const parseExcelFile = (filePath) => {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0]; // First sheet
  const worksheet = workbook.Sheets[sheetName];
  return xlsx.utils.sheet_to_json(worksheet);
};

module.exports = { parseExcelFile };
