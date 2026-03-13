import OTPInput from 'react-otp-input';
import React, { useState } from 'react';
import '../Style/OtpStyle.css';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import {
  userRegister,
  verifyOtp,
  loginWithVerifiedPhone,
} from '../../../Apis/AuthApiList';

declare global {
  interface Window {
    verifyOtp?: (
      otp: string | number,
      onSuccess?: (data: any) => void,
      onFailure?: (error: any) => void
    ) => void;
    retryOtp?: (
      channel: string | null,
      onSuccess?: (data: any) => void,
      onFailure?: (error: any) => void
    ) => void;
  }
}

function Verify(props: any) {
  const { userData, signInViaPhone, backToSignIn } = props;
  const navigate = useNavigate();

  const [OTP, setOTP] = useState('');
  const [invalidOTP, setInvalidOTP] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(value: string) {
    setOTP(value);
    setInvalidOTP(false);
    setErrorMsg('');
  }

  const getPhoneNumber = () => {
    return userData?.phoneNo || userData?.phone || '';
  };

  const saveLoginDataAndRedirect = (response: any) => {
    const finalResponse = response?.data || response;

    if (finalResponse?.token) {
      localStorage.setItem('Auth_Token', finalResponse.token);
      localStorage.setItem('token', finalResponse.token);
    }

    const email =
      finalResponse?.user?.email ||
      finalResponse?.email ||
      userData?.email ||
      '';

    if (email) {
      localStorage.setItem('User_Email', email);
    }

    const fullName =
      finalResponse?.user?.username ||
      finalResponse?.user?.name ||
      finalResponse?.username ||
      finalResponse?.name ||
      `${finalResponse?.user?.fname || ''} ${finalResponse?.user?.lname || ''}`.trim() ||
      `${finalResponse?.fname || ''} ${finalResponse?.lname || ''}`.trim() ||
      `${userData?.firstname || ''} ${userData?.lastname || ''}`.trim() ||
      userData?.firstname ||
      getPhoneNumber() ||
      email ||
      'User';

    localStorage.setItem('User_Name', fullName);

    // navigate('/dashboard', { replace: true });
    window.location.href = '/dashboard';
  };

  const reSendOtp = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOTP('');
    setInvalidOTP(false);
    setErrorMsg('');

    try {
      if (signInViaPhone) {
        if (!window.retryOtp) {
          throw new Error('MSG91 retryOtp method is not available');
        }

        await new Promise<void>((resolve, reject) => {
          window.retryOtp!(
            null,
            (data: any) => {
              console.log('OTP resent successfully:', data);
              resolve();
            },
            (error: any) => {
              console.error('Resend OTP failed:', error);
              reject(error);
            }
          );
        });
      }
    } catch (error: any) {
      console.error('Resend OTP failed:', error);
      setInvalidOTP(true);
      setErrorMsg(error?.message || 'Failed to resend OTP');
    }
  };

  const handleCancel = () => {
    if (backToSignIn) {
      backToSignIn();
    } else {
      navigate('/auth/login');
    }
  };

  const verifyAndProceed = async () => {
    setLoading(true);
    setInvalidOTP(false);
    setErrorMsg('');

    try {
      if (signInViaPhone) {
        if (!window.verifyOtp) {
          throw new Error('MSG91 verifyOtp method is not available');
        }

        await new Promise<void>((resolve, reject) => {
          window.verifyOtp!(
            OTP,
            (data: any) => {
              console.log('OTP verified successfully:', data);
              resolve();
            },
            (error: any) => {
              console.error('OTP verification failed:', error);
              reject(error);
            }
          );
        });

        const phoneNumber = getPhoneNumber();

        if (!phoneNumber) {
          throw new Error('Phone number is required');
        }

        if (userData?.loginMode === 'phone') {
          console.log('loginWithVerifiedPhone payload:', {
            phone: phoneNumber,
            userData,
          });

          const loginResponse = await loginWithVerifiedPhone({
            phone: phoneNumber,
          });

          console.log('loginWithVerifiedPhone response:', loginResponse);

          const finalLoginResponse = loginResponse?.data || loginResponse;

          if (finalLoginResponse?.success === true && finalLoginResponse?.token) {
            saveLoginDataAndRedirect(finalLoginResponse);
            return;
          } else {
            setInvalidOTP(true);
            setErrorMsg(finalLoginResponse?.message || 'Phone login failed');
            return;
          }
        }

        const registerUserResponse = await userRegister({
          email: userData?.email,
          name: userData?.firstname,
          lname: userData?.lastname,
          password: userData?.password,
          role: userData?.role,
          phone: phoneNumber,
        });

        console.log('userRegister response:', registerUserResponse);

        const finalRegisterResponse = registerUserResponse?.data || registerUserResponse;

        if (finalRegisterResponse?.success === true) {
          saveLoginDataAndRedirect(finalRegisterResponse);
        } else {
          setInvalidOTP(true);
          setErrorMsg(finalRegisterResponse?.message || 'Registration failed');
        }

        return;
      }

      const verifyOtpToMail = await verifyOtp({
        email: userData?.email,
        otp: OTP,
      });

      console.log('verifyOtp mail response:', verifyOtpToMail);

      const finalMailResponse = verifyOtpToMail?.data || verifyOtpToMail;

      if (finalMailResponse?.success === true) {
        saveLoginDataAndRedirect(finalMailResponse);
      } else {
        setInvalidOTP(true);
        setErrorMsg(finalMailResponse?.message || 'Email OTP verification failed');
      }
    } catch (error: any) {
      console.error('Verify/Proceed failed:', error);
      setInvalidOTP(true);
      setErrorMsg(error?.message || 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={clsx('card self_verify-container')}>
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="row">
          <div className="col-xl-12">
            <div className="verifyDiv">
              <p className="p1">Verify Account</p>

              <div className="otpElements">
                {!signInViaPhone && (
                  <div className="py-3">
                    An OTP has been sent to your entered email <strong>{userData?.email}</strong>
                  </div>
                )}

                {signInViaPhone && (
                  <div className="py-3">
                    An OTP has been sent to your entered Phone No. <strong>{getPhoneNumber()}</strong>
                  </div>
                )}

                <div className="py-3">Enter your Code here</div>

                <div className="otp">
                  <OTPInput
                    onChange={handleChange}
                    value={OTP}
                    inputStyle="inputStyle"
                    numInputs={6}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                  />
                </div>

                {invalidOTP && (
                  <div style={{ color: 'red' }} className="py-3">
                    {errorMsg || 'Enter valid OTP'}
                  </div>
                )}

                <div className="py-3">Didn't receive the code?</div>

                <a
                  href="#"
                  style={{ textDecoration: 'underline', fontWeight: '600' }}
                  onClick={reSendOtp}
                >
                  Resend
                </a>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  id="kt_sign_up_submit"
                  className="btn btn-lg btn-primary w-100 mb-5"
                  onClick={verifyAndProceed}
                  disabled={loading || OTP.length !== 6}
                >
                  {!loading && <span className="indicator-label">Verify</span>}
                  {loading && (
                    <span className="indicator-progress" style={{ display: 'block' }}>
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  )}
                </button>

                <button
                  onClick={handleCancel}
                  type="button"
                  id="kt_login_signup_form_cancel_button"
                  className="btn btn-lg btn-light-primary w-100 mb-5"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verify;