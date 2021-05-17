import React from "react";
import ThumbsIcon from "../ThumbsIcon/ThumbsIcon";
import "./ButtonIcon.scss";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  type: "up" | "down";
  isActive?: boolean;
}

const ButtonIcon: React.FC<Props> = ({
  type,
  isActive,
  className = "",
  onClick,
}) => (
  <button
    className={`${className} buttons buttons--${type} buttons--${
      isActive ? "active" : ""
    }`}
    type="button"
    aria-label={`thumbs ${type}`}
    onClick={onClick}
  >
    <ThumbsIcon type={type} />
  </button>
);

export default ButtonIcon;
