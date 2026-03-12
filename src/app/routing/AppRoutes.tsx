import { FC, useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { ErrorsPage } from '../modules/errors/ErrorsPage';
import { Logout, AuthPage, useAuth } from '../modules/auth';
import { App } from '../App';
import { verifyToken } from '../Apis/AuthApiList';

const { BASE_URL } = import.meta.env;

const AppRoutes: FC = () => {
    const { currentUser } = useAuth();
    const [tokenData, setTokenData] = useState<any>(undefined);
    const [loading, setLoading] = useState(true);

    console.log('hi', currentUser);

    const verifyToken = async () => {
        const token = localStorage.getItem("Auth_Token");

        if (!token) return false;

        const res = await fetch(`https://api.propcliq.com/auth/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return res.status === 200;
    };

    useEffect(() => {
        verifyToken();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <BrowserRouter basename={BASE_URL}>
            <Routes>
                <Route element={<App />}>
                    <Route path="error/*" element={<ErrorsPage />} />
                    <Route path="logout" element={<Logout />} />
                    {tokenData ? (
                        <>
                            <Route path="/*" element={<PrivateRoutes />} />
                            <Route index element={<Navigate to="/auth/login" />} />
                        </>
                    ) : (
                        <>
                            <Route path="auth/*" element={<AuthPage />} />
                            <Route path="*" element={<Navigate to="/auth" />} />
                        </>
                    )}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export { AppRoutes };