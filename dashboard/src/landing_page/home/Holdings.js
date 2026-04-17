import React from "react";
import { holdings } from "../../data/data";
export default function Holdings() {
  return (
    <div className="container  " style={{ marginTop: "2.5rem" }}>
      <h1 style={{ fontSize: "1.5rem", opacity: "0.7" }}>
        Holdings({holdings.length})
      </h1>
      <div className="container d-flex mt-5" style={{ marginTop: "3rem" }}>
        <div className="d-flex flex-column" style={{ paddingRight: "5rem" }}>
          <h2 style={{ fontSize: "1.8rem" }}>29,875.</h2>
          <p style={{ fontSize: "0.8rem" }}>95</p>
          <p className="py-3" style={{ color: "black", opacity: "0.4" }}>
            Total investment
          </p>
        </div>

        <div
          className="d-flex flex-column px-4"
          style={{ marginLeft: "5rem", marginRight: "5rem" }}
        >
          <h2 style={{ fontSize: "1.8rem" }}>31,428.</h2>
          <p style={{ fontSize: "0.8rem" }}>95</p>
          <p className="py-3" style={{ color: "black", opacity: "0.4" }}>
            Current value
          </p>
        </div>
        <div className="d-flex flex-column px-4" style={{ marginLeft: "5rem" }}>
          <h1 style={{ fontSize: "1.8rem", color: "#a1d99b" }}>
            1,553.40(+5.20%)
          </h1>
          <p className="py-5" style={{ color: "black", opacity: "0.4" }}>
            P&L
          </p>
        </div>
      </div>
      <div>
        <table
          style={{
            borderTop: "1px solid #B6b6b4",
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <tr>
            <th
              className="table-heading"
              style={{ borderRight: "1px solid #B6b6b4" }}
            >
              Instrument
            </th>
            <th className="table-heading">Qty.</th>
            <th className="table-heading">Avg. cost</th>
            <th className="table-heading">LTP</th>
            <th className="table-heading">Cur. val</th>
            <th className="table-heading">P&L</th>
            <th className="table-heading">Net chg.</th>
            <th className="table-heading">Day chg.</th>
          </tr>
          {holdings.map((stock, index) => {
            const currValue = stock.price * stock.qty;
            const isProfit = currValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit " : "loss ";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                
                  <td
                    className="table-data"
                    style={{ borderRight: "1px solid #B6b6b4" }}
                  >
                    {stock.name}
                  </td>
                  <td className="table-data">{stock.qty}</td>
                  <td className="table-data">{stock.avg.toFixed(2)}</td>
                  <td className="table-data">{stock.price.toFixed(2)}</td>
                  <td className="table-data">{currValue.toFixed(2)}</td>
                  <td className={`table-data ${profClass}`}  >{(currValue - stock.avg * stock.qty).toFixed(2)}</td>
                  <td className={`table-data ${profClass}`}>{stock.net}</td>
                  <td className={`table-data ${dayClass}`}>{stock.day}</td>
                
              </tr>
            );
          })}
        </table>
      </div>
      
    </div>
  );
}
