import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  Node,
  Edge,
} from "reactflow";

const nodes: Node[] = [];
const edges: Edge[] = [];

const SchemaVisualizer = () => {
  return (
    <div className="w-full h-screen bg-gray-800">
      <ReactFlow
        defaultNodes={nodes}
        defaultEdges={edges}
        fitView
        fitViewOptions={{ padding: 0.4 }}
      >
        <Controls />
        <Background color="#222" variant={BackgroundVariant.Lines} />
      </ReactFlow>
    </div>
  );
};

export default SchemaVisualizer;
