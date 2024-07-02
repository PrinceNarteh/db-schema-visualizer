export type Model = {
  name: string;
  fields: {
    name: string;
    type: string;
    hasConnection: boolean;
  }[];
  isChild: boolean;
};

export type ModelConnection = {
  name: string;
  source: string;
  target: string;
};
