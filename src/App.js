import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import SignUp from "./components/Forms/Form/SignUp";
import SignIn from "./components/Forms/Form/SignIn";
function App() {
  return (
    <>
      <div className="mb-5">
        <Navigation />
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </>
  );
}

export default App;
