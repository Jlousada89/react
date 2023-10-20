"use client";
import { VALID_LOADERS } from 'next/dist/shared/lib/image-config';
import React, { useState } from 'react';
import classes from "./page.module.css";

export const itv = [
  { key: 1, salary: 762.0, tax: 0.0, rescueValue: 0.0 },
  { key: 2, salary: 886.57, tax: 14.5, rescueValue: 14.15 },
  { key: 3, salary: 932.14, tax: 21.0, rescueValue: 21.0 },
  { key: 4, salary: 999.14, tax: 21.0, rescueValue: 114.14 },
  { key: 5, salary: 1106.93, tax: 26.50, rescueValue: 169.09 },
  { key: 6, salary: 1600.36, tax: 28.50, rescueValue: 191.23 },
  { key: 7, salary: 1961.36, tax: 35.0, rescueValue: 295.26 },
  { key: 8, salary: 2529.05, tax: 37.0, rescueValue: 334.48 },
  { key: 9, salary: 3691.46, tax: 38.72, rescueValue: 377.86 },
  { key: 10, salary: 5469.90, tax: 40.05, rescueValue: 427.18 },
  { key: 11, salary: 6420.55, tax: 42.72, rescueValue: 573.22 },
  { key: 12, salary: 20064.21, tax: 44.95, rescueValue: 716.08 },
  { key: 13, salary: 20064.21, tax: 47.17, rescueValue: 1162.51 },
];

