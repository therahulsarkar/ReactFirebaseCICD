import React, {createContext} from 'react'; 
import Heading from './header'; //Components
import Paragraph from './paragraph';
import Card from './card';
import CardData from './CardData';
import Hook from './Hook';
import Time from './Time';
import ButtonEvent from './ButtonEvent';
import LinearProgress from '@material-ui/core/LinearProgress';
import Form from './Form';
import TodoList from './TodoList';
import ContextA from './context/ContextA'
import UseEffect from './context/UseEffect';
import Pokemon from './Axios/Pokemon'

// Custom exported components
import {name, age, position, add} from './export' //OR
import * as all from './export';
import '../src/index.css'; //CSS file

const imgStyle = {
    position: "relative",
    left: "45%",
    top: "0px",
};

//Map function to go through all the array objects
//We are using key attribute because react need
const cardMap = (val) =>{
    return(
        <Card
         key={val.id}
         imgSrc= {val.imgSrc} 
         name={val.name}  
         year={val.year} 
        />
    )
}

const renderHeading = "yes";

//? Context API
const FirstName = createContext();
const LastName = createContext();

const App = ()=>{
    return (
    <>
        <Heading />
        <Paragraph />
        <img src= "https://picsum.photos/200/300" style= {imgStyle}/>
        <br/>
        <LinearProgress variant="determinate"/>
            <h1>Hi i'm {name}</h1>
            <h1>Hi i'm {all.name}</h1> 
            <h1>I'm {age} years old</h1>
            <h1>{position()}</h1>
            <h1>Sum of 10 & 20 is {add(10,20)}</h1>

        <LinearProgress variant="determinate"/>
        <h2>-----------Way 1-----------</h2>
        <Card imgSrc= "https://picsum.photos/200/300" name="Card1" year="2021"/>
        <Card imgSrc= "https://picsum.photos/200/300" name="Card2" year="2020"/>
        <Card imgSrc= "https://picsum.photos/200/300" name="Card3" year="2019"/>
        
        <LinearProgress variant="determinate"/>
        <h2>-----------Way 2-----------</h2>
        <Card imgSrc= {CardData[0].imgSrc} name={CardData[0].name}  year={CardData[0].year} />
        <Card imgSrc= {CardData[1].imgSrc} name={CardData[1].name}  year={CardData[1].year}/>
        <Card imgSrc= {CardData[2].imgSrc} name={CardData[2].name}  year={CardData[2].year}/>
        
     
        <LinearProgress variant="determinate"/>
        <h2>----Way 3 using map--------</h2>
        {CardData.map(cardMap)}

        <LinearProgress variant="determinate"/>
        <h2>---Conditional rendering---</h2>
        {(renderHeading === "yes") ? <Heading/> : <Paragraph/> }
        
        <LinearProgress variant="determinate"/>
        <h2>--------HOOK-----------</h2>
        <Hook />

        <LinearProgress variant="determinate"/>
        <h2>--------Time-----------</h2>
        <Time />

        <LinearProgress variant="determinate"/>
        <h2>-----Button Event------</h2>
        <ButtonEvent />

        <LinearProgress variant="determinate"/>
        <h2>----------Form---------</h2>
        <Form />

        <TodoList />

        <LinearProgress variant="determinate"/>
        <h2>--------Context---------</h2>
        
        {/*Passing data to direct Context c without sending it through ContextA & ContextB */}
        
        <FirstName.Provider value={"Rahul"}>
            <LastName.Provider value={"Sarkar"}>
                <ContextA />
            </LastName.Provider>
        </FirstName.Provider>

        <LinearProgress variant="determinate"/>
        <h2>--------useEffect---------</h2>
        <UseEffect />

        <LinearProgress variant="determinate"/>
        <h2>----------Axios-----------</h2>
        <Pokemon/>

        </>
    )
}

export default App;
export {FirstName, LastName};
