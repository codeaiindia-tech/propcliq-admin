
import { FC, useEffect, useState } from 'react'
import {getPropertyListing, filterPropertySearch} from "../../Apis/AddPropertyApiList";
import PropertyCard from './CardView';


type Props = {
  className: string
  filterData: any
}





const TabularList: FC<Props> = ({className, filterData}) => {
  const [leadListing, setLeadListing] = useState([]);
  const [refreshData, setRefreshData] = useState(false);

const getLeadListing = async() => {
  const leadListingDetail = await getPropertyListing();
  setLeadListing(leadListingDetail)

}


useEffect(() =>  {
  getLeadListing();
 },[refreshData])


 const getFilterPropertyList = async() => {
  const leadListingDetail = await filterPropertySearch(filterData); 
  setLeadListing(leadListingDetail)

}

  useEffect(() =>  {
    if (filterData) {
      getFilterPropertyList()
    }  else {
      getLeadListing();
    } 
   },[filterData])

  return (
    <>
      <div style = {{padding:'1%', backgroundColor:'#338fad', marginBottom:'2%'}}className='card-header border-0 pt-5'>
      <div style={{padding:'1%'}}>
      {/* <div className=" row ">
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
            
            </div> */}

            <div className=" row " style={{paddingTop:'1%'}}>
            <div className="col-xl-6">
             <h3 style = {{color:'white'}}> <strong> Property Listing </strong></h3>
            </div>
          
          
              </div>

            <div className=" row " style={{paddingTop:'1%', color:'white'}}>
            <div className="col-xl-6">
              <strong>Showing {leadListing?.length} properties</strong>
            </div>
          
          
              </div>
          </div>
      
      </div>
     {/* <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed p-6'>
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
          </div> */}

    

    <div className={`card ${className}`}>
      
      
      {/* begin::Header */}
    
      {/* end::Header */}
      {/* begin::Body */}
    
      <PropertyCard leadListing={leadListing} refreshData={() => setRefreshData(!refreshData)}></PropertyCard>
        

    
      {/* begin::Body */}
    </div>
    </>
  )
}

export {TabularList}


