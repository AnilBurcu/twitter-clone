import React, { useState } from "react";
import UserInfo from "./UserInfo";
import Content from "./Content";
import Buttons from "./Buttons";
import { auth, db } from "./../../firebase/config";
import DropDown from "./DropDown";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const Post = ({ tweet }) => {
  const [isEdit, setIsEdit] = useState(false);
  // silme butonuna tıklanınca
  const handleDelete = () => {
    const tweetRef = doc(db, "tweets", tweet.id);

    deleteDoc(tweetRef)
      .then(() => toast.warn("Tweet akıştan kaldırıldı"))
      .catch((err) => toast.error("Tweet silinirken bir sorun oluştu"));
  };

  const handleEdit = () => {
    setIsEdit(true);
  };
  return (
    <div className="flex gap-3 border-b py-6 px-3 border-zinc-600">
      <img
        className="w-12 h-12 rounded-full"
        src={tweet.user.photo}
        alt={tweet.user.name}
      />
      <div className="w-full">
        <div className="flex justify-between items-center">
          <UserInfo tweet={tweet} />
          {auth.currentUser.uid === tweet.user.id && (
            <DropDown handleDelete={handleDelete} handleEdit={handleEdit} />
          )}
        </div>
        <Content tweet={tweet} />
        <Buttons likeCount={tweet.likes.length} />
      </div>
    </div>
  );
};

export default Post;
