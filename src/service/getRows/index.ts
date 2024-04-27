import { handleFailed, handleSucceed, path } from "..";

export type Row = {
  name: string;
  calories: number;
  price: number;
  note: string;
}

// export async function getRows(): Promise<{rows: Row[]}> {
//   const apiUrl = path('/rows');
//   console.log('apiUrl', apiUrl);
//   return fetch(apiUrl, {
//     next: { tags: ['rows'] }, 
//   })
//   .then(handleSucceed)
//   .catch(handleFailed);
// }


export function getRows(): Row[] {
  return [
    {
      name: 'Cupcake',
      calories: 305,
      price: 3.7,
      note: 'note'
    },
    {
      name: 'Donut',
      calories: 452,
      price: 25.0,
      note: 'note'
    }
  ]
}