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

  const getVerifyToken = async () => {
    try {
      const token = localStorage.getItem('Auth_Token');

      if (!token) {
        setTokenData(undefined);
        setLoading(false);
        return;
      }

      const response = await verifyToken();

      if (response?.success === true) {
        setTokenData(response);
      } else {
        setTokenData(undefined);
      }
    } catch (error) {
      console.error('Token verification failed:', error);
      setTokenData(undefined);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVerifyToken();
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
              <Route index element={<Navigate to="/dashboard" />} />
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