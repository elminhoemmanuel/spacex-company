import { Navigate, Route, RouteProps, Routes } from 'react-router';

export type PrivateRouteProps = {
    isAuthenticated: boolean;
    authenticationPath: string;
} & RouteProps;

export default function PrivateRoute({ isAuthenticated, authenticationPath, ...routeProps }: PrivateRouteProps) {
    if (isAuthenticated) {
        return <Routes><Route {...routeProps} /></Routes>;
    } else {
        return <Navigate to={{ pathname: authenticationPath }} />;
    }
};