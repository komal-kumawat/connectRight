import { useState, type ReactNode } from "react";

interface IButton {
  color: string;
  bgColor: string;
  text: string;
  onClick?:()=>void
}

const Button = ({ color, bgColor, text , onClick }: IButton) => {
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
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;
