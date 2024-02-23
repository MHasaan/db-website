import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import SearchHeader from './Search/Search_Header';
import Selecting from './Search/Selecting';
import Form from './Search/Input';
import BoxComponent from './Information_Box/Box';
import ResponsiveAppBar from './App_Bar/App_Bar';

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <ResponsiveAppBar/>
        <SearchHeader/>
        <Selecting/>
        <Form/>
        <BoxComponent/>
      </div>
    </NextUIProvider>
  );
}

export default App;
