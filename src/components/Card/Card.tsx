import React from "react";
import VotesInput from "../VotesInput/VotesInput";
import VotedProgress from "../VotesProgress/VotedProgress";
import CardCaption from "../CardCaption/CardCaption";
import "./Card.scss";
import CardUptadeTime from "../CardUptadeTime/CardUptadeTime";

const Card: React.FC<Celebrity> = ({
  picture,
  votes,
  name,
  description,
  lastUpdated,
  category,
}) => {
  const { positive, negative } = votes;

  return (
    <div className="people-card">
      <div
        className="people-card__bg"
        style={{ backgroundImage: `url(/assets/img/${picture})` }}
      >
        <div className="people-card__footer">
          <div className="people-card__content">
            <CardCaption name={name} description={description} votes={votes} />
            <VotesInput
              renderUpdateLabel={({ vote }) => (
                <CardUptadeTime
                  voted={vote}
                  lastUpdated={lastUpdated}
                  category={category}
                />
              )}
              onSubmit={() => {}}
            />
          </div>
          <VotedProgress votesUp={positive} votesDown={negative} />
        </div>
      </div>
    </div>
  );
};

export default Card;
