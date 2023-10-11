import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { auth } from './firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {

                navigate('/');
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const register = (e) => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) => {

                if (authUser) {
                    navigate('/');
                }
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className='login'>
            <div className='login_container'>
                <Link to='/'>
                    <img
                        className='login_logo'
                        src='https://www.carlogos.org/car-logos/lamborghini-logo-1963-full-download.png'
                        alt='company Logo'
                    />
                </Link>
                <h1> Sign in </h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type='text'
                        placeholder='Enter your email address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type='password'
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='login_button' type='submit' onClick={signIn}>
                        Sign in
                    </button>
                    <h5>Or </h5>
                    <button className='signup_button' onClick={register}>
                        Create an account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
