import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function WrSearchBox({updateWrInfo}){
    const api_url = "https://api.openweathermap.org/data/2.5/weather";
    const api_key = "31922a698d1b6bd3738b307fc3808810";
    const [error,setError]=useState(false);
    let [city,setCity]=useState("");
    let handleInputCityChange = (event)=>{
        setCity(event.target.value);
    }
    let handleCityFrmSubmit =  async (event) => {
        event.preventDefault();   
        if(city!=""){
            try{           
                let info = await getWeatherInfo();
                updateWrInfo(info);
                setCity("");
            }
           catch(err){
            setError(true);
           }
        }
    } 
    let getWeatherInfo= async ()=>{
        try{
            let wResponse = await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
            let wJsonResponse = await wResponse.json();
            var weatherInfo ={
                city:wJsonResponse.name,
                temp:wJsonResponse.main.temp,
                maxTemp:wJsonResponse.main.temp_max,
                mintemp:wJsonResponse.main.temp_min,
                humidity:wJsonResponse.main.humidity,
                description:wJsonResponse.weather[0].description,
                feelsLike:wJsonResponse.main.feels_like,
            }   
            setError(false);
            return weatherInfo;
        }
        catch(err){
            throw err;
        }
    }

    return(
        <>
        {error &&  <Stack sx={{ width: '330px' }} spacing={2}>
      <Alert severity="error">Error ! city not found</Alert>
    </Stack>}
        <form onSubmit={handleCityFrmSubmit}>
            <div style={{marginBottom:'20px',marginTop:'20px'}}>
               <TextField id="cityName" label="City" variant="outlined" value={city} onChange={handleInputCityChange} />
               <Button type='submit' style={{marginTop:'7px',marginLeft:'15px'}} variant="contained">Search</Button>
            </div>   
        </form>  
        
        </>
    );
}