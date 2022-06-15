// src/pages/MyActivitiesPage.js

import { useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import DogCard from "../components/DogCard";
import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ActivityCard from "../components/ActivityCard";
import MyActivityCard from "../components/MyActivityCard";
import { useNavigate, useParams } from "react-router-dom";
import StartRating from "../components/StarRating";
import Navbar from '../components/Navbar';


const API_URL = "http://localhost:5005";

function MyActivitiesPage() {
    const [ createdActivities, setCreatedActivities ] = useState([]);
    const [ chosenActivities, setChosenActivities ] = useState([]);
    const { user } = useContext(AuthContext);



    useEffect(() => {
        const storedToken = localStorage.getItem("authToken");
        const requestOne = axios.get(`${API_URL}/api/myactivities/${user.id}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        const requestTwo = axios.get(`${API_URL}/api/chosenactivities/${user.id}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
          const createdActivities = responses[0].data;
          setCreatedActivities(createdActivities);

          const chosenactivities = responses[1].data;
          setChosenActivities(chosenactivities);
        })).catch(errors => {
          console.log(errors)
        })}, []);
    return (
        <div>
          <Navbar />
            <div className="MyActivitiesList">
                <div className="ActivitiesCreated">
                    <h1>Activities created:</h1>
                    {createdActivities.map((activity) => (
                        <MyActivityCard key ={activity.id} user={user} {...activity} />
                    ))}
                    <Link to={"/activities/add"}><button id="btn">Add new activity</button></Link>
                </div>
                <div className="ActivitiesCreated">
                    <h1>Activities chosen:</h1>
                    {chosenActivities.map((activity) => (
                        <div className="ActivityCard card"
                        style={{
                            backgroundColor: 'pink',
                          }}>
                            <h3>{activity.title}</h3>
                            <p style={{ maxWidth: "400px" }}>{activity.type}</p>
                            <p style={{ maxWidth: "400px" }}>Activity created by: {activity.creator.username}</p>
                            <p>Movil phone: {activity.creator.number}</p>
                            <p>Activity choosen</p>
                            <StartRating />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyActivitiesPage;