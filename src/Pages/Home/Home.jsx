import { useContext, useEffect, useState } from "react";
import css from "./Home.module.css";
import { CoinContext } from "../../context/coinContext.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");
  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };
  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayCoin(coins);
  };
  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className={css.home}>
      <div className={css.hero}>
        <h1>
          Largest <br />
          Crypto Marketplace
        </h1>
        <p>
          Welcom to the world&lsquo;s largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>
        <form onSubmit={searchHandler}>
          <input
            list="coinlist"
            type="text"
            placeholder="Search crypto... "
            onChange={inputHandler}
            value={input}
            required
          />

          <datalist id="coinlist">
            {allCoin.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>
          <button type="submit">Search</button>
        </form>
      </div>
      <div className={css.cryptoTable}>
        <div className={css.tableLayout}>
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className={css.marketCap}>Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <Link className={css.tableLayout} key={index} to={`/coin/${item.id}`}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="Monet picture" />
              <p>{item.name + " - " + item.symbol}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={
                item.price_change_percentage_24h > 0 ? css.green : css.red
              }
            >
              {item.price_change_percentage_24h}
            </p>
            <p className={css.marketCap}>
              {currency.symbol} {item.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
