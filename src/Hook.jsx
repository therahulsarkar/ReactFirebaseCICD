import React, { useState } from 'react';

const Hook = ()=>{
    const state = useState(); 
    const  [count, setCount] = useState(0);
    
    const IncreamentByOne = ()=>{
        setCount(count+1);
    };
    
return(
    <>
        <h1> { count } </h1>
        <button onClick={IncreamentByOne}>Click me</button>
    </>
) 
}

export default Hook;