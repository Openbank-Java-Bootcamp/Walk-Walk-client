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
    const [ activityDate, setActivityDate] = useState(props.activityDate)
    
    const navigate = useNavigate();
    console.log(props.activityDate)
    const handleClick = (e) => {
        
        e.preventDefault();
        const storedToken = localStorage.getItem("authToken");
        

        const requestBody = { title, type, city, creatorId, assignedId, activityDate };
        
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
            <p style={{ maxWidth: "400px" }}><b>{props.type}</b></p>
            <p style={{ maxWidth: "400px" }}><b>Activity created by:</b> {props.creator.username}</p>
            <p style={{ maxWidth: "400px" }}><b>Location:</b> {props.city}</p>
            <p style={{ maxWidth: "400px" }}><b>Date:</b> {props.activityDate}</p>
            <button id="btn2" onClick={handleClick}>Choose activity</button>
            
        </div>
    );
}

export default ActivityCard;