import React, { Component, useState } from "react";
import "../styles/App.css";

const App = (props) => {
  const { slides } = props;
  let [counter, setCounter] = useState(0);
  const handleReset = () => {
    if (counter !== 0) {
      setCounter(0);
    }
  };
  const handlePrev = () => {
    if (counter > 0) {
      setCounter(--counter);
    }
  };
  const handleNext = () => {
    if (counter < slides.length - 1) {
      setCounter(++counter);
    }
  };
  return (
    <>
      <div id="navigation">
        <button
          data-testid="button-restart"
          onClick={handleReset}
          disabled={counter == 0 ? true : null}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          onClick={handlePrev}
          disabled={counter == 0 ? true : null}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          onClick={handleNext}
          disabled={counter == slides.length - 1 ? true : null}
        >
          Next
        </button>
      </div>
      <h1 data-testid="title">{slides[counter].title} </h1>
      <p data-testid="text">{slides[counter].text} </p>
    </>
  );
};

export default App;
