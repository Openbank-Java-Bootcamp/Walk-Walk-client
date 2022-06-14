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
import AddDog from './components/AddDog';
import EditDogPage from './pages/EditDogPage';
import EditActivityPage from './pages/EditActivityPage';
import MyDogsPage from './pages/MyDogsPage';
import MyActivitiesPage from './pages/MyActivitiesPage';



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
                <MyDogsPage />
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

          <Route
            path='/activity/edit/:activityId'
            element={
              <IsPrivate>
                <EditActivityPage />
              </IsPrivate>
          }
          />

          <Route
            path='/myactivities'
            element={
              <IsPrivate>
                <MyActivitiesPage />
              </IsPrivate>
          }
          />

        
      </Routes>
    </div>
  );
}

export default App;
