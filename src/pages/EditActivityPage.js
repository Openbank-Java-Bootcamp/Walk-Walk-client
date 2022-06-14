// src/EditActivityPage.js

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

const API_URL = "http://localhost:5005";

function EditActivityPage(props) {
    const [ title, setTitle ] = useState("");
    const [ type, setType ] = useState("");
    const [ city, setCity ] = useState("");
    const [ creatorId, setCreator ] = useState("");
    const [ dogsId, setDogsId ] = useState([]);
    const { user } = useContext(AuthContext);


    const { activityId } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem("authToken");
        const requestOne = axios.get(`${API_URL}/api/activities/${activityId}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        const requestTwo = axios.get(`${API_URL}/api/mydogs/${user.id}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
          const oneActivity = responses[0].data;
          setTitle(oneActivity.title);
          setType(oneActivity.type);
          setCity(oneActivity.city);
          setCreator(oneActivity.creator.id);

          const myDogs = responses[1].data;
          const myDogsID = myDogs.map((dog)=> {return dog.id})
          setDogsId(myDogsID)
        })).catch(errors => {
          console.log(errors)
        })}, [activityId]);


        const handleFormSubmit = (e) => {
            e.preventDefault();
            const storedToken = localStorage.getItem("authToken");
            
            const requestBody = { title, type, city, creatorId, dogsId};
        
            
            axios
            .put(`${API_URL}/api/activities/${activityId}`, requestBody, {
                headers: { Authorization: `Bearer ${storedToken}` },
            })
            .then((response) => {
                
                navigate("/");
            });
        };
        
        const deleteActivity = () => {
            const storedToken = localStorage.getItem("authToken");
            axios
            .delete(`${API_URL}/api/activities/${activityId}`, {
                headers: { Authorization: `Bearer ${storedToken}` },
            })
            .then(() => {
                navigate("/");
            })
            .catch((err) => console.log(err));
        };
        return (
            <div className="EditActivityPage">
              <h3>Edit the Activity</h3>
        
              <form onSubmit={handleFormSubmit}>
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
        
                <label>Type of activity:</label>
                <select required type="text" name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}>
                    <option value="">Choose type of activity</option>
                    <option value="Quick walk">Quick walk</option>
                    <option value="Long walk">Long walk</option>
                    <option value="Running">Running</option>
                    <option value="Teaching tricks">Teaching tricks</option>
                </select>

                <label>Province:</label>
                <select required type="text" name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}>
                    <option value="">Choose province</option>
                    <option value="Álava/Araba">Álava/Araba</option>
                    <option value="Albacete">Albacete</option>
                    <option value="Alicante">Alicante</option>
                    <option value="Almería">Almería</option>
                    <option value="Asturias">Asturias</option>
                    <option value="Ávila">Ávila</option>
                    <option value="Badajoz">Badajoz</option>
                    <option value="Baleares">Baleares</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Burgos">Burgos</option>
                    <option value="Cáceres">Cáceres</option>
                    <option value="Cádiz">Cádiz</option>
                    <option value="Cantabria">Cantabria</option>
                    <option value="Castellón">Castellón</option>
                    <option value="Ceuta">Ceuta</option>
                    <option value="Ciudad Real">Ciudad Real</option>
                    <option value="Córdoba">Córdoba</option>
                    <option value="Cuenca">Cuenca</option>
                    <option value="Gerona/Girona">Gerona/Girona</option>
                    <option value="Granada">Granada</option>
                    <option value="Guadalajara">Guadalajara</option>
                    <option value="Guipúzcoa/Gipuzkoa">Guipúzcoa/Gipuzkoa</option>
                    <option value="Huelva">Huelva</option>
                    <option value="Huesca">Huesca</option>
                    <option value="Jaén">Jaén</option>
                    <option value="La Coruña/A Coruña">La Coruña/A Coruña</option>
                    <option value="La Rioja">La Rioja</option>
                    <option value="Las Palmas">Las Palmas</option>
                    <option value="León">León</option>
                    <option value="Lérida/Lleida">Lérida/Lleida</option>
                    <option value="Lugo">Lugo</option>
                    <option value="Madrid">Madrid</option>
                    <option value="Málaga">Málaga</option>
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
        
                <button type="submit">Update Activity</button>
              </form>
        
              <button onClick={deleteActivity}>Delete Activity</button>
            </div>
          );
        }
        
        export default EditActivityPage;