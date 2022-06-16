// src/components/AddDog.js

import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const API_URL = "http://localhost:5005";

function AddDog(props) {
const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [userId, setUserId] = useState(user.id);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [dogFriendly, setDogFriendly] = useState("");
  const [catFriendly, setCatFriendly] = useState("");
  const [childFriendly, setChildFriendly] = useState("");
  const [energy, setEnergy] = useState("");

  const navigate = useNavigate();

  const onFormChange = (e) => {
    console.log("file to upload:", e.target.files[0]);
    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  };

  const _handleReaderLoaded = (readerEvt) => {
    let binaryString = readerEvt.target.result;
    setImage(btoa(binaryString));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, userId, image, size, energy, dogFriendly, catFriendly, childFriendly};
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .post(`${API_URL}/api/dogs`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setName("");
        setUserId("");
        setImage("");
        setSize("");
        setDogFriendly("");
        setCatFriendly("");
        setChildFriendly("");
        setEnergy("");
      })
      .then(() => {
        navigate("/dogs");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar />
    
    <div className="Add">
    
      <form className="form" onSubmit={handleSubmit} onChange={(e) => onFormChange(e)}>
      <h3>Add Dog</h3>
      <div className="input-container-text">
        <label><b>Name:</b></label>
        <input
          type="text"
          name="name"
          value={name}
          className="input-text" 
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div className="input-container">
        <label><b>Size:</b></label>
        <select id="btn" required type="text" name="dogSize"
          value={size}
          className="input" 
          onChange={(e) => setSize(e.target.value)}>
          <option value="">Choose size</option>
          <option value="Toy">Toy dog (5-12 lbs)</option>
          <option value="Small">Small dog (12-24 lbs)</option>
          <option value="Medium">Medium dog (24-59 lbs)</option>
          <option value="Large">Large dog (59-99 lbs)</option>
          <option value="Giant">Giant dog (> 100 lbs)</option>
        </select>
        </div>
        <div className="input-container">
        <label><b>Is Friendly?</b></label>
        <select id="btn" required type="text" name="dogFriendly"
          value={dogFriendly}
          className="input" 
          onChange={(e) => setDogFriendly(e.target.value)}>
          <option value="">Is dog friendly?</option>
          <option value="Y">Yes</option>
          <option value="N">No</option>
        </select>
        </div>
        <div className="input-container">
        <select id="btn" required type="text" name="catFriendly"
          value={catFriendly}
          className="input" 
          onChange={(e) => setCatFriendly(e.target.value)}>
          <option value="">Is cat friendly?</option>
          <option value="Y">Yes</option>
          <option value="N">No</option>
        </select>
        </div>
        <div className="input-container">
        <select id="btn" required type="text" name="dogFriendly"
          value={childFriendly}
          className="input" 
          onChange={(e) => setChildFriendly(e.target.value)}>
          <option value="">Is children friendly?</option>
          <option value="Y">Yes</option>
          <option value="N">No</option>
        </select>
        </div>
        <div className="input-container">
        <label><b>Energy:</b></label>
        <select id="btn" required type="text" name="dogEnergy"
          value={energy}
          className="input" 
          onChange={(e) => setEnergy(e.target.value)}>
            <option value="">Dog's energy</option>
          <option value="Lazy">Lazy</option>
          <option value="Energetic">Energetic</option>
        </select>
        <label>Image:</label>
        <input 
        type="file" 
        name="image" 
        id="file" 
        accept=".jpeg, .png, .jpg" />
        </div>
        <button id="btn2" type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default AddDog;