// src/components/MyActivityCard.js

import { Link } from "react-router-dom";
import DogCard from "./DogCard";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";


function MyActivityCard({ title, type, creator, assigned, dogs, id }) {
    const { user } = useContext(AuthContext);
    return (
        <div className="My ActivityCard card" 
        style={{
            backgroundColor: 'turquoise',
          }}>
            <h3>{title}</h3>
            <p style={{ maxWidth: "400px" }}>{type}</p>
            <p style={{ maxWidth: "400px" }}>Activity created by: {creator.name}</p>
            <Link to={`/activity/edit/${id}`}><button>Edit Activity</button></Link>
            
        </div>
    );
}

export default MyActivityCard;