import React, { useState } from 'react';
 
const ButtonEvent = ()=>{
    
    const green = "#4CAF50"
    const [bg, setBg] = useState(green);

    const [name, setName] = useState("Click Me");

    const BgChange = ()=>{
       let newBg = "#f54219";
       setBg(newBg);
       setName("Ouch!!")
    };
    
    const BgDchange =() =>{
        let newDBg = "#008cba"; //
       setBg(newDBg);
       setName("Ohh Nooooo!!")
    }
return(
    <>
        <button className="button" style={{backgroundColor: bg}} onClick={BgChange} onDoubleClick={BgDchange}> {name} </button>
    </>
) 
}

export default ButtonEvent;