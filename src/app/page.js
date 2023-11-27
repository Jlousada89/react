"use client";
import React, { useEffect, useState } from "react";
import classes from "./page.module.css";
import {
  TextField,
  Table,
  TableHead,
  TableBody,
  TableFooter,
  Tab,
} from "@mui/material";

import styled from "@emotion/react";
import Header from "./components/Header";
import _ from "./resources/DefaultSalary";
import ItvTable from "./components/ItvTable";
import Row from "./components/Row";

export default function Home() {
  const [actual, setActual] = useState(_);
  const [desired, setDesired] = useState(_);
  const [total, setTotal] = useState(_);

  const changeActualRowHandler = (obj) => {
    setActual(obj);
  };

  const changeDesiredRowHandler = (obj) => {
    setDesired(obj);
  };

  return (
    <div>
      <h1 className={classes.h1}>THIS IS A SALARY SIMULATOR</h1>

      <Table
        style={{ border: "5px solid darkblue" }}
        // className={`${classes["styled-Table"]} ${classes["center-Table"]}`}
      >
        <TableHead
          style={{ border: "5px solid darkblue" }}
          // className={classes.TableHead}
        >
          <Header />
        </TableHead>
        <TableBody>
          <Row obj={actual} onChange={changeActualRowHandler} title="Actual" />
          <Row
            obj={desired}
            onChange={changeDesiredRowHandler}
            title="Desired"
          />
        </TableBody>
        <TableFooter style={{ border: "5px solid darkblue" }}>
          <tr>
            <th>Difference</th>
            <th className={classes.currency}>
              {Number(desired.monthlyIncome - actual.monthlyIncome).toFixed(2)}
            </th>
            <th className={classes.currency}>
              {Number(desired.annualIncome - actual.annualIncome).toFixed(2)}
            </th>
            <th className={classes.currency}>
              {Number(
                desired.foodIncome * desired.nDaysFood -
                  actual.foodIncome * actual.nDaysFood
              ).toFixed(2)}
            </th>
            <th> {Number(desired.nDaysFood - actual.nDaysFood).toFixed(2)}</th>
            {/* <th className={classes.currency}></th> */}
            {/* <th className={classes.currency}></th> */}
            <th className={classes.input}></th>
            <th className={classes.currency}>
              {Number(desired.irsFee - actual.irsFee).toFixed(2)}
            </th>
            <th className={classes.currency}>
              {Number(desired.ssFee - actual.ssFee).toFixed(2)}
            </th>
            {/* <th className={classes.currency}></th> */}
            <th className={classes.currency}>
              {Number(desired.acIncome - actual.acIncome).toFixed(2)}
            </th>
            <th className={classes.currency}>
              {Number(
                desired.coverflexAnnualIncome - actual.coverflexAnnualIncome
              ).toFixed(2)}
            </th>
            <th className={classes.currency}>
              {Number(
                desired.coverflexMonthlyIncome - actual.coverflexMonthlyIncome
              ).toFixed(2)}
            </th>
            <th className={classes.currency}>
              {Number(
                desired.coverflexInsureLoss - actual.coverflexInsureLoss
              ).toFixed(2)}
            </th>
            <th className={classes.currency}>
              {Number(desired.coverflexPPRLoss - actual.coverflexPPRLoss).toFixed(2)}
            </th>
            <th className={classes.currency}>
              {Number(desired.carIncome - actual.carIncome).toFixed(2)}
            </th>
            <th className={classes.currency}>
              {Number(desired.carFuelIncome - actual.carFuelIncome).toFixed(2)}
            </th>
            {/* <th className={classes.currency}></th> */}
            <th className={classes.currency}>
              {Number(desired.total - actual.total).toFixed(2)}
            </th>
          </tr>
        </TableFooter>
      </Table>
      <h2 className={classes.h1}>IRS TABLE FOR NO MARRIED AND NO DEPENDENTS</h2>
      <ItvTable />
    </div>
  );
}
