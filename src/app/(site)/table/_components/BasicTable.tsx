import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { getRows } from '@/service/getRows';

type Row = {
  name: string;
  calories: number;
  price: number;
  note: string;
}

export const BasicTable = async () =>
{
  const res = getRows();
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 650, mx: 'auto' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">  calories: number;&nbsp;(g)</TableCell>
            <TableCell align="right">price&nbsp;(g)</TableCell>
            <TableCell align="right">note&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {res.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
