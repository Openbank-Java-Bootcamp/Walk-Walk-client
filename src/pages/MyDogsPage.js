// src/pages/MyDogsPage.js

import { useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import DogCard from "../components/DogCard";
import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";


const API_URL = "http://localhost:5005";

function MyDogsPage() {
    const [ dogs, setDogs ] = useState([]);
    const { user } = useContext(AuthContext);
    const getAllDogs = () => {
        const storedToken = localStorage.getItem("authToken");

        axios
        .get(`${API_URL}/api/mydogs/${user.id}`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          })
          .then((response) => {console.log(response.data)
            setDogs(response.data)})
          .catch((error) => console.log(error));
    };

    useEffect(() => {
        getAllDogs();
    }, []);
    return (
            <div className="MyDogsList">
                <h1>My dogs</h1>
                {dogs.map((dog) => (
                    <DogCard key ={dog.id} user={user} {...dog} />
                ))}
                <Link to={"/dogs/add"}><button>Add new dog</button></Link>
            </div>
    );
}

export default MyDogsPage;