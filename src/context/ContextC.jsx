import React from 'react';
import {FirstName, LastName} from '../app'

const ContextC =()=>{
    return(
        <>
        <FirstName.Consumer>
        {(fname)=>{
            return(
                <LastName.Consumer>{(lname)=>{
                    return(
                        <h1>Hello {fname} {lname} from ContextC </h1>
                    )
                }} 
                </LastName.Consumer>
            )
        }}
        </FirstName.Consumer>
        
    </>
    )
}

export default ContextC;