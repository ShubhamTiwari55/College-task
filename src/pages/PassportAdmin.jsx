import React, { useState } from 'react';
import Button from '../components/Button';

const PassportAdmin = () => {
  const [applications] = useState([
    { applicationNumber: '001', name: 'John Doe', pan: 'ABCDE1234F', dob: '1990-01-01' },
    { applicationNumber: '002', name: 'Jane Smith', pan: 'XYZ1234G', dob: '1995-05-15' },
  ]);

  return (
    <div className="p-6 bg-blue-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6">Passport Admin</h2>
      <div className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
        {applications.map((app, index) => (
          <div key={index} className="p-4 border rounded mb-2">
            <p>Application Number: {app.applicationNumber}</p>
            <p>Name: {app.name}</p>
            <p>PAN: {app.pan}</p>
            <p>DOB: {app.dob}</p>
            <div className="flex gap-4 mt-4">
              <Button label="Verify" />
              <Button label="Grant" />
              <Button label="Do Not Grant" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PassportAdmin;
