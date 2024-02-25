import React from 'react';
import { KTIcon, toAbsoluteUrl } from '../../../_metronic/helpers';
import { Link } from 'react-router-dom';
import { Dropdown1 } from '../../../_metronic/partials';
import clsx from 'clsx';
import { useLocation } from 'react-router';
import { Toolbar } from '../../../_metronic/layout/components/toolbar/Toolbar';
import { Content } from '../../../_metronic/layout/components/Content';

const Step4: React.FC = () => {
    const location = useLocation();

    return (
        <>
           <div className={clsx('card self_verify-container')}>
            <div className="card-body d-flex flex-column justify-content-between">
                <div className=" row " style= {{border:'1px solid rgb(225, 226, 231)', borderRadius:'10px'}}>

                <div className="col-xl-12" style={{padding:'2%', backgroundColor:'rgb(228, 255, 231)', marginBottom:'1%'}}>

                <div className="d-flex align-items-center" >
                            <KTIcon iconName="check-circle" className="fs-2x text-primary" />
                            <div >
                            Congratulation ! Your listing is under review
                            </div>
                        </div>
             
                    </div>   

                <div className="col-xl-4">
                        <img className="verify_image" style = {{width:'100%'}}src={toAbsoluteUrl('media/custom/verify.svg')} alt="" />
                    </div>
                    <div className="col-xl-4 self_verify-card">
                        <div className="d-flex align-items-center">
    
                            <h4 className="pl-2">Rs 30000</h4>
                        </div>

                        <p>
                              <strong>3 BHK Apartment</strong> for sale
                            
                        </p>
                        <div>1800 sq.ft | Unfurnished | Purvanchal Royal City Phase 2</div>
                        <div>Listing score : <strong>30%</strong> </div>
                        <div className={`progress h-7px bg-success bg-opacity-50 mt-7`}>
                    <div className={`progress-bar bg-success`} role="progressbar" style={{ width: "50%" }} />
                </div>
                    </div>
                    {/* <div className="col-xl-4">
                        <img className="verify_image" src={toAbsoluteUrl('media/custom/verify.svg')} alt="" />
                    </div> */}
                    <div className="col-xl-4 ">
                        <div className="verify_card" style={{background:'white'}}>
                          
                            <div className="py-3"> Available from 24/01/2024</div>
                            
<div style={{marginTop:'75%'}}>
                            <a
                                href="#"
                                style={{textDecoration:'underline', fontWeight:'600'}}
                               
                            >
                               + Add Details
                            </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" row " style= {{border:'1px solid rgb(225, 226, 231)', borderRadius:'10px', marginTop:'2%'}}>

                <div className="col-xl-12"  style={{padding:'1%', marginBottom:'1%', backgroundColor:'rgb(255, 240, 228)'}}>

                <div className="d-flex align-items-center">
                            <KTIcon iconName="information" className="fs-2x text-primary" />
                            <div >
                            Complete Now to get more visibilty and responses
                            </div>
                        </div>
             
                    </div>  

              
                    <div className="col-xl-6 ">
                        <div className="verify_card" style={{background:'white'}}>
                         
                           <h4> <strong>No Photos added</strong></h4>
                          
                            <img className="verify_image" style = {{width:'70%'}}src={toAbsoluteUrl('media/custom/verify.svg')} alt="" />
                          <div style={{padding:'10%'}}>
                            <a
                                  href="#"
                                  style={{textDecoration:'underline', fontWeight:'600'}}
                            >
                                + Add photo
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 ">
                        <div className="verify_card" style={{background:'white'}}>
                         
                        <h4> <strong>No Address Detail Added</strong></h4>
                          
                            <img className="verify_image" style = {{width:'70%'}}src={toAbsoluteUrl('media/custom/verify.svg')} alt="" />
                          <div style={{padding:'10%'}}>
                            <a
                                href="#"
                                style={{textDecoration:'underline', fontWeight:'600'}}
                            >
                               + Add Address
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export { Step4 };
