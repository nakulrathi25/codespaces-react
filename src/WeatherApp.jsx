import WrSearchBox from './WrSearchBox.jsx';
import WrInfo from './WrInfo.jsx';
import { useState } from 'react';

export default function WeatherApp(){
    const [wrInfo,setWrInfo]=useState({});
    const updateWrInfo = (newInfo)=>{
        setWrInfo(newInfo);
    }
    return(
        <>
        <h3>Check Weather in your City</h3>
        <WrSearchBox updateWrInfo={updateWrInfo}/>
        <WrInfo wrInfo={wrInfo}/>
        </>
    )
}