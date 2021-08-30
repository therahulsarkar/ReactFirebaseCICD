import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button' 

const UseEffect = ()=>{

    const [nm, upNm] = useState(0);
    const [nmTwo, upNmTwo] = useState(0);

    {/* This will automatically run whenever the value of the button will be changed*/}
    // useEffect(()=>{
    //     alert("I am Clicked");
    // })

    {/*If we want the popup will appear only once at the first time when the page is reloaded then do this, pass an empty array */}
    // useEffect(()=>{
    //     alert("I am Clicked");
    // },[])

    {/*If we want that popup will appear only for the first button then pass the name of the variable in the array*/}
    useEffect(()=>{
        alert("I am Clicked");
    },[nm])

    useEffect(()=>{
        document.title = `You clicked ${nm} times!`
    },[nm])


    return(
        <>
        <Button variant="contained" color="secondary" onClick={()=>{upNm(nm+1);}}> Click {nm}</Button>
        <Button variant="contained" color="secondary" onClick={()=>{upNmTwo(nmTwo+1);}}> Click {nmTwo}</Button>
    </>
        )

}

export default UseEffect;