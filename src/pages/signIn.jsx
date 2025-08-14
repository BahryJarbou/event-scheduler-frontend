import { Navigate, useNavigate, Link } from "react-router";
import { useState } from "react";
import { AuthContext } from "../context/authContext";
import { use } from "react";

export const SignIn = () => {
  const navigate = useNavigate();
  const { isAuthenticated, toggleAuth } = use(AuthContext);
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    setUserInput((prev) => {
      return { email, password };
    });
    authUser();
  };

  const authUser = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userInput.email,
          password: userInput.password,
        }),
      });
      if (res.status !== 200) {
        throw new Error("couldn't fetch data");
      }
      const data = await res.json();
      toggleAuth();
      localStorage.setItem("token", data.token);
      console.log(isAuthenticated);
      localStorage.setItem("isAuthenticated", JSON.stringify(!isAuthenticated));
      navigate("/protected");
    } catch (err) {
      console.log(err);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/protected" />;
  }

  return (
    <div className="flex flex-col h-screen justify-baseline items-center mt-[2vh]">
      <h1 className="text-3xl mb-[2vh]">Sign In</h1>
      <form
        action={handleSubmit}
        className="flex flex-col space-y-2 min-w-[50vw] min-h-[50vh] gap-10 border rounded-2xl p-10"
      >
        <label htmlFor="email">Email:</label>
        <input
          className="border rounded-lg pl-4 min-h-[5vh]"
          value={userInput.email}
          onChange={(e) =>
            setUserInput((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          type="email"
          id="email"
          name="email"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          className="border rounded-lg pl-4 min-h-[5vh]"
          value={userInput.password}
          onChange={(e) =>
            setUserInput((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          type="password"
          id="password"
          name="password"
          required
        />

        <button className="btn btn-xl" type="submit">
          Sign In
        </button>
        <p>
          Don't have an account?{" "}
          <Link to="/signUp">
            <span className="text-blue-400">Register</span>
          </Link>
        </p>
      </form>
    </div>
  );
};
