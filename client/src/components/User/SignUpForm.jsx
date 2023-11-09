import { useState } from 'react';

export default function SignUpForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });

    function handleChange(e) {
        setFormData((preFormData) => {
            return {
                ...preFormData,
                [e.target.name]: e.target.value
            }
        })
        console.log(formData)
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.type)
        console.log('submitted')
    }

    return (
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Please enter a username"
          name="username"
          onChange={handleChange}
          value={formData.username}
        ></input>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Please enter a password"
          name='password'
          onChange={handleChange}
          value={formData.password}
        ></input>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          placeholder="Please enter a E-mail"
          name='email'
          onChange={handleChange}
          value={formData.email}
        ></input>
        <input type="submit" onClick={handleSubmit}></input>
      </form>
    );
}
