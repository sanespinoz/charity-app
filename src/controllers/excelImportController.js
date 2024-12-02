// src/controllers/excelImportController.js
const xlsx = require('xlsx');
const Institution = require('../models/Institution');
const Section = require('../models/Section');
const Coordinator = require('../models/Coordinator');
const Child = require('../models/Child');
const Tutor = require('../models/Tutor');

exports.importExcel = (req, res) => {
  const { entity } = req.body;
  const file = req.file;

  if (!file || !entity) {
    return res.status(400).json({ message: 'Please upload an Excel file and specify the entity.' });
  }

  const models = {
    institution: Institution,
    section: Section,
    coordinator: Coordinator,
    tutor: Tutor,
    child: Child
  };

  const model = models[entity.toLowerCase()];

  if (!model) {
    return res.status(400).json({ message: 'Invalid entity specified.' });
  }

  try {
    const workbook = xlsx.readFile(file.path);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(worksheet);

    // Usa una función interna asíncrona para procesar
    (async () => {
      await Promise.all(data.map(async (row) => {
        const record = new model(row);
        await record.save();
      }));

      res.status(200).json({ message: `${entity} data imported successfully.` });
    })();

  } catch (error) {
    console.error(`Error importing ${entity} data:`, error);
    res.status(500).json({ message: 'Error processing the file.', error });
  }
};


/*
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
*/
// Clean up uploaded file
// fs.unlinkSync(file.path);  // Optionally remove the file after processing


