import Sidebar from "../../components/layout/Sidebar";

const Practice = () => {
  return (
    <div className="flex bg-slate-950 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-6">

        <h1 className="text-3xl text-white font-bold mb-8">
          Practice Arena
        </h1>

        {/* Filters */}
        <div className="flex gap-4 mb-8">

          <button className="bg-green-500 px-4 py-2 rounded-lg text-white">
            Easy
          </button>

          <button className="bg-yellow-500 px-4 py-2 rounded-lg text-white">
            Medium
          </button>

          <button className="bg-red-500 px-4 py-2 rounded-lg text-white">
            Hard
          </button>

        </div>

        {/* Questions */}
        <div className="space-y-5">

          <div className="bg-slate-900 p-5 rounded-2xl">

            <h2 className="text-white text-xl font-bold">
              Two Sum Problem
            </h2>

            <p className="text-gray-400 mt-2">
              Solve using arrays and loops.
            </p>

            <button
              className="
                mt-4
                bg-cyan-500
                px-4
                py-2
                rounded-lg
                text-white
              "
            >
              Solve Challenge
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Practice;