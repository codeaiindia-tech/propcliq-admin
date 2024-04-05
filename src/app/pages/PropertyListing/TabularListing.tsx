
import { FC, useEffect, useState } from 'react'
import {getPropertyListing, filterPropertySearch} from "../../Apis/AddPropertyApiList";
import PropertyCard from './CardView';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

type Props = {
  className: string
  filterData: any
}





const TabularList: FC<Props> = ({className, filterData}) => {
  const [propertyLists, setPropertyLists] = useState([]);
  const [refreshData, setRefreshData] = useState(false);
  const navigate = useNavigate();

const getPropertyLists = async() => {
  const propertyListsDetail = await getPropertyListing();
  setPropertyLists(propertyListsDetail)

}


useEffect(() =>  {
  getPropertyLists();
 },[refreshData])


 const getFilterPropertyList = async() => {
  const filteredPropertyDetails = await filterPropertySearch(filterData); 
  setPropertyLists(filteredPropertyDetails)

}

  useEffect(() =>  {
    if (filterData) {
      getFilterPropertyList()
    }  else {
      getPropertyLists();
    } 
   },[filterData])

  return (
    <>
      <div style = {{padding:'1%', backgroundColor:'#d1e6ff', marginBottom:'2%'}}className='card-header border-0 pt-5'>
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
             <h3 > <strong> Property Listing </strong></h3>
            </div>
          
          
              </div>

            <div className=" row " style={{paddingTop:'1%'}}>
            <div className="col-xl-10">
              <strong>Showing {propertyLists?.length} properties</strong>
            </div>
            <div className="col-xl-2">
            <Button onClick={() => navigate('/addproperty')} variant="contained" color="primary"  style={{ marginTop: '20px' }}>
                      Add New Property
            </Button>
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
    
      <PropertyCard propertyLists={propertyLists} refreshData={() => setRefreshData(!refreshData)}></PropertyCard>
        

    
      {/* begin::Body */}
    </div>
    </>
  )
}

export {TabularList}


