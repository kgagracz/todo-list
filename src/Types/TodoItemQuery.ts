export interface TodoItemQuery {
  title: string;
  content: string;
  deadline?: Date | null;
  id?: string;
}
