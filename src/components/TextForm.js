import React, { useState } from "react";

export default function TextForm(props) {
  const toUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "primary");
  };

  const toLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "primary");
  };

  const clear = () => {
    setText("");
    props.showAlert("Text has been cleared", "primary");
  };

  const trim = () => {
    let newText = text.trim().replace(/\s+/g, " ");
    setText(newText);
    props.showAlert("Text has been trimmed", "primary");
  };

  const change = (event) => {
    setText(event.target.value);
  };

  const ccopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    });
    props.showAlert("Text has been copied to clipboard", "primary");
  };

  const download = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "textform-output.txt";
    link.click();
    URL.revokeObjectURL(link.href);
    props.showAlert("Text downloaded", "primary");
  };

  const [text, setText] = useState("");
  // const [findText, setFindText] = useState("");
  // const [replaceText, setReplaceText] = useState("");
  // const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis();

  return (
    <>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter text here"
            value={text}
            onChange={change}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#59739e" : "white",

              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <button
          className="btn btn-outline-primary mx-3 my-1"
          onClick={toUppercase}
        >
          Convert to Uppercase
        </button>

        <button
          className="btn btn-outline-primary mx-3 my-1"
          onClick={toLowercase}
        >
          Convert to Lowercase
        </button>

        <button className="btn btn-outline-primary mx-3 my-1" onClick={clear}>
          Clear
        </button>

        <button className="btn btn-outline-primary mx-3 my-1" onClick={trim}>
          Trim
        </button>

        <button className="btn btn-outline-primary mx-3 my-1" onClick={ccopy}>
          Copy to clipboard
        </button>

        <button
          className="btn btn-outline-primary mx-3 my-1"
          onClick={download}
        >
          Download .txt ⬇️
        </button>

        {/* <div
          className="my-3"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Find..."
            value={findText}
            onChange={(e) => setFindText(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Replace with..."
            value={replaceText}
            onChange={(e) => setReplaceText(e.target.value)}
          />
          <button className="btn btn-outline-primary mx-3" onClick={fnr}>
            Find and replace
          </button>
        </div> */}
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.length > 0
            ? `${text.trim().replace(/\s+/g, " ").split(" ").length} words - ${
                text.length
              } characters `
            : `0 words - 0 characters`}
        </p>
        <p>{text.length > 0 ? `${0.008 * text.split(" ").length}` : "0"} Minutes
          to read</p>
        <h3>Preview</h3>
        <pre>{text.length > 0 ? text : "Type something to preview here"}</pre>
      </div>
    </>
  );
}
