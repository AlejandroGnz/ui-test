import React from "react";
import list from "./assets/data.json";
import PostView from "./components/PostView/PostView";

const App: React.FC = () => {
  return <PostView data={list.data} />;
};

export default App;
