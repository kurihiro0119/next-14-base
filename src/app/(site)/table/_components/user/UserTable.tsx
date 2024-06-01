import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { getUser } from '@/service/getUser';

export const UserTable = async () =>
{
  const users = await getUser();
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 650, mx: 'auto' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">userid</TableCell>
            <TableCell align="right">  id&nbsp;(g)</TableCell>
            <TableCell align="right">title&nbsp;(g)</TableCell>
            <TableCell align="right">body&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>kuri
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{user.userid}</TableCell>
              <TableCell align="right">{user.id}</TableCell>
              <TableCell align="right">{user.title}</TableCell>
              <TableCell align="right">{user.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
