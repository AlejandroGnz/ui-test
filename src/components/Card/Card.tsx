import React from "react";
import VotesInput from "../VotesInput/VotesInput";
import VotedProgress from "../VotesProgress/VotedProgress";

const Card: React.FC = () => {
  return (
    <div style={{ width: 300, height: 300 }}>
      <VotesInput onSubmit={() => {}} />
      <VotedProgress votesUp={10} votesDown={30} />
    </div>
  );
};

export default Card;
