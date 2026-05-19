import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  return (
    <div className="h-[600px]">

      <Editor
        height="100%"
        defaultLanguage="javascript"
        defaultValue="// Start Coding..."
        theme="vs-dark"
      />

    </div>
  );
};

export default CodeEditor;