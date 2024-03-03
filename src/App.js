import React, { useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import SearchHeader from './Search/Search_Header';
import Selecting from './Search/Selecting';
import Form from './Search/Input';
import BoxComponent from './Information_Box/Box';
import ResponsiveAppBar from './App_Bar/App_Bar';
import LoginForm from './Login/LoginForm';
import './index.css';
import BlackBackground from './Information_Box/black';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="loginForm">
        <LoginForm onLoginForm={() => setIsLoggedIn(true)} />
      </div>
    );
  }

  return (
    <NextUIProvider>
        <ResponsiveAppBar/>
        <SearchHeader/>
        <Selecting/>
        <Form/>
        <BoxComponent/>
        <BlackBackground/>
    </NextUIProvider>
  );
}

export default App;
