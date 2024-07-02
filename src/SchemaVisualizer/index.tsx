import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  Node,
  Edge,
} from "reactflow";
import { getSchemaInfo } from "./utils";
import { schema } from "./schema";

const models = getSchemaInfo(schema);
console.log({ models });

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
