import { handleFailed, handleSucceed, path } from "..";


export type User = {
  userId: number;
  id: string;
  title: string;
  body: string;
}

export async function getUser(): Promise<User[]> {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  return fetch(apiUrl, {
    next: { tags: ['users'] }, 
  })
  .then(handleSucceed)
  .catch(handleFailed);
}