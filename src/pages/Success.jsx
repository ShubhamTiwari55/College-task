import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Application Submitted Successfully!</h2>
        <p className="mb-6">Your application has been registered. Please check the status for updates.</p>
        <Button label="Go Back to Login" onClick={() => navigate('/')} />
      </div>
    </div>
  );
};

export default Success;
