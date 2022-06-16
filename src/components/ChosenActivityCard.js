// src/components/ChosenActivityCard.js

import { Link } from "react-router-dom";
import DogCard from "./DogCard";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import StartRating from "../components/StarRating";

const API_URL = "http://localhost:5005";


function ChosenActivityCard(props) {
    const { user } = useContext(AuthContext);
    const [ title, setTitle ] = useState(props.title);
    const [ type, setType] = useState(props.type);
    const [ city , setCity ] = useState(props.city);
    const [ creatorId , setCreatorId ] = useState(props.creator.id);
    const [ assignedId, setAssignedId] = useState(null);
    const [ activityDate, setActivityDate] = useState(props.activityDate)
    
    const navigate = useNavigate();

    const handleOnClick = (e) => {
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
                <p><b>Movil phone:</b> {props.creator.number}</p>
                <p><b>Location:</b> {props.city}</p>
                <p><b>Date:</b> {props.activityDate}</p>
                <p><b>Activity choosen</b></p>
                <StartRating />
                <button onClick={handleOnClick} id="btn2">Cancel activity</button>
            </div>
    );
}

export default ChosenActivityCard;