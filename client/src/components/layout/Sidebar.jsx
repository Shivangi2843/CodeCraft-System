import {
  FaHome,
  FaCode,
  FaBook,
  FaProjectDiagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-slate-900 h-screen p-5">

      <h1 className="text-cyan-400 text-2xl font-bold mb-10">
        CodeCraft
      </h1>

      <ul className="space-y-6 text-gray-300">

        <li className="flex items-center gap-3 hover:text-cyan-400
            hover:translate-x-2
            transition
            duration-300">
          <FaHome />
          Dashboard
        </li>

        <Link
          to="/practice"
          className="flex items-center gap-3 hover:text-cyan-400
          hover:translate-x-2
          transition
          duration-300"
       >
          <FaCode />
          Practice
        </Link>

        <Link
          to="/learning"
          className="flex items-center gap-3 hover:text-cyan-400
          hover:translate-x-2
          transition
          duration-300"
        >
          <FaBook />
        Learning
        </Link>

        <Link
          to="/projects"
          className="flex items-center gap-3 hover:text-cyan-400
          hover:translate-x-2
          transition
          duration-300"
        >
          <FaProjectDiagram />
          Projects
        </Link>

      </ul>
    </div>
  );
};

export default Sidebar;