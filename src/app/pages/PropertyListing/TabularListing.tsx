
import { FC, useEffect, useState } from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../_metronic/helpers';
import {getPropertyListing} from "../../Apis/AddPropertyApiList";
import {Link} from 'react-router-dom'
import { Button } from '@mui/material';


type Props = {
  className: string
}





const TabularList: FC<Props> = ({className}) => {
  const [leadListing, setLeadListing] = useState([]);

const getLeadListing = async() => {
  const leadListingDetail = await getPropertyListing();
  setLeadListing(leadListingDetail)
 console.log('leadListingDetail',leadListingDetail)
}


  useEffect(() =>  {
    getLeadListing();
   },[])

  return (
    <>
      <div style = {{padding:'2%', backgroundColor:'#338fad', marginBottom:'2%'}}className='card-header border-0 pt-5'>
      <div style={{padding:'1%'}}>
      <div className=" row ">
                <div className="col-xl-3">
            <select
            
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              defaultValue={'0'}
            >
              <option></option>
              <option value='0' >Locality</option>
              <option value='1'>Approved</option>
              <option value='2'>Pending</option>
              <option value='3'>In Process</option>
              <option value='4'>Rejected</option>
            </select>
            </div>
            <div className="col-xl-3">
            <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              defaultValue={'0'}
            >
              <option></option>
              <option value='0' >Property Type</option>
              <option value='1'>Approved</option>
              <option value='2'>Pending</option>
              <option value='3'>In Process</option>
              <option value='4'>Rejected</option>
            </select>
            </div>
            <div className="col-xl-3">
            <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              defaultValue={'0'}
            >
              <option></option>
              <option value='0' >Listed By</option>
              <option value='1'>Approved</option>
              <option value='2'>Pending</option>
              <option value='3'>In Process</option>
              <option value='4'>Rejected</option>
            </select>
            </div>
            <div className="col-xl-3">
            <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              defaultValue={'0'}
            >
              <option></option>
              <option value='0' >Verification status</option>
              <option value='1'>Approved</option>
              <option value='2'>Pending</option>
              <option value='3'>In Process</option>
              <option value='4'>Rejected</option>
            </select>
            </div>
            
            </div>

            <div className=" row " style={{paddingTop:'4%', color:'white'}}>
            <div className="col-xl-6">
              <strong>Showing 77 out of 77 properties</strong>
            </div>
            <div className="col-xl-3">
           
                     <strong> MORE FILTER </strong>   
            

            </div>
            <div className="col-xl-3">
            <strong> RESET FILTER</strong>   
            </div>
              </div>
          </div>
      
      </div>
     <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed p-6'>
            <KTIcon iconName='information-5' className='fs-2tx text-warning me-4' />
            <div className='d-flex flex-stack flex-grow-1'>
              <div className='fw-bold'>
                <h4 className='text-gray-800 fw-bolder'>Old properties expired!</h4>
                <div className='fs-6 text-gray-600'>
                  Your <strong> 37 old properties</strong> have been expired, Repost those listing now.
                
                </div>
                <Button variant="contained" color="primary"  style={{ marginTop: '20px' }}>
                        Repost listing
            </Button>
              </div>
            </div>
          </div>

    
   
    <div className={`card ${className}`}>
      
      
      {/* begin::Header */}
    
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
                <th className='min-w-140px'></th>
                <th className='min-w-120px'></th>
                <th className='min-w-100px text-end'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
           
       {leadListing?.map((listItem: any, index: any) => (
          <tbody>
            <tr>
                <td>
                
                </td>
                <td>
                    <span>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                        Propert id: {listItem._id}
                      </a>
                      
                    </span>
                   
                    <span>
                      <img src={toAbsoluteUrl('media/properties/images.jpeg')} alt='' />
                      </span> 
                 
                </td>
                <td>
                <div style= {{paddingTop:'30%'}}/>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                   Rs. {listItem.monthly_rent}
                  </a>
                  <div style= {{paddingTop:'10%'}}/>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                  {listItem.category} {listItem.property_type}
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                  {listItem.built_up_area} sq Yd
                  </span>
                  <div style= {{paddingTop:'20%'}}>
                 
                  <span className='badge badge-light-primary fs-8 fw-bold'>Last Added:</span>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                  {(listItem.updatedAt?.split('T'))[0]}
                  </a>
                  <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            
          </button>
                  </div>
                </td>
                <td className='text-end'>
                <Button variant="contained" color="primary"  style={{ marginTop: '20px' }}>
                        Reject
            </Button>
                </td>
              
              </tr>
              

            </tbody>))}
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
    </>
  )
}

export {TabularList}
function getData() {
  throw new Error('Function not implemented.');
}

