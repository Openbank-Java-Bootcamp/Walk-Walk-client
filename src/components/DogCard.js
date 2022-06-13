// src/components/DogCard.js
import { Link } from "react-router-dom";

function DogCard({ name, size, dogFriendly, catFriendly, childFriendly, energy, image, id }) {
  return (
    <div className="DogCard card">
        <h1>{name}</h1>
        <p style={{ maxWidth: "400px" }}>{size}</p>
        {(dogFriendly === "Y" ? <p style={{ maxWidth: "400px" }}>Dog Friendly</p> : null)}
        {(catFriendly === "Y" ? <p style={{ maxWidth: "400px" }}>Cat Friendly</p> : null)}
        {(childFriendly === "Y" ? <p style={{ maxWidth: "400px" }}>Children Friendly</p> : null)}
        <p style={{ maxWidth: "400px" }}>{energy}</p>
        <img src={`data:image/png;base64,${image}`} />

        <Link to={`/dogs/edit/${id}`}>
          <button>Edit Dog</button>
      </Link>
    </div>
  );
}

export default DogCard;
