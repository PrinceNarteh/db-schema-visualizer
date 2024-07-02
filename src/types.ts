export type Field = {
  name: string;
  type: string;
  hasConnection?: boolean;
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
