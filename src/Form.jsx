import React, { useState } from 'react';
 
const Form = ()=>{
    
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");

    const [fullName, setFullName] = useState("");
    const [lastNameNew, setLastNameNew] = useState("");

    const InputEvent =(event) =>{
      setName(event.target.value);
    }

    const SecondInputEvent =(event) =>{
        setLastName(event.target.value);
    }
  

    const onSubmit =()=>{
       setFullName(name);
       setLastNameNew(lastName);

    }
return(
    <>
    <div>
    <h1>Fill up the form Mr. {fullName}{lastNameNew}</h1>
    <input type="text" placeholder="Enter your name" onChange={InputEvent} value={name}/><br/>
    <input type="text" placeholder="Enter your last name" onChange={SecondInputEvent} value={lastName}/><br/>
    <button  onClick={onSubmit}>Submit</button>
    </div>
    </>
) 
}

export default Form;