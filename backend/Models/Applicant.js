const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  name: String,
  fatherName: String,
  dob: Date,
  address: String,
  tempAddress: String,
  phone: String,
  pan: String,
  email: String,
});

module.exports = mongoose.model('Applicant', applicantSchema);
