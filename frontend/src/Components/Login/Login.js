import React, { useEffect, useState } from 'react';
import "./Login.css";
import logo from "../../logo.png"
import { toast } from 'react-toastify';
import { Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Actions/User';

const Login = () => {
    const { error } = useSelector((state) => state.user);
    const { message } = useSelector((state) => state.like);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password));
    }
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: "clearErrors" });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: "clearMessage" });
        }
    }, [error, dispatch, message]);

    return (
        <div className='login'>
            <form className='loginForm' onSubmit={submitHandler}>
                <img className='logo' src={logo} style={{ width: "400px", height: "100px" }} alt="logo"></img>
                <input
                    type="email"
                    name='email'
                    value={email}
                    placeholder="Enter your email address"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name='password'
                    value={password}
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Link to="/forgot/password">
                    <Typography>Forgot Password?</Typography>
                </Link>
                <Button variant="contained" onClick={submitHandler}>Login</Button>
                <Link to="/register">
                    <Typography>New User?</Typography>
                </Link>
            </form>
        </div>
    )
}

export default Login