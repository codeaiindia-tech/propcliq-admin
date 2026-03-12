import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useAuth } from '../core/Auth';
import { sendOtp } from '../../../Apis/AuthApiList';
import Verify from './VerifyOtp';

declare global {
  interface Window {
    initSendOTP?: (config: any) => void;
    sendOtp?: (
      phone: string,
      successCallback: (data: any) => void,
      errorCallback: (data: any) => void
    ) => void;
  }
}

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Wrong email format').min(3, 'Minimum 3 symbols').max(50, 'Maximum 50 symbols').required('Email is required'),
  password: Yup.string().min(3, 'Minimum 3 symbols').max(50, 'Maximum 50 symbols').required('Password is required'),
});

const initialValues = {
  email: '',
  password: '',
};

export function Login() {
  const [loading, setLoading] = useState(false);
  const [signInViaPhone, setSignInViaPhone] = useState(true);
  const { saveAuth } = useAuth();
  const [openOtpFlag, setOpenOtpFlag] = useState(false);
  const [userData, setUserData] = useState<any>();
  const [errorFlag, setErrorFlag] = useState(false);
  const [errorFlagMsg, setErrorFlagMsg] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [msg91Ready, setMsg91Ready] = useState(false);

  const MSG91_WIDGET_ID = '36636c674276303735303935';
  const MSG91_TOKEN_AUTH = '499793TiArXvdG69b26bb2P1';

  useEffect(() => {
    const initializeMsg91 = () => {
      if (!window.initSendOTP) return;

      window.initSendOTP({
        widgetId: MSG91_WIDGET_ID,
        tokenAuth: MSG91_TOKEN_AUTH,
        exposeMethods: true,
        success: (data: any) => {
          console.log('MSG91 initialized:', data);
        },
        failure: (error: any) => {
          console.error('MSG91 init failure:', error);
        },
      });

      setMsg91Ready(true);
    };

    const existingScript = document.getElementById('msg91-otp-script');
    if (existingScript) {
      initializeMsg91();
      return;
    }

    const script = document.createElement('script');
    script.id = 'msg91-otp-script';
    script.src = 'https://verify.msg91.com/otp-provider.js';
    script.async = true;
    script.onload = initializeMsg91;
    script.onerror = () => {
      setErrorFlag(true);
      setErrorFlagMsg('Failed to load OTP service');
    };

    document.body.appendChild(script);
  }, []);

  const validatePhoneNo = (value: string) => {
    if (/^[0-9]{10}$/.test(value)) {
      setErrorFlag(false);
      setErrorFlagMsg('');
      return true;
    } else {
      setErrorFlag(true);
      setErrorFlagMsg('Enter valid 10 digit phone number');
      return false;
    }
  };

  const sendOtpToPhoneNo = async () => {
    setLoading(true);
    setErrorFlag(false);
    setErrorFlagMsg('');

    try {
      if (!validatePhoneNo(phoneNo)) {
        setLoading(false);
        return;
      }

      if (!msg91Ready || !window.sendOtp) {
        throw new Error('OTP service is not ready yet. Please try again.');
      }

      await new Promise<void>((resolve, reject) => {
        window.sendOtp!(
          `91${phoneNo}`,
          (data: any) => {
            console.log('Phone OTP sent successfully:', data);
            resolve();
          },
          (error: any) => {
            console.error('Phone OTP send failed:', error);
            reject(error);
          }
        );
      });

      setOpenOtpFlag(true);
      setUserData({
        phoneNo,
        loginMode: 'phone',
      });
      setLoading(false);
    } catch (error: any) {
      console.error(error);
      setErrorFlag(true);
      setErrorFlagMsg(error?.message || 'Failed to send OTP');
      saveAuth(undefined);
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      setErrorFlag(false);
      setErrorFlagMsg('');

      try {
        const sendOtpToMail = await sendOtp({
          email: values.email,
          password: values.password,
        });

        if (sendOtpToMail?.success === true) {
          setLoading(false);
          setOpenOtpFlag(true);
          setUserData({
            ...values,
            loginMode: 'email',
          });
        } else {
          setErrorFlag(true);
          setErrorFlagMsg(sendOtpToMail.message);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        saveAuth(undefined);
        setStatus('The login details are incorrect');
        setSubmitting(false);
        setLoading(false);
      }
    },
  });

  const backToPage = () => {
    setOpenOtpFlag(false);
    setPhoneNo('');
  };

  return (
    <>
      {openOtpFlag && (
        <Verify
          backToSignIn={backToPage}
          signInViaPhone={signInViaPhone}
          userData={userData}
        />
      )}

      {!openOtpFlag && (
        <form className="form w-100" onSubmit={formik.handleSubmit} noValidate id="kt_login_signin_form">
          <div className="text-center mb-11">
            <h1 className="text-gray-900 fw-bolder mb-3">Sign In</h1>
            <div className="text-gray-500 fw-semibold fs-6">Sign in with this account across the following sites.</div>
          </div>

          <div className="row g-3 mb-9" onClick={() => setSignInViaPhone(!signInViaPhone)}>
            <a
              href="#"
              className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
            >
              {signInViaPhone ? 'Sign in with Email and Password' : 'Sign in Via Phone'}
            </a>
          </div>

          {(formik.status || errorFlag) && (
            <div className="mb-lg-15 alert alert-danger">
              <div className="alert-text font-weight-bold">
                {formik.status ? formik.status : errorFlagMsg}
              </div>
            </div>
          )}

          {signInViaPhone && (
            <div className="fv-row mb-8">
              <label className="form-label fs-6 fw-bolder text-gray-900">Phone Number</label>
              <input
                placeholder="Enter Phone No"
                onChange={(e) => setPhoneNo(e.target.value)}
                value={phoneNo}
                className="form-control bg-transparent"
                type="text"
                name="phone"
                autoComplete="off"
              />

              <div className="fv-row mb-8" style={{ marginTop: '3%' }}>
                <button
                  type="button"
                  id="kt_sign_up_submit"
                  className="btn btn-lg btn-primary w-100 mb-5"
                  onClick={sendOtpToPhoneNo}
                  disabled={loading}
                >
                  {!loading && <span className="indicator-label">Continue</span>}
                  {loading && (
                    <span className="indicator-progress" style={{ display: 'block' }}>
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  )}
                </button>
              </div>
            </div>
          )}

          {!signInViaPhone && (
            <div>
              <div className="fv-row mb-8">
                <label className="form-label fs-6 fw-bolder text-gray-900">Email</label>
                <input
                  placeholder="Email"
                  {...formik.getFieldProps('email')}
                  className={clsx(
                    'form-control bg-transparent',
                    { 'is-invalid': formik.touched.email && formik.errors.email },
                    { 'is-valid': formik.touched.email && !formik.errors.email }
                  )}
                  type="email"
                  name="email"
                  autoComplete="off"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="fv-plugins-message-container">
                    <span role="alert">{formik.errors.email}</span>
                  </div>
                )}
              </div>

              <div className="fv-row mb-3">
                <label className="form-label fw-bolder text-gray-900 fs-6 mb-0">Password</label>
                <input
                  type="password"
                  autoComplete="off"
                  {...formik.getFieldProps('password')}
                  className={clsx(
                    'form-control bg-transparent',
                    { 'is-invalid': formik.touched.password && formik.errors.password },
                    { 'is-valid': formik.touched.password && !formik.errors.password }
                  )}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      <span role="alert">{formik.errors.password}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                <div />
                <Link to="/auth/forgot-password" className="link-primary">
                  Forgot Password ?
                </Link>
              </div>

              <div className="d-grid mb-10">
                <button type="submit" id="kt_sign_in_submit" className="btn btn-primary" disabled={formik.isSubmitting || !formik.isValid || loading}>
                  {!loading && <span className="indicator-label">Continue</span>}
                  {loading && (
                    <span className="indicator-progress" style={{ display: 'block' }}>
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  )}
                </button>
              </div>
            </div>
          )}

          <div className="text-gray-500 text-center fw-semibold fs-6">
            Not a Member yet?{' '}
            <Link to="/auth/registration" className="link-primary">
              Sign up
            </Link>
          </div>
        </form>
      )}
    </>
  );
}