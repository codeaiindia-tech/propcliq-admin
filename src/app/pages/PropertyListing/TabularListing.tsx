
import { FC } from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../_metronic/helpers';


type Props = {
  className: string
}

const TabularList: FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          {/* <span className='card-label fw-bold fs-3 mb-1'>Housing List</span> */}
          <span className='text-muted mt-1 fw-semibold fs-7'>Showing 485 <b> Buy </b>  lead </span>
        </h3>
      
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
                <th className='min-w-140px'></th>
                <th className='min-w-120px'></th>
                <th className='min-w-100px text-end'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
            <tr>
                <td>
                
                </td>
                <td>
                    <span>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                        Propert id: 12331
                      </a>
                      
                    </span>
                   
                    <span>
                      <img src={toAbsoluteUrl('media/properties/images.jpeg')} alt='' />
                      </span> 
                 
                </td>
                <td>
                <div style= {{paddingTop:'30%'}}/>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                    1.68 cr.
                  </a>
                  <div style= {{paddingTop:'10%'}}/>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                  Residential Plot
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   150 sq Yd,  Rs 200/K sq Yd
                  </span>
                  <div style= {{paddingTop:'20%'}}>
                 
                  <span className='badge badge-light-primary fs-8 fw-bold'>Last Added:</span>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                  2 Dec 2023
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
                <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to download leads'
        >
          <a
            href='#'
            className='btn btn-sm btn-primary'
            // data-bs-toggle='modal'
            // data-bs-target='#kt_modal_invite_friends'
          >
            <KTIcon iconName='' className='fs-3' />
           Rejected
          </a>
        </div>
                </td>
              
              </tr>
              <tr>
                <td>
                
                </td>
                <td>
                    <span>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                        Propert id: 12331
                      </a>
                      
                    </span>
                   
                    <span>
                      <img src={toAbsoluteUrl('media/properties/images.jpeg')} alt='' />
                      </span> 
                 
                </td>
                <td>
                <div style= {{paddingTop:'30%'}}/>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                    1.68 cr.
                  </a>
                  <div style= {{paddingTop:'10%'}}/>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                  Residential Plot
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   150 sq Yd,  Rs 200/K sq Yd
                  </span>
                  <div style= {{paddingTop:'20%'}}>
                 
                  <span className='badge badge-light-primary fs-8 fw-bold'>Last Added:</span>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                  2 Dec 2023
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
                <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to download leads'
        >
          <a
            href='#'
            className='btn btn-sm btn-primary'
            // data-bs-toggle='modal'
            // data-bs-target='#kt_modal_invite_friends'
          >
            <KTIcon iconName='' className='fs-3' />
           Expired/RePost
          </a>
        </div>
                </td>
              
              </tr>
              <tr>
                <td>
                
                </td>
                <td>
                    <span>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                        Propert id: 12331
                      </a>
                      
                    </span>
                   
                    <span>
                      <img src={toAbsoluteUrl('media/properties/images.jpeg')} alt='' />
                      </span> 
                 
                </td>
                <td>
                <div style= {{paddingTop:'30%'}}/>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                    1.68 cr.
                  </a>
                  <div style= {{paddingTop:'10%'}}/>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                  Residential Plot
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   150 sq Yd,  Rs 200/K sq Yd
                  </span>
                  <div style= {{paddingTop:'20%'}}>
                 
                  <span className='badge badge-light-primary fs-8 fw-bold'>Last Added:</span>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                  2 Dec 2023
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
                <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to download leads'
        >
          <a
            href='#'
            className='btn btn-sm btn-primary'
            // data-bs-toggle='modal'
            // data-bs-target='#kt_modal_invite_friends'
          >
            <KTIcon iconName='' className='fs-3' />
           Under Review
          </a>
        </div>
                </td>
              
              </tr>
              <tr>
                <td>
                
                </td>
                <td>
                    <span>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                        Propert id: 12341
                      </a>
                      
                    </span>
                   
                    <span>
                      <img src={toAbsoluteUrl('media/properties/images.jpeg')} alt='' />
                      </span> 
                 
                </td>
                <td>
                <div style= {{paddingTop:'30%'}}/>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                    2.80 cr.
                  </a>
                  <div style= {{paddingTop:'10%'}}/>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                  Residential Plot
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   150 sq Yd,  Rs 200/K sq Yd
                  </span>
                  <div style= {{paddingTop:'20%'}}>
                 
                  <span className='badge badge-light-primary fs-8 fw-bold'>Last Added:</span>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                  2 Dec 2023
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
                <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to download leads'
        >
          <a
            href='#'
            className='btn btn-sm btn-primary'
            // data-bs-toggle='modal'
            // data-bs-target='#kt_modal_invite_friends'
          >
            <KTIcon iconName='' className='fs-3' />
           Active
          </a>
        </div>
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

export {TabularList}
