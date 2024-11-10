import css from "./Home.module.css";

const Home = () => {
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
      </div>
    </div>
  );
};

export default Home;
