export type Dream = {
  id: string;
  title: string;
  body: string;
  userId: string;
  handler: string | null;
  status: boolean;
  messages: Message[],
  photo: string | null,
};


type Message = {
  id: string,
  title: string,
  body: string,
  userId: string
}