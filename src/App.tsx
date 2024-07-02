import ReactFlow, { Background, BackgroundVariant, Controls } from "reactflow";

function App() {
  return (
    <div className="w-full h-screen bg-gray-800">
      <ReactFlow>
        <Controls />
        <Background color="#222" variant={BackgroundVariant.Lines} />
      </ReactFlow>
    </div>
  );
}

export default App;
