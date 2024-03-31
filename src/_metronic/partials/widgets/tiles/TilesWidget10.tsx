import clsx from 'clsx';
import { KTIcon } from '../../../helpers';
import { getPackageDetails} from "../../../../app/Apis/DashboardPageApiList";
import { useEffect, useState } from 'react';


type Props = {
    className?: string;
    svgIcon?: string;
    titleClass?: string;
    descriptionClass?: string;
    iconClass?: string;
    title?: string;
    description?: string;
};
const TilesWidget10 = (props: Props) => {
    const { className, svgIcon, titleClass, descriptionClass, iconClass, title, description } = props;
    const [expiryDate, setPackageExpiry] = useState('');
    const [usedCap, setPackageCap] = useState(0);
    const [totalCap, setPackageUsed] = useState(0);
   

    const getPackages = async() => {
        const packageListing = await getPackageDetails();
        setPackageExpiry(packageListing.packages[0].end_date);
        setPackageCap(packageListing.packages[0].capacity);
        setPackageUsed(packageListing.packages[0].utilization);
        //setExpectedCountPerWeek(packageListing.leadLastWeek+5)
       console.log(packageListing.Package[0],'packageListing--------',packageListing.packages[0].end_date)
      }

      useEffect(() =>  {
        getPackages();
     },[])
     
    return (
        <a href="#" className={clsx('card', className)}>
            <div className="card-body d-flex flex-column justify-content-between" style={{ height: '222px' }}>
            <div className="bg-white">
                <h2>Active Package</h2>
                  <div>
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
                                <KTIcon iconName="basket-ok" className="fs-3x text-warning" />
                            </div>
                            <div>
                                <strong style={{ fontSize: '25px', lineHeight: '33px' }}>{expiryDate.split('T')[0]}</strong>
                                <div style={{ fontSize: '12px', color: '#1F82F6' }}>Expiry</div>
                            </div>
                           
                        </div>

                        <div className="d-flex">
                            <div>
                                <strong style={{ fontSize: '28px', lineHeight: '33px' }}>{usedCap}</strong>
                                <div style={{ fontSize: '12px', color: '#1F82F6' }}>Total Cap</div>
                            </div>
                            <div>
                                {' '}
                                <KTIcon iconName="text-circle" className="fs-3x text-warning" />
                            </div>
                        </div>

                        <div className="d-flex">
                            <div>
                                <strong style={{ fontSize: '28px', lineHeight: '33px' }}>{totalCap}</strong>
                                <div style={{ fontSize: '12px', color: '#1F82F6' }}>Used Cap</div>
                            </div>
                            <div>
                                {' '}
                                <KTIcon iconName="text-circle" className="fs-3x text-warning" />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                
            </div>
        </a>
    );
};

export { TilesWidget10 };
