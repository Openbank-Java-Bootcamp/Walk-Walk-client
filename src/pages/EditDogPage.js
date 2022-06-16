// src/pages/EditDogPage.js

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Navbar from "../components/Navbar";

const API_URL = "http://localhost:5005";

function EditDogPage(props) {

    const { user } = useContext(AuthContext);

    const [name, setName] = useState("");
    const [size, setSize] = useState("");
    const [dogFriendly, setDogFriendly] = useState("");
    const [catFriendly, setCatFriendly] = useState("");
    const [childFriendly, setChildFriendly] = useState("");
    const [energy, setEnergy] = useState("");
    const [image, setImage] = useState("");
    const [userId, setUserId] = useState("");

    const {dogId} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem("authToken");

        axios
        .get(`${API_URL}/api/dogs/${dogId}`, {
            headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {

            const oneDog = response.data;
            setName(oneDog.name);
            setSize(oneDog.size);
            setDogFriendly(oneDog.dogFriendly);
            setCatFriendly(oneDog.catFriendly);
            setChildFriendly(oneDog.childFriendly);
            setEnergy(oneDog.energy);
            setImage(oneDog.image);
            setUserId(user.id);
            
    })
    .catch((error) => console.log(error));

}, [dogId]);

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

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const storedToken = localStorage.getItem("authToken");
        const requestBody = {name, size, dogFriendly, catFriendly, childFriendly, energy, image, userId};
        axios
        .put(`${API_URL}/api/dogs/${dogId}`, requestBody, {
            headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
        navigate("/dogs");
        });
    };

    const deleteDog = () => {
        const storedToken = localStorage.getItem("authToken");
        axios
        .delete(`${API_URL}/api/dogs/${dogId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then(() => {
        navigate("/dogs");
        })
        .catch((err) => console.log(err));
    };

    return (
        <div>
            <Navbar />
        
        <div className="Add">
            <h3>Edit the Dog</h3>
            <form className="form" onSubmit={handleFormSubmit} onChange={(e) => onFormChange(e)}>
            <div className="input-container-text">
            <label>Name:</label>
            <input
                className="input-text" 
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div className="input-container">
            <label>Size:</label>
            <select id="btn" required type="text" name="dogSize"
                value={size}
                className="input" 
                onChange={(e) => setSize(e.target.value)}>
                <option value="">Choose size</option>
                <option value="Toy">Toy dog (5-12 lbs)</option>
                <option value="Small">Small dog (12-24 lbs)</option>
                <option value="Medium">Medium dog (24-59 lbs)</option>
                <option value="Large">Large dog (59-99 lbs)</option>
                <option value="Giant">Giant dog (over 100 lbs)</option>
            </select>
            </div>
            <div className="input-container">
            <label>Is Friendly?</label>
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
            <label>Energy:</label>
                <select id="btn" required type="text" name="dogEnergy"
                    value={energy}
                    className="input" 
                    onChange={(e) => setEnergy(e.target.value)}>
                    <option value="">Choose dog's energy</option>
                    <option value="Lazy">Lazy</option>
                    <option value="Energetic">Energetic</option>
                </select>
            </div>
            <div className="input-container">
            <label>Image:</label>
            <input className="input"  type="file" name="image" id="file" accept=".jpeg, .png, .jpg" />
            </div>
                <div className="buttons">
                <button id="btn2" type="submit">Update Dog</button>
                <button id="btn2" onClick={deleteDog}>Delete Dog</button>
                </div>
            
            </form>
            
        </div>
        </div>
    )


}

export default EditDogPage;