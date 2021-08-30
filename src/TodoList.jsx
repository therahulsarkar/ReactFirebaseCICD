import React, { useState } from 'react';
import Button from '@material-ui/core/Button' 
import Card from '@material-ui/core/Card';
import TodoListItems from './TodoListItems'

const TodoList = ()=>{
    
    const [item, setItem] = useState("");

    const [newItem, setNewItem] = useState([]);

    const itemEvent =(event)=>{
        setItem(event.target.value);
    }

    const showItems =()=>{
        setNewItem((previousItem)=>{
            return [...previousItem, item]; //Previous data, new data
        });
        setItem(""); //To reset the placeholder value
    }
return(
    <>
    <Card variant="outlined" style={{backgroundColor: "#e5e5e5"}}>
        <div className="main_div">
            <div className="">
                <br/>
                    <h1>ToDo List</h1>
                <br/>
                <input type="text" value= {item} placeholder="Add an item" onChange={itemEvent}/>
                <Button className="newBtn" variant="contained" color="primary" onClick={showItems}>
                Add
                </Button>   
                <ol>
                {newItem.map((val, index) => { return <TodoListItems key={index} text={val} /> })}
                </ol>     
            </div>
        </div>
    </Card>
    </>
) 
}

export default TodoList;