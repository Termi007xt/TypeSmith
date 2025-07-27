import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

export default function TextForm(props) {
  const toUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const toLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clear = () => {
    setText("");
  };

  const trim = () => {
    let newText = text.trim().replace(/\s+/g, " ");
    setText(newText);
  };

  const fnr = () => {
    let regex = RegExp(findText, "g");
    let newText = text.replace(regex, replaceText);
    setText(newText);
  };

  const TextToSpeech = () => {
    speak({ text });
  };

  const change = (event) => {
    setText(event.target.value);
  };

  const ccopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    });
  };

  const download = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "textform-output.txt";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const [text, setText] = useState("");
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis();

  return (
    <>
      <div className="container my-2">
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

        <button className="btn btn-outline-primary mx-3" onClick={toUppercase}>
          Convert to Uppercase
        </button>

        <button className="btn btn-outline-primary mx-3" onClick={toLowercase}>
          Convert to Lowercase
        </button>

        <button className="btn btn-outline-primary mx-3" onClick={clear}>
          Clear
        </button>

        <button className="btn btn-outline-primary mx-3" onClick={trim}>
          Trim
        </button>

        <button className="btn btn-outline-primary mx-3" onClick={ccopy}>
          Copy to clipboard
        </button>

        <button className="btn btn-outline-primary mx-3" onClick={download}>
          Download .txt ⬇️
        </button>

        <button className="btn btn-outline-primary mx-3" onClick={TextToSpeech}>
          Speak 🔊
        </button>

        <button
          className="btn btn-outline-danger mx-3"
          onClick={cancel}
          disabled={!speaking}
        >
          Stop 🔇
        </button>

        <div className="my-3">
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
        </div>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words - {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <pre>{text}</pre>
      </div>
    </>
  );
}
