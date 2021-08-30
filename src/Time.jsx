import React, { useState } from 'react';

//In line 7 const [current data, updated data] = initial data(); 
const Time = ()=>{
    
    let newTime = new Date().toLocaleTimeString();
    const [currentTime, setCurentTime] = useState(newTime);
    
    const UpdateTime = ()=>{
       let newTime = new Date().toLocaleTimeString();
       setCurentTime(newTime);
    };
    
return(
    <>
    <h1> { currentTime } </h1>
    <button onClick={UpdateTime}>Show Time</button>
    </>
) 
}

export default Time;