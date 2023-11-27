import itv from "../resources/IncomeTaxValue";
import classes from "../page.module.css";
import { Table, TableBody, TableHead } from "@mui/material";

const ItvTable = () => {
  return (
    <Table className={` ${classes["styled-Table"]} ${classes["center-Table"]}`}>
      <TableHead>
        <tr className={classes.tr}>
          <th className={classes.th}>Salary</th>
          <th className={classes.th}>Tax</th>
          <th className={classes.th}>Value to rescue</th>
        </tr>
      </TableHead>
      <TableBody>
        {itv.map((val) => (
          <tr key={val.key} className={classes.tr}>
            <th className={classes.currency}>{val.salary.toFixed(2)}</th>
            <th className={classes.percent}>{val.tax.toFixed(2)}</th>
            <th className={classes.currency}>{val.rescueValue.toFixed(2)}</th>
          </tr>
        ))}
      </TableBody>
    </Table>
  );
};

export default ItvTable;
