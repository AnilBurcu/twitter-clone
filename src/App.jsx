import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Protected from "./pages/Protected";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Kullanicinin ersinmek icin hesabina giris yapmasi zorunlu olan route'lari kapsayici route icine aldik */}
        <Route element={<Protected />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<h1>profile</h1>} />
          <Route path="/settings" element={<h1>settings</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
