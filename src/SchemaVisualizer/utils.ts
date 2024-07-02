import { Model, ModelConnection } from "../types";

export const getSchemaInfo = (
  schema: string,
): { models: Model[]; connections: ModelConnection[] } => {
  const modelStrings = Array.from(
    schema.matchAll(/model \w+\s?{[\w:\s;\[\]]+}/g),
  ).map((item) => item[0]);

  const modelNames = modelStrings.map((model) => model.split(" ")[1]);
  const parsedModels: Model[] = modelStrings.map((model, index) => {
    return {
      name: modelNames[index],
      fields: Array.from(model.matchAll(/(\w+): (\w+(\[\])?)/g)).map(
        (field) => ({
          name: field?.[1],
          type: field?.[2],
        }),
      ),
    };
  });

  const connections: ModelConnection[] = [];
  parsedModels.forEach((model) => {
    model.fields.forEach((field) => {
      const connection = modelNames?.find((modelName) =>
        field?.type?.includes(modelName),
      );
      if (connection) {
        connections.push({
          name: field.name,
          source: model.name,
          target: connection,
        });
      }
    });
  });

  return {
    models: parsedModels.map((model) => ({
      ...model,
      isChild: parsedModels.some((parsedModel) =>
        parsedModel.fields.find((field) => field.type?.includes(model.name)),
      ),
    })),
    connections,
  };
};
