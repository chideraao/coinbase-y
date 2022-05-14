/* eslint-disable no-unused-vars */
import React, { useCallback, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
  PricesRUNE,
  PricesBTC,
  PricesGRT,
  PricesXTZ,
  PricesBAND,
} from "../Components/PricesSparkline";
import PricesTable from "../Components/PricesTable";
import { UserDataContext } from "../State/GlobalContext";
import {
  PricesCryptoContext,
  PricesSparklineContext,
  ShowcaseCryptosContext,
} from "../State/PricesContext";
import LearnIllustration from "../logos/Learn_Illustration_Ultimate_Guide_Bitcoin.png";
import { HeaderContext } from "../State/HeaderContext";
import HeaderMenu from "../Components/HeaderMenu";
import { Loader } from "../Components/Loader";
import Axios from "axios";

/**Defining API endpoints */
const api = {
  base: "https://api.nomics.com/v1/currencies/ticker?",
  key: process.env.REACT_APP_NOMICS_KEY,
  sparklineBase: "https://api.coingecko.com/api/v3/coins/",
  zoneKey: process.env.REACT_APP_LOCATION_KEY,
  zoneBase: "https://api.ipgeolocation.io/ipgeo?",
};

/** setting up utc data for API calls */
let ourDate = new Date();

let pastDate = ourDate.getDate() - 1;
ourDate.setDate(pastDate);
let month = ourDate.getMonth() + 1;
let year = ourDate.getFullYear();
let day = ourDate.getDate();
let hour = ourDate.getHours();
let minute = ourDate.getMinutes();
let seconds = ourDate.getSeconds();

/**Regex for commas after every three digits */
const addCommasToNumber = (num) => {
  return Intl.NumberFormat().format(num);
};

const intlFormat = (num) => {
  return new Intl.NumberFormat().format(Math.round(num * 10) / 10);
};
const abbr = (num) => {
  if (num >= 1000000000000) return intlFormat(num / 1000000000000) + "T";
  if (num >= 1000000000) return intlFormat(num / 1000000000) + "B";
  if (num >= 1000000) return intlFormat(num / 1000000) + "M";
  if (num >= 1000) return intlFormat(num / 1000) + "K";
  return intlFormat(num);
};

