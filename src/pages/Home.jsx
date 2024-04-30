import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";

const Home = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth).then(() => navigate("/"));
  };

  return (
    <div>
      <h1 className="text-3xl text-white text-center my-5"> Ana Sayfa</h1>
      <button onClick={handleLogOut} className="w-full text-center">
        Cikis Yap
      </button>
    </div>
  );
};

export default Home;
