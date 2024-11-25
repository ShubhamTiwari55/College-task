import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Applicant from './pages/Applicant';
import PassportAdmin from './pages/PassportAdmin';
import RegionalAdmin from './pages/RegionalAdmin';
import PoliceStatus from './pages/PoliceStatus';
import Status from './pages/Status';
import Success from './pages/Success';

const App = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/applicant" element={<Applicant />} />
        <Route path="/passport-admin" element={<PassportAdmin />} />
        <Route path="/regional-admin" element={<RegionalAdmin />} />
        <Route path="/police-status" element={<PoliceStatus />} />
        <Route path="/status" element={<Status />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
};

export default App;
