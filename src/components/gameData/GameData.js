import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { BASE_URL } from "../constants/GameApi";
import Search from "../search/Search";



function GameData() {
    const [ apiData, SetApiData ] = useState([]);
    const [ filteredApiData, SetFilteredApiData ] = useState([])

 
    useEffect(function() {
        fetch(BASE_URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            SetApiData(json.results)
            SetFilteredApiData(json.results)

        })
        .catch(function(error) {
            console.log(error)
        })
    }, []);
    
    const filterItems = function(e) {
        const searchValue = e.target.value.toLowerCase();
        const filteredArray = apiData.filter(function(item) {
            const lowerCaseName = item.name.toLowerCase() 
            
            if (lowerCaseName.includes(searchValue)) {
                return true;
            }
            return false;
        });
        SetFilteredApiData(filteredArray);
    }
    
    return (
        <>
            <div className="search">
            <Search handleSearch={filterItems} />
            </div>
            {filteredApiData.map(function(list) {
                const { name, rating, released, background_image, id } = list; 
                return (
                    <Link to={"/game/" + id}>
                        <div className="wrap" id="wrap">  
                        <img className="image" src={background_image} alt={name}/>
                        <h3 className="gameTitle">Title: {name}</h3>
                        <p className="gameTitle">Rating: {rating}</p>
                        <p className="gameTitle">Release date: {released}</p>
                        </div>
                   </Link>
                   
                )
            })}
        </>
    )
}

export default GameData;