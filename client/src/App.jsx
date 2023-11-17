import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginForm from "./components/User/LoginForm";
import SignUpForm from "./components/User/SignUpForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Profile from "./components/User/Profile";
import "./assets/styles/style.css";
import useFetch from "./hooks/useFetch";

export default function App() {
  const [user, setUser] = useState(null); // initialize user state to null
  const [loading, setLoading] = useState(false); // initialize loading state to true

  

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
