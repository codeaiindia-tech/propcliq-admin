import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { PasswordMeterComponent } from '../../../../_metronic/assets/ts/components';
import Verify from './VerifyOtp';

declare global {
    interface Window {
        initSendOTP?: (config: any) => void;
        sendOtp?: (phone: string, successCallback: (data: any) => void, errorCallback: (error: any) => void) => void;
        verifyOtp?: (otp: string | number, onSuccess?: (data: any) => void, onFailure?: (error: any) => void) => void;
        retryOtp?: (channel: string | null, onSuccess?: (data: any) => void, onFailure?: (error: any) => void) => void;
    }
}

const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    changepassword: '',
    phone: '',
    role: '',
};

const registrationSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('First name is required'),
    email: Yup.string()
        .email('Wrong email format')
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Email is required'),
    lastname: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Last name is required'),
    password: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password is required'),
    changepassword: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password confirmation is required')
        .oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
    role: Yup.string().required('Role is required'),
    phone: Yup.string()
        .required('Phone is required for verification')
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
});

export function Registration() {
    const [loading, setLoading] = useState(false);
    const [errorFlag, setErrorFlag] = useState(false);
    const [errorFlagMsg, setErrorFlagMsg] = useState('');
    const [openOtpFlag, setOpenOtpFlag] = useState(false);
    const [pendingUserData, setPendingUserData] = useState<any>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [msg91Ready, setMsg91Ready] = useState(false);

    const MSG91_WIDGET_ID = '36636c674276303735303935';
    const MSG91_TOKEN_AUTH = '499793TiArXvdG69b26bb2P1';

    useEffect(() => {
        PasswordMeterComponent.bootstrap();

        const initializeMsg91 = () => {
            if (!window.initSendOTP) return;

            window.initSendOTP({
                widgetId: MSG91_WIDGET_ID,
                tokenAuth: MSG91_TOKEN_AUTH,
                exposeMethods: true,
                success: (data: any) => {
                    console.log('MSG91 initialized / success callback:', data);
                },
                failure: (error: any) => {
                    console.error('MSG91 failure callback:', error);
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
            console.error('Failed to load MSG91 SDK');
            setErrorFlag(true);
            setErrorFlagMsg('Failed to load OTP service');
        };

        document.body.appendChild(script);
    }, []);

    const formik = useFormik({
        initialValues,
        validationSchema: registrationSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            setLoading(true);
            setErrorFlag(false);
            setErrorFlagMsg('');
            console.log("Form value:", values)

            try {
                if (!msg91Ready || !window.sendOtp) {
                    throw new Error('OTP service is not ready yet. Please try again.');
                }

                setLoading(true);

                await new Promise<void>((resolve, reject) => {
                    window.sendOtp!(
                        `91${values.phone}`,
                        (data: any) => {
                            console.log('OTP sent successfully:', data);
                            setPendingUserData(values);
                            setOpenOtpFlag(true);
                            setLoading(false);
                            resolve();
                        },
                        (error: any) => {
                            console.error('OTP SEND ERROR:', error);
                            setErrorFlag(true);
                            setErrorFlagMsg('Failed to send OTP');
                            setOpenOtpFlag(false);
                            setLoading(false);
                            reject(error);
                        }
                    );
                });
            } catch (error: any) {
                console.error('OTP SEND ERROR:', error);
                setErrorFlag(true);
                setErrorFlagMsg(error?.message || 'Failed to send OTP');
                setStatus(undefined);
                setSubmitting(false);
                setLoading(false);
                setOpenOtpFlag(false);
            }
        },
    });

    const backToRegistration = () => {
        setOpenOtpFlag(false);
    };

    return (
        <>
            {openOtpFlag && pendingUserData ? (
                <Verify
                    userData={{ ...pendingUserData, phoneNo: pendingUserData.phone }}
                    signInViaPhone={true}
                    backToSignIn={backToRegistration}
                />
            ) : (
                <form
                    className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
                    noValidate
                    id="kt_login_signup_form"
                    onSubmit={formik.handleSubmit}
                >
                    <div className="text-center mb-11">
                        <h1 className="text-gray-900 fw-bolder mb-3">Sign Up</h1>
                        <div className="text-gray-500 fw-semibold fs-6">
                            Sign in with this account across the following sites.
                        </div>
                    </div>

                    {(formik.status || errorFlag) && (
                        <div className="mb-lg-15 alert alert-danger">
                            <div className="alert-text font-weight-bold">
                                {formik.status ? formik.status : errorFlagMsg}
                            </div>
                        </div>
                    )}

                    <div className="fv-row mb-8">
                        <label className="form-label fw-bolder text-gray-900 fs-6">First name</label>
                        <input
                            placeholder="First name"
                            type="text"
                            autoComplete="off"
                            {...formik.getFieldProps('firstname')}
                            className={clsx(
                                'form-control bg-transparent',
                                {
                                    'is-invalid': formik.touched.firstname && formik.errors.firstname,
                                },
                                {
                                    'is-valid': formik.touched.firstname && !formik.errors.firstname,
                                }
                            )}
                        />
                        {formik.touched.firstname && formik.errors.firstname && (
                            <div className="fv-plugins-message-container">
                                <div className="fv-help-block">
                                    <span role="alert">{formik.errors.firstname}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="fv-row mb-8">
                        <label className="form-label fw-bolder text-gray-900 fs-6">Last name</label>
                        <input
                            placeholder="Last name"
                            type="text"
                            autoComplete="off"
                            {...formik.getFieldProps('lastname')}
                            className={clsx(
                                'form-control bg-transparent',
                                {
                                    'is-invalid': formik.touched.lastname && formik.errors.lastname,
                                },
                                {
                                    'is-valid': formik.touched.lastname && !formik.errors.lastname,
                                }
                            )}
                        />
                        {formik.touched.lastname && formik.errors.lastname && (
                            <div className="fv-plugins-message-container">
                                <div className="fv-help-block">
                                    <span role="alert">{formik.errors.lastname}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="fv-row mb-8">
                        <label className="form-label fw-bolder text-gray-900 fs-6">Email</label>
                        <input
                            placeholder="Email"
                            type="email"
                            autoComplete="off"
                            {...formik.getFieldProps('email')}
                            className={clsx(
                                'form-control bg-transparent',
                                { 'is-invalid': formik.touched.email && formik.errors.email },
                                {
                                    'is-valid': formik.touched.email && !formik.errors.email,
                                }
                            )}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="fv-plugins-message-container">
                                <div className="fv-help-block">
                                    <span role="alert">{formik.errors.email}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="fv-row mb-8">
                        <label className="form-label fw-bolder text-gray-900 fs-6">Phone</label>
                        <input
                            placeholder="Phone"
                            type="text"
                            {...formik.getFieldProps('phone')}
                            className={clsx(
                                'form-control bg-transparent',
                                { 'is-invalid': formik.touched.phone && formik.errors.phone },
                                { 'is-valid': formik.touched.phone && !formik.errors.phone }
                            )}
                        />
                        {formik.touched.phone && formik.errors.phone && (
                            <div className="fv-plugins-message-container">
                                <div className="fv-help-block">
                                    <span role="alert">{formik.errors.phone}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="fv-row mb-8">
                        <label className="form-label fw-bolder text-gray-900 fs-6">Role</label>
                        <div className="col-lg-8 fv-row">
                            <select
                                className="form-select form-select-solid form-select-lg"
                                {...formik.getFieldProps('role')}
                            >
                                <option value="">Select a Role..</option>
                                <option value="USER">User</option>
                                <option value="BROKER">Broker</option>
                                <option value="BUILDER">Builder</option>
                            </select>
                            {formik.touched.role && formik.errors.role && (
                                <div className="fv-plugins-message-container">
                                    <div className="fv-help-block">{formik.errors.role}</div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="fv-row mb-8" data-kt-password-meter="true">
                        <div className="mb-1">
                            <label className="form-label fw-bolder text-gray-900 fs-6">Password</label>
                            <div className="position-relative mb-3">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    autoComplete="off"
                                    {...formik.getFieldProps('password')}
                                    className={clsx(
                                        'form-control bg-transparent',
                                        {
                                            'is-invalid': formik.touched.password && formik.errors.password,
                                        },
                                        {
                                            'is-valid': formik.touched.password && !formik.errors.password,
                                        }
                                    )}
                                />

                                {showPassword ? (
                                    <span
                                        className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n0"
                                        style={{ marginRight: '15px' }}
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <i className="ki-duotone ki-eye fs-1">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                        </i>
                                    </span>
                                ) : (
                                    <span
                                        className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n0"
                                        style={{ marginRight: '15px' }}
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <i className="ki-duotone ki-eye-slash fs-1">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                        </i>
                                    </span>
                                )}

                                {formik.touched.password && formik.errors.password && (
                                    <div className="fv-plugins-message-container">
                                        <div className="fv-help-block">
                                            <span role="alert">{formik.errors.password}</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
                                <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
                            </div>
                        </div>
                        <div className="text-muted">
                            Use 8 or more characters with a mix of letters, numbers & symbols.
                        </div>
                    </div>

                    <div className="position-relative mb-3 fv-row mb-5">
                        <label className="form-label fw-bolder text-gray-900 fs-6">Confirm Password</label>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Password confirmation"
                            autoComplete="off"
                            {...formik.getFieldProps('changepassword')}
                            className={clsx(
                                'form-control bg-transparent',
                                {
                                    'is-invalid': formik.touched.changepassword && formik.errors.changepassword,
                                },
                                {
                                    'is-valid': formik.touched.changepassword && !formik.errors.changepassword,
                                }
                            )}
                        />

                        {showConfirmPassword ? (
                            <span
                                className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n0"
                                style={{ marginRight: '15px', marginTop: '3%' }}
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                <i className="ki-duotone ki-eye fs-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                </i>
                            </span>
                        ) : (
                            <span
                                className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n0"
                                style={{ marginRight: '15px', marginTop: '3%' }}
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                <i className="ki-duotone ki-eye-slash fs-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                    <span className="path4"></span>
                                </i>
                            </span>
                        )}

                        {formik.touched.changepassword && formik.errors.changepassword && (
                            <div className="fv-plugins-message-container">
                                <div className="fv-help-block">
                                    <span role="alert">{formik.errors.changepassword}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            id="kt_sign_up_submit"
                            className="btn btn-lg btn-primary w-100 mb-5"
                            disabled={loading || !formik.isValid}
                        >
                            {!loading && <span className="indicator-label">Send OTP</span>}
                            {loading && (
                                <span className="indicator-progress" style={{ display: 'block' }}>
                                    Please wait...
                                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                </span>
                            )}
                        </button>

                        <Link to="/auth/login">
                            <button
                                type="button"
                                id="kt_login_signup_form_cancel_button"
                                className="btn btn-lg btn-light-primary w-100 mb-5"
                            >
                                Cancel
                            </button>
                        </Link>
                    </div>
                </form>
            )}
        </>
    );
}