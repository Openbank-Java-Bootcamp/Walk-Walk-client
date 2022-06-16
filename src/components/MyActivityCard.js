// src/components/MyActivityCard.js

import { Link } from "react-router-dom";
import DogCard from "./DogCard";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import ActivityCard from "./ActivityCard";


function MyActivityCard({ title, type, city, creator, assigned, dogs, id, chosen, activityDate }) {
    const { user } = useContext(AuthContext);
    const assignedData = (chosen? (<p><b>Activity assigned to:</b> {assigned.username}<br/><b>With phone number:</b> {assigned.number}</p>) : null)
    return (
        <div className="My ActivityCard card"  id="myactivity_card"
        style={{
            backgroundColor: '#cdd9bd',
          }}>
            <h3>{title}</h3>
            <p style={{ maxWidth: "400px" }}><b>{type}</b></p>
            <p style={{ maxWidth: "400px" }}><b>Activity created by:</b> {creator.username}</p>
            <p style={{ maxWidth: "400px" }}><b>Location:</b> {city}</p>
            <p style={{ maxWidth: "400px" }}><b>Date:</b> {activityDate}</p>
            <Link to={`/activity/edit/${id}`}><button id="btn2">Edit Activity</button></Link>
            
        </div>
    );
}

export default MyActivityCard;