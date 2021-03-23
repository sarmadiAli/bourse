import React from "react";

function StockCard(props) {
  let { currentData, up, data } = props

  // let children = container.querySelector(".chartContainer").childElementCount;
// console.log(children)
  return (
    <div className="stockContainer">
      <div className="header">
        <div id="arrow" data-testid="arrow-element" className={up ? 'up' : 'down'} />
        <div className="title" data-testid="title-element">{currentData?.name ?? '...'}</div>
      </div>
      <div className="info">
        <div id="percentage" data-testid="percentage-element" className={up ? "percentage_up" : "percentage_down"} >{data}</div>
        <div className="price" data-testid="price-element">{currentData?.value ?? "..."}</div>
      </div>
    </div>
  );
}
export default StockCard;
