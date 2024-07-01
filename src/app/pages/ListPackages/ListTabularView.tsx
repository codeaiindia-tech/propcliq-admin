
import { FC } from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../_metronic/helpers';
import { ListPackageFilterMain } from './ListPackageFilterMain';


type Props = {
  className: string
}

const ListTabularView: FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
     
        <h3 className='card-title align-items-start flex-column'>
          {/* <span className='card-label fw-bold fs-3 mb-1'>Housing List</span> */}
          <ListPackageFilterMain className='card-xxl-stretch mb-xl-3' />
        </h3>
        
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
                <th className='min-w-150px'>  Package Name  </th>
                <th className='min-w-140px'> Start Date   </th>
                <th className='min-w-120px'> End Date  </th>
                <th className='min-w-120px'> Boosted listing  </th>
                <th className='min-w-100px '>  Listing cap </th>
                <th className='min-w-100px '>  Status </th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                    <KTIcon iconName='home' className='fs-2' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                      Cliq Boost Pro
                      </a>
                      
                    </div>
                  </div>
                </td>
                <td>
                 
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   21 Oct,2023
                  </span>
                  </td>
                  <td>
                  
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   21 Dec,2023
                  </span>
                  </td>

<td>
                 
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   0
                  </span>
                  </td>

                  <td>
                  
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   0
                  </span>
                  </td>
                  <td>
                  <span className='badge badge-light-primary fs-8 fw-bold'>Upcoming</span>
                
                  </td>
                
              </tr>

              <tr>
                <td>
                
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                    <KTIcon iconName='home' className='fs-2' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                      Cliq Boost
                      </a>
                      
                    </div>
                  </div>
                </td>
                <td>
                 
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   21 Oct,2023
                  </span>
                  </td>
                  <td>
                  
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   21 Dec,2023
                  </span>
                  </td>

<td>
                  
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   0
                  </span>
                  </td>

                  <td>
                  
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   0
                  </span>
                  </td>
                  <td>
                  <span className="badge badge-light-success fs-8 fw-bold">Active</span>
              
                  </td>
                
                
              </tr>


              <tr>
                <td>
                
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                    <KTIcon iconName='home' className='fs-2' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                      Cliq Plus
                      </a>
                      
                    </div>
                  </div>
                </td>
                <td>
                 
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   21 Oct,2023
                  </span>
                  </td>
                  <td>
                
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   21 Dec,2023
                  </span>
                  </td>

<td>
                 
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   0
                  </span>
                  </td>

                  <td>
                 
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   0
                  </span>
                  </td>
                  <td>
                  <span className="badge badge-light-success fs-8 fw-bold">Active</span>
              
                  </td>
                
                
              </tr>


              <tr>
                <td>
                
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                    <KTIcon iconName='home' className='fs-2' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                        Rent Cliq
                      </a>
                      
                    </div>
                  </div>
                </td>
                <td>
                 
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   21 Oct,2023
                  </span>
                  </td>
                  <td>
                  
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   21 Dec,2023
                  </span>
                  </td>

<td>
                 
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   0
                  </span>
                  </td>

                  <td>
                
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   0
                  </span>
                  </td>
                  <td>
               
                  <span className="badge badge-light-danger fs-8 fw-bold">Expired</span>
                  </td>
                
                
              </tr>

            </tbody>
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
