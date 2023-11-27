import { TextField } from "@mui/material";
import classes from "../page.module.css";
import { useEffect, useState } from "react";
import itv from "../resources/IncomeTaxValue";

function Row(props) {
  const [obj, setObj] = useState(props.obj);
  const [toUpdate, setToUpdate] = useState(false);

  useEffect(() => {
    const updateValues = () => {
      const res = itv.find((val) => obj.monthlyIncome <= val.salary);

      if (res != null) {
        const ssDiscount = Number(obj.monthlyIncome * 0.11);
        const irsDiscount = Math.floor(
          obj.monthlyIncome * (res.tax / 100) - res.rescueValue
        );
        const liquid = Math.round(obj.monthlyIncome - ssDiscount - irsDiscount);

        const newObj = {
          monthlyIncome: obj.monthlyIncome,
          annualIncome: Number(obj.monthlyIncome * 14).toFixed(2),
          foodIncome: obj.foodIncome,
          nDaysFood: obj.nDaysFood,
          irs: res.tax,
          irsFee: irsDiscount,
          ssFee: ssDiscount,
          acIncome: obj.acIncome,
          salaryLiquid: liquid,
          coverflexAnnualIncome: obj.coverflexAnnualIncome,
          coverflexMonthlyIncome: (
            Number(obj.coverflexAnnualIncome) / 12
          ).toFixed(2),
          coverflexInsureLoss: (
            Number(obj.coverflexAnnualIncome) * 0.0175
          ).toFixed(2),
          coverflexPPRLoss: (
            Number(obj.coverflexAnnualIncome) *
            0.995 *
            0.995 *
            0.21
          ).toFixed(2),
          carIncome: Number(obj.carIncome),
          carFuelIncome: Number(obj.carFuelIncome),
          total: (
            Number(liquid) +
            Number(obj.foodIncome) * Number(obj.nDaysFood) +
            Number(obj.coverflexAnnualIncome) / 12 +
            Number(obj.carFuelIncome) +
            Number(obj.acIncome) +
            Number(obj.carIncome)
          ).toFixed(2),
        };

        setObj(newObj);
        props.onChange(newObj);
        setToUpdate(false);
      }
    };

    toUpdate && updateValues();
  }, [toUpdate]);

  const monthlyFeeChangeHandler = (event) => {
    setObj((prevState) => ({
      ...prevState,
      monthlyIncome: Number(event.target.value),
    }));
    setToUpdate(true);
  };

  const foodIncomeChangeHandler = (event) => {
    setObj((prevState) => ({
      ...prevState,
      foodIncome: Number(event.target.value),
    }));
    setToUpdate(true);
  };

  const nDaysFoodChangeHandler = (event) => {
    setObj((prevState) => ({
      ...prevState,
      nDaysFood: Number(event.target.value),
    }));
    setToUpdate(true);
  };

  const acIncomeChangeHandler = (event) => {
    setObj((prevState) => ({
      ...prevState,
      acIncome: Number(event.target.value),
    }));
    setToUpdate(true);
  };

  const coverflexAnnualIncomeChangeHandler = (event) => {
    setObj((prevState) => ({
      ...prevState,
      coverflexAnnualIncome: Number(event.target.value),
    }));
    setToUpdate(true);
  };

  const carIncomeChangeHandler = (event) => {
    setObj((prevState) => ({
      ...prevState,
      carIncome: Number(event.target.value),
    }));
    setToUpdate(true);
  };

  const carFuelIncomeChangeHandler = (event) => {
    setObj((prevState) => ({
      ...prevState,
      carFuelIncome: Number(event.target.value),
    }));
    setToUpdate(true);
  };

  return (
    <tr>
      <th>{props.title}</th>
      <th>
        <TextField
          className={classes.input}
          style={{ alignment: "center" }}
          onChange={monthlyFeeChangeHandler}
          type="number"
          step="50"
          value={obj.monthlyIncome}
        />
      </th>
      <th>
        <TextField
          className={classes.input}
          value={`${obj.annualIncome}€`}
          disabled={true}
        />
      </th>
      <th>
        <TextField
          className={classes.input}
          onChange={foodIncomeChangeHandler}
          type="number"
          step="0.01"
          value={obj.foodIncome}
        />
      </th>
      <th>
        <TextField
          className={classes.input}
          onChange={nDaysFoodChangeHandler}
          type="number"
          step="1"
          value={obj.nDaysActualFood}
        />
      </th>
      {/* <th className={classes.currency}></th> */}
      {/* <th className={classes.currency}></th> */}
      <th className={classes.input}>
        <TextField disabled={true} value={`${obj.irs.toFixed(2)}%`} />
      </th>
      <th className={classes.input}>
        <TextField disabled={true} value={`${obj.irsFee.toFixed(2)}€`} />
      </th>
      <th className={classes.input}>
        <TextField disabled={true} value={`${obj.ssFee.toFixed(2)}€`} />
      </th>
      {/* <th className={classes.currency}></th> */}
      {/* <th className={classes.currency}>{Number(acIncome).toFixed(2)}</th> */}
      <th>
        <TextField
          className={classes.input}
          onChange={acIncomeChangeHandler}
          type="number"
          step="50"
          value={obj.acIncome}
        ></TextField>
      </th>
      <th>
        <TextField
          className={classes.input}
          onChange={coverflexAnnualIncomeChangeHandler}
          type="number"
          step="50"
          value={obj.coverflexAnnualIncome}
        ></TextField>
      </th>
      <th>
        <TextField
          className={classes.input}
          value={`${obj.coverflexMonthlyIncome}€`}
          disabled={true}
        ></TextField>
      </th>
      <th>
        <TextField
          className={classes.input}
          value={`${obj.coverflexInsureLoss}€`}
          disabled={true}
        />
      </th>
      <th>
        <TextField
          className={classes.input}
          value={`${obj.coverflexPPRLoss}€`}
          disabled={true}
        />
      </th>
      <th>
        <TextField
          className={classes.input}
          type="number"
          onChange={carIncomeChangeHandler}
          value={obj.carIncome}
        />
      </th>
      <th>
        <TextField
          className={classes.input}
          type="number"
          onChange={carFuelIncomeChangeHandler}
          value={obj.carFuelIncome}
        />
      </th>
      {/* <th className={classes.currency}></th> */}
      <th>
        <TextField
          className={classes.input}
          value={`${obj.total}€`}
          disabled={true}
        />
      </th>
    </tr>
  );
}

export default Row;
