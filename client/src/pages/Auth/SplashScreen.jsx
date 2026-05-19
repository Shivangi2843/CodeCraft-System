import { motion } from "framer-motion";

import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const SplashScreen = () => {

  const navigate = useNavigate();

  useEffect(() => {

    setTimeout(() => {
      navigate("/welcome");
    }, 2500);

  }, []);

  return (
    <div
      className="
      h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-slate-950
      via-blue-950
      to-slate-900
      "
    >
      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.5,
        }}

        animate={{
          opacity: 1,
          scale: 1,
        }}

        transition={{
          duration: 1,
        }}

        className="
        text-6xl
        font-bold
        text-blue-400
        "
      >
        CodeCraft
      </motion.h1>
    </div>
  );
};

export default SplashScreen;