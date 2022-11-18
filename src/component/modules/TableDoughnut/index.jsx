import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, revenue, value) {
  return { name, revenue, value };
}

const rows = [
  createData('Social', 260, "+35%"),
  createData('Search Engines', 125, "-12%"),
  createData('Direct', 54, "+46%"),
  createData('Other', 146, "+24%"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} className="table-doughnut-chart">
      <Table sx={{ maxWidth: 314 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Source </TableCell>
            <TableCell align="right">Revenue</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: "none" } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.revenue}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}