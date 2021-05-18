import React from "react";
import Card from "./components/Card/Card";
import list from "./assets/data.json";

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {list.data.map(
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
  );
};

export default App;
