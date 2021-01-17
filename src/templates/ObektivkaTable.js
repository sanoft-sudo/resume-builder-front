import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function ObektivkaTable() {
    const { t } = useTranslation();
    const obektiv = useSelector(state => state.obektivkaReducer.obektiv)
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Qarindoshligi</TableCell>
            <TableCell align="center">Familiyasi, ismi va otasining ismi</TableCell>
            <TableCell align="center">Tug'ilgan yili va joyi</TableCell>
            <TableCell align="center">Ishjoyi va lavozimi</TableCell>
            <TableCell align="center">Turar joyi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {obektiv.relationship && obektiv.relationship.map((rel) => (
            <TableRow key={rel.name}>
              <TableCell component="th" scope="row">
                {rel.relative}
              </TableCell>
              <TableCell align="center">{rel.relativeName}</TableCell>
              <TableCell align="center">{rel.relBirthDate} yil, {rel.relBirthPlaceState}, {rel.relBirthPlaceCity}, {rel.relBirthPlaceDistrict}</TableCell>
              <TableCell align="center">{rel.isRetierd===true?"Nafaqada":""} {rel.relJobPlace}, {rel.relJob}</TableCell>
              <TableCell align="center">{rel.relResidenceRegion}, {rel.relResidenceCity}, {rel.relResidenceDistrict}, {rel.relResidenceStreet}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}