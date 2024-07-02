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

const { models, connections } = getSchemaInfo(schema);

let rows = 0;
let columns = 0;
let numOfGrid = 1;
let numOfModels = models.length;
let columnWidth = 300;

while (1) {
  if (numOfGrid ** 2 >= numOfModels) {
    break;
  }
  numOfGrid++;
}

const nodes: Node[] = models.map((model, idx) => {
  const x = rows * columnWidth;
  const y = columns * columnWidth;

  if (numOfGrid % idx === 0) {
    columns = 0;
    rows += 1;
  } else {
    columns += 1;
  }

  return {
    id: model.name,
    data: model,
    type: "model",
    position: { x, y },
  };
});

const edges: Edge[] = connections.map((connection) => {
  const sourceId = `${connection.source}->${connection.target}`;
  return {
    id: sourceId,
    source: connection.source,
    target: connection.target,
    sourceHandle: ourceId,
    targetHandle: connection.target,
    animated: true,
  };
});
console.log({ edges });

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
