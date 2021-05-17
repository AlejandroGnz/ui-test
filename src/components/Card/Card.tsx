import React from "react";
import VotesInput from "../VotesInput/VotesInput";
import VotedProgress from "../VotesProgress/VotedProgress";
import CardCaption from "../CardCaption/CardCaption";
import "./Card.scss";

interface Props {
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: {
    positive: number;
    negative: number;
  };
}
const Card: React.FC<Props> = ({ picture, votes, name, description }) => {
  const { positive, negative } = votes;

  return (
    <div
      className="people-card"
      style={{ backgroundImage: `url(/assets/img/${picture})` }}
    >
      <div className="people-card__footer">
        <div className="people-card__content">
          <CardCaption name={name} description={description} votes={votes} />
          <VotesInput onSubmit={() => {}} />
        </div>
        <VotedProgress votesUp={positive} votesDown={negative} />
      </div>
    </div>
  );
};

export default Card;
