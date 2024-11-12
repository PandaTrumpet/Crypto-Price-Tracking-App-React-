import { useContext, useEffect, useState } from "react";
import css from "./Coin.module.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/coinContext.jsx";
const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  // console.log(coinData.image.large);

  const { currency } = useContext(CoinContext);
  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-uM58wvtiR1BsxCBiLWnX3Jmh",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => setCoinData(res))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchCoinData();
  }, [currency]);
  if (coinData) {
    return (
      <div className={css.coin}>
        <div className={css.coinName}>
          <img src={coinData.image.large} alt="Coin icon" />
          <p>
            <b>
              {coinData.name}({coinData.symbol.toUpperCase()})
            </b>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={css.spinner}>
        <div className={css.spin}></div>
      </div>
    );
  }
};

export default Coin;
