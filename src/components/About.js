import React, { useState } from "react";

export default function About(props) {
  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode === "dark" ? "#59739e" : "white",
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "#59739e" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "dark" ? "#59739e" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              Utility
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#59739e" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              An interactive and customizable React-based web application that
              empowers users to transform and manage text effortlessly.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "#59739e" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "dark" ? "#59739e" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Offers a wide range of tools including uppercase/lowercase
              conversion, trimming, clearing, copying, downloading, previewing,
              and reading time estimation.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "#59739e" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor: props.mode === "dark" ? "#59739e" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              Accessibility
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Built with a flexible custom theme engine for a fully personalized
              UI/UX.Perfect for writers, coders, students, and professionals
              needing a reliable text utility tool.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
