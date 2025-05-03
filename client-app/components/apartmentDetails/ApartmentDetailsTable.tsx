"use client";

import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

type HeaderParams = {
  area: number;
  bedrooms: number;
  bathrooms: number;
  compoundName: string;
  deliveryIn: number;
};

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function ApartmentDetailsTable(props: HeaderParams) {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 3 }}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Apartment</TableCell>
            <TableCell align="center">{props.area} m²</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <TableCell component="th" scope="row">
              Bedrooms
            </TableCell>
            <TableCell align="center">{props.bedrooms}</TableCell>
          </StyledTableRow>

          <StyledTableRow>
            <TableCell component="th" scope="row">
              Bathrooms
            </TableCell>
            <TableCell align="center">{props.bathrooms}</TableCell>
          </StyledTableRow>

          <StyledTableRow>
            <TableCell component="th" scope="row">
              Delivery In
            </TableCell>
            <TableCell align="center">{props.deliveryIn}</TableCell>
          </StyledTableRow>

          <StyledTableRow>
            <TableCell component="th" scope="row">
              Compound
            </TableCell>
            <TableCell align="center">{props.compoundName}</TableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ApartmentDetailsTable;
