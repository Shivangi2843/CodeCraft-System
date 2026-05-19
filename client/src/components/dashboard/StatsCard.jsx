import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import StatsCard from "../../components/dashboard/StatsCard";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="flex bg-slate-950 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <motion.div
          className="p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          <h1 className="text-3xl text-white font-bold mb-6">
            Dashboard
          </h1>

          {/* Responsive Grid */}
          <div
             className="
             backdrop-blur-lg
             bg-white/10
             border
             border-white/20
             rounded-2xl
             p-6
             shadow-xl
             hover:scale-105
             transition
             duration-300
              ">

            <StatsCard title="Projects" value="12" />
            <StatsCard title="Problems Solved" value="48" />
            <StatsCard title="Notes" value="24" />
            <StatsCard title="XP Points" value="920" />

          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default Dashboard;