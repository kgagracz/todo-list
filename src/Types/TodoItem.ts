export type TodoItem = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  deadline: Date | null;
  done: boolean;
};
