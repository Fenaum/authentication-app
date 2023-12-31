
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { data, error, isLoading, executeFetch } = useFetch(
    "http://localhost:5000/login",
    {
      // replace '/api/login' with your login endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    },
    false
  ); // pass an additional parameter to useFetch to prevent it from running immediately

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
 
  function handleSubmit(e) {
    e.preventDefault();
    executeFetch(); // call the function returned by useFetch
  }

  useEffect(() => {
    if (error) {
      console.error("Login failed");
      // handle failed login here (e.g. show error message)
    } else if (!isLoading && data) {
      console.log("Login successful");
      // handle successful login here (e.g. redirect to another page)
      alert("Login Success"); // Add this line
    }
  }, [data, error, isLoading]);

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
