import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Card, CardHeader, Chip } from '@mui/material';

function createData(name, tech, lisence, sales) {
  return { name, tech, lisence, sales };
}

const rows = [
  createData('App stack', "HTML", "Single License", "76"),
  createData('Mira', "React", "Single License", "38"),
  createData('Milo', "HTML", "Single License", "43"),
  createData('Robust UI Kit', "Angular", "Single License", "27"),
  createData('Spark', "React", "Single License", "12"),
];

export default function TableProfile() {
  return (
    <Card elevation={0} sx={{marginTop: "25px"}} className="table-profile">
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <CardHeader className="title-chart-line" title='Products' variant='h6' />
      </Box>
      <TableContainer component={Paper} className="table-bar-chart">
        <Table sx={{ maxWidth: 808.5 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name </TableCell>
              <TableCell align="left">Tech</TableCell>
              <TableCell align="left">Lisence</TableCell>
              <TableCell align="left">Sales</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={Math.random()}
                sx={{ '&:last-child td, &:last-child th': { border: "none" } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left"><Chip className="table-chip-state" label={row.tech} color={ row.tech === "React" ? "success" : row.tech === "HTML" ? "primary" : "error"} /></TableCell>
                <TableCell align="left"> {row.lisence}</TableCell>
                <TableCell align="left">{row.sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}