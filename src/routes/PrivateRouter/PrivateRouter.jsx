import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider/AuthProvider";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="d-flex h-100 justify-content-center align-items-center">
                <Spinner animation="border" variant="info" />
            </div>
        );
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRouter;
