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

        
      </Routes>
    </div>
  );
}

export default App;
