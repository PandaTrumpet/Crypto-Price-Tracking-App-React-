import { useContext, useEffect, useState } from "react";
import css from "./Coin.module.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/coinContext.jsx";
import LineChart from "../../Components/LineChart/LineChart.jsx";
const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  

  const { currency } = useContext(CoinContext);

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-uM58wvtiR1BsxCBiLWnX3Jmh",
      },
    };
  const fetchCoinData = async () => {
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
    const data = await res.json();
    setCoinData(data);
  } catch (err) {
    console.error(err);
  }
};

  const optionsHistorical = { method: "GET", headers: { accept: "application/json" } };
  const fetchHistoricalData = async () => {
    try {
      const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
        optionsHistorical
      )
      const data = await res.json()
      setHistoricalData(data)
    } catch (error) {
      console.error(error);
      
    }

  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency,coinId]);

  if (coinData && historicalData) {
    return (
      <div className={css.coin}>
        <div className={css.coinName}>
          <img src={coinData?.image?.large} alt="Coin icon" />
          <p>
            <b>
              {coinData.name}({coinData.symbol.toUpperCase()})
            </b>
          </p>
        </div>

        <div className={css.coinChart}>
          <LineChart historicalData={historicalData} />
        </div>


        <div className={css.coinInfo}>
          <ul>
            <li>
              Crypo Market Rank
            </li>
            <li>
              { coinData.market_cap_rank}
            </li>
          </ul>
          <ul>
            <li>
              Current Price
            </li>
            <li>
              { currency.symbol} { coinData.market_data.current_price[currency.name].toLocaleString()}
            </li>
          </ul>
            <ul>
            <li>
              Market Cap
            </li>
            <li>
              { currency.symbol} { coinData.market_data.market_cap[currency.name].toLocaleString()}
            </li>
          </ul>
             <ul>
            <li>
              24 Hour high
            </li>
            <li>
              { currency.symbol} { coinData.market_data.high_24h[currency.name].toLocaleString()}
            </li>
          </ul>
             <ul>
            <li>
              24 Hour low
            </li>
            <li>
              { currency.symbol} { coinData.market_data.low_24h[currency.name].toLocaleString()}
            </li>
          </ul>
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
