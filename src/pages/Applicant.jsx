import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

const Applicant = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    dob: '',
    address: '',
    tempAddress: '',
    phone: '',
    pan: '',
    email: '',
  });

  const handleSubmit = () => {
    alert('Application submitted successfully!');
    console.log(formData);
  };

  return (
    <div className="p-6 bg-blue-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6">Applicant Details</h2>
      <form className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
        {Object.keys(formData).map((key) => (
          <InputField
            key={key}
            label={key.replace(/([A-Z])/g, ' $1').toUpperCase()}
            value={formData[key]}
            onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
          />
        ))}
        <Button label="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Applicant;
