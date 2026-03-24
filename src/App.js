import './App.css';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Container,
  Grid,
  Box
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Theme from './Components/theme';
import moment from 'moment';
import { useTranslation } from "react-i18next";
import 'moment/locale/ar-dz';

function App() {
  const [city, setCity] = useState(localStorage.getItem("City") || "Cairo");
  const [WeatherData, setWeatherData] = useState({});
  const [DateAndTime, setDateAndTime] = useState("");
  const { t, i18n } = useTranslation();

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

  const getWeather = () => {
    setDateAndTime(moment().locale(i18n.language === "ar" ? "ar-dz" : "en").format('LLLL'));
    localStorage.setItem("City", city);

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=300a058b5f16359e5e6dc459301de0e0`)
      .then((response) => {
        const temp = Math.round(response.data.main?.temp - 273.15) || "..";
        const maxTemp = Math.round(response.data.main?.temp_max - 273.15) || "..";
        const minTemp = Math.round(response.data.main?.temp_min - 273.15) || "..";
        const sity = response.data.name || "..";
        const descriotion = response.data.weather?.[0].description || "..";
        const IconSrc = response.data.weather?.[0].icon || "..";
        setWeatherData({ temp, maxTemp, minTemp, sity, descriotion, IconSrc });
      })
      .catch((error) => {
        console.log(error);
        alert(t("city not found"));
      });
  };

  useEffect(() => {
    getWeather();
  }, []);

  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
    moment.locale(i18n.language === "ar" ? "ar-dz" : "en");
  }, [i18n.language]);

  return (
    <Theme>
      <div className="App">
        <header className="App-header">
          <Container maxWidth="sm" sx={{ bgcolor: "primary.light", color: "white", p: 2, borderRadius: 3 }}>
            {/* Header: City + Date + Language */}
            <Box sx={{ borderBottom: "2px solid white", pb: 2, mb: 3 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Typography sx={{ fontSize: { xs: 40, md: 60 }, fontFamily: "inherit" }}>
                    {WeatherData.sity}
                  </Typography>
                  <Typography sx={{ fontFamily: "-apple-system", color: "#ffffffa9", fontSize: { xs: 14, md: 18 } }}>
                    {DateAndTime}
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}>
                  <Button
                    sx={{ fontSize: { xs: 14, md: 18 } }}
                    color="secondary"
                    variant="text"
                    onClick={() => i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar")}
                  >
                    {i18n.language === "ar" ? "English" : "عربي"}
                  </Button>
                </Grid>
              </Grid>
            </Box>

            {/* Weather Info */}
            <Card sx={{ bgcolor: "primary.main", color: "white", boxShadow: 3, borderRadius: 3 }}>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  {/* Temperature + Description */}
                  <Grid item xs={8}>
                    <Typography sx={{ fontSize: { xs: 40, md: 60 }, display: "flex", alignItems: "center" }}>
                      {WeatherData.temp}°
                    </Typography>
                    <Typography sx={{ fontSize: { xs: 20, md: 30 }, color: 'text.secondary', mb: 1 }}>
                      {i18n.language === "ar" ? weatherMap[WeatherData.descriotion] || WeatherData.descriotion : WeatherData.descriotion}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                      {t("min")} {WeatherData.minTemp} | {t("max")} {WeatherData.maxTemp}
                    </Typography>
                  </Grid>

                  {/* Weather Icon */}
                  <Grid item xs={4}>
                    {WeatherData.IconSrc && (
                      <img
                        src={`https://openweathermap.org/img/wn/${WeatherData.IconSrc}@2x.png`}
                        alt="weather icon"
                        style={{ width: 100, height: 100 }}
                      />
                    )}
                  </Grid>
                </Grid>
              </CardContent>

              {/* Actions: Search + Input */}
              <CardActions sx={{ justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
                <Button onClick={getWeather} variant="contained">
                  {t("search")}
                </Button>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") getWeather(); }}
                  placeholder={t("enter_city")}
                  style={{ padding: "10px", borderRadius: "8px", border: "none", minWidth: 150 }}
                />
              </CardActions>
            </Card>
          </Container>
        </header>
      </div>
    </Theme>
  );
}

export default App;