import React, { useState } from "react";
import Card from "../Card/Card";
import PostHeader from "../PostHeader/PostHeader";
import "./PostView.scss";

interface Props {
  data: Celebrity[];
}

const PostView: React.FC<Props> = ({ data }) => {
  const [view, setView] = useState("grid");

  return (
    <>
      <PostHeader onChange={setView} />
      <div className={`post-view post-view--${view}`}>
        {data.map(
          ({ picture, name, description, votes, category, lastUpdated }) => (
            <Card
              key={name}
              picture={picture}
              name={name}
              description={description}
              category={category}
              lastUpdated={lastUpdated}
              votes={votes}
            />
          )
        )}
      </div>
    </>
  );
};

export default PostView;
