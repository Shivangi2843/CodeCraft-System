import Sidebar from "../../components/layout/Sidebar";
import CodeEditor from "../../components/editor/CodeEditor";

const Projects = () => {
  return (
    <div className="flex min-h-screen bg-slate-950">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1">

        {/* File Explorer */}
        <div className="w-72 bg-slate-900 border-r border-slate-800 p-4">

          <h2 className="text-white text-xl font-bold mb-5">
            Explorer
          </h2>

          <div className="text-gray-300 space-y-3">

            <p>📁 src</p>
            <p className="ml-5">📄 App.jsx</p>
            <p className="ml-5">📄 main.jsx</p>

            <p>📁 components</p>
            <p className="ml-5">📄 Navbar.jsx</p>

          </div>

        </div>

        {/* Editor Area */}
        <div className="flex-1 grid grid-cols-2 gap-4 p-4">

  {/* Editor */}
  <div
    className="
      bg-slate-900
      rounded-2xl
      p-4
      border
      border-slate-800
    "
  >

    <h2 className="text-white text-xl font-bold mb-4">
      Code Editor
    </h2>

    <CodeEditor
      className="
        w-full
        h-[500px]
        bg-slate-950
        text-green-400
        p-4
        rounded-xl
        outline-none
      "
      placeholder="Write HTML code here..."
    ></CodeEditor>

  </div>

  {/* Live Preview */}
  <div
    className="
      bg-slate-900
      rounded-2xl
      p-4
      border
      border-slate-800
    "
  >

    <h2 className="text-white text-xl font-bold mb-4">
      Live Preview
    </h2>

    <iframe
      title="preview"
      className="
        w-full
        h-[500px]
        bg-white
        rounded-xl
      "
    />

  </div>

</div>

      </div>

    </div>
  );
};

export default Projects;
