import React, { useCallback } from "react";
import VotesInput from "../VotesInput/VotesInput";
import VotedProgress from "../VotesProgress/VotedProgress";
import CardCaption from "../CardCaption/CardCaption";
import "./Card.scss";
import CardUptadeTime from "../CardUptadeTime/CardUptadeTime";
import useVotesCount from "../../hooks/useVotesCount";

const Card: React.FC<Celebrity> = ({
  picture,
  votes: defaultVotes,
  name,
  description,
  lastUpdated,
  category,
}) => {
  const [votes, { increase, decrease }] = useVotesCount(name, defaultVotes);
  const { positive, negative } = votes;

  const handleSubmit = useCallback(
    (value: string) => {
      if (value === "VOTE_UP") {
        increase();
      }
      if (value === "VOTE_DOWN") {
        decrease();
      }
    },
    [increase, decrease]
  );

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
              onSubmit={handleSubmit}
            />
          </div>
          <VotedProgress votesUp={positive} votesDown={negative} />
        </div>
      </div>
    </div>
  );
};

export default Card;
