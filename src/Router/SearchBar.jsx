import React, {useState} from 'react';
import SearchResult from './SearchResult';

const SearchBar = ()=>{

    const [img, setImg] = useState("");
    const inputEvent = (event) =>{
        const data = event.target.value;
        setImg(data);        
    }

return(
    <>
        <div>
            <input type="text" placeholder="Enter your query" value={img} onChange={inputEvent}/> 
        
            <SearchResult name={img}/>
        </div>
    </>
)
}

export default SearchBar;