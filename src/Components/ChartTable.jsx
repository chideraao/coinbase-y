/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import {
  CryptosContext,
  SparklineContext,
  UserDataContext,
} from "../State/GlobalContext";
import {
  BCHChart,
  BTCChart,
  ETHChart,
  LTCChart,
} from "../Components/CoinsSparkline";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

/**Regex for commas after every three digits */

const addCommasToNumber = (num) => {
  return Intl.NumberFormat().format(num);
};

/** Main table component */

function ChartTable() {
  const [cryptos, setCryptos] = useContext(CryptosContext);
  const [userData, setUserData] = useContext(UserDataContext);
  const [sparkline, setSparkline] = useContext(SparklineContext);

  /** memoization of table values and prevention of rendering before the components are ready for render */
  const tableData = React.useMemo(
    () =>
      !cryptos.length ||
      !sparkline.length ||
      cryptos === undefined ||
      sparkline === undefined
        ? []
        : [
            {
              imgSrc: cryptos[0].logo_url,
              name: `${cryptos[0].name} `,
              id: `${cryptos[0].symbol}`,
              price: `${addCommasToNumber(
                Math.round(cryptos[0].price * 100) / 100
              )}`,
              change: `${
                Math.round(cryptos[0]["1d"].price_change_pct * 10000) / 100
              }%`,
              chart: <BTCChart />,
            },
            {
              imgSrc: cryptos[1].logo_url,
              name: `${cryptos[1].name}`,
              id: `${cryptos[1].symbol}`,
              price: `${addCommasToNumber(
                Math.round(cryptos[1].price * 100) / 100
              )}`,
              change: `${
                Math.round(cryptos[1]["1d"].price_change_pct * 10000) / 100
              }%`,
              chart: <ETHChart />,
            },
            {
              imgSrc: cryptos[2].logo_url,
              name: `${cryptos[2].name}   `,
              id: `${cryptos[2].symbol}`,
              price: `${addCommasToNumber(
                Math.round(cryptos[2].price * 100) / 100
              )}`,
              change: `${
                Math.round(cryptos[2]["1d"].price_change_pct * 10000) / 100
              }%`,
              chart: <LTCChart />,
            },
            {
              imgSrc: cryptos[3].logo_url,
              name: `${cryptos[3].name} `,
              id: `${cryptos[3].symbol}`,
              price: `${addCommasToNumber(
                Math.round(cryptos[3].price * 100) / 100
              )}`,
              change: `${
                Math.round(cryptos[3]["1d"].price_change_pct * 10000) / 100
              }%`,
              chart: <BCHChart />,
            },
          ],
    [cryptos, sparkline]
  );

  const history = useHistory();
  const handleRowClick = (item) => {
    history.push(`/prices/${item.id}`);
  };

  return (
    <div className="home-table">
      {cryptos.length && sparkline.length ? (
        <table role="table">
          <thead>
            <tr>
              <th className="table-serial">#</th>
              <th colSpan="2">Name</th>
              <th className="table-empty"></th>
              <th className="table-empty"></th>
              <th className="table-empty"></th>
              <th>Price</th>
              <th>Change</th>
              <th className="table-chart">Chart</th>
              <th className="table-trade">Trade</th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((item, index) => {
              return (
                <tr key={index} onClick={() => handleRowClick(item)}>
                  <td className="table-serial">{index + 1}</td>
                  <td colSpan="2" className="flex table-main">
                    <div className="">
                      <img src={item.imgSrc} alt={`${item.name} logo`} />
                    </div>
                    <div className="hidden-flex">
                      {item.name} &nbsp;&nbsp; <span>{item.id}</span>
                    </div>
                  </td>

                  <td className="table-empty"></td>
                  <td className="table-empty"></td>
                  <td className="table-empty"></td>
                  <td className="table-empty"></td>
                  <td className="crypto-price">
                    {userData.currency.symbol} {item.price}
                  </td>
                  {
                    <td
                      className={
                        cryptos[index]["1d"].price_change_pct * 100 >= 0
                          ? "gains"
                          : "loss"
                      }
                    >
                      {cryptos[index]["1d"].price_change_pct * 100 >= 0
                        ? `+${item.change}`
                        : `${item.change}`}
                    </td>
                  }
                  <td className="table-chart">{item.chart}</td>
                  <td className="table-trade">
                    <button className="btn">Buy</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </div>
  );
}

export default ChartTable;
