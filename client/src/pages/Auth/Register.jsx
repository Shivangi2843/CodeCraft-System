import { useState } from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import API from "../../api/axios";

const Register = () => {

  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    // Password Match Check

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      return alert(
        "Passwords do not match"
      );
    }

    try {

      setLoading(true);

      const { data } =
        await API.post(
          "/auth/register",
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

      alert(
        "Account Created Successfully 🚀"
      );

      navigate("/dashboard");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Registration failed"
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
      py-10
      "
    >
      <form
        onSubmit={handleSubmit}
        className="
        w-full
        max-w-lg
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
          Create Account
        </h1>

        <p
          className="
          text-slate-400
          text-center
          mb-8
          "
        >
          Join the CodeCraft platform
        </p>

        {/* Full Name */}

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
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

        {/* Username */}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
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

        {/* Email */}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
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
          mb-4
          outline-none
          border
          border-slate-700
          focus:border-blue-500
          "
        />

        {/* Confirm Password */}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="
          w-full
          p-4
          rounded-xl
          bg-slate-800
          text-white
          mb-6
          outline-none
          border
          border-slate-700
          focus:border-blue-500
          "
        />

        {/* Button */}

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
            ? "Creating Account..."
            : "Register"
          }
        </button>

        {/* Login Redirect */}

        <p
          className="
          text-center
          text-slate-400
          mt-6
          "
        >
          Already have an account?{" "}

          <Link
            to="/login"
            className="
            text-blue-400
            hover:text-blue-300
            font-medium
            "
          >
            Login
          </Link>

        </p>

      </form>
    </div>
  );
};

export default Register;