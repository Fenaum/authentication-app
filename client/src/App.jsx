import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginForm from "./components/User/LoginForm";
import SignUpForm from "./components/User/SignUpForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Profile from "./components/User/Profile";
import "./assets/styles/style.css";

export default function App() {
  const [user, setUser] = useState(null); // initialize user state to null
  const [loading, setLoading] = useState(true); // initialize loading state to true

  useEffect(() => {
    // Replace this with your actual check
    const checkSession = async () => {
      // Call your API to check if the user is in session
      const response = await fetch("/api/check-session");
      const data = await response.json();

      if (data.user) {
        setUser(data.user);
      }
      setLoading(false);
    };

    checkSession();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginForm setUser={setUser} />} />
        <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
