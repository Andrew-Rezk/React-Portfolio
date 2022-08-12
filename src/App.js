import './App.css';
import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects'
import Languages  from './components/Languages';
import Contact  from './components/Contact';

function App() {

  return (
    <div className="App">
      < Header />
      < Projects />
      < Languages />
      < Contact />
    </div>
  );
}

export default App;
