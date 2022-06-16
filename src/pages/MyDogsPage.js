// src/pages/MyDogsPage.js

import { useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import DogCard from "../components/DogCard";
import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';

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
          .then((response) => {
            setDogs(response.data)})
          .catch((error) => console.log(error));
    };

    useEffect(() => {
        getAllDogs();
    }, []);
    return (
    <div>
        <Navbar />
            <div className="MyDogsList">
                <h1>My dogs</h1>
                {dogs.map((dog) => (
                    <DogCard key ={dog.id} user={user} {...dog} />
                ))}
                <Link to={"/dogs/add"}><button id="btn">Add new dog</button></Link>
            </div>
    </div>
    );
}

export default MyDogsPage;