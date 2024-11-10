import { useContext, useEffect, useState } from "react";
import css from "./Home.module.css";
import { CoinContext } from "../../context/coinContext.jsx";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
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
          Welcom to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>
        <form>
          <input type="text" placeholder="Search crypto... " />
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
          <div className={css.tableLayout} key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="Monet picture" />
              <p>{item.name + " - " + item.symbol}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p>{item.price_change_percentage_24h}</p>
            <p className={css.marketCap}>
              {currency.symbol} {item.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
