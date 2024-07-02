export const schema = `
  model User {
    id: number;
    name: string;
    email: string;
  }

  model Post {
    id: number;
    title: string;
    author: User;
    comments: Comment[];
    createdAt: Date;
  }

  model Comment {
    id: number;
    text: string;
  }
`;
