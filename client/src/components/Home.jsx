import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div>
      <h1>Welcome to Our Prototype Authentication App!</h1>
      <p>
        This is a prototype authentication application built using the MERN
        stack (MongoDB, Express.js, React.js, Node.js). It demonstrates user
        registration, login, and profile viewing functionalities. Please{" "}
        <Link to="/login">log in</Link> or <Link to="/signup">sign up</Link> to
        explore.
      </p>
    </div>
  );
}
