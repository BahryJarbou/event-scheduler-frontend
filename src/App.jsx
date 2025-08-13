import { useState } from "react";
import MainLayout from "./layouts/mainLayout";
import { Routes, Route } from "react-router";
import HomePage from "./pages/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
