import React, { useState } from "react";
import ThumbsIcon from "../ThumbsIcon/ThumbsIcon";
import "./VotesInput.scss";

type State = "VOTE_UP" | "VOTE_DOWN";

interface Props {
  onSubmit: (event: State) => void;
  alreadyVote?: boolean;
}

const activeCalss = "votes-input__buttons--active";

const VotesInput: React.FC<Props> = ({ onSubmit, alreadyVote = false }) => {
  const [value, setValue] = useState<State>();
  const [vote, setVote] = useState(alreadyVote);

  const handleVote = () => {
    if (vote) {
      setValue(undefined);
      setVote(false);
    }

    if (vote === false) {
      onSubmit(value as State);
      setVote(true);
    }
  };

  const upBtnActive = value === "VOTE_UP" ? activeCalss : "";
  const downBtnActive = value === "VOTE_DOWN" ? activeCalss : "";

  return (
    <div className="votes-input">
      {vote === false && (
        <>
          <button
            className={`votes-input__buttons votes-input__buttons--vote-down ${downBtnActive}`}
            type="button"
            aria-label="thumbs up"
            onClick={() => setValue("VOTE_DOWN")}
          >
            <ThumbsIcon type="up" />
          </button>
          <button
            className={`votes-input__buttons votes-input__buttons--vote-up ${upBtnActive}`}
            type="button"
            aria-label="thumbs down"
            onClick={() => setValue("VOTE_UP")}
          >
            <ThumbsIcon type="down" />
          </button>
        </>
      )}
      <button
        className="votes-input__buttons votes-input__buttons--vote"
        type="button"
        disabled={!value}
        onClick={handleVote}
        aria-label="vote now"
      >
        {vote === false ? "Vote Now" : "Vote Again"}
      </button>
    </div>
  );
};

export default VotesInput;
