import React from 'react'
import './Auth.css'
import loginLogo from "../Assets/SmartCard_Light.png"
import { useState } from 'react'
import { FaBackward } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
      e.preventDefault();

      const validEmail = 'rzyat';
      const validPassword = '123';

      if (email === validEmail && password === validPassword) {
        setError('');
        alert('Login avec succès');
      } else {
        setError('Email ou Mot de passe invalide');
      }
    };

  return (
    <div className="login-page">
      <img className='login-logo' src={loginLogo} width={200} />
      <form className="login-form" onSubmit={handleLogin}>
        <h1>S'identifier</h1>
          <div className="login-form-group">
            <label className='login-label' htmlFor="email">Email:</label>
            <input className='login-input'  id="email" name="email" placeholder="Votre email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="login-form-group">
            <label className='login-label' htmlFor="password">Mot de passe:</label>
            <input className='login-input' type="password" id="password" name="password" placeholder="Votre mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className='login-button' type="submit">Login</button>
          {error && <div className="error-login-message">{error}</div>}
      </form>
      <div className="login-forgot-password">
        <a href="#">Mot de passe oublié?</a>
      </div>
      <div className="login-no-account">
        Nouveau ici? <a href="/register"> Créer un compte </a>
      </div>
      <div className='back-to-home'>
        <p> <Link to="/" style={{textDecorationLine:'none', color:'black',}}>  <span> <FaBackward/> </span> Revenir à la page d'accueil </Link> </p>
      </div>
    </div>
  )
}

export default Login