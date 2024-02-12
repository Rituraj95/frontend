import React, { useState } from 'react';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className="container">

    <form onSubmit={handleSubmit}  style={{width:'468px', marginLeft:'431px',marginTop:'27px',border:'0.5px solid black',borderRadius:'8%',padding:'37px'}}>
    <h1 style={{fontWeight:'bold'}} >Login</h1>

      
      <div className="form-outline mb-4">
      <i class="bi bi-person"></i>
      
        <input 
        style={{background:'rgb(210, 226, 234)'}}
       
          type="email"
          id="form2Example1"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email ID'
          
        />
      
      </div>

     
      <div className="form-outline mb-4">
        <input
        style={{background:'rgb(210, 226, 234)'}}
          type="password"
          id="form2Example2"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
      
      </div>

     
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
         

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="form2Example31"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="form2Example31">
              Remember me
            </label>
          </div>
        </div>

        <div className="col">
         
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      
      <button type="submit" className="btn btn-primary btn-block mb-4">
        Sign in
      </button>

      
      <div className="text-center">
        <p>
          Not a member? <a href="#!">Register</a>
        </p>
        
      </div>
    </form>
    </div>

  );
}

export default LoginForm;
