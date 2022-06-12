// src/components/DogCard.js

import { Link } from "react-router-dom";

function DogCard({name, description, user, id}) {
    return (
        <div className="DogCard card">
            <Link to={`/dog/${id}`}>
                <h3>{name}</h3>
            </Link>
            <p style={{ maxWidth: "400px" }}>{description}</p>
            <p style={{ maxWidth: "400px" }}>{user.id}</p>

        </div>
    )
}

export default DogCard;