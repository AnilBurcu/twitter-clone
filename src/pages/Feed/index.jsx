import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import Aside from "./Aside";

const Feed = () => {
  return (
    <div className="feed h-screen bg-black overflow-hidden">
      <Nav />
      <Main />
      <Aside />
    </div>
  );
};

export default Feed;
