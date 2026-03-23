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
import 





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
                          الرياض
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
                          38 <CloudIcon sx={{ fontSize: 80 }}/>
                          </Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>broken clouds</Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>الصغري 35 | الكبري 45 </Typography>
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
            <CardActions >
              <Button sx={{color: "white"}} size="small">إنجليزي</Button>
            </CardActions>
          </Container>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;