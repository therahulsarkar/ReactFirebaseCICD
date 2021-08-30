import React, {useContext} from 'react';
import ContextC from './ContextC';
import {FirstName, LastName} from '../app'

const ContextB =()=>{

    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return(
        <>
        <h1>My Name is {fname} {lname} from useContext</h1>
        <ContextC />
        </>
    )
}

export default ContextB;