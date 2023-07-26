import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const AuthenticationPage = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Tab buttons for Login and Register */}
      <button onClick={() => handleTabChange('login')}>Login</button>
      <button onClick={() => handleTabChange('register')}>Register</button>

      {activeTab === 'login' ? <Login /> : <Register />}
    </div>
  );
};

export default AuthenticationPage;
