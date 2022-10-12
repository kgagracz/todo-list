import React from "react";
import "./Button.css";

interface Props {
  handleClick: (e: any) => any;
  text: string;
}

const Button: React.FC<Props> = ({ handleClick, text }) => {
  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
