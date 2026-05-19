import "@fontsource/poppins";

import {
  FaHome,
  FaCode,
  FaBookOpen,
  FaProjectDiagram,
  FaRobot,
  FaFileAlt,
  FaBell,
  FaSearch,
  FaFire,
  FaGithub,
} from "react-icons/fa";

import { motion } from "framer-motion";

const Dashboard = () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const cards = [

    {
      title: "Code Compiler",
      desc:
        "Run and test code instantly.",
      icon: <FaCode />,
      color: "from-orange-400 to-orange-500",
    },

    {
      title: "AI Assistant",
      desc:
        "Generate code & debug faster.",
      icon: <FaRobot />,
      color: "from-pink-400 to-pink-500",
    },

    {
      title: "Learning Hub",
      desc:
        "Access tutorials and notes.",
      icon: <FaBookOpen />,
      color: "from-blue-400 to-blue-500",
    },

    {
      title: "Projects Hub",
      desc:
        "Manage coding projects easily.",
      icon: <FaProjectDiagram />,
      color: "from-purple-400 to-purple-500",
    },

    {
      title: "Resume Builder",
      desc:
        "Create ATS-friendly resumes.",
      icon: <FaFileAlt />,
      color: "from-green-400 to-green-500",
    },

    {
      title: "GitHub Connect",
      desc:
        "Connect repositories professionally.",
      icon: <FaGithub />,
      color: "from-slate-400 to-slate-600",
    },
  ];

  return (

    <div
      className="
      min-h-screen
      bg-[#FFF7F2]
      flex
      font-[Poppins]
      "
    >

      {/* SIDEBAR */}

      <aside
        className="
        w-72
        bg-white
        rounded-r-[40px]
        p-6
        shadow-xl
        hidden
        lg:flex
        flex-col
        "
      >

        {/* LOGO */}

        <div
          className="
          flex
          items-center
          gap-3
          mb-12
          "
        >

          <div
            className="
            w-14
            h-14
            rounded-2xl
            bg-gradient-to-r
            from-orange-400
            to-orange-500
            flex
            items-center
            justify-center
            text-white
            text-2xl
            font-bold
            "
          >
            C
          </div>

          <div>

            <h1
              className="
              text-3xl
              font-bold
              text-slate-800
              "
            >
              CodeCraft
            </h1>

            <p
              className="
              text-slate-400
              text-sm
              "
            >
              Coding Platform
            </p>

          </div>

        </div>

        {/* MENU */}

        <div
          className="
          flex
          flex-col
          gap-4
          "
        >

          {[
            {
              name: "Overview",
              icon: <FaHome />,
            },

            {
              name: "Compiler",
              icon: <FaCode />,
            },

            {
              name: "Projects",
              icon: <FaProjectDiagram />,
            },

            {
              name: "Learning",
              icon: <FaBookOpen />,
            },

            {
              name: "AI Assistant",
              icon: <FaRobot />,
            },

            {
              name: "Resume Builder",
              icon: <FaFileAlt />,
            },
          ].map((item, index) => (

            <motion.button

              whileHover={{
                scale: 1.03,
              }}

              key={index}

              className={`
                flex
                items-center
                gap-4
                p-4
                rounded-2xl
                text-lg
                font-medium
                duration-300

                ${
                  index === 0
                    ? `
                    bg-orange-100
                    text-orange-500
                    `
                    : `
                    text-slate-600
                    hover:bg-orange-50
                    `
                }
              `}
            >

              {item.icon}

              {item.name}

            </motion.button>
          ))}

        </div>

        {/* PREMIUM CARD */}

        <div
          className="
          mt-auto
          bg-gradient-to-r
          from-orange-400
          to-orange-500
          rounded-[30px]
          p-6
          text-white
          "
        >

          <h2
            className="
            text-2xl
            font-bold
            mb-3
            "
          >
            Upgrade Pro 🚀
          </h2>

          <p
            className="
            text-orange-100
            mb-5
            "
          >
            Unlock premium features and AI tools.
          </p>

          <button
            className="
            bg-white
            text-orange-500
            px-5
            py-3
            rounded-2xl
            font-semibold
            "
          >
            Get Premium
          </button>

        </div>

      </aside>

      {/* MAIN SECTION */}

      <main
        className="
        flex-1
        p-8
        overflow-y-auto
        "
      >

        {/* TOPBAR */}

        <div
          className="
          flex
          flex-col
          lg:flex-row
          justify-between
          items-center
          gap-5
          mb-10
          "
        >

          {/* WELCOME */}

          <div>

            <h1
              className="
              text-5xl
              font-bold
              text-slate-800
              "
            >
              Welcome back,
              {" "}
              {user?.fullName}
              👋
            </h1>

            <p
              className="
              text-slate-500
              text-lg
              mt-3
              "
            >
              Continue your coding journey today.
            </p>

          </div>

          {/* SEARCH */}

          <div
            className="
            flex
            items-center
            gap-4
            "
          >

            <div
              className="
              bg-white
              rounded-2xl
              px-5
              py-4
              flex
              items-center
              gap-3
              shadow-md
              "
            >

              <FaSearch
                className="
                text-slate-400
                "
              />

              <input
                type="text"
                placeholder="Search here..."
                className="
                outline-none
                bg-transparent
                "
              />

            </div>

            <button
              className="
              w-14
              h-14
              bg-white
              rounded-2xl
              flex
              items-center
              justify-center
              shadow-md
              "
            >

              <FaBell />

            </button>

            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="profile"
              className="
              w-14
              h-14
              rounded-2xl
              object-cover
              "
            />

          </div>

        </div>

        {/* HERO */}

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          className="
          bg-gradient-to-r
          from-orange-400
          to-orange-500
          rounded-[40px]
          p-10
          text-white
          relative
          overflow-hidden
          mb-10
          "
        >

          <div
            className="
            absolute
            top-0
            right-0
            w-72
            h-72
            bg-white/10
            rounded-full
            blur-3xl
            "
          />

          <div
            className="
            relative
            z-10
            "
          >

            <h1
              className="
              text-6xl
              font-black
              leading-tight
              mb-5
              "
            >
              Build Your
              <br />
              Dream Projects 🚀
            </h1>

            <p
              className="
              text-xl
              text-orange-100
              max-w-2xl
              "
            >
              Practice coding, manage projects,
              learn faster and grow your developer career.
            </p>

            <button
              className="
              mt-8
              bg-white
              text-orange-500
              px-8
              py-4
              rounded-2xl
              font-bold
              text-lg
              hover:scale-105
              duration-300
              "
            >
              Start Coding
            </button>

          </div>

        </motion.div>

        {/* STATS */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
          mb-10
          "
        >

          {[
            {
              title: "Coding Streak",
              value: "24 Days",
              icon: <FaFire />,
            },

            {
              title: "Projects",
              value: "12 Completed",
              icon: <FaProjectDiagram />,
            },

            {
              title: "Hours Practiced",
              value: "148 Hours",
              icon: <FaCode />,
            },
          ].map((item, index) => (

            <motion.div

              whileHover={{
                y: -8,
              }}

              key={index}

              className="
              bg-white
              rounded-[30px]
              p-7
              shadow-lg
              "
            >

              <div
                className="
                text-orange-500
                text-4xl
                mb-4
                "
              >
                {item.icon}
              </div>

              <h2
                className="
                text-slate-500
                text-lg
                "
              >
                {item.title}
              </h2>

              <h1
                className="
                text-3xl
                font-bold
                text-slate-800
                mt-2
                "
              >
                {item.value}
              </h1>

            </motion.div>
          ))}

        </div>

        {/* FEATURE CARDS */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-7
          "
        >

          {cards.map((card, index) => (

            <motion.div

              whileHover={{
                y: -10,
                scale: 1.03,
              }}

              key={index}

              className="
              bg-white
              rounded-[35px]
              p-8
              shadow-lg
              cursor-pointer
              "
            >

              <div
                className={`
                w-20
                h-20
                rounded-3xl
                bg-gradient-to-r
                ${card.color}
                flex
                items-center
                justify-center
                text-white
                text-4xl
                mb-6
                `}
              >

                {card.icon}

              </div>

              <h2
                className="
                text-3xl
                font-bold
                text-slate-800
                mb-4
                "
              >
                {card.title}
              </h2>

              <p
                className="
                text-slate-500
                text-lg
                leading-relaxed
                "
              >
                {card.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </main>

    </div>
  );
};

export default Dashboard;