import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';
import { getUserByToken, register } from '../core/_requests';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '../../../../_metronic/helpers';
import { PasswordMeterComponent } from '../../../../_metronic/assets/ts/components';
import { useAuth } from '../core/Auth';
import {userRegister} from '../../../Apis/AuthApiList';
import Verify from  './VerifyOtp';


const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    changepassword: '',

    role: '',
};

const registrationSchema = Yup.object().shape({
    firstname: Yup.string().min(3, 'Minimum 3 symbols').max(50, 'Maximum 50 symbols').required('First name is required'),
    email: Yup.string().email('Wrong email format').min(3, 'Minimum 3 symbols').max(50, 'Maximum 50 symbols').required('Email is required'),
    lastname: Yup.string().min(3, 'Minimum 3 symbols').max(50, 'Maximum 50 symbols').required('Last name is required'),
    password: Yup.string().min(3, 'Minimum 3 symbols').max(50, 'Maximum 50 symbols').required('Password is required'),
    changepassword: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password confirmation is required')
        .oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),

    role: Yup.string().required('Role is required'),
});

export function Registration() {
    const [loading, setLoading] = useState(false);
    const [errorFlag, setErrorFlag] = useState(false);
    const [errorFlagMsg, setErrorFlagMsg] = useState('');
    const [openOtpFlag, setOpenOtpFlag] = useState(false);
    const [ userData, setUserData] =  useState<any>();

    const formik = useFormik({
        initialValues,
        validationSchema: registrationSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            setLoading(true);
            try {

                const registerUser = await userRegister({email: values.email, name: values.firstname, lname: values.lastname, password: values.password, role:values.role});      
                if(registerUser?.success === true) {
                    setLoading(false);
                    setOpenOtpFlag(true);
                    setUserData(values);
                    
                } else {
                    setLoading(false);
                    setErrorFlag(true)
                    setErrorFlagMsg(registerUser.message)
                }

                // const { data: auth } = await register(values.email, values.firstname, values.lastname, values.password, values.changepassword);
                // saveAuth(auth);
                // const { data: user } = await getUserByToken(auth.api_token);
                // setCurrentUser(user);
            } catch (error) {
                console.error(error);
                // saveAuth(undefined);
                setStatus('The registration details is incorrect');
                setSubmitting(false);
                setLoading(false);
            }
        },
    });

    useEffect(() => {
        PasswordMeterComponent.bootstrap();
    }, []);

    return (
        <> {openOtpFlag && (
            // <OTPApp></OTPApp>
            <Verify userData={userData}></Verify>
        )}
       
       {!openOtpFlag && ( <form className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" noValidate id="kt_login_signup_form" onSubmit={formik.handleSubmit}>
            {/* begin::Heading */}
            <div className="text-center mb-11">
                {/* begin::Title */}
                <h1 className="text-gray-900 fw-bolder mb-3">Sign Up</h1>
                {/* end::Title */}

                <div className="text-gray-500 fw-semibold fs-6">Sign in with this account across the following sites.</div>
            </div>
            {/* end::Heading */}

            


            {(formik.status || errorFlag) && (
                <div className="mb-lg-15 alert alert-danger">
                    <div className="alert-text font-weight-bold">{formik.status ? formik.status : errorFlagMsg}</div>
                </div>
            )}

            {/* begin::Form group Firstname */}
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
            {/* end::Form group */}
            <div className="fv-row mb-8">
                {/* begin::Form group Lastname */}
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
                {/* end::Form group */}
            </div>

            {/* begin::Form group Email */}
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
            {/* end::Form group */}


        {/* begin::Form group Email */}
        <div className="fv-row mb-8">
                            <label className="form-label fw-bolder text-gray-900 fs-6">Role</label>

                            <div className="col-lg-8 fv-row">
                                <select className="form-select form-select-solid form-select-lg" {...formik.getFieldProps('role')}>
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
            {/* end::Form group */}


            {/* begin::Form group Password */}
            <div className="fv-row mb-8" data-kt-password-meter="true">
                <div className="mb-1">
                    <label className="form-label fw-bolder text-gray-900 fs-6">Password</label>
                    <div className="position-relative mb-3">
                        <input
                            type="password"
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
                        {formik.touched.password && formik.errors.password && (
                            <div className="fv-plugins-message-container">
                                <div className="fv-help-block">
                                    <span role="alert">{formik.errors.password}</span>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* begin::Meter */}
                    <div className="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
                        <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                        <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                        <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                        <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
                    </div>
                    {/* end::Meter */}
                </div>
                <div className="text-muted">Use 8 or more characters with a mix of letters, numbers & symbols.</div>
            </div>
            {/* end::Form group */}

            {/* begin::Form group Confirm password */}
            <div className="fv-row mb-5">
                <label className="form-label fw-bolder text-gray-900 fs-6">Confirm Password</label>
                <input
                    type="password"
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
                {formik.touched.changepassword && formik.errors.changepassword && (
                    <div className="fv-plugins-message-container">
                        <div className="fv-help-block">
                            <span role="alert">{formik.errors.changepassword}</span>
                        </div>
                    </div>
                )}
            </div>
            {/* end::Form group */}

         

            {/* begin::Form group */}
            <div className="text-center">
                <button
                    type="submit"
                    id="kt_sign_up_submit"
                    className="btn btn-lg btn-primary w-100 mb-5"
                    disabled={formik.isSubmitting || !formik.isValid }
                >
                    {!loading && <span className="indicator-label">Submit</span>}
                    {loading && (
                        <span className="indicator-progress" style={{ display: 'block' }}>
                            Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                    )}
                </button>
                <Link to="/auth/login">
                    <button type="button" id="kt_login_signup_form_cancel_button" className="btn btn-lg btn-light-primary w-100 mb-5">
                        Cancel
                    </button>
                </Link>
            </div>
            {/* end::Form group */}
        </form>)}
        </>
    );
}
