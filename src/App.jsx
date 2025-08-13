import { useState } from "react";
import MainLayout from "./layouts/mainLayout";
import { Routes, Route } from "react-router";
import HomePage from "./pages/home";
import { SignIn } from "./pages/signIn";
import SignUp from "./pages/signUp";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
