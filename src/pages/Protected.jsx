import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";

const Protected = () => {
  // kullanicinin yetkisi var mi state'i

  const [isAuth, setIsAuth] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    // auth.currentUser ile otutumun durumnu alabilirdik ancak o veriyi 1 kez veriyor. Canli olarak degisimi izlemek istedigimiz icin : onAuthStateChanged

    onAuthStateChanged(auth, (user) => {
      // eger kullanici varsa yetkisini true'ya cek

      // eger kullanici yoksa null veriyor, vyetkiyi false'a cek
      setIsAuth(user ? true : false);
    });
  }, []);

  // eger yetkisi yoksa
  if (isAuth === false) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export default Protected;
