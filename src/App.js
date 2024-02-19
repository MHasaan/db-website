import React from 'react';
import SearchBar from './Search/SearchBar';
import SearchHeader from './Search/Search_Header';
import Selecting from './Search/Selecting';

function App() {
  return (
    <div className="App">
      <SearchHeader/>
      <Selecting/>
    </div>
  );
}

export default App;