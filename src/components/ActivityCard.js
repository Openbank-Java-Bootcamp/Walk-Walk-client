// src/components/ActivityCard.js

import { Link } from "react-router-dom";
import DogCard from "./DogCard";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";


function ActivityCard(props) {
    const { user } = useContext(AuthContext);
    const [ title, setTitle ] = useState(props.title);
    const [ type, setType] = useState(props.type);
    const [ city , setCity ] = useState(props.city);
    const [ creatorId , setCreatorId ] = useState(props.creator.id);
    const [ assignedId, setAssignedId] = useState(user.id);
    const navigate = useNavigate();
    
    const handleClick = (e) => {
        e.preventDefault();
        const storedToken = localStorage.getItem("authToken");
        

        const requestBody = { title, type, city, creatorId, assignedId };
        console.log(requestBody)
        axios
        .put(`${API_URL}/api/activities/${props.id}`, requestBody,  {
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
            <h3>{props.title}</h3>
            <p style={{ maxWidth: "400px" }}>{props.type}</p>
            <p style={{ maxWidth: "400px" }}>Activity created by: {props.creator.name}</p>
            <button onClick={handleClick}>Choose activity</button>
            
        </div>
    );
}

export default ActivityCard;