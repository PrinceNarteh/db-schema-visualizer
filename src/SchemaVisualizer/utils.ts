import { Model } from "../types";

export const getSchemaInfo = (schema: string): { models: Model[] } => {
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

  return {
    models: parsedModels.map((model) => ({
      ...model,
      isChild: parsedModels.some((parsedModel) =>
        parsedModel.fields.find((field) => field.type?.includes(model.name)),
      ),
    })),
  };
};
