import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CloudIcon from '@mui/icons-material/Cloud';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useEffect , useState } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#444edc',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


function App() {
  let [city, setCity] = useState("Cairo")
  let [WeatherData , SetWeatherData] = useState({})

  const getWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=300a058b5f16359e5e6dc459301de0e0`)
      .then((response) => {
        SetWeatherData(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getWeather()
  }, [])

  let tepmr = Math.round(WeatherData.main?.temp-273) || "..";
  let maxTemp = Math.round(WeatherData.main?.temp_max-273) || "..";
  let minTemp = Math.round(WeatherData.main?.temp_min-273) || "..";
  let sity = WeatherData.name || ".."



  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Container sx={{ width: "50vw" , bgcolor: "primary.light", color: "white" , boxShadow:"none" }}>
            <Card sx={{ minWidth: "50%" , bgcolor: "primary.main", color: "white"  }}>
              <CardContent>

                <Box dir="rtl" sx={{borderBottom:"2px solid white"}}>
                  <Grid container spacing={2} alignItems="end">
                      <Grid item xs={8} >
                        <Typography  sx={{ fontSize: 60,fontFamily:"inherit" }}>
                          {sity}
                        </Typography>
                      </Grid>
                      <Grid item xs={4} >
                        <Typography sx={{fontFamily:"-apple-system",color:"#ffffffa9"}} variant="h6" component="div">
                          29 مايو 2023
                        </Typography>
                      </Grid>
                  </Grid>
                </Box>

                <Box dir="rtl">
                  <Grid sx={{display:"flex",alignItems:"end"}} container spacing={2} alignItems="center">
                      <Grid item xs={8} size={6}>
                        <Typography sx={{ color: 'text.secondary', fontSize:80}}>
                          {tepmr} <CloudIcon sx={{ fontSize: 80 }}/>
                          </Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>broken clouds</Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>الصغري {minTemp} | الكبري {maxTemp} </Typography>
                      </Grid>
                      <Grid item xs={4} size={6}>
                        <Typography variant="h1" component="div">
                          <CloudIcon sx={{ fontSize: 150 }} />
                        </Typography>
                      </Grid>
                  </Grid>
                </Box>

              </CardContent>
            </Card>
            <CardActions sx={{justifyContent:"center", gap:2}} >
              <input 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="اكتب اسم المدينة"
                style={{padding:"10px", borderRadius:"8px", border:"none"}}
              />
              <Button 
                onClick={getWeather} 
                variant="contained"
              >
                بحث
              </Button>
            </CardActions>
          </Container>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;