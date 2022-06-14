// src/components/ActivitiesListPage.js

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ActivityCard from "../components/ActivityCard";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import MyActivityCard from "../components/MyActivityCard";

const API_URL = "http://localhost:5005";

function ActivitiesListPage() {
    const [activities, setActivities] = useState([]);
    const { user } = useContext(AuthContext);

    const getAllActivities = () => {
        const storedToken = localStorage.getItem("authToken");
        
        axios
        .get(`${API_URL}/api/activities`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          })
          .then((response) => setActivities(response.data))
          .catch((error) => console.log(error));
    };

    useEffect(() => {
        getAllActivities();
    }, []);
    return (
            <div className="ActivitiesList">
                <h1>Activities</h1>
                {activities.map((activity) => (
                    (activity.creator.id != user.id ? <ActivityCard key ={activity.id} {...activity} /> : <MyActivityCard key ={activity.id} user={user} {...activity} /> )
                    
                ))}
                
            </div>
    );
}

export default ActivitiesListPage;