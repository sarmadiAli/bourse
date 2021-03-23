import React, { useEffect, useState } from "react";
import Chart from "./components/chart/Charts";
import StockCard from "./components/stockCard/StockCard";
import "./index.css";

function App({ intervalTime }) {
  const [currentData, setCurrentData] = useState()
  const [data, setData] = useState(`+${"..."}%`)
  const [up , setUp] = useState(true)
  const [arryData , setArryData] = useState([])

  const getData = () => {
   
  }
  useEffect(() => {
   



    setInterval(() => {
      let Api = 'http://localhost:3001/stock'
      fetch(Api).then(response => response.json()).then(data => {
        // console.log("Rquest -> ", data)
        setCurrentData((prevState) => {
          let c = ((data?.value - prevState?.value))
          let b = c / prevState?.value
          let a = (b * 100).toFixed(2)
          let newData = ""
          if(isNaN(a)){
            newData = `+${a}%`
            data.up=true
          }
          if(a > 0 ){
            newData = `+${a}%`
            setUp(true)
            data.up=true
          }
          if(a < 0){
            newData = `${a}%`
              setUp(false)            
              data.up=false
          }
      
          setData(newData)
                
          return data
        })
        setArryData(prevState =>{return[...prevState , data]})
      })
    }, intervalTime);







    return () => {
      setData('+')
    };
  }, [])


  
  return <div className="container">
    <StockCard
      setData={setData} data={data} currentData={currentData} up={up} setCurrentData={setCurrentData}
    />
    <Chart up={up} currentData={arryData} />
  </div>;
}

export default App;
