import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

const StartRating = (props) => {
    const { user } = useContext(AuthContext);
    const [ rating, setRating ] = useState(null);
    const [ hover, setHover ] = useState(null);
    const navigate = useNavigate();

    const handleOnClick = (e) => {
        e.preventDefault();
        const storedToken = localStorage.getItem("authToken");
        

        const requestBody = { hover };
        
        axios
        .put(`${API_URL}/api/ratings/${user.id}`, requestBody,  {
            headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
        navigate("/");
        });
    };
    return (
    <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
                <label>
                    <input 
                    type="radio" 
                    name="rating" 
                    value={ratingValue} 
                    onClick={handleOnClick}
                    
                    />
                    <FaStar className="star" 
                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                    size={30}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}/>
                </label>
            );
        })}
        </div>
)
}

export default StartRating;