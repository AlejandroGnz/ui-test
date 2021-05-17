import React from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import getHigherVoteType from "../../helpers/getHigherVoteType";
import "./CardCaption.scss";

interface Props {
  name: string;
  description: string;
  votes: {
    positive: number;
    negative: number;
  };
}

const CardCaption: React.FC<Props> = ({
  name,
  description,
  votes: { positive, negative },
}) => (
  <div className="card-caption">
    <div className="card-caption__header">
      <div>
        <ButtonIcon type={getHigherVoteType(positive, negative)} />
      </div>
      <h2 className="card-caption__title">{name}</h2>
    </div>
    <p className="card-caption__description">{description}</p>
  </div>
);

export default CardCaption;
