import { handleFailed, handleSucceed, path } from "..";


export type User = {
  userid: number;
  id: string;
  title: string;
  body: string;
}

export async function getUser(): Promise<User[]> {
  const apiUrl = path('/testusers');
  console.log('apiUrl', apiUrl);
  return fetch(apiUrl, {
    next: { tags: ['users'] }, 
  })
  .then(handleSucceed)
  .catch(handleFailed);
}
