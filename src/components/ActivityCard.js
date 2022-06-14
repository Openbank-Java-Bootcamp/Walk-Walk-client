// src/components/ActivityCard.js

import { Link } from "react-router-dom";
import DogCard from "./DogCard";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";


function ActivityCard({ title, type, city, creator, dogs, id }) {
    const { user } = useContext(AuthContext);
    const [ title1 , setTitle ] = useState("");
    const [ type1 , setType] = useState("");
    const [ city1 , setCity ] = useState("");
    const [ creatorId1 , setCreatorId ] = useState("");
    const [ assignedId, setAssignedId] = useState("");
    const [ dogsId, setDogsId] = useState("");
    const navigate = useNavigate();
    
    const handleClick = (e) => {
        e.preventDefault();
        const storedToken = localStorage.getItem("authToken");
        setTitle(title);
        setType(type);
        setCity(city);
        setCreatorId(creator.id);
        setAssignedId(user.id);
        setDogsId(dogs)
        

        const requestBody = { title1, type1, city1, creatorId1, assignedId, dogsId};
        console.log(requestBody)
        axios
        .put(`${API_URL}/api/activities/${id}`, requestBody,  {
            headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
        navigate("/myactivities");
        });
    };


    return (
        <div className="ActivityCard card"
        style={{
            backgroundColor: 'pink',
          }}>
            <h3>{title}</h3>
            <p style={{ maxWidth: "400px" }}>{type}</p>
            <p style={{ maxWidth: "400px" }}>Activity created by: {creator.name}</p>
            <button onClick={handleClick}>Choose activity</button>
            
        </div>
    );
}

export default ActivityCard;