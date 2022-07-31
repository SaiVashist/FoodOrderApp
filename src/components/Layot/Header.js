import { Fragment } from "react"
import mealsImage from '../../assets/dan-gold-4_jhDO54BYg-unsplash.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton"

const Header = props => {

    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Vashist's Restaurant</h1>
                {/* <button>Cart</button> */}
                <HeaderCartButton onClick={props.onShowCart } />
            </header>
            <div className={classes['main-image']}>
                <img src={ mealsImage} />
            </div>
        </Fragment>
    )
}

export default Header