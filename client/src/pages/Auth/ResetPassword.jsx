import { useState } from "react";

import API from "../../api/axios";

const ResetPassword = () => {

  const [email, setEmail] =
    useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/auth/forgot-password",
        { email }
      );

      alert(
        "Reset email sent!"
      );

    } catch (error) {

      alert(
        error.response?.data?.message
      );
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
      "
    >
      <form
        onSubmit={handleSubmit}
        className="
        bg-slate-900
        p-8
        rounded-3xl
        w-full
        max-w-md
        "
      >

        <h1
          className="
          text-3xl
          text-white
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
          className="
          w-full
          p-4
          rounded-xl
          bg-slate-800
          text-white
          mb-4
          "
        />

        <button
          className="
          w-full
          bg-blue-600
          p-4
          rounded-xl
          text-white
          "
        >
          Send Reset Link
        </button>

      </form>
    </div>
  );
};

export default ResetPassword;