import React from 'react';
import { KTIcon, toAbsoluteUrl } from '../../../_metronic/helpers';
import clsx from 'clsx';
import { useLocation } from 'react-router';

import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const PropertyListingRightView: React.FC<any>  = (props:any) => {




    return (
        <>
           <div className={clsx('card self_verify-container')}>
            <div className="card-body d-flex flex-column justify-content-between">
                <div className=" row ">
                <div className="col-xl-4">
                        <img className="verify_image" style = {{width:'100%'}}src={toAbsoluteUrl('media/properties/images.jpeg')} alt="" />
                    </div>
                    <div className="col-xl-8 self_verify-card">
                        <div className="d-flex align-items-center">
    
                            <h4 className="pl-2"><strong>Now you can self-verify!</strong>  </h4>
                        </div>

                        <div>Click phots using your mobile phone and verify at your convenience.</div>
                        <Button variant="contained" color="primary"  style={{ marginTop: '20px' }}>
                        Learn More 
            </Button>
                        
                     
                     
                    </div>
                  
                </div>

                
            </div>
        </div>

        <div className={clsx('card self_verify-container')}>
            <div className="card-body d-flex flex-column justify-content-between">
                <div className=" row ">
                <div className="col-xl-4">
                        <img className="verify_image" style = {{width:'100%'}}src={toAbsoluteUrl('media/properties/images.jpeg')} alt="" />
                    </div>
                    <div className="col-xl-8 self_verify-card">
                        <div className="d-flex align-items-center">
    
                            <h4 className="pl-2"><strong>Property value calculator</strong>  </h4>
                        </div>

                        <div>Calculate the right value of your property</div>
                        <Button variant="contained" color="primary"  style={{ marginTop: '20px' }}>
                        Estimate price
            </Button>
                        
                     
                     
                    </div>
                  
                </div>

                
            </div>
        </div>

        <div className={clsx('card self_verify-container')}>
            <div className="card-body d-flex flex-column justify-content-between">
                <div className=" row ">
                <div className="col-xl-4">
                        <img className="verify_image" style = {{width:'100%'}}src={toAbsoluteUrl('media/properties/images.jpeg')} alt="" />
                    </div>
                    <div className="col-xl-8 self_verify-card">
                        <div className="d-flex align-items-center">
    
                            <h4 className="pl-2"><strong>Instant Online Rent Agreement</strong>  </h4>
                        </div>

                        <div>Completely legal with lowest price guarantee</div>
                        <Button variant="contained" color="primary"  style={{ marginTop: '20px' }}>
                        Create Agreement 
            </Button>
                        
                     
                     
                    </div>
                  
                </div>

                
            </div>
        </div>
        </>
    );
};


