import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import TextForm from "./components/TextForm/TextForm";

function App() {
  const [Mode, setMode] = useState("light");

  const toggleMode = () => {
    if (Mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar tittle="Textutilis" mode={Mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm heading="Enter Your text" mode={Mode} />
      </div>
    </>
  );
}

export default App;
