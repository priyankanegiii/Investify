import React from "react";
import { positions } from "../../data/data";
export default function Positions() {
  return (
    <div className="container mt-5 ">
      <table
       style={{
            borderTop: "1px solid black",
            width: "100%",
            borderCollapse: "collapse",
          }}>
        <tr>
          <th className="table-heading">Product</th>
          <th className="table-heading">Instrument</th>
          <th className="table-heading">Qty.</th>
          <th className="table-heading">Avg.</th>
          <th className="table-heading">LTP</th>
          <th className="table-heading">P&L</th>
          <th className="table-heading">Chg.</th>
        </tr>
        {positions.map((stock, index) => {
                    const currValue = stock.price * stock.qty;
                    const isProfit = currValue - stock.avg * stock.qty >= 0.0;
                    const profClass = isProfit ? "profit " : "loss ";
                    const dayClass = stock.isLoss ? "loss" : "profit";
        
                    return (
                      <tr key={index}>
                        
                          <td
                            className="table-data"
                            style={{ borderRight: "1px solid black" }}
                          >
                            {stock.product}
                          </td>
                          <td className="table-data">{stock.name}</td>
                          <td className="table-data">{stock.qty}</td>
                          <td className="table-data">{stock.avg.toFixed(2)}</td>
                          <td className="table-data">{stock.price.toFixed(2)}</td>
                          <td className={`table-data ${profClass}`} >{(currValue - stock.avg * stock.qty).toFixed(2)}
                           </td>
                          <td className={`table-data ${dayClass}`}>{stock.day}</td>
                          
                        
                      </tr>
                    );
                  })}
      </table>
    </div>
  );
}
