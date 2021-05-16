import React from "react";
import getPercentageDiff from "../../helpers/getPercentageDiff";
import ThumbsIcon from "../ThumbsIcon/ThumbsIcon";
import "./VotedProgress.scss";

interface Props {
  votesUp: number;
  votesDown: number;
}

const VotedProgress: React.FC<Props> = ({ votesUp, votesDown }) => {
  const [upVotesPer, downVotesPer] = getPercentageDiff(votesUp, votesDown);

  const upVotesPerLabel = `${upVotesPer.toFixed(1)}%`;
  const downVotesPerLabel = `${downVotesPer.toFixed(1)}%`;

  return (
    <div className="people-card__progress">
      <div
        className="people-card__progress-val people-card__progress-val--up"
        style={{ width: upVotesPerLabel }}
      >
        <div className="people-card__progress-label">
          <ThumbsIcon type="up" className="people-card__progress-icon" />
          <span>{upVotesPerLabel}</span>
        </div>
      </div>
      <div
        className="people-card__progress-val people-card__progress-val--down"
        style={{ width: downVotesPerLabel }}
      >
        <div className="people-card__progress-label">
          <span>{downVotesPerLabel}</span>
          <ThumbsIcon type="down" className="people-card__progress-icon" />
        </div>
      </div>
    </div>
  );
};

export default VotedProgress;
