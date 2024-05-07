import React, { useEffect, useState } from "react";
import Form from "../../components/Form";
import Post from "../../components/Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase/config";
import Loader from "../../components/Lodaer";

const Main = ({ user }) => {
  const [tweets, setTweets] = useState();
  useEffect(() => {
    // abone olunacak koleksiyonun referansini alma
    const tweetCol = collection(db, "tweets");
    // sorgu ayarlari belirleme
    const q = query(tweetCol, orderBy("createdAt", "desc"));
    // koleksyondaki verilere abone ol(canli olarak)
    const unsub = onSnapshot(q, (snapshot) => {
      // gecici  dizi
      const temp = [];

      // belgelerin icerinsindeki verilere ersisip bir diziye aktar
      snapshot.docs.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));
      // state'e aktar
      setTweets(temp);
    });
    // kullanici sayfadan ayrilirsa aboneligi sonlandir
    return () => unsub();
  }, []);
  return (
    <div className="border-zinc-600 border overflow-y-auto">
      <header className="font-bold p-4 border-b border-zinc-600">
        Anasayfa
      </header>

      <Form user={user} />
      {!tweets ? (
        <Loader />
      ) : (
        tweets.map((tweet, i) => <Post key={i} tweet={tweet} />)
      )}
    </div>
  );
};

export default Main;
