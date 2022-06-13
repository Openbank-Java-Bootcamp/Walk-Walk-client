import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import HomePage from './pages/HomePage';
import ActivitiesList from './pages/ActivitiesListPage';
import AddActivity from './components/AddActivity';
import MyDogs from './pages/MyDogs';
import AddDog from './components/AddDog';
import EditDogPage from './pages/EditDogPage';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
      <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
          path='/'
          element={
            <HomePage />
          }
        />
        <Route
          path='/activities'
          element={
            <IsPrivate>
              <ActivitiesList />
            </IsPrivate>
          }
          />
          <Route
            path='/activities/add'
            element={
              <IsPrivate>
                <AddActivity />
              </IsPrivate>
          }
          />
          <Route
            path='/dogs'
            element={
              <IsPrivate>
                <MyDogs />
              </IsPrivate>
          }
          />
          <Route
            path='/dogs/add'
            element={
              <IsPrivate>
                <AddDog />
              </IsPrivate>
          }
          />
          <Route
            path='/dogs/edit/:dogId'
            element={
              <IsPrivate>
                <EditDogPage />
              </IsPrivate>
          }
          />

        
      </Routes>
    </div>
  );
}

export default App;
