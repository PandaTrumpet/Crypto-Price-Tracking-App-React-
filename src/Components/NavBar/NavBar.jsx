import css from "./NavBar.module.css";
import logo from "../../assets/logo.png";

import { useContext } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
     
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <nav className={css.navbar}>
      <Link to={"/"}>
        <img src={logo} alt="Logo" className={css.logo} />
      </Link>
    
      <div className={css.navRight}>
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          
        </select>
        
      </div>
    </nav>
  );
};

export default NavBar;
