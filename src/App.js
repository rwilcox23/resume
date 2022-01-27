/**
 * App.js is conventional main  progam in a React application.
 * index.js gets called to start the program, but App is the
 * first component that gets added to the user interface.
 * This script is set up to toggle between the "basic"
 * and "pretty" layouts by commenting our which `Rez`
 * is imported.
 */

import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// swap these lines to change the resume style
import Rez from "./PrettyRez.jsx"
// import Rez from "./BasicRez.jsx"

function App() {
  return (
    <div className="App">
      <Rez />
    </div>
  );
}

export default App;
