import { handleFailed, handleSucceed, path } from "..";

export type Credential = {
  username: string;
  password: string;
}

export type Token = {
  message: string;
  token: string;
}

export async function Login(credentials: Credential): Promise<Token> {
  const apiUrl = path('/login');
  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials),
  })
  .then(handleSucceed)
  .catch(handleFailed);
}
