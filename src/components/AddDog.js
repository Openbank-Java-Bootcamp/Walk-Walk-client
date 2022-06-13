// src/components/AddDog.js

import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

function AddDog(props) {
const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState(user.id);
  const [image, setImage] = useState("");
  const [ size, setSize ] = useState("");

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
    const requestBody = { name, description, userId, image, size};
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
        setDescription("");
        setUserId("");
        setImage("");
        setSize("")
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddDog">
      <h3>Add Dog</h3>

      <form onSubmit={handleSubmit} onChange={(e) => onFormChange(e)}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Size:</label>
        <select required type="text" name="dogSize"
          value={size}
          onChange={(e) => setSize(e.target.value)}>
          <option value="">Choose size</option>
          <option value="Toy">Toy dog (5-12 pounds)</option>
          <option value="Small">Small dog (12-24 pounds)</option>
          <option value="Medium">Medium dog (24-59 pounds)</option>
          <option value="Large">Large dog (59-99 pounds)</option>
          <option value="Giant">Giant dog (over 100 pounds)</option>
        </select>
        <label>Friendly:</label>
        
        <label>Image:</label>
        <input type="file" name="image" id="file" accept=".jpeg, .png, .jpg" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddDog;