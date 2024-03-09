import {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {
    ListsWidget2,
    ListsWidget3,
    ListsWidget4,
    ListsWidget5,
    ListsWidget6,
    MixedWidget10,
    MixedWidget11,
    MixedWidget2,
    MixedWidget8,
    TablesWidget10,
    TilesWidget1,
    TilesWidget2,
    TilesWidget3,
    TilesWidget4,
    TilesWidget5,
  } from '../../../_metronic/partials/widgets'
  import {TabularList} from '../PropertyListing/TabularListing';
  import { Toolbar } from '../../../_metronic/layout/components/toolbar/Toolbar'
  import { Content } from '../../../_metronic/layout/components/Content'

  import {PropertyListMainFilter} from '../PropertyListing/PropertyListMainFilter';
  import {PropertyListingRightView} from '../PropertyListing/PropertListingRight'
  
  const DashboardPage = () => (
    <>
      <Toolbar />
      <Content>
     
  
        {/* begin::Row */}
        <div className='row gy-5 gx-xl-8'>
        
          <div className='col-xxl-2'>
            <PropertyListMainFilter className='card-xxl-stretch mb-xl-3' />
            {/* <FilterDropdown></FilterDropdown> */}
          </div>
          <div className='col-xl-10'>
            <TabularList className='card-xxl-stretch mb-5 mb-xl-8' />
          </div>
          {/* <div className='col-xxl-4'>
            <PropertyListingRightView className='card-xxl-stretch mb-xl-3' />
         
          </div> */}
        </div>
        {/* end::Row */}
  
       
      </Content>
    </>
  )


const ListPropertiesPage: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Layout Builder</PageTitle>
      <DashboardPage />

    </>
  )
}

export default ListPropertiesPage