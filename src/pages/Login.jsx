import { useState } from "react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  // form gonderilince

  const handleSubmit = (e) => {
    e.preventDefault();
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
            className="text-black rounded mt-1 p-2 outline-none shadow-none focus:shadow-[gray]"
            type="text"
          />
          <label className="flex flex-col mt-2">Sifre</label>
          <input
            className="text-black rounded mt-1 p-2 outline-none shadow-none focus:shadow-[gray]"
            type="text"
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
      </div>
    </section>
  );
};

export default Login;
