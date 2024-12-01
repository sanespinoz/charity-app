const express = require('express');
const router = express.Router();
const Child = require('../models/Child');

router.get('/children', async (req, res) => {
    try {
      const children = await Child.find().populate('tutor');
      res.json(children);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  module.exports = router;