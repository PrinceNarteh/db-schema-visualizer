export type Field = {
  name: string;
  type: string;
  hasConnections?: boolean;
};

export type Model = {
  name: string;
  fields: Field[];
  isChild?: boolean;
};

export type ModelConnection = {
  name: string;
  source: string;
  target: string;
};
