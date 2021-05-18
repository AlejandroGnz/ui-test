import React from "react";
import getRelativeTime from "../../helpers/getRelativeTime";
import "./CardUptadeTime.scss";

interface Props {
  category: string;
  lastUpdated: string;
  voted?: boolean;
}

const CardUptadeTime: React.FC<Props> = ({
  lastUpdated,
  category,
  voted = false,
}) => {
  return (
    <p className="last-updated-label">
      {voted
        ? "Thank you for your vote!"
        : `${getRelativeTime(lastUpdated)} ${category}`}
    </p>
  );
};

export default CardUptadeTime;
