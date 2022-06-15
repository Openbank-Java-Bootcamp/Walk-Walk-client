// src/components/MyActivityCard.js

import { Link } from "react-router-dom";
import DogCard from "./DogCard";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";


function MyActivityCard({ title, type, creator, assigned, dogs, id, chosen }) {
    const { user } = useContext(AuthContext);
    const assignedData = (chosen? (<p>Activity assigned to {assigned.username}<br/>With phone number: {assigned.number}</p>) : null)
    return (
        <div className="My ActivityCard card"  id="myactivity_card"
        style={{
            backgroundColor: '#cdd9bd',
          }}>
            <h3>{title}</h3>
            <p style={{ maxWidth: "400px" }}>{type}</p>
            <p style={{ maxWidth: "400px" }}>Activity created by: {creator.username}</p>
            {assignedData}
            <Link to={`/activity/edit/${id}`}><button id="btn2">Edit Activity</button></Link>
            
        </div>
    );
}

export default MyActivityCard;