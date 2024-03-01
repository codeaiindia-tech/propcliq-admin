import {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {
    
    TilesWidget4,
    TilesWidget5,
  } from '../../../_metronic/partials/widgets'
  import {ListTabularView} from '../ListPackages/ListTabularView';
  import {ListPackageFilterMain} from './ListPackageFilterMain'
  import { Toolbar } from '../../../_metronic/layout/components/toolbar/Toolbar'
  import { Content } from '../../../_metronic/layout/components/Content'
  
  const DashboardPage = () => (
    <>
      <Toolbar />
      <Content>
      
  
        {/* begin::Row */}
        <div className='row gy-5 gx-xl-8'>
          <div className='col-xxl-4'>
          </div>
          <div className='col-xl-12'>
            <ListTabularView className={'card'}  />
          </div>
        </div>
        {/* end::Row */}
  
       
      </Content>
    </>
  )


const ListPackagePage: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Layout Builder</PageTitle>
      <DashboardPage />

    </>
  )
}

export default ListPackagePage