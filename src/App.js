import React from 'react';
import SearchHeader from './Search/Search_Header';
import Selecting from './Search/Selecting';
import Form from './Search/Input';
import name_etc from './Information/info'

function App() {
  return (
    <div className="App">
      <SearchHeader/>
      <Selecting/>
      <Form/>
      <name_etc label="First Name" placeholder="Enter your first name" />
    </div>
  );
}

export default App;