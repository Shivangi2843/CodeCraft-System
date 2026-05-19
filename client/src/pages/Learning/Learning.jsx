import Sidebar from "../../components/layout/Sidebar";

const Learning = () => {
  return (
    <div className="flex bg-slate-950 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-6">

        <h1 className="text-3xl text-white font-bold mb-8">
          Learning Hub
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Roadmaps */}
          <div className="bg-slate-900 p-6 rounded-2xl">
            <h2 className="text-cyan-400 text-xl font-bold">
              Roadmaps
            </h2>

            <p className="text-gray-400 mt-3">
              Frontend, Backend, AI Roadmaps
            </p>
          </div>

          {/* Notes */}
          <div className="bg-slate-900 p-6 rounded-2xl">
            <h2 className="text-cyan-400 text-xl font-bold">
              Notes
            </h2>

            <p className="text-gray-400 mt-3">
              Save and manage notes
            </p>
          </div>

          {/* MCQs */}
          <div className="bg-slate-900 p-6 rounded-2xl">
            <h2 className="text-cyan-400 text-xl font-bold">
              MCQs
            </h2>

            <p className="text-gray-400 mt-3">
              Practice quizzes
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Learning;