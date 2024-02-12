import React, { useState } from 'react';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Agree Terms:', agreeTerms);
  };

  return (
    <div className="container">
        <h1 style={{fontWeight:'bold'}} >Register</h1>

      <form onSubmit={handleSubmit} style={{ width: '400px', marginLeft: '431px', marginTop: '27px' }}>
        
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        
        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        
        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example3"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example3">
            Confirm Password
          </label>
        </div>

        
        <div className="mb-4 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="agreeTerms"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="agreeTerms">
            I agree to the terms and conditions
          </label>
        </div>

       
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Register
        </button>

        <div className="text-center">
          <p>Already a member? <a href="#!">Sign in</a></p>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
