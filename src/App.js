import React from 'react';
import SearchHeader from './Search/Search_Header';
import Selecting from './Search/Selecting';
import Form from './Search/Input';

function App() {
  return (
    <div className="App">
      
      <SearchHeader/>
      
      <Selecting/>
      <Form/>
    </div>
  );
}

export default App;