export default function Home() {

  const [actualSalary, setActualSalary] = useState(1500);
  const [desiredSalary, setDesiredSalary] = useState(1800);
  const [actualLiquidWithoutFood, setActualLiquidWithoutFood] = useState(0);
  const [desiredLiquidWithoutFood, setDesiredLiquidWithoutFood] = useState(0);
  const [actualFoodSubsidy, setActualFoodSubsidy] = useState(8.32);
  const [desiredFoodSubsidy, setDesiredFoodSubsidy] = useState(9.60);
  const [nDaysActualFood, setNDaysActualFood] = useState(22);
  const [nDaysDesiredFood, setNDaysDesiredFood] = useState(22);
  const [actualIrsDiscount, setActualIrsDiscount] = useState(0);
  const [desiredIrsDiscount, setDesiredIrsDiscount] = useState(0);
  const [actualSSDiscount, setActualSSDiscount] = useState(0);
  const [desiredSSDiscount, setDesiredSSDiscount] = useState(0);
  const [actualHPCosts, setActualHPCosts] = useState(0);
  const [desiredHPCosts, setDesiredHPCosts] = useState(0);

  const desiredSalaryChangeHandler = (event) => {
    setDesiredSalary(event.currentTarget.value);

    const res = itv.find((value) => (event.currentTarget.value <= value.salary));
    const ssDiscount = (event.currentTarget.value * 0.11).toFixed(2);
    const irsDiscount = Math.floor((event.currentTarget.value * (res.tax / 100)) - res.rescueValue);
    setDesiredLiquidWithoutFood(Math.round(event.currentTarget.value - ssDiscount - irsDiscount));
    setDesiredIrsDiscount(irsDiscount);
    setDesiredSSDiscount(ssDiscount);

  };

  const actualSalaryChangeHandler = (event) => {
    setActualSalary(event.currentTarget.value);

    const res = itv.find((value) => (event.currentTarget.value <= value.salary));
    const ssDiscount = (event.currentTarget.value * 0.11).toFixed(2);
    const irsDiscount = Math.floor((event.currentTarget.value * (res.tax / 100)) - res.rescueValue);
    setActualLiquidWithoutFood(Math.round(event.currentTarget.value - ssDiscount - irsDiscount));
    setActualIrsDiscount(irsDiscount);
    setActualSSDiscount(ssDiscount);

  };

  const actualFoodSubsidyChangeHandler = (event) => {
    setActualFoodSubsidy(Number(event.currentTarget.value));
  };
  const desiredFoodSubsidyChangeHandler = (event) => {
    setDesiredFoodSubsidy(Number(event.currentTarget.value));
  };

  const nDaysActualFoodSubsidyChangeHandler = (event) => {
    setNDaysActualFood(Number(event.currentTarget.value));
  };
  const nDaysDesiredFoodSubsidyChangeHandler = (event) => {
    setNDaysDesiredFood(Number(event.currentTarget.value));
  };

  const actualHPCostsChangeHandler = (event) => {
    setActualHPCosts(Number(event.currentTarget.value));
  };
  const desiredHPCostsChangeHandler = (event) => {
    setDesiredHPCosts(Number(event.currentTarget.value));
  };

  return <div>
    <h1 className={classes.h1}>THIS IS A SALARY SIMULATOR</h1>

    <table className={`${classes["styled-table"]} ${classes["margin-table"]}`}>
      <thead className={classes.thead}>
        <tr>
          <th></th>
          <th>Salary Base</th>
          <th>Food</th>
          <th>Number of days to apply food subsidy</th>
          {/* <th>Others</th> */}
          {/* <th>Total Before Discounts</th> */}
          <th>IRS</th>
          <th>IRS Amount</th>
          <th>SS Amount(11%)</th>
          {/* <th>Total After Discounts</th> */}
          <th>Help Costs</th>
          {/* <th>Fuel Plafond</th> */}
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Actual</th>
          {/* <th className={classes.currency}>{Number(actualSalary).toFixed(2)}</th> */}
          <th>
            <input className={classes.input} onChange={actualSalaryChangeHandler} type="number" value={actualSalary} step="50" />
          </th>
          {/* <th className={classes.currency}>{Number(actualFoodSubsidy * nDaysActualFood).toFixed(2)}</th> */}
          <th>
            <input className={classes.input} onChange={actualFoodSubsidyChangeHandler} type="number" value={actualFoodSubsidy} step="0.01" />
          </th>
          <th>
            <input className={classes.input} onChange={nDaysActualFoodSubsidyChangeHandler} type="number" value={nDaysActualFood} />
          </th>
          {/* <th className={classes.currency}></th> */}
          {/* <th className={classes.currency}></th> */}
          <th className={classes.percent}>{Number((actualIrsDiscount / actualSalary) * 100).toFixed(2)}</th>
          <th className={classes.currency}> {Number(actualIrsDiscount).toFixed(2)}</th>
          <th className={classes.currency}>{Number(actualSSDiscount).toFixed(2)}</th>
          {/* <th className={classes.currency}></th> */}
          {/* <th className={classes.currency}>{Number(actualHPCosts).toFixed(2)}</th> */}
          <th>
            <input className={classes.input} onChange={actualHPCostsChangeHandler} type="number" value={actualHPCosts} step="50" />
          </th>
          {/* <th className={classes.currency}></th> */}
          <th className={classes.currency}>{Number(actualLiquidWithoutFood + actualHPCosts + (actualFoodSubsidy * nDaysActualFood)).toFixed(2)}</th>
        </tr>
        <tr>
          <th>Desired</th>
          {/* <th className={classes.currency}>{Number(desiredSalary).toFixed(2)}</th> */}
          <th>
            <input className={classes.input} onChange={desiredSalaryChangeHandler} type="number" value={desiredSalary} step="50" />
          </th>
          {/* <th className={classes.currency}>{Number(desiredFoodSubsidy * nDaysDesiredFood).toFixed(2)}</th> */}
          <th>
            <input className={classes.input} onChange={desiredFoodSubsidyChangeHandler} type="number" value={desiredFoodSubsidy} step="0.01" />
          </th>
          <th>
            <input className={classes.input} onChange={nDaysDesiredFoodSubsidyChangeHandler} type="number" value={nDaysDesiredFood} />
          </th>
          {/* <th className={classes.currency}></th> */}
          {/* <th className={classes.currency}></th> */}
          <th className={classes.percent}> {Number((desiredIrsDiscount / desiredSalary) * 100).toFixed(2)}</th>
          <th className={classes.currency}>{Number(desiredIrsDiscount).toFixed(2)}</th>
          <th className={classes.currency}>{Number(desiredSSDiscount).toFixed(2)}</th>
          {/* <th className={classes.currency}></th> */}
          {/* <th className={classes.currency}>{Number(desiredHPCosts).toFixed(2)}</th> */}
          <th>
            <input className={classes.input} onChange={desiredHPCostsChangeHandler} type="number" value={desiredHPCosts} step="50" />
          </th>
          {/* <th className={classes.currency}></th> */}
          <th className={classes.currency}>{Number(desiredLiquidWithoutFood + desiredHPCosts + (desiredFoodSubsidy * nDaysDesiredFood)).toFixed(2)}</th>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Difference</th>
          <th className={classes.currency}>{Number(desiredSalary - actualSalary).toFixed(2)}</th>
          <th className={classes.currency}>{Number((desiredFoodSubsidy * nDaysDesiredFood) - (actualFoodSubsidy * nDaysActualFood)).toFixed(2)}</th>
          <th> {Number(nDaysDesiredFood - nDaysActualFood).toFixed(2)}</th>
          {/* <th className={classes.currency}></th> */}
          {/* <th className={classes.currency}></th> */}
          <th ></th>
          <th className={classes.currency}>{Number(desiredIrsDiscount - actualIrsDiscount).toFixed(2)}</th>
          <th className={classes.currency}>{Number(desiredSSDiscount - actualSSDiscount).toFixed(2)}</th>
          {/* <th className={classes.currency}></th> */}
          <th className={classes.currency}>{Number(desiredHPCosts - actualHPCosts).toFixed(2)}</th>
          {/* <th className={classes.currency}></th> */}
          <th className={classes.currency}>{Number((desiredLiquidWithoutFood - actualLiquidWithoutFood) + (desiredHPCosts - actualHPCosts) + (desiredFoodSubsidy * nDaysDesiredFood) - (actualFoodSubsidy * nDaysActualFood)).toFixed(2)}</th>
        </tr>
      </tfoot>
    </table>

    <h2 className={classes.h1}>IRS TABLE FOR NO MARRIED AND NO DEPENDENTS</h2>
    <table className={` ${classes["styled-table"]} ${classes["center-table"]}`}>
      <thead>
        <tr className={classes.tr}>
          <th className={classes.th}>Salary</th>
          <th className={classes.th}>Tax</th>
          <th className={classes.th}>Value to rescue</th>
        </tr>
      </thead>
      <tbody>
        {itv.map((val) => (
          <tr key={val.key} className={classes.tr}>
            <th className={classes.currency}>
              {val.salary.toFixed(2)}
            </th>
            <th className={classes.percent}>
              {val.tax.toFixed(2)}
            </th>
            <th className={classes.currency}>
              {val.rescueValue.toFixed(2)}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}