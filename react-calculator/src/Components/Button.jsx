import React from "react";
import "./Button.css";
import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";
// import Box from '@mui/material/Box';s

const Button1 = (props) => {
  return (
    <Button
    variant="contained"
      className="Button"
      onClick={props.onClick}
      data-size={props.size}
      data-value={props.value}
    >
      {props.label}
    </Button>
  );
};

export default Button1;
