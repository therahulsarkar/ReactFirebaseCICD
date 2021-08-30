import React from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const User = ()=>{
    const {name, number} = useParams(); {/*Receiving the 2 dynamic parameter from the users page,we can receive as many parameters as we want*/}
    
    const location = useLocation();
    
    const history = useHistory();

    return(
        <>
        <h1>Hello {name} to our Users page, your rank is {number}</h1>
        <p>My current location is {location.pathname}</p>

        {/*If the user parameter is user/rahul/sarkar then render this button below*/}
        {location.pathname === `/user/rahul/sarkar` ? (<button onClick={()=>alert(`You are our VIP user Mr.${name} :)`)}>Welcome</button>) : null }
        <br/><br/>
        <Button  variant="contained" color="primary" onClick={()=> history.goBack()}> Go Back </Button> <br/><br/>
        <Button  variant="contained" color="primary" onClick={()=> history.push("/")}> Go To Home Page</Button> {/*Directly goto any page*/}
        </>
        )
}
 
export default User;