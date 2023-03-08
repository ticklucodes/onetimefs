import React, { useState } from "react";

function BackgroundToggle() {
  const [background, setBackground] = useState("white");

  function toggleBackground() {
    if (background === "white") {
      setBackground("black");
    } else {
      setBackground("white");
    }
  }

  return (
    <div style={{ backgroundColor: background }}>
      <button onClick={toggleBackground}>Toggle Background</button>
    </div>
  );
}

export default BackgroundToggle;
