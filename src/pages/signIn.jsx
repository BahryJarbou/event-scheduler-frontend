import { useEffect, useState } from "react";

export const SignIn = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col h-screen space-y-2 justify-center items-center">
      <h1 className="text-3xl">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <label htmlFor="email">Email:</label>
        <input
          className="border rounded-lg pl-4"
          onChange={handleInput}
          value={userInput.email}
          type="email"
          id="email"
          name="email"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          className="border rounded-lg pl-4"
          onChange={handleInput}
          value={userInput.password}
          type="password"
          id="password"
          name="password"
          required
        />

        <button className="bg-amber-50 text-black  rounded-lg" type="submit">
          Sign In
        </button>
        <p>
          Don't have an account? <span className="text-blue-400">Register</span>
        </p>
      </form>
    </div>
  );
};
