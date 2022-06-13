// src/components/ActivitiesListPage.js

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ActivityCard from "../components/ActivityCard";

const API_URL = "http://localhost:5005";

function ActivitiesListPage() {
    const [activities, setActivities] = useState([]);

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
                    <ActivityCard key ={activity.id} {...activity} />
                ))}
                
            </div>
    );
}

export default ActivitiesListPage;