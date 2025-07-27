import React, { useState } from "react";

export default function TextForm(props) {
  const toUppercase = () => {
    // console.log("Uppercase button clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const change = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Enter text here"
          value={text}
          onChange={change}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn-primary" onClick={toUppercase}>
        Convert to Uppercase
      </button>
    </div>
  );
}
