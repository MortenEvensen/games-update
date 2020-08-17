import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants/GameApi";
import { useParams } from "react-router-dom"
function GameDetails() {
   let { id } = useParams();
    
    const [ cardDetails, setCardDetails] = useState([]);
    console.log(cardDetails.id);
    const name = cardDetails.name;
    const rating = cardDetails.rating;
    const released = cardDetails.released;
    const background_image = cardDetails.background_image;
    const description = cardDetails.description
    const websiteLink = cardDetails.website
    
    useEffect(function() {
        fetch(BASE_URL + "/" + id)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            setCardDetails(json)
        })
        .catch(function(error) {
            console.log(error)
        })
    }, [])

    return (
        
                    <div className="details-wrap">  
                        <h3 className="gameTitle">Title: {name}</h3>
                        <img className="image" src={background_image} alt={name}/>
                        
                        <p className="gameTitle">Rating: {rating}</p>
                        <p className="gameTitle">Release date: {released}</p>
                        <div className="gameTitle">Description: {description}</div>
                        <a href={websiteLink}><p className="link-button">Link to game webpage</p></a>
                    </div> 
                )

}

export default GameDetails;