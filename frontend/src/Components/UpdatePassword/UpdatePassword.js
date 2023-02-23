import "./UpdatePassword.css";
import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../Actions/User";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
import logo from "../../logo.png"

const UpdatePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const dispatch = useDispatch();

    const { error, loading, message } = useSelector((state) => state.like);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updatePassword(oldPassword, newPassword));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: "clearErrors" });
        }

        if (message) {
            toast.success(message);
            dispatch({ type: "clearMessage" });
        }
    }, [dispatch, error, message]);

    return (
        loading ? (
            <Loading />
        ) : (
            <div className="updatePassword">
                <form className="updatePasswordForm" onSubmit={submitHandler}>
                    <Typography variant="h3" style={{ padding: "2vmax" }}>
                        <img className="logo" src={logo} style={{ width: "400px", height: "100px" }} alt="logo"></img>
                    </Typography>

                    <input
                        type="password"
                        placeholder="Old Password"
                        required
                        value={oldPassword}
                        className="updatePasswordInputs"
                        onChange={(e) => setOldPassword(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="New Password"
                        required
                        className="updatePasswordInputs"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />

                    <Button disabled={loading} type="submit">
                        Change Password
                    </Button>
                </form>
            </div>
        )
    );
};

export default UpdatePassword;