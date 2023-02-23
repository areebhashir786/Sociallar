import { Avatar, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../logo.png"
import { registerUser } from "../../Actions/User";
import "./Register.css";


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [password, setPassword] = useState("");
    const { loading, error } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        const Reader = new FileReader();
        Reader.readAsDataURL(file);
        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setAvatar(Reader.result);
            }
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(registerUser(name, email, password, avatar));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: "clearErrors" });
        }
    }, [dispatch, error]);

    return (
        <div className="register">
            <form className="registerForm" onSubmit={submitHandler}>
                <Typography variant="h3" style={{ padding: "2vmax" }}>
                    <img className="logo" src={logo} style={{ width: "400px", height: "100px" }} alt="logo"></img>
                </Typography>

                <Avatar
                    src={avatar}
                    alt="User"
                    sx={{ height: "10vmax", width: "10vmax" }}
                />

                <input type="file" accept="image/*" onChange={handleImageChange} />

                <input
                    type="text"
                    value={name}
                    placeholder="Name"
                    className="registerInputs"
                    required
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="registerInputs"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    className="registerInputs"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Link to="/">
                    <Typography>Already Signed Up? Login Now</Typography>
                </Link>

                <Button disabled={loading} type="submit">
                    Sign Up
                </Button>
            </form>
        </div>
    )
}

export default Register