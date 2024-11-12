import css from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { useContext } from "react";
import { CoinContext } from "../../context/coinContext.jsx";
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
      case "inr": {
        setCurrency({ name: "inr", symbol: "रू" });
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
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>

        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className={css.navRight}>
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sign Up <img src={arrow_icon} alt="Icon" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
