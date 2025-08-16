import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function InfoBox({info}){
  let rainUrl="https://media.assettype.com/freepressjournal/2023-05/149a770a-d0f7-430b-bd28-3cd592ce40e3/Hero_Image___2023_05_04T092030_578.jpg"
 let colUrl="https://cdn.dnaindia.com/sites/default/files/styles/full/public/1782753.jpg"
 let hotUrl="https://www.hindustantimes.com/ht-img/img/2024/05/29/1600x900/heatwave_1682126178495_1717001728091_1717001745747.jpg"
return   <div className="InfoBox">
   <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rainUrl:info.temp>15?hotUrl:colUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
          <p>Temperature ={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Minimum Temperature={info.tempMin}&deg;C</p>
          <p>Maximum Temperature={info.tempMax}&deg;C</p>
          <p>The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>

}