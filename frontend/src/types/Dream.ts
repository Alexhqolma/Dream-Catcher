export type Dream = {
  id: string;
  title: string;
  body: string;
  userId: string;
  executantId: string | null;
  completed: boolean;
  createAt: string,
  photo: string | null,
};
