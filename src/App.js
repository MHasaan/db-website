import React from 'react';
import SearchHeader from './Search/Search_Header';
import Selecting from './Search/Selecting';
import Form from './Search/Input';
import BoxComponent from './Information/Box';

function App() {
  return (
    <div className="App">
      <SearchHeader/>
      <Selecting/>
      <Form/>
      <BoxComponent/>
    </div>
  );
}

export default App;