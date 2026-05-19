import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

const Welcome = () => {

  const navigate = useNavigate();

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
      <motion.div

        initial={{
          opacity: 0,
          y: 50,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
        }}

        className="
        bg-slate-900/80
        backdrop-blur-lg
        border
        border-slate-700
        rounded-3xl
        p-10
        w-full
        max-w-md
        text-center
        "
      >

        <h1
          className="
          text-5xl
          font-bold
          text-white
          mb-4
          "
        >
          CodeCraft
        </h1>

        <p
          className="
          text-slate-300
          mb-8
          "
        >
          Build. Learn. Practice. Create.
        </p>

        <button
          onClick={() =>
            navigate("/login")
          }
          className="
          w-full
          bg-blue-600
          hover:bg-blue-700
          duration-300
          p-4
          rounded-xl
          text-white
          font-semibold
          mb-4
          "
        >
          Login
        </button>

        <button
          onClick={() =>
            navigate("/register")
          }
          className="
          w-full
          bg-slate-800
          hover:bg-slate-700
          duration-300
          p-4
          rounded-xl
          text-white
          font-semibold
          "
        >
          Register
        </button>

      </motion.div>
    </div>
  );
};

export default Welcome;