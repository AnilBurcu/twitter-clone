import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  // sifre sifirlama e-postasi

  const handleReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => toast.info("Sifre sifirlama email'i gonderilmistir."))
      .catch((err) => toast.error("Bir hata olustu" + err.code));
  };

  // form gonderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);

    if (isSignUp) {
      // eger kaydol modundaysa: hesap olustur
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("Hesabiniz olusturuldu");
          navigate("/home");
        })
        .catch((err) => toast.error("Bir sorun olustu: " + err.code));
    } else {
      // giris modundaysa: giris yap
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("Hesabiniza giris yapildi");
          navigate("/home");
        })
        .catch((err) => {
          toast.error("Bir sorun olustu: " + err.code);
          if (err.code === "auth/invalid-credential") setIsError(true);
        });
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <div className="bg-black flex flex-col gap-10 py-16 px-32 rounded-lg">
        <div className="flex justify-center">
          <img className="h-[70px]" src="/x-logo.webp" />
        </div>

        <h1 className="text-lg font-bold text-center">Twitter'a giriş yap</h1>

        <button className="bg-white flex items-center py-2 px-10 rounded-full gap-3 transition hover:bg-gray-300 text-black  whitespace-nowrap">
          <img className="h-[30px]" src="/google-logo.svg" />
          Google ile Giriş Yap
        </button>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="text-black rounded mt-1 p-2 outline-none shadow-none focus:shadow-[gray]"
            type="text"
          />
          <label className="flex flex-col mt-2">Sifre</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="text-black rounded mt-1 p-2 outline-none shadow-none focus:shadow-[gray]"
            type="password"
          />
          <button className="mt-10 bg-white text-black rounded-full p-1 font-bold transition hover:bg-gray-300">
            {isSignUp ? "Kaydol" : "Giris Yap"}
          </button>
          <p onClick={() => setIsSignUp(!isSignUp)} className="mt-5">
            <span className="text-gray-500">
              {isSignUp ? "Hesabiniz varsa" : "Hesabiniz Yoksa"}
            </span>
            <span className="ms-2 text-blue-500 cursor-pointer underline">
              {isSignUp ? "Giris Yapin" : "Kaydolun"}
            </span>
          </p>
        </form>
        {isError && (
          <p
            onClick={handleReset}
            className="text-red-500 text-center cursor-pointer"
          >
            Sifrenizi mi unuttunuz?
          </p>
        )}
      </div>
    </section>
  );
};

export default Login;
