import OTPInput from 'react-otp-input';
import React, { useState } from 'react';
import '../Style/OtpStyle.css';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { userRegister } from '../../../Apis/AuthApiList';

declare global {
  interface Window {
    verifyOtp?: (payload?: any) => Promise<any>;
    retryOtp?: (payload?: any) => Promise<any>;
  }
}

function Verify(props: any) {
  const { userData, signInViaPhone, backToSignIn } = props;
  const [OTP, setOTP] = useState('');
  const [invalidOTP, setInvalidOTP] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(value: string) {
    setOTP(value);
    setInvalidOTP(false);
    setErrorMsg('');
  }

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

        await window.retryOtp({
          identifier: `91${userData.phoneNo}`,
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
    }
  };

  const verifyAndRegister = async () => {
    setLoading(true);
    setInvalidOTP(false);
    setErrorMsg('');

    try {
      if (signInViaPhone) {
        if (!window.verifyOtp) {
          throw new Error('MSG91 verifyOtp method is not available');
        }

        const otpResponse = await window.verifyOtp({
          otp: OTP,
        });

        if (!otpResponse) {
          setInvalidOTP(true);
          setErrorMsg('Enter valid OTP');
          setLoading(false);
          return;
        }
      }

      const registerUser = await userRegister({
        email: userData.email,
        name: userData.firstname,
        lname: userData.lastname,
        password: userData.password,
        role: userData.role,
        phone: userData.phoneNo,
      });

      if (registerUser?.success === true) {
        if (registerUser.token) {
          localStorage.setItem('Auth_Token', registerUser.token);
        }

        if (registerUser.user?.email) {
          localStorage.setItem('User_Email', registerUser.user.email);
        } else {
          localStorage.setItem('User_Email', userData.email);
        }

        if (registerUser.user?.username) {
          localStorage.setItem('User_Name', registerUser.user.username);
        } else {
          localStorage.setItem('User_Name', userData.firstname);
        }

        document.location.reload();
      } else {
        setInvalidOTP(true);
        setErrorMsg(registerUser?.message || 'Registration failed');
      }
    } catch (error: any) {
      console.error('Verify/Register failed:', error);
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
                    An OTP has been sent to your entered email <strong>{userData.email}</strong>
                  </div>
                )}

                {signInViaPhone && (
                  <div className="py-3">
                    An OTP has been sent to your entered Phone No. <strong>{userData.phoneNo}</strong>
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
                  onClick={verifyAndRegister}
                  disabled={loading || OTP.length !== 6}
                >
                  {!loading && <span className="indicator-label">Verify & Register</span>}
                  {loading && (
                    <span className="indicator-progress" style={{ display: 'block' }}>
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  )}
                </button>

                <Link to="/auth/login">
                  <button
                    onClick={handleCancel}
                    type="button"
                    id="kt_login_signup_form_cancel_button"
                    className="btn btn-lg btn-light-primary w-100 mb-5"
                  >
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verify;