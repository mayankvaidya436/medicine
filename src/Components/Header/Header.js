import classes from './Header.module.css';
import Cart from "../Cart/Cart"

const Header = () =>{
      return (
            <div className={classes.header}>
                  <h1>Medical Shop</h1>
                  <Cart/>
            </div>
      );
};

export default Header;