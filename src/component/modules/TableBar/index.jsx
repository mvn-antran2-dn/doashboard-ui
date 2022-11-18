import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Card, CardHeader, Chip } from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

function createData(name, startday, endday, state, assignee) {
  return { name, startday, endday, state, assignee };
}

const rows = [
  createData('Project Aurora', "01/01/2021", "31/06/2021", "Done", "James Dalton"),
  createData('Project Eagle', "01/01/2021", "31/06/2021", "In Progress", "Tracy Mack"),
  createData('Project Fireball', "01/01/2021", "31/06/2021", "Done", "Sallie Love"),
  createData('Project Omega', "01/01/2021", "31/06/2021", "Cancelled", "Glenda Jang"),
  createData('Project Yoda', "01/01/2021", "31/06/2021", "Done", "Raymond Ennis"),
  createData('Project Yoda', "01/01/2021", "31/06/2021", "Done", "Matthew Winters"),
];

export default function BarTable() {
  return (
    <Card elevation={0}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <CardHeader className="title-chart-line" title='Latest projects' variant='h6' />
        <MoreVertOutlinedIcon sx={{  marginRight: "16px" }}/>
      </Box>
      <TableContainer component={Paper} className="table-bar-chart">
        <Table sx={{ maxWidth: 314 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name </TableCell>
              <TableCell align="left">Start Day</TableCell>
              <TableCell align="left">End Day</TableCell>
              <TableCell align="left">State</TableCell>
              <TableCell align="left"> Assignee</TableCell>
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
                <TableCell align="left">{row.startday}</TableCell>
                <TableCell align="left"> {row.endday}</TableCell>
                <TableCell align="left"><Chip className="table-chip-state" label={row.state} color={ row.state === "Done" ? "success" : row.state === "In Progress" ? "warning" : "error"} /></TableCell>
                <TableCell align="left">{row.assignee}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}