import React, { useEffect, useContext, useCallback } from "react";
import Key from "./Key";
import { AppContext } from "../App";

function Keyboard() {
  const { onSelectLetter, onDelete,  onEnter, disabledLetters} = useContext(AppContext);
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];



  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      const allKeys = [...keys1, ...keys2, ...keys3];
      allKeys.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {onSelectLetter(key);}
  })}})

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keys1.map((key) => {
          return <Key keyValue={key} disabled={disabledLetters.includes(key)}/>;
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return <Key keyValue={key} disabled={disabledLetters.includes(key)}/>;
        })}
      </div>
      <div className="line3">
        <Key keyValue={"ENTER"} bigKey />
        {keys3.map((key) => {
          return <Key keyValue={key} disabled={disabledLetters.includes(key)}/>;
        })}
        <Key keyValue={"DELETE"} bigKey />
      </div>
    </div>
  );
}

export default Keyboard;
