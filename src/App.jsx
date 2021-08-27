import React from 'react';
import './App.css'

import Students from './components/Students/Students'
const App = () => {
  return (
    <div className="App" data-testid="parent-div">
      <Students />
    </div>
  );
}

export default App;