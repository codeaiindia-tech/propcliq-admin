import {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
  import {ListTabularView} from './ListTabularView';
  import { Toolbar } from '../../../_metronic/layout/components/toolbar/Toolbar'
  import { Content } from '../../../_metronic/layout/components/Content'

  import {ListPropertyFilterMain} from './ListPropertyFilterMain';
  
  const DashboardPage = () => (
    <>
      <Toolbar />
      <Content>
      
  
        {/* begin::Row */}
        <div className='row gy-5 gx-xl-8'>
          <div className='col-xxl-4'>
            <ListPropertyFilterMain className='card-xxl-stretch mb-xl-3' />
            {/* <FilterDropdown></FilterDropdown> */}
          </div>
          <div className='col-xl-8'>
            <ListTabularView className='card-xxl-stretch mb-5 mb-xl-8' />
          </div>
        </div>
        {/* end::Row */}
  
       
      </Content>
    </>
  )


const ListPropertyPage: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Layout Builder</PageTitle>
      <DashboardPage />

    </>
  )
}

export default ListPropertyPage