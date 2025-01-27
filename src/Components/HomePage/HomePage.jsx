import classes from './HomePage.module.css'
import img from '../../assets/Homepage/mainpage.png'
export default function HomePage(){
    return (
        <div className={classes.body}>
            <img src={img} alt='photo' className={classes.photo}></img>
            <div className={classes.secondContainer}>
            <p className={classes.heading1}>
            Reach your financial goal with us</p>

            <p className={classes.heading2}>
            We offer you the financial features and most secure system to grow your wealth.
            </p>
            <div className={classes.buttonPage}>
            <button className={classes.haveAccount}>
                Start Your Journey !
            </button>
            </div>
            </div>
        </div>
    )
}