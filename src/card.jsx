import React from 'react';

//Here we are passing props as argument so  that we card access their information as object
const Card = (props) =>{
    return(
        <div>
            <div>
                <img src= {props.imgSrc} alt="myPic" className="card_img"/>
                <div className="card_info">
                    <span className="card_category"></span>
                    <h3 className="card_title">{props.name}</h3>
                    <h2 className="card_year">{props.year}</h2>
                    <a href="" target="_blank">
                        <button>Watch {props.name}</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;