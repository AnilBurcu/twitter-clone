import React from "react";

const Content = ({ tweet }) => {
  return (
    <div>
      {tweet.textContent && <p>{tweet.textContent}</p>}
      {tweet.imageContent && (
        <img
          src={tweet.imageContent}
          className="my-2 rounded-lg object-cover mah-h-[400px]"
        ></img>
      )}
    </div>
  );
};

export default Content;
