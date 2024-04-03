import {FC, useState} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
  import {TabularList} from '../PropertyListing/TabularListing';
  import { Toolbar } from '../../../_metronic/layout/components/toolbar/Toolbar'
  import { Content } from '../../../_metronic/layout/components/Content'
  import {PropertyListMainFilter} from '../PropertyListing/PropertyListMainFilter';
  import {PropertyListingRightView} from '../PropertyListing/PropertListingRight'
  



const ListPropertiesPage: FC = () => {

  const [filterData , setFilterData] = useState('')

  const handleFilter = (data:any) => {
    console.log('data', data)
    setFilterData(data)   
  }
  
  return (
    <>
      <PageTitle breadcrumbs={[]}>Layout Builder</PageTitle>
      <>
      <Toolbar />
      <Content>
     
  
        {/* begin::Row */}
        <div className='row gy-5 gx-xl-8'>
        
          <div className='col-xxl-2'>
            <PropertyListMainFilter sendFilterData = {handleFilter} className='card-xxl-stretch mb-xl-3' />
          </div>
          <div className='col-xl-10'>
            <TabularList filterData = {filterData} className='card-xxl-stretch mb-5 mb-xl-8' />
          </div>
          {/* <div className='col-xxl-4'>
            <PropertyListingRightView className='card-xxl-stretch mb-xl-3' />
         
          </div> */}
        </div>
        {/* end::Row */}
  
       
      </Content>
    </>

    </>
  )
}

export default ListPropertiesPage