import React from "react";

interface Props {
  type: "up" | "down";
  className?: string;
}

const ThumbsIcon: React.FC<Props> = ({ type, className }) => {
  return (
    <img
      className={className}
      src={`assets/img/thumbs-${type}.svg`}
      alt={`thumbs ${type}`}
    />
  );
};

export default ThumbsIcon;
