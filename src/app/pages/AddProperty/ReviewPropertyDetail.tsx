import React,{useEffect, useState } from 'react';
import { KTIcon, toAbsoluteUrl } from '../../../_metronic/helpers';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useLocation } from 'react-router';

import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import {getPropertyDetailById} from "../../Apis/AddPropertyApiList";

const Step4: React.FC<any>  = (props:any) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [propertyDetail, setPropertyDetail] = useState([]);

    

    const getPropertyDetail = async() => {
        const url: URL = new URL(window.location.href);
        const params: URLSearchParams = url.searchParams;
        const propertyId: any = params.get('id');
        const fetchPropertyDetail = await getPropertyDetailById({id:propertyId});
        setPropertyDetail(fetchPropertyDetail)     
      }
      
      
        useEffect(() =>  {
          getPropertyDetail();
         },[])

const {monthly_rent, service, property_type,  bhk, furnish_type, carpet_area, project, available_from
}: any = propertyDetail;



const closeAddProperty = () => {
    navigate('/property-List')
}


    return (
        <>
           <div className={clsx('card self_verify-container')}>
 {propertyDetail && (          
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
    
                           {monthly_rent && ( <h4 className="pl-2">Rs {monthly_rent}</h4>)}
                        </div>

                        <p>
                              <strong>{bhk} {property_type}</strong> for {service}                           
                        </p>
                        <div>{carpet_area} sq.ft | {furnish_type} | {project}</div>
                        <div>Listing score : <strong>100%</strong> </div>
                        <div className={`progress h-7px bg-success bg-opacity-50 mt-7`}>
                    <div className={`progress-bar bg-success`} role="progressbar" style={{ width: "50%" }} />
                </div>
                    </div>
                    {/* <div className="col-xl-4">
                        <img className="verify_image" src={toAbsoluteUrl('media/custom/verify.svg')} alt="" />
                    </div> */}
                    <div className="col-xl-4 ">
                        <div className="verify_card" style={{background:'white'}}>
                          
                            <div className="py-3"> Available from {(available_from)}</div>
                            
                            <div style={{marginTop:'75%'}}>
                            {/* <a
                                href="#"
                                style={{textDecoration:'underline', fontWeight:'600'}}
                               
                            >
                               + Add Details
                            </a> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className=" row " style= {{border:'1px solid rgb(225, 226, 231)', borderRadius:'10px', marginTop:'2%'}}>

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
                </div> */}

<div
            style={{
              display: "block",
              width: "100%",
              margin: "25px 0px",
              position: "relative",
              bottom: "0px",
              padding: "0px",
            }}
          >
            <button
              onClick={closeAddProperty}
              style={{
                background: "#1B84FF",
                borderRadius: "8px",
                fontWeight: 500,
                fontSize: "14px",
                width: "100%",
                padding: "17px 0px",
                textAlign: "center",
                color: "rgb(255, 255, 255)",
                border: "none",
              }}
            >
             
             Go to Property Listing
            </button>
          </div>

    
            </div> )}
        </div>
        </>
    );
};

export { Step4 };
