import { Handle, NodeProps, Position } from "reactflow";
import { Model } from "../types";

export default function ModelNode({ data }: NodeProps<Model>) {
  return (
    <div className="rounded-lg min-w-64">
      {data.isChild && (
        <Handle id={data.name} position={Position.Top} type="target" />
      )}
      <div className="p-1 text-center rounded-t-lg bg-[#3d5787]">
        <h3 className="font-bold text-white">
          <pre>{data.name}</pre>
        </h3>
      </div>
      {data.fields.map(({ type, name, hasConnections }, index) => (
        <div
          key={index}
          className={`flex justify-between p-1 text-white ${index % 2 === 0 ? "bg-[#282828]" : "bg-[#232323]"}`}
        >
          <pre>{name}</pre>
          <pre>{type}</pre>
          {hasConnections && (
            <Handle
              position={Position.Right}
              id={`${data.name}-${name}`}
              type="source"
              style={{ top: 80 * index }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
