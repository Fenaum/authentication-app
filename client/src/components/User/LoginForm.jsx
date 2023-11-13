import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

 function handleSubmit(e) {
   e.preventDefault();

   const { data, error, isLoading } = useFetch("http://localhost:5000/login", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(formData),
   });

   if (error) {
     console.error("Error:", error);
     return;
   }

   if (!isLoading && data) {
     // handle successful login here
     console.log("Login successful:", data);
   }

   // reset form
   setFormData({
     username: "",
     password: "",
   });
 }
 
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username" className="usernameLabel">
        Username:
      </label>
      <input
        type="text"
        name="username"
        onChange={handleChange}
        value={formData.username}
        className="userNameInput"
      />
      <label htmlFor="password" className="passwordLabel">
        Password:
      </label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={formData.password}
        className="passwordInput"
      />
      <input type="submit" value="Login" className="loginBtn" />
    </form>
  );
}
