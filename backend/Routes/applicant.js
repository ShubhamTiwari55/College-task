const express = require('express');
const router = express.Router();
const Applicant = require('../Models/Applicant');

router.post('/', async (req, res) => {
  try {
    const applicant = new Applicant(req.body);
    await applicant.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

module.exports = router;
