// src/components/AddActivity.js

import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const API_URL = "http://localhost:5005";

function AddActivity(props) {
const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [creatorId, setCreatorId] = useState(user.id);
  const [assignedId, setAssignedId] = useState(null)
  const [activityDate, setActivityDate] = useState("")
  const [dogsId , setDogs] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {title, type, city, creatorId, assignedId, activityDate, dogsId};
    console.log(requestBody);
    console.log(user);
    
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .post(`${API_URL}/api/activities`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setTitle("");
        setType("");
        setCity("");
        setActivityDate("");
        navigate("/myactivities");
      })
      .catch((error) => console.log(error));
  };
  

  const getUserDogsId = () => {
      const storedToken = localStorage.getItem("authToken");
      
      axios
      .get(`${API_URL}/api/mydogs/${user.id}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          const userDogs = response.data;
          
        
          const userDogsId = userDogs.map((dog) => {return dog.id})
          setDogs(userDogsId)
          
        })
        .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUserDogsId();
  }, []);

  return (
    <div>
      <Navbar />
        
      <div className="Add">
      <form className="form" onSubmit={(dogsId.length > 0 ? handleSubmit : console.log("You need to have a dog to create an activity."))}>
      <h3>Add Activity</h3>
      <div className="input-container-text">
        <label><b>Title:</b></label>
        <input
          type="text"
          name="title"
          className="input-text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </div>
        <div className="input-container">
        <label><b>Type of activity:</b></label>
        <select  id="btn" required type="text" name="type"
          value={type}
          className="input" 
          onChange={(e) => setType(e.target.value)}>
            <option value="">type of activity</option>
            <option value="Quick walk">Quick walk</option>
            <option value="Long walk">Long walk</option>
            <option value="Running">Running</option>
            <option value="Teaching tricks">Teaching tricks</option>
        </select>
        </div>
        <div className="input-container">
        <label><b>Province:</b></label>
        <select  id="btn" required type="text" name="city"
        value={city}
        className="input" 
        onChange={(e) => setCity(e.target.value)}>
            <option value="">Choose province</option>
            <option value="??lava/Araba">??lava/Araba</option>
            <option value="Albacete">Albacete</option>
            <option value="Alicante">Alicante</option>
            <option value="Almer??a">Almer??a</option>
            <option value="Asturias">Asturias</option>
            <option value="??vila">??vila</option>
            <option value="Badajoz">Badajoz</option>
            <option value="Baleares">Baleares</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Burgos">Burgos</option>
            <option value="C??ceres">C??ceres</option>
            <option value="C??diz">C??diz</option>
            <option value="Cantabria">Cantabria</option>
            <option value="Castell??n">Castell??n</option>
            <option value="Ceuta">Ceuta</option>
            <option value="Ciudad Real">Ciudad Real</option>
            <option value="C??rdoba">C??rdoba</option>
            <option value="Cuenca">Cuenca</option>
            <option value="Gerona/Girona">Gerona/Girona</option>
            <option value="Granada">Granada</option>
            <option value="Guadalajara">Guadalajara</option>
            <option value="Guip??zcoa/Gipuzkoa">Guip??zcoa/Gipuzkoa</option>
            <option value="Huelva">Huelva</option>
            <option value="Huesca">Huesca</option>
            <option value="Ja??n">Ja??n</option>
            <option value="La Coru??a/A Coru??a">La Coru??a/A Coru??a</option>
            <option value="La Rioja">La Rioja</option>
            <option value="Las Palmas">Las Palmas</option>
            <option value="Le??n">Le??n</option>
            <option value="L??rida/Lleida">L??rida/Lleida</option>
            <option value="Lugo">Lugo</option>
            <option value="Madrid">Madrid</option>
            <option value="M??laga">M??laga</option>
            <option value="Melilla">Melilla</option>
            <option value="Murcia">Murcia</option>
            <option value="Navarra">Navarra</option>
            <option value="Orense/Ourense">Orense/Ourense</option>
            <option value="Palencia">Palencia</option>
            <option value="Pontevedra">Pontevedra</option>
            <option value="Salamanca">Salamanca</option>
            <option value="Segovia">Segovia</option>
            <option value="Sevilla">Sevilla</option>
            <option value="Soria">Soria</option>
            <option value="Tarragona">Tarragona</option>
            <option value="Tenerife">Tenerife</option>
            <option value="Teruel">Teruel</option>
            <option value="Toledo">Toledo</option>
            <option value="Valencia">Valencia</option>
            <option value="Valladolid">Valladolid</option>
            <option value="Vizcaya/Bizkaia">Vizcaya/Bizkaia</option>
            <option value="Zamora">Zamora</option>
            <option value="Zaragoza">Zaragoza</option>
        </select>
        </div>
        <div className="input-container">
        <label><b>Date:</b></label>
        <input
          type="datetime-local"
          name="activityDate"
          className="input-text dateForm" 
          value={activityDate}
          onChange={(e) => setActivityDate(e.target.value)}
        />
        </div>
        <div className="input-container">
        <button id="btn2" type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
    
  );
}

export default AddActivity;