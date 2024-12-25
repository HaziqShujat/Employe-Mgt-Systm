import { useState } from "react";

const Login = ({Handlelogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Handlelogin(email,password)
    console.log("This is email:", email);
    console.log("This is password:", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-600 text-center mb-8">
          Please sign in to your account
        </p>
        <form
          className="flex flex-col items-center space-y-5"
          onSubmit={handleSubmit}
        >
          {/* Email Input */}
          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 px-4 py-3 w-full text-sm outline-none bg-gray-50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="w-full">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 px-4 py-3 w-full text-sm outline-none bg-gray-50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white px-4 py-3 text-sm font-medium rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-purple-600 font-medium hover:underline"
          >
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
