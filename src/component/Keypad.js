import React from 'react';
import Button from "./Button";
const keys = [
  "(",
  ")",
  "^",
  "C",
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "<-",
  "+",
  "=",
];

const Keypad = ({ onKeyClick }) => {
  const getButtonClass = (key) => {
    let baseClass =
      "p-2 sm:p-3 md:p-4 text-sm sm:text-base md:text-lg font-bold rounded-lg ";
    switch (key) {
      case "C":
        return baseClass + "bg-red-500 text-white";
      case "=":
        return baseClass + "bg-green-500 text-white";
      case "+":
      case "-":
      case "*":
      case "/":
      case "^":
        return baseClass + "bg-orange-500 text-white";
      case "(":
      case ")":
      case "<-":
        return baseClass + "bg-blue-500 text-white";
      default:
        return baseClass + "bg-gray-300";
    }
  };

  //handle the button press and call onKeyClick, onKeyClick is handleKey from Calculator.js
  const handleClick = (key) => {
    if (["+", "-", "*", "/", "^"].includes(key)) {
      onKeyClick(`${key}`);
    } else {
      onKeyClick(key);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-1 sm:gap-2 bg-gray-200 p-2 sm:p-3 md:p-4 rounded-b-lg">
      {keys.map((key) => (
        <Button
          key={key}
          onClick={() => handleClick(key)}
          className={getButtonClass(key)}
        >
          {key}
        </Button>
      ))}
    </div>
  );
};

export default Keypad;
