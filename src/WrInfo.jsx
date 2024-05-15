import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './wrInfo.css';

export default function WrInfo({wrInfo}){
  if (Object.keys(wrInfo).length === 0) {
    return null; 
  }
  let weatherImageSelection=()=>{
    let imageUrl,isHot,isCold,isRainy,isCloudy;
    let temp = wrInfo.temp;
    let desc =  wrInfo.description.toLowerCase();
    isRainy = desc.includes("rain");
    isCloudy = desc.includes("cloud");

    temp>20?isHot=true:isHot=false;
    temp<=20?isCold=true:isCold=false;
    if(isRainy){
      imageUrl="https://images.unsplash.com/photo-1533167649158-6d508895b680?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxyYWlufGVufDB8fDB8fHww";
    }else if(isCloudy){
      imageUrl="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    }else if(isHot){
      imageUrl="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    }else if(isCold){
      imageUrl="https://images.unsplash.com/photo-1610215037828-8c1c83d560af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    }
    return imageUrl;
  }
    return (
      <div>
      <Card sx={{ maxWidth: 345,minWidth: 345}}>
        <CardMedia
          sx={{ height: 140 }}
          image={weatherImageSelection()}
          title={wrInfo.city}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {wrInfo.city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <span>Temparature: <span className='wrInfoTxt'>{wrInfo.temp}&deg;C</span></span>
          <br></br>
          <span>Feels like: <span className='wrInfoTxt'>{wrInfo.feelsLike}&deg;C</span></span>
          <br></br>
          <span>Minimum-Temparature: <span className='wrInfoTxt'>{wrInfo.mintemp}&deg;C</span></span>
          <br></br>
          <span>Maximum-Temparature: <span className='wrInfoTxt'>{wrInfo.maxTemp}&deg;C</span></span>
          <br></br>
          <span>Humidity: <span className='wrInfoTxt'>{wrInfo.humidity}</span></span>
          <br></br>
          <span>Description: <span className='wrInfoTxt'>{wrInfo.description}</span></span>
          </Typography>
        </CardContent>
      </Card>
      </div>
    );
  }