import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        // You can replace this with a proper loading spinner component
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/sign" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
