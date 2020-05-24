import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Whiteboard from "./components/Whiteboard";

//top level component
function App() {
  return (
      <div className="container">
        {/*our root element, specific to our application*/}
        <Whiteboard/>
      </div>
  );
}

export default App;
