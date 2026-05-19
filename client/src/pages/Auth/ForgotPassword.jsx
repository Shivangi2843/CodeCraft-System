import { useState } from "react";

import API from "../../api/axios";

const ForgotPassword = () => {

  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await API.post(
        "/auth/forgot-password",
        { email }
      );

      alert(
        "Reset link sent to your email 🚀"
      );

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Something went wrong"
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
      bg-slate-950
      px-4
      "
    >

      <form
        onSubmit={handleSubmit}
        className="
        w-full
        max-w-md
        bg-slate-900
        p-8
        rounded-3xl
        border
        border-slate-700
        "
      >

        <h1
          className="
          text-3xl
          text-white
          text-center
          mb-6
          "
        >
          Forgot Password
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
          className="
          w-full
          p-4
          rounded-xl
          bg-slate-800
          text-white
          mb-6
          outline-none
          "
        />

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
          text-white
          "
        >
          {
            loading
            ? "Sending..."
            : "Send Reset Link"
          }
        </button>

      </form>

    </div>
  );
};

export default ForgotPassword;