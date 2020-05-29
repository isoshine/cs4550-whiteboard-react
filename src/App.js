import React from 'react';
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
