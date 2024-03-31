import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather city="" temperature={15} />
      </header>
    </div>
  );
}

export default App;
