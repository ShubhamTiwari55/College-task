import React from 'react';

const Status = () => {
  const statuses = [
    { applicationNumber: '001', name: 'John Doe', status: 'Verified' },
    { applicationNumber: '002', name: 'Jane Smith', status: 'Pending Police Clearance' },
  ];

  return (
    <div className="p-6 bg-blue-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6">Application Status</h2>
      <div className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
        {statuses.map((status, index) => (
          <div key={index} className="p-4 border rounded mb-2">
            <p>Application Number: {status.applicationNumber}</p>
            <p>Name: {status.name}</p>
            <p>Status: {status.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;
