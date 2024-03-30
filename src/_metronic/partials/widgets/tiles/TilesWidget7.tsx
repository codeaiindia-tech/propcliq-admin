import clsx from 'clsx';
import { KTIcon } from '../../../helpers';
import { useEffect, useState } from 'react';
import {getPropertyListing, getPackageDetails} from "../../../../app/Apis/DashboardPageApiList";

type Props = {
    className?: string;
    svgIcon?: string;
    titleClass?: string;
    descriptionClass?: string;
    iconClass?: string;
    title?: string;
    description?: string;
};
const TilesWidget7 = (props: Props) => {
    const { className, svgIcon, titleClass, descriptionClass, iconClass, title, description } = props;
    const [propertyCount, setPropertyCount] = useState([]);
    const [residential, setResidentialListingCount] = useState(0);
   
    const getPackages = async() => {
        const packageListing = await getPackageDetails();
        setResidentialListingCount(packageListing.residential)
        //setExpectedCountPerWeek(packageListing.leadLastWeek+5)
       console.log('packageListing--------',packageListing)
    }

    const getPropertyList = async() => {
        const propertyListing = await getPropertyListing();
        setPropertyCount(propertyListing.length)
      }
      
      
        useEffect(() =>  {
            getPropertyList();
         },[])

    return (
        <a href="#" className={clsx('card', className)}>
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <div className="d-flex justify-content-between mb-2">
                        <h2 className="fw-600">Listings Summary</h2>

                        <div>
                            <select
                                name="status"
                                data-control="select2"
                                data-hide-search="true"
                                className="form-select form-select-sm form-select-white w-125px"
                                defaultValue="Active"
                            >
                                <option value="Active">Last Week</option>
                                <option value="Approved">Last Month</option>
                                <option value="In Progress">Last Year</option>
                            </select>
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
                                <strong style={{ fontSize: '28px', lineHeight: '33px' }}>{residential}</strong>
                                <div style={{ fontSize: '12px', color: 'rgb(127, 127, 127)' }}>Residential</div>
                            </div>
                            <div>
                                {' '}
                                <KTIcon iconName="text-circle" className="fs-3x text-warning" />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div>
                                <strong style={{ fontSize: '28px', lineHeight: '33px' }}>0</strong>
                                <div style={{ fontSize: '12px', color: 'rgb(127, 127, 127)' }}>Commercial</div>
                            </div>
                            <div>
                                {' '}
                                <KTIcon iconName="text-circle" className="fs-3x text-warning" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export { TilesWidget7 };
