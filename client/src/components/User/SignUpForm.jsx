import { useState } from 'react';
import './styles/SignUpForm.css'

export default function SignUpForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        sms: true,
    });

    function handleChange(e) {
        setFormData((preFormData) => {
            const { name, value, checked, type } = e.target

            return {
                ...preFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
        console.log(formData)
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.name)
        console.log('submitted')
    }

    return (
      <form>
        <label htmlFor="username" className="usernameLabel">
          Username:
        </label>
        <input
          type="text"
          placeholder="Please enter a username"
          name="username"
          onChange={handleChange}
          value={formData.username}
          className="userNameInput"
        ></input>
        <label htmlFor="password" className="passwordLabel">
          Password:
        </label>
        <input
          type="password"
          placeholder="Please enter a password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          className="passwordInput"
        ></input>
        <label htmlFor="email" className="emailLabel">
          E-mail:
        </label>
        <input
          type="email"
          placeholder="Please enter a E-mail"
          name="email"
          onChange={handleChange}
          value={formData.email}
          className="emailInput"
        ></input>
        <div>
        <input
          type="checkbox"
          name="sms"
          checked={formData.sms}
          onChange={handleChange}
          className="smsInput"
        ></input>
        <label htmlFor="sms" className="smsLabel">
          Receive Exclusive Offers and Updates via SMS
        </label>
        </div>
        <input
          type="submit"
          onClick={handleSubmit}
          name="submitButton"
          className="submitBtn"
        ></input>
      </form>
    );
}

