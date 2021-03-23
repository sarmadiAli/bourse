import React from "react";

function Chart(props) {
  let { currentData } = props
  return <div className="chartContainer">
    {
      
      currentData && currentData.map((item, index) => {
        if (index < 50) return (
          <div key={index} className={item.up ? 'chart_up' : 'chart_down'} style={{ marginLeft:2,width:20,height: (item.value / 7900000) * 300 }}></div>

        )
      })
    }
  </div>;
}

export default Chart;
