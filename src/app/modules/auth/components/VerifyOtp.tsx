    import OTPInput from "react-otp-input";
    import React, { useState } from "react";
    import "../Style/OtpStyle.css";
    import clsx from 'clsx';
    import {sendOtp, verifyOtp, sendOtpToPhone, verifyOtpOnPhone} from '../../../Apis/AuthApiList';
    import { Link } from 'react-router-dom';
    import { useNavigate } from 'react-router-dom';

    function Verify(props:any) {
        const {userData, signInViaPhone, backToSignIn} =  props;
        const navigate = useNavigate();
        const [OTP, setOTP] = useState("");
        const [invalidOTP, setInvalidOTP] = useState<boolean>(false);

    function handleChange(OTP:any) {
        setOTP(OTP);
    }

    const reSendOtp = async() => {
        setOTP("");
        setInvalidOTP(false)
        if (signInViaPhone) {
             await sendOtpToPhone({"phone" : userData.phoneNo});  
        }else {
            await sendOtp({"email" : userData.email, "password" : userData.password});
        }
        

    }

    const handleCancel = () => {
        backToSignIn();
    }

    const verifyEmailOtp = async () => {
    

        if (signInViaPhone) {

         const verifyOtpToPhone =  await verifyOtpOnPhone({"phone" : userData.phoneNo, "otp" : OTP});
            if (verifyOtpToPhone?.success === true) {
                
                localStorage.setItem("Auth_Token", verifyOtpToPhone.token);
                localStorage.setItem("User_Email", verifyOtpToPhone.user.phone);
                localStorage.setItem("User_Name", verifyOtpToPhone.user.username);
                document.location.reload();
            } else {
                setInvalidOTP(true)
            }
    
       }   else {
          const  verifyOtpToMail =  await verifyOtp({"email" : userData.email, "otp" : OTP});
            if (verifyOtpToMail ?.success === true) {
                localStorage.setItem("Auth_Token", verifyOtpToMail.token);
                localStorage.setItem("User_Email", verifyOtpToMail.user.email);
                localStorage.setItem("User_Name", verifyOtpToMail.user.username);
                document.location.reload();
            } else {
                setInvalidOTP(true)
            }
       }

    }
    return (
        <div className={clsx('card self_verify-container')}>
        <div className="card-body d-flex flex-column justify-content-between">
        <div className=" row " >

        <div className="col-xl-12" >
        <div className="verifyDiv">
        <p className="p1">Verify Account</p>
        
        
        <div className="otpElements">
       {!signInViaPhone && (<div className="py-3"> An OTP has been sent to your entered email <strong>{userData.email}</strong></div>)}
       {signInViaPhone && (<div className="py-3"> An OTP has been sent to your entered Phone No. <strong>{userData.phoneNo}</strong></div>)}
        <div className="py-3"> Enter your Code here</div>
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
            {invalidOTP && (<div style = {{color:'red'}}className="py-3">Enter valid OTP</div>)}
            <div className="py-3">Didn't receive the code?</div>
      <a
                                href="#"
                                style={{textDecoration:'underline', fontWeight:'600'}}
                                onClick= {reSendOtp}
                               
                            >
                              Resend
                            </a>
        </div>
        <div className="text-center">
                <button
                    type="submit"
                    id="kt_sign_up_submit"
                    className="btn btn-lg btn-primary w-100 mb-5"
                    onClick = {verifyEmailOtp}                  
                >
                    <span className="indicator-label">Verify</span>
                 
                </button>
                <Link to="/auth/login">
                    <button onClick= {handleCancel} type="button" id="kt_login_signup_form_cancel_button" className="btn btn-lg btn-light-primary w-100 mb-5">
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