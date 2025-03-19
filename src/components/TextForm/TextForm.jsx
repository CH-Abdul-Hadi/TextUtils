import React, { useState } from "react";
import "./style.css";

function TextForm(props) {
  const [text, setText] = useState("Enter Your text");

  const uppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const capitalized = () => {
    let newText = text
      .split(/\s+/)
      .map((word) => {
        if (word.length > 0) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return word;
      })
      .join(" ");
    setText(newText);
  };

  const reset = () => {
    setText("");
  };

  const change = (event) => {
    setText(event.target.value);
  };

  const countWords = () => {
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    return words.length;
  };

  return (
    <>
      <div className="container my-4">
        <h1
          className="mb-4 text-center"
          style={{ color: props.mode === "light" ? "grey" : "white" }}
        >
          {props.heading}
        </h1>
        <div className="mb-4">
          <textarea
            className="form-control shadow-sm"
            value={text}
            onChange={change}
            id="mybox"
            rows="8"
            placeholder="Start typing here..."
            style={{
              resize: "vertical",
              fontSize: "1.1rem",
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "grey" : "white",
            }}
          ></textarea>
        </div>
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          <button
            className="btn btn-primary px-4 py-2"
            onClick={uppercase}
            style={{ minWidth: "120px" }}
          >
            UPPERCASE
          </button>
          <button
            className="btn btn-primary px-4 py-2"
            onClick={lowercase}
            style={{ minWidth: "120px" }}
          >
            Lowercase
          </button>
          <button
            className="btn btn-primary px-4 py-2"
            onClick={capitalized}
            style={{ minWidth: "120px" }}
          >
            Capitalized
          </button>
          <button
            className="btn btn-danger px-4 py-2"
            onClick={reset}
            style={{ minWidth: "120px" }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="container my-4">
        <h2
          className="mb-3"
          style={{ color: props.mode === "light" ? "grey" : "white" }}
        >
          Your Text Summary
        </h2>
        <div
          className="card p-3 shadow-sm"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "light" ? "grey" : "white",
          }}
        >
          <p className="mb-2">
            <strong>
              {countWords()} word{countWords() !== 1 ? "s" : ""} and{" "}
              {text.length} character{text.length !== 1 ? "s" : ""}
            </strong>
          </p>
          <p className="mb-2">
            <strong>{(countWords() * 0.008).toFixed(2)} minutes to read</strong>
          </p>
          <p
            className="mb-0 "
            style={{ color: props.mode === "light" ? "grey" : "#c8c8c8" }}
          >
            Avg. reading speed: 125 words per minute
          </p>
        </div>

        <h3
          className="mt-4"
          style={{ color: props.mode === "light" ? "grey" : "white" }}
        >
          Preview
        </h3>
        <div
          className="p-3 border rounded"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "light" ? "grey" : "white",
            minHeight: "100px",
            whiteSpace: "pre-wrap",
            fontSize: "1.1rem",
          }}
        >
          {text || "Nothing to preview yet..."}
        </div>
      </div>
    </>
  );
}

export default TextForm;
