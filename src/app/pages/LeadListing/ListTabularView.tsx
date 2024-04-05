
import { FC,useEffect, useState } from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../_metronic/helpers';
import {getLeadListingData} from "../../Apis/AddPropertyApiList";
import { Button } from '@mui/material';
import clsx from 'clsx'

type Props = {
  className: string
}

const ListTabularView: FC<Props> = ({className}) => {
  const [leadListing, setLeadListing] = useState([]);
  const [showContact, setShowContact] = useState(false);
  const getLeadListing = async() => {
    const leadListingDetail = await getLeadListingData();
    setLeadListing(leadListingDetail)
   console.log('leadListingDetail',leadListingDetail)
  }

  const showContactDetail = () => {
    setShowContact(!showContact)
  }

  function sendMail(text: string) {
  
    const subject = `Lead Listing subject`;
    const bodyData = `Lead listing Body`;
    document.location.href = `mailto:${text}?subject=${encodeURIComponent(
      `${subject}`,
    )}&body=Hi,%0D%0A %0D%0A ${bodyData} %0D%0A  %0D%0A`;
  }
  
  
  
    useEffect(() =>  {
      getLeadListing();
     },[])
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          {/* <span className='card-label fw-bold fs-3 mb-1'>Housing List</span> */}
          <span className='text-muted mt-1 fw-semibold fs-7'>Showing {leadListing?.length} <b> Buy </b>  lead </span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to download leads'
        >
          <a
            href='#'
            className='btn btn-sm btn-light-primary'
            // data-bs-toggle='modal'
            // data-bs-target='#kt_modal_invite_friends'
          >
            <KTIcon iconName='document' className='fs-3' />
            Download Leads
          </a>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='w-25px'>
                
                </th>
                <th className='min-w-150px'></th>
                <th className='min-w-240px'></th>
                <th className='min-w-120px text-end'></th>
                {/* <th className='min-w-100px text-end'></th> */}
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            {leadListing?.map((listItem: any, index: any) => (   
              
              <tbody>
              <tr key={index}>
                <td>
                
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                
                    <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-primary`,
              `text-m`
            )}
          >
            {listItem?.name?.charAt(0)} 
          </div>
                    
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                        {listItem.name}
                      </a>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                    {listItem.property_id?.bhk} {listItem.property_id?.property_type}
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                  {listItem.property_id?.address_details.area}, {listItem.property_id?.address_details.locality} 

                  </span>
                  <div style= {{paddingTop:'1%'}}>
                  <span className='badge badge-light-primary fs-8 fw-bold'>{listItem.property_id?.built_up_area} sq.ft</span>
                  <span className='badge badge-light-primary fs-8 fw-bold'>Rs. {listItem.property_id?.monthly_rent}</span>
                  <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTIcon iconName='' className='fs-2' />
          </button>
                  </div>
                </td>
                <td className='text-end'>
                <Button variant="contained" onClick = {showContactDetail} color="primary"  style={{ marginTop: '20px' , marginRight:'1%' }}>
               {showContact? listItem.phone:'View contact'} 
            </Button>
            <Button variant="contained" onClick={() => sendMail(listItem.email)} color="primary"  style={{ marginTop: '20px' }}>
               Send Mail
            </Button>
                       
                </td>
               
                </tr>
              

            </tbody> ))}
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {ListTabularView}
