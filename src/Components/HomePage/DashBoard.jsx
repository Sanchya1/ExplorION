import classes from './DashBoard.module.css';
import { RiArrowDropDownLine } from "react-icons/ri";
export default function DashBoard() {
  return (
    <div className={classes.body}>
      <div className={classes.dashboardContainer}>
        <div className={classes.centerSection}>
            <div className={classes.balances}>Total Balance</div>
            <div className={classes.expensesAmount}>
           <button className={classes.moreAccountBtn}>More Accounts </button> 

            </div>
        </div>
        <div className={classes.totalAmount}>
        $12,902.72
        </div>
        <div className={classes.accountDetail}>
        ****7263
        </div>
        <div className={classes.buttonsSection}>
          <button className={`${classes.actionBtn} ${classes.receiveBtn}`}>Receive</button>
          <button className={`${classes.actionBtn} ${classes.sendBtn}`}>Send</button>
          <button className={`${classes.actionBtn} ${classes.moreBtn}`}>...</button>
        </div>
      </div>
      <div className={classes.title}>Upcoming payments
      </div>
      <div className={classes.squareOptionsContainer}>
        <button className={classes.squareButton} >Option 1</button>
        <button className={classes.squareButton} >Option 2</button>
        <button className={classes.squareButton} >Option 3</button>
        <button className={classes.squareButton} >Option 4</button>
      </div>
    </div>
  );
}
