import React, { useState } from "react";
import Button1 from "./Button";
import "./Calculator.css";

const Calculator = () => {
  const [data, setdata] = useState("");
  
  const calculate = () => {
    try {
      let result = data.replace("^", "**");
      result = result.replace("%", "/100")
      setdata(eval(result));
    } catch (e) {
      setdata("error");
    }
  };

  const handleClick = (e) => {
    const value = e.target.getAttribute("data-value");
    switch (value) {
      case "clear":
        setdata("");
        break;
      case "equal":
        calculate();
        break;
      case "<=":
        setdata(data.slice(0, data.length - 1));
        break;
      default:
        setdata(data + value);
    }
  };
  return (
    <div className="Calculator">
      <h1>Calculator</h1>
      <div className="display">{data}</div>
      <div className="keypad">
        <Button1 onClick={handleClick} label="C" value="clear" />
        <Button1 onClick={handleClick} label="7" value="7" />
        <Button1 onClick={handleClick} label="4" value="4" />
        <Button1 onClick={handleClick} label="1" value="1" />
        <Button1 onClick={handleClick} label="0" value="0" />

        <Button1 onClick={handleClick} label="/" value="/" />
        <Button1 onClick={handleClick} label="8" value="8" />
        <Button1 onClick={handleClick} label="5" value="5" />
        <Button1 onClick={handleClick} label="2" value="2" />
        <Button1 onClick={handleClick} label="." value="." />

        <Button1 onClick={handleClick} label="x" value="*" />
        <Button1 onClick={handleClick} label="9" value="9" />
        <Button1 onClick={handleClick} label="6" value="6" />
        <Button1 onClick={handleClick} label="3" value="3" />
        <Button1 onClick={handleClick} label="%" value="%" />

        <Button1 onClick={handleClick} label="<=" size="1" value="<=" />
        <Button1 onClick={handleClick} label="-" size ="1" value="-" />
        <Button1 onClick={handleClick} label="+" size="1" value="+" />
        <Button1 onClick={handleClick} label="^" size="1" value="^" />
        <Button1 onClick={handleClick} label="=" size="1" value="equal" />
      </div>
    </div>
  );
};
export default Calculator;
