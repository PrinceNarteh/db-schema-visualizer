import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  Node,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";
import { getSchemaInfo } from "./utils";
import { schema } from "./schema";
import ModelNode from "./ModelNode";

const { models } = getSchemaInfo(schema);

const nodes: Node[] = models.map((model) => ({
  id: model.name,
  position: { x: 0, y: 0 },
  data: model,
  type: "model",
}));

const edges: Edge[] = [];

const nodeTypes = {
  model: ModelNode,
};

const SchemaVisualizer = () => {
  return (
    <div className="w-full h-screen bg-gray-800">
      <ReactFlow
        fitView
        defaultNodes={nodes}
        defaultEdges={edges}
        nodeTypes={nodeTypes}
        fitViewOptions={{ padding: 0.4 }}
      >
        <Controls />
        <Background color="#222" variant={BackgroundVariant.Lines} />
      </ReactFlow>
    </div>
  );
};

export default SchemaVisualizer;
