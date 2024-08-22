import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  appendToDisplay,
  clearDisplay,
  backspace,
  evaluateExpression,
} from "../slices/calculatorSlice";
import Display from "./Display";
import Keypad from "./Keypad";

const Calculator = () => {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.calculator.display);
  const handleKey = (key) => {
    switch (key) {
      case "=":
        dispatch(evaluateExpression());
        break;
      case "C":
        dispatch(clearDisplay());
        break;
      case "<-":
        dispatch(backspace());
        break;
      default:
        dispatch(appendToDisplay(key));
        break;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-100 rounded-lg shadow-lg">
      <Display value={display} />
      <Keypad onKeyClick={handleKey} />
      <div className="p-4 text-center">
        <Link
          to="/history"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          View History
        </Link>
      </div>
    </div>
  );
};

export default Calculator;
