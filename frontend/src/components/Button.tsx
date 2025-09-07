import { useState } from "react";

interface IButton {
  color: string;
  bgColor: string;
  text: string;
}

const Button = ({ color, bgColor, text }: IButton) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="Button"
      style={{
        color:hover?bgColor:color,
        backgroundColor: hover ? color : bgColor, // change bg on hover
        padding: "7px 10px",
        borderRadius: "8px",
        margin: "5px",
        display: "inline-block",
        border: "1px solid",
        cursor: "pointer",
        transition: "all 0.3s ease", // smooth animation
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}
    </div>
  );
};

export default Button;
