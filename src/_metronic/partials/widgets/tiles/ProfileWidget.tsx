import clsx from 'clsx';
import { KTIcon } from '../../../helpers';
import { useEffect, useState } from 'react';
import {getPropertyListing} from "../../../../app/Apis/DashboardPageApiList";

type Props = {
    className?: string;
    svgIcon?: string;
    titleClass?: string;
    descriptionClass?: string;
    iconClass?: string;
    title?: string;
    description?: string;
};
const ProfileWidget= (props: Props) => {
    const { className, svgIcon, titleClass, descriptionClass, iconClass, title, description } = props;
    const [propertyCount, setPropertyCount] = useState([]);
    const getPropertyList = async() => {
        const propertyListing = await getPropertyListing();
        setPropertyCount(propertyListing.length)
      }
      
        useEffect(() =>  {
            getPropertyList();
         },[])

    return (<>
        <a href="#" className={clsx('card', className)}>
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <div className="d-flex justify-content-between mb-2">
                        <h2 className="fw-600">My Leads</h2>
                    </div>
                    <div
                        style={{
                            borderRadius: '10px',
                            padding: '12px',
                            cursor: 'pointer',
                        }}
                        className="d-flex align-items-center justify-content-between border border-secondary h-74 mt-6"
                    >
                    <div className="d-flex">
                           <div>
                                {' '}
                                <KTIcon iconName="calendar-search" className="fs-3x text-warning" />
                            </div> 
                          <div>
                                <strong style={{ fontSize: '28px', lineHeight: '33px' }}>{propertyCount}</strong>
                                <div style={{ fontSize: '12px', color: 'rgb(127, 127, 127)' }}>Last Week</div>
                            </div>
                           
                       </div>
                    </div>
                       <div
                        style={{
                            borderRadius: '10px',
                            padding: '12px',
                            cursor: 'pointer',
                        }}
                        className="d-flex align-items-center justify-content-between border border-secondary h-74 mt-6"
                    >
                    <div className="d-flex">
                            <div>
                                {' '}
                                <KTIcon iconName="calendar-search" className="fs-3x text-warning" />
                            </div> 
                          <div>
                                <strong style={{ fontSize: '28px', lineHeight: '33px' }}>{propertyCount}</strong>
                                <div style={{ fontSize: '12px', color: 'rgb(127, 127, 127)' }}>Last Month</div>
                            </div>
                            <div>
                                {' '}
                                <KTIcon iconName="face-id" className="fs-3x text-warning" />
                            </div> 
                    </div>
                </div>
                    <div
                        style={{
                            borderRadius: '10px',
                            padding: '12px',
                            cursor: 'pointer',
                        }}
                        className="d-flex align-items-center justify-content-between border border-secondary h-74 mt-6"
                    >
                
                       <div className="d-flex">
                           <div>
                                {' '}
                                <KTIcon iconName="calendar-search" className="fs-3x text-warning" />
                            </div> 
                          <div>
                                <strong style={{ fontSize: '28px', lineHeight: '33px' }}>{propertyCount}</strong>
                                <div style={{ fontSize: '12px', color: 'rgb(127, 127, 127)' }}>Last 90 days</div>
                            </div>
                            
                       </div>
                    </div>
                </div>
            </div>
        </a>
        </>
    );
};

export { ProfileWidget };
