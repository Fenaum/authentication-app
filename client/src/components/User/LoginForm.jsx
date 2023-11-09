import { useState } from "react";

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
    // handle form data
    console.log(formData);
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
