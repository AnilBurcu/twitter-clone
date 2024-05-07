import { collection, onSnapshot } from "firebase/firestore";
import React, { memo, useEffect, useState } from "react";
import { db } from "../../firebase/config";
const Aside = () => {
  const [count, setCount] = useState();
  useEffect(() => {
    const tweetsCol = collection(db, "tweets");
    onSnapshot(tweetsCol, (snapshot) => {
      setCount(snapshot.size);
    });
  }, []);

  return (
    <div className="max-xl:hidden p-4">
      <h1 className="text-xl font-semibold">Gonderi Sayisi: {count}</h1>
    </div>
  );
};

// feed/index dosyasındaki user state'inin değişmesi bu bileşenin render olmasına sebep oluyordu bu bileşende user'ı kullanmıyacağımızdan dolayı gereksiz yere tekrar render olmasını istemedik. Bu sorunu çözmek için bileşenin aldığı proplar değişmedikçe render olmasını engelleyen React.memo methodunu kullandık

export default React.memo(Aside);
