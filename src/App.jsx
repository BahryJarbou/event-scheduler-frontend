import MainLayout from "./layouts/mainLayout";
import { Routes, Route } from "react-router";
import HomePage from "./pages/home";
import { SignIn } from "./pages/signIn";
import SignUp from "./pages/signUp";
import ProtectedLayout from "./layouts/protectedLayout";
import UserEvents from "./components/userEvents";
import EventDetails from "./pages/eventDetails";
import CreateEvent from "./pages/createEvent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/protected" element={<ProtectedLayout />}>
          <Route index element={<UserEvents />} />
          <Route path="/protected/:eventID" element={<EventDetails />} />
          <Route path="/protected/createEvent" element={<CreateEvent />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
