// src/components/DogCard.js

import { Link } from "react-router-dom";

function DogCard({ name, size, friendly, energy, image, userId, id }) {
  return (
    <div className="DogCard card">
      <Link to={`/dogs/${id}`}>
        <h3>{name}</h3>
      </Link>
      
        
     

      <p style={{ maxWidth: "400px" }}>{size}</p>
      <p style={{ maxWidth: "400px" }}>{friendly}</p>
      <p style={{ maxWidth: "400px" }}>{energy}</p>
      <img src={`data:image/png;base64,${image}`} />
    </div>
  );
}

export default DogCard;
