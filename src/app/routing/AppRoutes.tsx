/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import { FC, useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { ErrorsPage } from '../modules/errors/ErrorsPage';
import { Logout, AuthPage, useAuth } from '../modules/auth';
import { App } from '../App';
import { verifyToken } from '../Apis/AuthApiList';

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { BASE_URL } = import.meta.env;

const AppRoutes: FC = () => {
    const { currentUser } = useAuth();
    const [propertyDetail, setPropertyDetail] = useState([]);

    const [tokenData, setTokenData ] =  useState();
    console.log('hi', currentUser);

    const getVerifyToken = async() => {
        const tokenData = await verifyToken();
        if(tokenData.success === true){
            setTokenData(tokenData)
        } else {
            tokenData('') 
        }

      }
      
      
        useEffect(() =>  {
          getVerifyToken();
         },[])
    
    

    // const token = localStorage.getItem("Auth_Token");
    // console.log("tken", token)
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
