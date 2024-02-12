import React, { useState } from 'react';
import './Regi.css'; // Make sure to have your CSS file in the same directory

function RegistrationForm() {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle form submission, validation, API calls, etc.
    };

    return (
        <div className="container">
            <div className="title">Registration</div>
            <form onSubmit={handleSubmit}>
                <div className="userDetails">
                    <div className="inputBox">
                        <span className="details">Full Name</span>
                        <input type="text" placeholder="Enter your name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                    </div>
                    <div className="inputBox">
                        <span className="details">Username</span>
                        <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="inputBox">
                        <span className="details">Email</span>
                        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="inputBox">
                        <span className="details">Phone Number</span>
                        <input type="tel" placeholder="Enter your number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                    </div>
                    <div className="inputBox">
                        <span className="details">Password</span>
                        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="inputBox">
                        <span className="details">Confirm Password</span>
                        <input type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                </div>
                <div className="genderDetails">
                    <span className="genderTitle">Gender</span>
                    <div className="category">
                        <label>
                            <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} />
                            <span className="dot one"></span>
                            <span className="gender">Male</span>
                        </label>
                        <label>
                            <input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} />
                            <span className="dot two"></span>
                            <span className="gender">Female</span>
                        </label>
                        <label>
                            <input type="radio" name="gender" value="Prefer not to say" checked={gender === 'Prefer not to say'} onChange={(e) => setGender(e.target.value)} />
                            <span className="dot three"></span>
                            <span className="gender">Prefer not to say</span>
                        </label>
                    </div>
                </div>
                <div className="button">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;
