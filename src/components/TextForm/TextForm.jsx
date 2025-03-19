import React, { useState } from "react";
import "./style.css";

function TextForm(props) {
  const [text, setText] = useState("Enter Your text");

  const uppercase = () => setText(text.toUpperCase());
  const lowercase = () => setText(text.toLowerCase());
  const capitalized = () => {
    let newText = text
      .split(/\s+/)
      .map((word) =>
        word.length > 0
          ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          : word
      )
      .join(" ");
    setText(newText);
  };
  const reset = () => setText("");
  const change = (event) => setText(event.target.value);

  const countWords = () => {
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    return words.length;
  };

  return (
    <div className="container my-4">
      <h1
        className="mb-4 text-center fw-bold"
        style={{ color: props.mode === "light" ? "#34495e" : "#ecf0f1" }}
      >
        {props.heading}
      </h1>
      <div className="mb-4">
        <textarea
          className="form-control shadow-sm rounded-3"
          value={text}
          onChange={change}
          id="mybox"
          rows="8"
          placeholder="Start typing here..."
          style={{
            resize: "vertical",
            fontSize: "1.1rem",
            backgroundColor: props.mode === "light" ? "#fff" : "#34495e",
            color: props.mode === "light" ? "#2c3e50" : "#ecf0f1",
            borderColor: props.mode === "light" ? "#bdc3c7" : "#7f8c8d",
          }}
        ></textarea>
      </div>
      <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
        <button
          className="btn btn-primary px-4 py-2 rounded-pill"
          onClick={uppercase}
        >
          UPPERCASE
        </button>
        <button
          className="btn btn-primary px-4 py-2 rounded-pill"
          onClick={lowercase}
        >
          lowercase
        </button>
        <button
          className="btn btn-primary px-4 py-2 rounded-pill"
          onClick={capitalized}
        >
          Capitalized
        </button>
        <button
          className="btn btn-outline-danger px-4 py-2 rounded-pill"
          onClick={reset}
        >
          Reset
        </button>
      </div>

      <div className="container my-4">
        <h2
          className="mb-3 fw-bold"
          style={{ color: props.mode === "light" ? "#34495e" : "#ecf0f1" }}
        >
          Your Text Summary
        </h2>
        <div
          className="card p-3 shadow-sm rounded-3"
          style={{
            backgroundColor: props.mode === "light" ? "#fff" : "#34495e",
            color: props.mode === "light" ? "#2c3e50" : "#ecf0f1",
          }}
        >
          <p className="mb-2">
            <strong>
              {countWords()} word{countWords() !== 1 ? "s" : ""} | {text.length}{" "}
              character{text.length !== 1 ? "s" : ""}
            </strong>
          </p>
          <p className="mb-0">
            <strong>{(countWords() * 0.008).toFixed(2)} min read</strong>
          </p>
        </div>

        <h3
          className="mt-4 fw-bold"
          style={{ color: props.mode === "light" ? "#34495e" : "#ecf0f1" }}
        >
          Preview
        </h3>
        <div
          className="p-3 border rounded-3 shadow-sm"
          style={{
            backgroundColor: props.mode === "light" ? "#fff" : "#34495e",
            color: props.mode === "light" ? "#2c3e50" : "#ecf0f1",
            minHeight: "100px",
            whiteSpace: "pre-wrap",
            fontSize: "1.1rem",
          }}
        >
          {text || "Nothing to preview..."}
        </div>
      </div>
    </div>
  );
}

export default TextForm;
