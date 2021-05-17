import React, { useState } from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import "./VotesInput.scss";

type State = "VOTE_UP" | "VOTE_DOWN";

interface Props {
  onSubmit: (event: State) => void;
  alreadyVote?: boolean;
}

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

  return (
    <div className="votes-input">
      {vote === false && (
        <>
          <ButtonIcon
            type="up"
            isActive={value === "VOTE_UP"}
            className="votes-input__buttons--vote-icon"
            onClick={() => setValue("VOTE_UP")}
          />

          <ButtonIcon
            className="votes-input__buttons--vote-icon"
            type="down"
            isActive={value === "VOTE_DOWN"}
            onClick={() => setValue("VOTE_DOWN")}
          />
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
