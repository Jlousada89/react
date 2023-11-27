import classes from "../page.module.css";

const Header = () => {
  return (
    <tr>
      <th className={classes.input}></th>
      <th className={classes.input}>Gross Value /month</th>
      <th className={classes.input}>Gross Value /year</th>
      <th className={classes.input}>Food Value /day</th>
      <th className={classes.input}>Nr of days</th>
      {/* <th>Others</th> */}
      {/* <th>Total Before Discounts</th> */}
      <th className={classes.input}>IRS Tax</th>
      <th className={classes.input}>IRS Fee</th>
      <th className={classes.input}>SS Fee(11%)</th>
      {/* <th>Total After Discounts</th> */}
      <th className={classes.input}>Help Costs</th>
      <th className={classes.input}>Converflex /yearr</th>
      <th className={classes.input}>Converflex /month</th>
      <th className={classes.input}>Coverflex Insure Loss</th>
      <th className={classes.input}>Coverflex PPR Loss</th>
      <th className={classes.input}>Car Income</th>
      <th className={classes.input}>Car Fuel Income</th>
      {/* <th>Fuel Plafond</th> */}
      <th className={classes.input}>Total</th>
    </tr>
  );
};

export default Header;
