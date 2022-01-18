import './App.css';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleSubtractOne = () => {
    setCount(count - 1);
  };

  const handleAddOne = () => {
    setCount(count + 1);
  };

  const handleOnChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubtractQuantity = () => {
    if (quantity) setCount(count - parseInt(quantity, 10));
  };

  const handleAddQuantity = () => {
    if (quantity) setCount(count + parseInt(quantity, 10));
  };

  const handleResetCounter = () => {
    setCount(0);
    setQuantity(0);
  };

  return (
    <div
      id={"content-wrapper"}
      className={"flex column vertical-align horizontal-align"}
    >
      <h1>Simple Counter in React using Hooks</h1>
      <div
        id={"counter-wrapper"}
        className={"flex column vertical-align justify-sp-ev"}
      >
        <div className={"flex column vertical-align"}>
          <p>{count}</p>
          <div className={"flex row justify-sp-ar mt-10"}>
            <button className={"mr-5"} onClick={handleSubtractOne}>
              -1
            </button>
            <button onClick={handleAddOne}>+1</button>
          </div>
        </div>
        <div>
          <h3>Add / subtract custom quantity</h3>
          <div className={"flex row vertical-align horizontal-align"}>
            <input
              type="text"
              value={quantity}
              onChange={handleOnChange}
              className={"mr-10"}
            />

            <button
              className={"mr-5 width-40"}
              onClick={handleSubtractQuantity}
            >
              -
            </button>
            <button className={"width-40"} onClick={handleAddQuantity}>
              +
            </button>
          </div>
        </div>
        <button id={"counter-reset"} onClick={handleResetCounter}>
          Reset Counter
        </button>
      </div>
    </div>
  );
}
