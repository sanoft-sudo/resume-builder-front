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
import {  } from "./templateStyles/ObektivkaTable.css";
import moment from "moment";
import "moment/locale/uz-latn";
import "moment/locale/ru";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  
});



export default function ObektivkaTable() {
    const { t } = useTranslation();
    const relatives = useSelector(state => state.obektivkaRelativesReducer.relatives)
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Qarindoshligi</TableCell>
            <TableCell align="center"><p>Familiyasi, ismi</p> <p>va otasining ismi</p> </TableCell>
            <TableCell align="center"><p>Tug'ilgan yili</p> <p>va joyi</p> </TableCell>
            <TableCell align="center"><p>Ishjoyi va</p> <p>lavozimi</p> </TableCell>
            <TableCell align="center"><p>Turar joyi</p></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {relatives && relatives.map((rel) => (
            <TableRow key={rel.relative.id}>
              <TableCell align="center" component="th" scope="row">
                {rel.relative.name}
              </TableCell>
              <TableCell align="center">{rel.fullName}</TableCell>
              <TableCell align="center" style={{display:"flex", flexDirection:"column"}}><p>{moment(rel.birthDate).utc().year()} yil,</p> <p>{rel.birthRegion},</p> <p>{rel.birthCityOrDistrict}</p></TableCell>
              {rel.isDead===false && rel.isJuvenile===false ? (
                <>
                <TableCell align="center"><p>{rel.isRetired===true?"Nafaqada":""}</p> <p>{rel.currentCompany},</p> <p>{rel.currentPosition}</p></TableCell>
              <TableCell align="center"><p>{rel.region},</p> <p>{rel.cityOrDistrict},</p> <p>{rel.streetAndHouse}</p>
              </TableCell>
                </>
              ): rel.isDead===true && rel.isJuvenile===false ?(
                <TableCell align="center"><p>{ moment(rel.dethDate).utc().year() + " yil, " + "Vafot etgan"}</p> <p>({rel.currentCompany},</p> <p>{rel.currentPosition})</p></TableCell>
              ): rel.isDead===true && rel.isJuvenile===true ?(
                <>
                <TableCell align="center"><p>{rel.isJuvenile===true?"Voyaga yetmagan" : ""}</p> </TableCell>
                <TableCell align="center"><p>{ moment(rel.dethDate).utc().year() + " yil, " + "Vafot etgan"}</p></TableCell>
                </>
              ): rel.isDead===false && rel.isJuvenile===true ?(
                <>
                <TableCell align="center"><p>{rel.isJuvenile===true?"Voyaga yetmagan" : ""}</p> </TableCell>
              <TableCell align="center"><p>{rel.region},</p> <p>{rel.cityOrDistrict},</p> <p>{rel.streetAndHouse}</p>
              </TableCell>
                </>
              ):""}
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}