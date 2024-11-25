import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="h-screen flex items-center justify-center bg-blue-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-center text-2xl font-bold mb-6">Passport Automation</h2>
        <InputField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Button label="Applicant" onClick={() => navigate('/applicant')} />
          <Button label="Passport Admin" onClick={() => navigate('/passport-admin')} />
          <Button label="Regional Admin" onClick={() => navigate('/regional-admin')} />
          <Button label="Police Status" onClick={() => navigate('/police-status')} />
          <Button label="Status" onClick={() => navigate('/status')} />
          <Button label="Exit" onClick={() => alert('Exiting application')} />
        </div>
      </div>
    </div>
  );
};

export default Login;
