import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import "./Search.css"
export default function Search({Setinfo}){
   let [city,setCity]=useState("pune");
   let [error,setError]=useState(false)
   let URL="http://api.openweathermap.org/geo/1.0/direct"
   let API_KEY="f9b1ac5daaa2c71c84dd04c3b78a3f07"
   let URL2="https://api.openweathermap.org/data/2.5/weather";

   //Search Values
   let setSearch=(event)=>{
    setCity(event.target.value)
   }
   let handleSubmit=async (evn)=>{
    evn.preventDefault();
    try{
let response=await fetch(`${URL}?q=${city}&limit=5&appid=${API_KEY}`)
let jsonResponse=await response.json()
if(jsonResponse.length===0){
    throw new Error("City not found") 
}
let lat=jsonResponse[0].lat
let lon= jsonResponse[0].lon
let response2=await fetch(`${URL2}?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
let jsonResponse2=await response2.json();
    
let result={
    city:jsonResponse2.name,
    temp:kelvinToCelcius(jsonResponse2.main.temp),
    tempMin:kelvinToCelcius(jsonResponse2.main.temp_min),
    tempMax:kelvinToCelcius(jsonResponse2.main.temp_max),
  humidity:jsonResponse2.main.humidity,
  feelslike:kelvinToCelcius(jsonResponse2.main.feels_like),
  weather:jsonResponse2.weather[0].description
}
console.log(result)
setCity("")
Setinfo(result);
}
catch(err){
    setError(true);
}
   }
   let kelvinToCelcius=(k)=>{
    return (k - 273.15).toFixed(2);
   }
    return <div className="Search">
         {error &&  <Alert variant="filled" severity="error">
        No such place is listed in WeatherApp ! Search Again
      </Alert>}<br/><br/>
        <form onSubmit={handleSubmit} action="">
        <TextField className="textFiled" id="outlined-basic" label="Outlined" onChange={setSearch} value={city} variant="outlined" /><br /><br />
        <Button variant="contained" className="button" type="submit" >Search</Button>
        </form>
       
    </div>
}