function Prices() {
  const [cryptos, setCryptos] = useContext(PricesCryptoContext);
  const [userData, setUserData] = useContext(UserDataContext);
  const [sparkline, setSparkline] = useContext(PricesSparklineContext);
  const [showcaseCryptos, setShowcaseCryptos] = useContext(
    ShowcaseCryptosContext
  );
  const [menuClick, setMenuClick] = useContext(HeaderContext);

  useEffect(() => {
    Axios.get(`${api.zoneBase}apiKey=${api.zoneKey}&include=useragent`)
      .then((response) => {
        setUserData(response.data);

        Axios.all([
          Axios.get(
            `${api.sparklineBase}bitcoin/market_chart?vs_currency=${response.data.currency.code}&days=1`
          ),
          Axios.get(
            `${api.sparklineBase}the-graph/market_chart?vs_currency=${response.data.currency.code}&days=1`
          ),
          Axios.get(
            `${api.sparklineBase}thorchain/market_chart?vs_currency=${response.data.currency.code}&days=1`
          ),
          Axios.get(
            `${api.sparklineBase}tezos/market_chart?vs_currency=${response.data.currency.code}&days=1`
          ),
          Axios.get(
            `${api.sparklineBase}band-protocol/market_chart?vs_currency=${response.data.currency.code}&days=1`
          ),
          Axios.get(
            `${api.base}key=${api.key}&per-page=100&page=1&convert=${response.data.currency.code}&interval=1h,1d,7d,30d,365d`
          ),
          Axios.get(
            `/.netlify/functions/index?convert=${response.data.currency.code}`
          ),
        ]).then((res) => {
          setSparkline([
            res[0].data,
            res[1].data,
            res[2].data,
            res[3].data,
            res[4].data,
          ]);
          setCryptos(res[5].data);

          setShowcaseCryptos([res[6].data.data]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, [setCryptos, setUserData, setSparkline, setShowcaseCryptos]);

  const market = React.useMemo(() => {
    return !cryptos.length
      ? ""
      : `${Math.round(cryptos[0]["1d"].price_change_pct * 12000) / 100}`;
  }, [cryptos]);

  /**memoizing crypto values, rendering breaks otherwise */
  const marketHealth = React.useMemo(
    () =>
      !sparkline.length ||
      !showcaseCryptos.length ||
      sparkline === undefined ||
      showcaseCryptos === undefined
        ? []
        : [
            {
              img: "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/GRT.jpg",
              name: showcaseCryptos[0]["6719"].name,
              price:
                showcaseCryptos[0]["6719"].quote[userData.currency.code].price,
              chart: <PricesGRT />,
            },
            {
              img: "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/RUNE.png",
              name: showcaseCryptos[0]["4157"].name,
              price:
                showcaseCryptos[0]["4157"].quote[userData.currency.code].price,
              chart: <PricesRUNE />,
            },

            {
              img: "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/xtz.svg",
              name: showcaseCryptos[0]["2011"].name,
              price:
                showcaseCryptos[0]["2011"].quote[userData.currency.code].price,
              chart: <PricesXTZ />,
            },
            {
              img: cryptos[0].logo_url,
              name: cryptos[0].name,
              price: cryptos[0].price,
              volume: cryptos[0].market_cap,
              chart: <PricesBTC />,
            },
            {
              img: "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/BAND.png",
              name: showcaseCryptos[0]["4679"].name,
              price:
                showcaseCryptos[0]["4679"].quote[userData.currency.code].price,
              chart: <PricesBAND />,
            },
          ],
    [sparkline, cryptos, showcaseCryptos, userData]
  );

  return (
    <div>
      {cryptos.length && sparkline.length ? (
        <div className="prices">
          {menuClick ? (
            <HeaderMenu />
          ) : (
            <>
              {" "}
              <Header />
              <main className="prices-main">
                <div className="market-health">
                  <div className="container">
                    <h1 className="flex-column">
                      <span className="link-heading">In the last 24 hours</span>

                      <span>
                        Market is {market > 0 ? "up" : "down"}
                        <span className={market >= 0 ? "gains" : "loss"}>
                          {"  "}
                          {market}%
                        </span>
                      </span>
                    </h1>
                  </div>
                  {showcaseCryptos.length && sparkline.length ? (
                    <div className="container">
                      <div className="box-container flex">
                        <Link to="prices/RUNE">
                          <div className="prices-box">
                            <h2>Top gainer (24h)</h2>
                            <div className="sparkline-container flex">
                              <div className="crypto-profile flex">
                                <div className="box-img">
                                  <img
                                    src={marketHealth[1].img}
                                    alt={`${marketHealth[1].name} icon`}
                                  />
                                </div>
                                <div className="box-title">
                                  <h3>{marketHealth[1].name}</h3>
                                  <p className="gains">+40.59%</p>
                                </div>
                              </div>

                              <div className="sparkline-main">
                                <p>
                                  {userData.currency.symbol}{" "}
                                  {`${addCommasToNumber(
                                    Math.round(marketHealth[1].price * 100) /
                                      100
                                  )}`}
                                </p>
                                {marketHealth[1].chart}
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="prices/GRT">
                          <div className="prices-box">
                            <h2>New listing</h2>
                            <div className="sparkline-container flex">
                              <div className="crypto-profile flex">
                                <div className="box-img">
                                  <img
                                    src={marketHealth[0].img}
                                    alt={`${marketHealth[0].name} icon`}
                                  />
                                </div>
                                <div className="box-title">
                                  <h3>{marketHealth[0].name}</h3>
                                  <p>Added Dec 17</p>
                                </div>
                              </div>

                              <div className="sparkline-main">
                                <p>
                                  {userData.currency.symbol}{" "}
                                  {`${addCommasToNumber(
                                    Math.round(marketHealth[0].price * 100) /
                                      100
                                  )}`}
                                </p>
                                {marketHealth[0].chart}
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="/learn">
                          <div className="prices-box learn-box flex">
                            <div className="prices-box-text flex-column">
                              <h2 className="flex-column">
                                Crypto questions, <span>answered</span>
                              </h2>
                              <p>Learn with Basecoin</p>
                            </div>
                            <div className="learn-img flex">
                              <img
                                src={LearnIllustration}
                                alt="learn illustration img"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="box-container box-container-ii flex">
                        <Link to="prices/BTC">
                          <div className="prices-box">
                            <h2>Highest volume (24h)</h2>
                            <div className="sparkline-container flex">
                              <div className="crypto-profile flex">
                                <div className="box-img">
                                  <img
                                    src={marketHealth[3].img}
                                    alt={`${marketHealth[3].name} icon`}
                                  />
                                </div>
                                <div className="box-title">
                                  <h3>{marketHealth[3].name}</h3>
                                  <p>
                                    {userData.currency.symbol}{" "}
                                    {`${abbr(marketHealth[3].volume)}`}
                                  </p>
                                </div>
                              </div>

                              <div className="sparkline-main">
                                <p>
                                  {userData.currency.symbol}{" "}
                                  {`${addCommasToNumber(
                                    Math.round(marketHealth[3].price * 100) /
                                      100
                                  )}`}
                                </p>
                                {marketHealth[3].chart}
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="prices/XTZ">
                          <div className="prices-box">
                            <h2>Most visited (24h)</h2>
                            <div className="sparkline-container flex">
                              <div className="crypto-profile flex">
                                <div className="box-img">
                                  <img
                                    src={marketHealth[2].img}
                                    alt={`${marketHealth[2].name} icon`}
                                  />
                                </div>
                                <div className="box-title">
                                  <h3>{marketHealth[2].name}</h3>
                                  <p className="gains">+420.69% views</p>
                                </div>
                              </div>

                              <div className="sparkline-main">
                                <p>
                                  {userData.currency.symbol}{" "}
                                  {`${addCommasToNumber(
                                    Math.round(marketHealth[2].price * 100) /
                                      100
                                  )}`}
                                </p>
                                {marketHealth[2].chart}
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="prices/BAND">
                          <div className="prices-box">
                            <h2>Earn free crypto</h2>
                            <div className="sparkline-container flex">
                              <div className="crypto-profile flex">
                                <div className="box-img">
                                  <img
                                    src={marketHealth[4].img}
                                    alt={`${marketHealth[4].name} icon`}
                                  />
                                </div>
                                <div className="box-title">
                                  <h3>{marketHealth[4].name}</h3>
                                  <p>Earn $3 in BAND</p>
                                </div>
                              </div>

                              <div className="sparkline-main">
                                <p>
                                  {userData.currency.symbol}{" "}
                                  {`${addCommasToNumber(
                                    Math.round(marketHealth[4].price * 100) /
                                      100
                                  )}`}
                                </p>
                                {marketHealth[4].chart}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <section className="price-cryptos">
                  <div className="container">
                    <PricesTable />
                  </div>
                </section>
              </main>
              <Banner />
              <Footer />
            </>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Prices;
