import React from "react";
import Form from "../../components/Form";
import Post from "../../components/Post";

const Main = ({ user }) => {
  return (
    <div className="border-zinc-600 border overflow-y-auto">
      <header className="font-bold p-4 border-b border-zinc-600">
        Anasayfa
      </header>

      <Form user={user} />
      <Post />
    </div>
  );
};

export default Main;
