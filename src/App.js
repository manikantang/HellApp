import React, { useState } from "react";

function App() {
  const [fullName, setfullName] = useState({
    fName: "",
    lName: ""
  });
  const [isMouseOver, setMouseOver] = useState("");

  function handleChange(event) {
    const { value, name } = event.target;

    setfullName((prevValue) => {
      console.log("perv");
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  function handleClick(event) {
    setfullName(fullName);
    event.preventDefault();
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName}
        {fullName.lName}
      </h1>
      <form onSubmit={handleClick}>
        <input
          name="fName"
          onChange={handleChange}
          type="text"
          placeholder="What's your name ?"
          //value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          type="text"
          placeholder="What's your name ?"
          //value={fullName.lName}
        />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          type="submit"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default App;
