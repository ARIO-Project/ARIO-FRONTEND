import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../Constants/Server";
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const initialState = {
        user: null,
        isAuthenticated: false,
        isOtpVerified: false,
        isLoading: false,
        message: ""
    }

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "SET_LOADING":
                return { ...state, isLoading: action.payload };
            case "SIGNUP_SUCCESS":
                return { ...state, isAuthenticated: true };
            case "OTP_VERIFIED":
                return { ...state, isOtpVerified: true };
            default:
                return state;
        }
    }, initialState);


    const signUp = async (firstName, lastName, email, phoneNumber, password) => {
        dispatch({ type: "SET_LOADING", payload: true });
        try {
            const response = await axios.post(`${SERVER_URL}/users`, {
                Firstname: firstName,
                Lastname: lastName,
                Email: email,
                Password: password,
                PhoneNumber: phoneNumber
            });
            if (response.data.message === "User created successfully") {
                dispatch({ type: "SIGNUP_SUCCESS" });
                localStorage.setItem("userToken", response.data.token);
                navigate('/otp');
                toast.success('Sign Up Successful! Please verify OTP.');
            } else {
                toast.error(`Sign Up Failed, ${response.data.message}`);
            }
        } catch (AxiosError) {
            toast.error(`Sign Up Failed, ${AxiosError.response.data.message}`);
        } finally {
            dispatch({ type: "SET_LOADING", payload: false });
        }
    };

    const sendOtp = async (otp) => {
        dispatch({ type: "SET_LOADING", payload: true });
        const userToken = localStorage.getItem("userToken");
        try {
            const response = await axios.post(`${SERVER_URL}/users/verifyOTP`, {OTP: otp}, {
                headers: {
                    "Authorization": userToken,
                }
            })
            if (response.data.message === "OTP verified successfully") {
                dispatch({ type: "OTP_VERIFIED" });
                toast.success('OTP verified successfully');
            } else {
                toast.error(`OTP verification failed, ${response.data.message}`)
            }
        } catch (AxiosError) {
            toast.error(`OTP verification failed, ${AxiosError.response.data.message}`);
            console.log(AxiosError.response.data);
        } finally {
            dispatch({ type: "SET_LOADING", payload: false });
        }
    }

    const resendOtp = async () => {
        dispatch({ type: "SET_LOADING", payload: true });
        const userToken = localStorage.getItem("userToken");
        console.log(userToken);
        try {
            const response = await axios.post(`${SERVER_URL}/users/resendOTP`, {}, {
                headers: {
                    "Authorization": userToken
                }
            })
            if (response.data.message === "OTP has been resent") {
                toast.success('OTP sent successfully');
            } else {
                toast.error(`OTP failed to send, ${response.data.message}`);
            }
        } catch (AxiosError) {
            toast.error(`OTP failed to send, ${AxiosError.response.data.message}`);
        } finally {
            dispatch({ type: "SET_LOADING", payload: false });
        }
    };

    const login = async (email, password) => {
        dispatch({ type: "SET_LOADING", payload: true });
        try {
            const response = await axios.post(`${SERVER_URL}/users/login`, {
                Email: email,
                Password: password
            })
            if (response.data.message === "Login successful") {
                localStorage.setItem("userToken", response.data.token);
                navigate("/home");
                toast.success("Login successful");
            }
        } catch (AxiosError) {
            toast.error(`Login failed, ${AxiosError.response.data.message}`);
        } finally {
            dispatch({ type: "SET_LOADING", payload: false });
        }
    }

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                signUp,
                isLoading: state.isLoading,
                sendOtp,
                message: state.message,
                resendOtp,
                isOtpVerified: state.isOtpVerified
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within the AuthProvider");
    }
    return context;
}

export { AuthProvider, useAuth };

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}