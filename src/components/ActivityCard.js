// src/components/ActivityCard.js

import { Link } from "react-router-dom";
import DogCard from "./DogCard";


function ActivityCard({ title, description, creator, assigned, dogs, id }) {
    return (
        <div className="ActivityCard card">
            <Link to={`/activities/${id}`}>
                <h3>{title}</h3>
            </Link>
            <p style={{ maxWidth: "400px" }}>{description}</p>
            <p style={{ maxWidth: "400px" }}>Activity created by: {creator.name}</p>
            <button>Choose activity!</button>
            {/*{dogs.map((dog) => {
                return (
                    <div key={dog.id} className="dog">
                        <p>{dog.name}</p>
                    </div>
                );
            })}*/}
        </div>
    );
}

export default ActivityCard;