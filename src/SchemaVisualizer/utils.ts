import { Model } from "../types";

export const getSchemaInfo = (schema: string): { models: Model[] } => {
  const modelStrings = Array.from(
    schema.matchAll(/model \w+\s?{[\w:\s;\[\]]+}/g),
  );
  console.log({ modelStrings });

  return { models: [] };
};
