import Search from "./Search.jsx";
import InfoBox from "./InfoBox.jsx";
import {useState} from "react";
import "./WeatherApp.css"
export default function WeatherApp(){
let [info,setInfo]=useState({
    city:"Pune",
      feelslike:23,
      temp:24,
      tempMin:25,
      tempMax:26,
      humidity:47,
      weather:"haze",
  })
  let SetInfo=(result)=>{
    setInfo({})
    setInfo({
    city:result.city,
    feelslike:result.feelslike,
    temp:result.temp,
    tempMin:result.tempMin,
    tempMax:result.tempMax,
    humidity:result.humidity,
    weather:result.weather,
    })
   
  }
    return <div  >
        <h1>Weather App by Omkar</h1>
        <div className="WeatherApp" >
        <Search Setinfo={SetInfo}/>
    </div>
    <div className="
    WeatherApp">
        <InfoBox info={info}/>
        </div>
    </div>
}