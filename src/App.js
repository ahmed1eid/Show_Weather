import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useEffect , useState } from 'react';
import Theme from './Components/theme';
import moment from 'moment'
import { useTranslation } from "react-i18next";
import 'moment/locale/ar-dz'


function App() {
  let [city, setCity] = useState(localStorage.getItem("City") || "Cairo")
  let [WeatherData , SetWeatherData] = useState({})
  let [DateAndTime,SetDateAndTime] = useState("")
  const { t, i18n } = useTranslation();


  const getWeather = () => {

    SetDateAndTime(moment().locale(i18n.language === "ar" ? "ar-dz" : "en").format('LLLL'))

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=300a058b5f16359e5e6dc459301de0e0`)
    .then((response) => {
      console.log(response.data)
      let temp = Math.round(response.data.main?.temp-273.15) || "..";
      let maxTemp = Math.round(response.data.main?.temp_max-273.15) || "..";
      let minTemp = Math.round(response.data.main?.temp_min-273.15) || "..";
      let sity = response.data.name || ".."
      let descriotion = response.data.weather?.[0].description || ".."
      let IconSrc = response.data.weather?.[0].icon || ".."
      SetWeatherData({temp,maxTemp,minTemp,sity,descriotion,IconSrc})
    })
    .catch((error) => {
      console.log(error);
      alert(t("city not found"));
    });
  }

  const weatherMap = {
    "clear sky": "سماء صافية",
    "broken clouds": "غيوم متفرقة",
    "few clouds": "غيوم قليلة",
    "scattered clouds": "غيوم متناثرة",
    "rain": "مطر",
    "shower rain": "أمطار خفيفة",
    "thunderstorm": "عاصفة رعدية",
    "snow": "ثلوج",
    "mist": "ضباب",
  };

  useEffect(() => {
    getWeather()
    localStorage.setItem("City",city)
  }, [])

  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
     moment.locale(i18n.language === "ar" ? "ar-dz" : "en");
  }, [i18n.language]);


  return (
    <Theme>
      <div className="App">
        <header className="App-header">
          <Container sx={{ width: "50vw" , bgcolor: "primary.light", color: "white" , boxShadow:"none" }}>
            <Card sx={{ minWidth: "50%" , bgcolor: "primary.main", color: "white"  }}>
              <CardContent>
                <Box sx={{borderBottom:"2px solid white"}}>
                  <Grid container spacing={2} alignItems="end">
                      <Grid item xs={8} >
                        <Typography  sx={{ fontSize: 60,fontFamily:"inherit" }}>
                          {WeatherData.sity}
                        </Typography>
                      </Grid>
                      <Grid item xs={4} >
                        <Typography sx={{fontFamily:"-apple-system",color:"#ffffffa9"}} variant="h6" component="div">
                          {DateAndTime}
                        </Typography>
                      </Grid>
                  </Grid>
                </Box>

                <Box>
                  <Grid sx={{display:"flex",alignItems:"end"}} container spacing={2} alignItems="center">
                      <Grid item xs={8} size={6}>
                        <Typography sx={{ color: 'text.secondary',display:"flex",justifyContent:"center",alignItems:"center", fontSize:60}}>
                          {WeatherData.temp}°
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 1.5 , fontSize:30 }}>
                          {i18n.language === "ar"
                          ? weatherMap[WeatherData.descriotion] || WeatherData.descriotion
                          : WeatherData.descriotion}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                          {t("min")} {WeatherData.minTemp} | {t("max")} {WeatherData.maxTemp}
                        </Typography>
                      </Grid>
                      <Grid item xs={4} size={6}>
                        <Typography variant="h1" component="div">
                        {  WeatherData.IconSrc && (
                          <img
                            src={`https://openweathermap.org/img/wn/${WeatherData.IconSrc}@2x.png`}
                            alt="weather icon"
                            style={{ width: 200 }}
                          />
                        )}
                        </Typography>
                      </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
            <CardActions sx={{justifyContent:"center", gap:2}} >
              <Button
                onClick={getWeather} 
                variant="contained"
              >
                {t("search")}
              </Button>
              <input 
                onKeyDown={(e) => {
                  if (e.key === "Enter") getWeather();
                }}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder={t("enter_city")}
                style={{padding:"10px", borderRadius:"8px", border:"none"}}
              />
            </CardActions>
          </Container>
        </header>
      </div>
    </Theme>
  );
}

export default App;