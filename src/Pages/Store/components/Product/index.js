import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData() {
  return {};
}

const rows = [
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
];

export default function Product() {
  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Product</StyledTableCell>
            <StyledTableCell align="left">Description</StyledTableCell>
            <StyledTableCell align="left">Quantity</StyledTableCell>
            <StyledTableCell align="left">Size</StyledTableCell>
            <StyledTableCell align="left">Price</StyledTableCell>
            <StyledTableCell align="left">Remove</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                1
              </StyledTableCell>
              <StyledTableCell align="left"><img src={require("../../../../assets/gym-shirts-1.webp")} alt="" className='productsTable__description__details__image' /></StyledTableCell>
              <StyledTableCell align="left"><p>Black Performance Tee With Grey Mesh Shoulder Panel</p></StyledTableCell>
              <StyledTableCell align="left"><p className='productsTable__description__quantity'>1</p></StyledTableCell>
              <StyledTableCell align="left"><p className='productsTable__description__size'><span>S</span></p></StyledTableCell>
              <StyledTableCell align="left"><p className='productsTable__description__price'>31<span>$</span></p></StyledTableCell>
              <StyledTableCell align="left"><Button className='productsTable__description__removeButton' variant='contained' color="error">Remove</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}