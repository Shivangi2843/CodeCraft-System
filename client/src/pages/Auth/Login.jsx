import { useState } from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import API from "../../api/axios";

import { useAuth } from "../../context/AuthContext";

const Login = () => {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] =
    useState({
      emailOrUsername: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const { data } =
        await API.post(
          "/auth/login",
          formData
        );

      // Save token

      localStorage.setItem(
        "token",
        data.token
      );

      // Save user

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      // Context login

      login(data);

      // Redirect

      navigate("/dashboard");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-slate-950
      via-blue-950
      to-slate-900
      px-4
      "
    >
      <form
        onSubmit={handleSubmit}
        className="
        w-full
        max-w-md
        bg-slate-900/80
        backdrop-blur-xl
        border
        border-slate-700
        rounded-3xl
        p-8
        shadow-2xl
        "
      >

        {/* Heading */}

        <h1
          className="
          text-4xl
          font-bold
          text-center
          text-white
          mb-2
          "
        >
          Welcome Back
        </h1>

        <p
          className="
          text-slate-400
          text-center
          mb-8
          "
        >
          Login to continue to CodeCraft
        </p>

        {/* Email */}

        <input
          type="text"
          name="emailOrUsername"
          placeholder="Email or Username"
          value={formData.emailOrUsername}
          onChange={handleChange}
          required
          className="
          w-full
          p-4
          rounded-xl
          bg-slate-800
          text-white
          mb-4
          outline-none
          border
          border-slate-700
          focus:border-blue-500
          "
        />

        {/* Password */}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="
          w-full
          p-4
          rounded-xl
          bg-slate-800
          text-white
          mb-3
          outline-none
          border
          border-slate-700
          focus:border-blue-500
          "
        />

        {/* Forgot Password */}

        <div
          className="
          text-right
          mb-6
          "
        >
          <Link
            to="/forgot-password"
            className="
            text-blue-400
            hover:text-blue-300
            text-sm
            "
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}

        <button
          type="submit"
          disabled={loading}
          className="
          w-full
          bg-blue-600
          hover:bg-blue-700
          duration-300
          p-4
          rounded-xl
          font-semibold
          text-white
          disabled:opacity-50
          "
        >
          {
            loading
            ? "Logging in..."
            : "Login"
          }
        </button>

        {/* Register Redirect */}

        <p
          className="
          text-center
          text-slate-400
          mt-6
          "
        >
          Don’t have an account?{" "}

          <Link
            to="/register"
            className="
            text-blue-400
            hover:text-blue-300
            font-medium
            "
          >
            Register
          </Link>

        </p>

      </form>
    </div>
  );
};

export default Login;