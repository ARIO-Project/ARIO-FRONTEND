import React, { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const initialState = {
        user: null,
        token: null,
        isAuthenticated: false,
    }

    const [state, dispatch] = useReducer((state, action) => {

    }, initialState)

    return (
        <AuthContext.Provider
            value={{
                user: state.user, 
                token: state.token, 
                isAuthenticated: state.isAuthenticated
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