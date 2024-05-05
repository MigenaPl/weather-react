import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" temperature={15} />
    </div>
  );
}

export default App;
